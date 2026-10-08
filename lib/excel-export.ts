import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { AuditProject, ScoreSummary } from '@/types/smk3';
import { SMK3_ELEMENTS, SMK3_CRITERIA } from './data/smk3-data';
import { getApplicableCriteria } from './scoring';

export async function exportAuditToExcel(project: AuditProject, score: ScoreSummary): Promise<void> {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'SMK3 Gap Analysis Workstation';
  wb.created = new Date();
  
  // =========================================================================
  // Sheet 1: Ringkasan & Profil
  // =========================================================================
  const ws1 = wb.addWorksheet('Ringkasan & Profil', { views: [{ showGridLines: false }] });
  
  // Title
  ws1.mergeCells('A1:C1');
  const titleCell = ws1.getCell('A1');
  titleCell.value = 'LAPORAN HASIL GAP ANALYSIS SMK3 (PP NO. 50 TAHUN 2012)';
  titleCell.font = { name: 'Arial', size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0F4C5C' } }; // Deep teal
  titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
  ws1.getRow(1).height = 30;

  ws1.getCell('A2').value = 'Tanggal Generate:';
  ws1.getCell('A2').font = { italic: true };
  ws1.getCell('B2').value = new Date().toLocaleString('id-ID');
  ws1.getCell('B2').font = { italic: true };

  // Helper for Section Headers
  const addHeader = (row: number, title: string) => {
    ws1.mergeCells(`A${row}:C${row}`);
    const c = ws1.getCell(`A${row}`);
    c.value = title;
    c.font = { bold: true, size: 12 };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEFEDE8' } };
    c.border = { bottom: { style: 'thin' } };
    ws1.getRow(row).height = 20;
    c.alignment = { vertical: 'middle' };
  };

  // Helper for Data Rows
  const addDataRow = (row: number, label: string, val: any, boldVal = false, valColor?: string) => {
    const lblCell = ws1.getCell(`A${row}`);
    lblCell.value = label;
    lblCell.font = { bold: true };
    lblCell.border = { left: { style: 'thin', color: { argb: 'FFE4E1DA' } }, bottom: { style: 'thin', color: { argb: 'FFE4E1DA' } } };

    const vc = ws1.getCell(`B${row}`);
    vc.value = val;
    ws1.mergeCells(`B${row}:C${row}`);
    vc.border = { right: { style: 'thin', color: { argb: 'FFE4E1DA' } }, bottom: { style: 'thin', color: { argb: 'FFE4E1DA' } } };
    
    if (boldVal || valColor) {
      vc.font = { bold: boldVal, color: valColor ? { argb: valColor } : undefined };
    }
  };

  addHeader(4, 'A. PROFIL PERUSAHAAN & AUDIT');
  addDataRow(5, 'Nama Perusahaan', project.profile.companyName, true);
  addDataRow(6, 'Sektor / Jenis Usaha', project.profile.industryType);
  addDataRow(7, 'Kategori Tingkat Bahaya', project.profile.riskLevel);
  addDataRow(8, 'Jumlah Tenaga Kerja', project.profile.employeeCount);
  addDataRow(9, 'Auditor / Penilai', project.profile.leadAuditor);
  addDataRow(10, 'Tanggal Asesmen', project.profile.auditDate);
  addDataRow(11, 'Tingkat Penerapan', project.profile.auditTier.toUpperCase() + ` (${score.totalApplicable} Kriteria)`);

  addHeader(13, 'B. HASIL SKOR & PREDIKAT KELULUSAN');
  addDataRow(14, 'Total Kriteria Berlaku', score.totalApplicable);
  addDataRow(15, 'Kriteria Tidak Berlaku (N/A)', score.totalNA);
  addDataRow(16, 'Total Kriteria Dinilai', score.totalApplicable - score.totalNA - score.totalUnassessed);
  addDataRow(17, 'Belum Dinilai (Pending)', score.totalUnassessed);
  addDataRow(18, 'Kriteria Komplian (Patuh)', score.totalCompliant);
  addDataRow(19, 'Temuan Minor', score.totalMinor);
  addDataRow(20, 'Temuan Mayor', score.totalMajor);
  addDataRow(21, 'Temuan Kritikal', score.totalCritical);
  
  // Highlighted Score
  const rateColor = score.hasCritical ? 'FFDC2626' : (score.hasMajor ? 'FFEA580C' : (score.complianceRate >= 85 ? 'FF16A34A' : 'FF0F4C5C'));
  addDataRow(22, 'PERSENTASE PEMENUHAN (%)', `${score.complianceRate}%`, true, rateColor);
  addDataRow(23, 'STATUS AKREDITASI', score.awardStatus, true, rateColor);
  addDataRow(24, 'PREDIKAT KELULUSAN', score.awardTitle, true);
  addDataRow(25, 'KETERANGAN REGULASI', score.awardDescription);

  // Column Widths
  ws1.getColumn(1).width = 35;
  ws1.getColumn(2).width = 30;
  ws1.getColumn(3).width = 40;

  let currRow = 28;
  addHeader(currRow, 'C. REKAPITULASI 12 ELEMEN SMK3');
  currRow++;

  const elemHeaders = ['No', 'Nama Elemen', 'Total Kriteria', 'Komplian', 'Minor', 'Mayor', 'Kritikal', 'N/A', 'Skor Elemen (%)'];
  
  // Helper for Table Headers
  const setTableHeaders = (ws: ExcelJS.Worksheet, rowNum: number, headers: string[]) => {
    const row = ws.getRow(rowNum);
    row.values = headers;
    row.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    row.alignment = { vertical: 'middle', horizontal: 'center' };
    row.height = 25;
    headers.forEach((_, i) => {
      const cell = row.getCell(i + 1);
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF3F3D39' } }; // Ink-700
      cell.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
    });
  };

  setTableHeaders(ws1, currRow, elemHeaders);
  currRow++;

  SMK3_ELEMENTS.forEach((el) => {
    const s = score.elementScores[el.elementNum];
    const rowData = [
      el.elementNum, el.name, s.totalCriteria, s.compliant, 
      s.minor, s.major, s.critical, s.na, `${s.rate}%`
    ];
    const row = ws1.getRow(currRow);
    row.values = rowData;
    row.eachCell((cell, colNumber) => {
      cell.border = { top: { style: 'thin', color: { argb: 'FFE4E1DA' } }, bottom: { style: 'thin', color: { argb: 'FFE4E1DA' } } };
      cell.alignment = { vertical: 'middle', horizontal: colNumber === 2 ? 'left' : 'center' };
      if (colNumber > 2 && colNumber < 9) {
        if (cell.value && Number(cell.value) > 0) {
          if (colNumber === 7) cell.font = { color: { argb: 'FFDC2626' }, bold: true }; // Critical
          if (colNumber === 6) cell.font = { color: { argb: 'FFEA580C' }, bold: true }; // Major
          if (colNumber === 5) cell.font = { color: { argb: 'FFD97706' }, bold: true }; // Minor
        }
      }
    });
    currRow++;
  });


  // =========================================================================
  // Sheet 2: Matriks Kriteria Asesmen
  // =========================================================================
  const ws2 = wb.addWorksheet('Matriks Kriteria');
  const applicableCriteria = getApplicableCriteria(project.profile.auditTier, SMK3_CRITERIA);
  const matrixHeaders = [
    'No', 'Kode', 'Elemen', 'Sub-Elemen', 'Teks Kriteria PP 50/2012', 
    'Status Asesmen', 'Catatan Fakta / Temuan', 'Panduan Bukti Objektif', 'Batas Waktu Regulasi'
  ];
  
  setTableHeaders(ws2, 1, matrixHeaders);
  
  ws2.getColumn(1).width = 6;
  ws2.getColumn(2).width = 10;
  ws2.getColumn(3).width = 25;
  ws2.getColumn(4).width = 30;
  ws2.getColumn(5).width = 50;
  ws2.getColumn(6).width = 18;
  ws2.getColumn(7).width = 45;
  ws2.getColumn(8).width = 45;
  ws2.getColumn(9).width = 25;

  applicableCriteria.forEach((c, idx) => {
    const a = project.assessments[c.code];
    const status = a ? a.status : 'BELUM DINILAI';
    const notes = a?.findingNotes || '';
    
    let deadline = '-';
    if (status === 'CRITICAL') deadline = 'Segera (Stop Work)';
    else if (status === 'MAJOR') deadline = 'Maks. 1 Bulan';
    else if (status === 'MINOR') deadline = 'Maks. 3 Bulan';

    const row = ws2.getRow(idx + 2);
    row.values = [
      idx + 1, c.code, c.elementName, c.subElementName, c.clauseText,
      status, notes, c.expectedEvidence, deadline
    ];
    
    row.alignment = { vertical: 'top', wrapText: true };
    
    const statusCell = row.getCell(6);
    statusCell.alignment = { vertical: 'top', horizontal: 'center' };
    statusCell.font = { bold: true };
    if (status === 'COMPLIANT') statusCell.font.color = { argb: 'FF16A34A' };
    else if (status === 'CRITICAL') statusCell.font.color = { argb: 'FFDC2626' };
    else if (status === 'MAJOR') statusCell.font.color = { argb: 'FFEA580C' };
    else if (status === 'MINOR') statusCell.font.color = { argb: 'FFD97706' };
    
    row.eachCell(cell => {
      cell.border = { 
        top: { style: 'thin', color: { argb: 'FFE4E1DA' } }, 
        bottom: { style: 'thin', color: { argb: 'FFE4E1DA' } },
        left: { style: 'thin', color: { argb: 'FFE4E1DA' } },
        right: { style: 'thin', color: { argb: 'FFE4E1DA' } }
      };
    });
  });


  // =========================================================================
  // Sheet 3: Corrective Action Plan (CAP)
  // =========================================================================
  const ws3 = wb.addWorksheet('CAP (Corrective Action)');
  const capHeaders = [
    'No', 'Kode', 'Sub-Elemen', 'Kategori', 'Uraian Temuan / Fakta',
    'Akar Masalah (Root Cause)', 'Tindakan Korektif', 'Tindakan Preventif',
    'PIC', 'Batas Waktu', 'Status CAP'
  ];
  setTableHeaders(ws3, 1, capHeaders);
  
  ws3.getColumn(1).width = 6;
  ws3.getColumn(2).width = 10;
  ws3.getColumn(3).width = 25;
  ws3.getColumn(4).width = 15;
  ws3.getColumn(5).width = 35;
  ws3.getColumn(6).width = 30;
  ws3.getColumn(7).width = 30;
  ws3.getColumn(8).width = 30;
  ws3.getColumn(9).width = 18;
  ws3.getColumn(10).width = 18;
  ws3.getColumn(11).width = 15;

  const gapCriteria = applicableCriteria.filter(c => {
    const s = project.assessments[c.code]?.status;
    return s === 'CRITICAL' || s === 'MAJOR' || s === 'MINOR';
  });

  gapCriteria.forEach((c, idx) => {
    const a = project.assessments[c.code];
    const cap = project.capItems[c.code];
    
    const row = ws3.getRow(idx + 2);
    row.values = [
      idx + 1, c.code, c.subElementName, a?.status || '', a?.findingNotes || '',
      cap?.rootCause || '', cap?.correctiveAction || '', cap?.preventiveAction || '',
      cap?.pic || '', cap?.dueDate || '', cap?.status || 'OPEN'
    ];
    
    row.alignment = { vertical: 'top', wrapText: true };
    
    const statusCell = row.getCell(4);
    statusCell.font = { bold: true };
    statusCell.alignment = { vertical: 'top', horizontal: 'center' };
    if (a?.status === 'CRITICAL') statusCell.font.color = { argb: 'FFDC2626' };
    else if (a?.status === 'MAJOR') statusCell.font.color = { argb: 'FFEA580C' };
    else if (a?.status === 'MINOR') statusCell.font.color = { argb: 'FFD97706' };

    const capStatusCell = row.getCell(11);
    capStatusCell.font = { bold: true };
    if (cap?.status === 'RESOLVED' || cap?.status === 'VERIFIED') capStatusCell.font.color = { argb: 'FF16A34A' };

    row.eachCell(cell => {
      cell.border = { 
        top: { style: 'thin', color: { argb: 'FFE4E1DA' } }, 
        bottom: { style: 'thin', color: { argb: 'FFE4E1DA' } },
        left: { style: 'thin', color: { argb: 'FFE4E1DA' } },
        right: { style: 'thin', color: { argb: 'FFE4E1DA' } }
      };
    });
  });

  // Save the file
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const cleanName = project.profile.companyName.replace(/[^a-zA-Z0-9_-]/g, '_');
  saveAs(blob, `Laporan_GapAnalysis_SMK3_${cleanName}_${new Date().toISOString().split('T')[0]}.xlsx`);
}
