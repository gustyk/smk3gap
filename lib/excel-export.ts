import * as XLSX from 'xlsx';
import { AuditProject, ScoreSummary } from '@/types/smk3';
import { SMK3_ELEMENTS, SMK3_CRITERIA } from './data/smk3-data';
import { getApplicableCriteria } from './scoring';

export function exportAuditToExcel(project: AuditProject, score: ScoreSummary): void {
  const wb = XLSX.utils.book_new();

  // 1. Sheet: Ringkasan Audit
  const summaryData = [
    ['LAPORAN HASIL GAP ANALYSIS SMK3 (PP NO. 50 TAHUN 2012)'],
    ['Tanggal Generate:', new Date().toLocaleString('id-ID')],
    [],
    ['A. PROFIL PERUSAHAAN & AUDIT'],
    ['Nama Perusahaan', project.profile.companyName],
    ['Sektor / Jenis Usaha', project.profile.industryType],
    ['Kategori Tingkat Bahaya', project.profile.riskLevel],
    ['Jumlah Tenaga Kerja', project.profile.employeeCount],
    ['Auditor / Penilai', project.profile.leadAuditor],
    ['Tanggal Asesmen', project.profile.auditDate],
    ['Tingkat Penerapan', project.profile.auditTier.toUpperCase() + ` (${score.totalApplicable} Kriteria)`],
    [],
    ['B. HASIL SKOR & PREDIKAT KELULUSAN'],
    ['Total Kriteria Berlaku', score.totalApplicable],
    ['Kriteria Tidak Berlaku (N/A)', score.totalNA],
    ['Total Kriteria Dinilai', score.totalApplicable - score.totalNA - score.totalUnassessed],
    ['Belum Dinilai (Pending)', score.totalUnassessed],
    ['Kriteria Komplian (Patuh)', score.totalCompliant],
    ['Temuan Minor', score.totalMinor],
    ['Temuan Mayor', score.totalMajor],
    ['Temuan Kritikal', score.totalCritical],
    ['Peluang Peningkatan (OFI)', score.totalOfi],
    ['PERSENTASE PEMENUHAN (%)', `${score.complianceRate}%`],
    ['STATUS AKREDITASI', score.awardStatus],
    ['PREDIKAT KELULUSAN', score.awardTitle],
    ['KETERANGAN REGULASI', score.awardDescription],
    [],
    ['C. REKAPITULASI 12 ELEMEN SMK3'],
    ['No', 'Nama Elemen', 'Total Kriteria', 'Komplian', 'Minor', 'Mayor', 'Kritikal', 'N/A', 'Skor Elemen (%)']
  ];

  SMK3_ELEMENTS.forEach(el => {
    const s = score.elementScores[el.elementNum];
    summaryData.push([
      el.elementNum.toString(),
      el.name,
      s.totalCriteria.toString(),
      s.compliant.toString(),
      s.minor.toString(),
      s.major.toString(),
      s.critical.toString(),
      s.na.toString(),
      `${s.rate}%`
    ]);
  });

  const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Ringkasan & Profil');

  // 2. Sheet: Matriks Kriteria Asesmen
  const applicableCriteria = getApplicableCriteria(project.profile.auditTier, SMK3_CRITERIA);
  const matrixHeaders = [
    'No',
    'Kode Kriteria',
    'Elemen',
    'Sub-Elemen',
    'Teks Kriteria PP 50/2012',
    'Status Asesmen',
    'Catatan Fakta / Temuan',
    'Panduan Bukti Objektif',
    'Batas Waktu Regulasi'
  ];

  const matrixRows = applicableCriteria.map((c, idx) => {
    const a = project.assessments[c.code];
    const status = a ? a.status : 'BELUM DINILAI';
    const notes = a?.findingNotes || '';
    
    let deadline = '-';
    if (status === 'CRITICAL') deadline = 'Segera (Stop Work Order)';
    else if (status === 'MAJOR') deadline = 'Maksimal 1 Bulan';
    else if (status === 'MINOR') deadline = 'Maksimal 3 Bulan';

    return [
      (idx + 1).toString(),
      c.code,
      c.elementName,
      c.subElementName,
      c.clauseText,
      status,
      notes,
      c.expectedEvidence,
      deadline
    ];
  });

  const wsMatrix = XLSX.utils.aoa_to_sheet([matrixHeaders, ...matrixRows]);
  XLSX.utils.book_append_sheet(wb, wsMatrix, 'Matriks Asesmen Kriteria');

  // 3. Sheet: Corrective Action Plan (CAP)
  const capHeaders = [
    'No',
    'Kode Kriteria',
    'Sub-Elemen',
    'Kategori Gap',
    'Uraian Temuan / Fakta',
    'Akar Masalah (Root Cause)',
    'Tindakan Korektif (Corrective Action)',
    'Tindakan Preventif (Preventive Action)',
    'Penanggung Jawab (PIC)',
    'Target Batas Waktu',
    'Status Tindak Lanjut'
  ];

  const gapCriteria = applicableCriteria.filter(c => {
    const s = project.assessments[c.code]?.status;
    return s === 'CRITICAL' || s === 'MAJOR' || s === 'MINOR';
  });

  const capRows = gapCriteria.map((c, idx) => {
    const a = project.assessments[c.code];
    const cap = project.capItems[c.code];
    return [
      (idx + 1).toString(),
      c.code,
      c.subElementName,
      a?.status || '',
      a?.findingNotes || '',
      cap?.rootCause || '',
      cap?.correctiveAction || '',
      cap?.preventiveAction || '',
      cap?.pic || '',
      cap?.dueDate || '',
      cap?.status || 'OPEN'
    ];
  });

  const wsCap = XLSX.utils.aoa_to_sheet([capHeaders, ...capRows]);
  XLSX.utils.book_append_sheet(wb, wsCap, 'Corrective Action Plan (CAP)');

  const cleanName = project.profile.companyName.replace(/[^a-zA-Z0-9_-]/g, '_');
  XLSX.writeFile(wb, `Laporan_GapAnalysis_SMK3_${cleanName}_${new Date().toISOString().split('T')[0]}.xlsx`);
}
