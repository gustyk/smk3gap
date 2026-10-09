import { AuditTier, CriteriaMaster, CriteriaAssessment, ScoreSummary } from '@/types/smk3';
import { SMK3_CRITERIA } from './data/smk3-data';

export function getApplicableCriteria(tier: AuditTier, criteria: CriteriaMaster[] = SMK3_CRITERIA): CriteriaMaster[] {
  return criteria.filter(c => {
    if (tier === 'awal') return c.tiers.awal;
    if (tier === 'transisi') return c.tiers.transisi;
    return c.tiers.lanjutan;
  });
}

export function calculateScores(
  tier: AuditTier,
  assessments: Record<string, CriteriaAssessment>
): ScoreSummary {
  const applicableCriteria = getApplicableCriteria(tier);

  let totalCompliant = 0;
  let totalMinor = 0;
  let totalMajor = 0;
  let totalCritical = 0;
  let totalNA = 0;
  let totalUnassessed = 0;

  const elementScores: ScoreSummary['elementScores'] = {};
  for (let i = 1; i <= 12; i++) {
    elementScores[i] = {
      totalCriteria: 0,
      compliant: 0,
      minor: 0,
      major: 0,
      critical: 0,
      na: 0,
      rate: 0
    };
  }

  for (const c of applicableCriteria) {
    const elem = c.elementNum;
    elementScores[elem].totalCriteria += 1;

    const assessment = assessments[c.code];
    const status = assessment ? assessment.status : 'UNASSESSED';

    switch (status) {
      case 'COMPLIANT':
        totalCompliant++;
        elementScores[elem].compliant++;
        break;
      case 'MINOR':
        totalMinor++;
        elementScores[elem].minor++;
        break;
      case 'MAJOR':
        totalMajor++;
        elementScores[elem].major++;
        break;
      case 'CRITICAL':
        totalCritical++;
        elementScores[elem].critical++;
        break;
      case 'NA':
        totalNA++;
        elementScores[elem].na++;
        break;
      case 'UNASSESSED':
      default:
        totalUnassessed++;
        break;
    }
  }

  // Calculate rate for each element
  for (let i = 1; i <= 12; i++) {
    const e = elementScores[i];
    const effectiveElemTotal = e.totalCriteria - e.na;
    if (effectiveElemTotal > 0) {
      e.rate = Math.round((e.compliant / effectiveElemTotal) * 1000) / 10;
    } else {
      e.rate = 0;
    }
  }

  const totalApplicable = applicableCriteria.length;
  const effectiveTotal = totalApplicable - totalNA;
  const complianceRate = effectiveTotal > 0 
    ? Math.round((totalCompliant / effectiveTotal) * 1000) / 10 
    : 0;

  const hasCritical = totalCritical > 0;
  const hasMajor = totalMajor > 0;

  let awardStatus: ScoreSummary['awardStatus'] = 'KURANG';
  let awardTitle = 'Tingkat Pencapaian Kurang (Tidak Lulus)';
  let awardDescription = 'Tingkat pemenuhan di bawah 60%. Perusahaan belum memenuhi standar kelulusan sertifikasi SMK3 PP 50/2012.';

  if (hasCritical) {
    awardStatus = 'GUGUR';
    awardTitle = 'GUGUR OTOMATIS (Critical Non-Conformance)';
    awardDescription = 'Ditemukan kondisi bahaya katastropik/fatalitas seketika. Sertifikat SMK3 TIDAK DAPAT DITERBITKAN dan pekerjaan wajib segera dihentikan (Stop Work Order).';
  } else if (hasMajor) {
    awardStatus = 'DITANGGUHKAN';
    awardTitle = 'Sertifikat Ditangguhkan (Temuan Mayor)';
    awardDescription = `Terdapat ${totalMajor} temuan Mayor (pelanggaran wajib perundangan/prinsip dasar SMK3). Sertifikat ditangguhkan hingga seluruh perbaikan diverifikasi tuntas dalam batas maksimal 1 bulan kalender.`;
  } else if (complianceRate >= 85) {
    awardStatus = 'EMAS';
    awardTitle = 'Tingkat Pencapaian Memuaskan (Bendera Emas)';
    awardDescription = 'Memenuhi kriteria pencapaian memuaskan (≥ 85%). Berhak memperoleh Sertifikat Akreditasi Emas dan mengibarkan Bendera Emas K3 Kemnaker RI selama 3 tahun.';
  } else if (complianceRate >= 60) {
    awardStatus = 'PERAK';
    awardTitle = 'Tingkat Pencapaian Baik (Bendera Perak)';
    awardDescription = 'Memenuhi kriteria pencapaian baik (60% - 84%). Berhak memperoleh Sertifikat Akreditasi Perak dan mengibarkan Bendera Perak K3 Kemnaker RI selama 3 tahun.';
  }

  return {
    totalApplicable,
    totalCompliant,
    totalMinor,
    totalMajor,
    totalCritical,
    totalNA,
    totalUnassessed,
    complianceRate,
    hasCritical,
    hasMajor,
    awardStatus,
    awardTitle,
    awardDescription,
    elementScores
  };
}
