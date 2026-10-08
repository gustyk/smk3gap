'use client';

import React from 'react';
import { ScoreSummary, AuditProject } from '@/types/smk3';
import { SMK3_ELEMENTS, SMK3_CRITERIA } from '@/lib/data/smk3-data';
import { Triangle, Diamond, Circle } from 'lucide-react';

interface DashboardOverviewProps {
  score: ScoreSummary;
  project: AuditProject;
  onSelectElement: (elemNum: number) => void;
  onNavigateToCap: () => void;
  onNavigateToCriteria?: (code: string, elemNum: number) => void;
  onExportExcel: () => void;
  onPrint: () => void;
}

const AWARD_TABLE = [
  { level: 'EMAS', condition: '≥ 85% dan tidak ada temuan Mayor / Kritikal', note: 'Bendera Emas K3 Kemnaker RI' },
  { level: 'PERAK', condition: '60–84% dan tidak ada temuan Mayor / Kritikal', note: 'Bendera Perak K3 Kemnaker RI' },
  { level: 'DITANGGUHKAN', condition: 'Terdapat ≥ 1 temuan Mayor (batas perbaikan: 1 bulan)', note: 'Belum dapat diterbitkan' },
  { level: 'GUGUR', condition: 'Terdapat ≥ 1 temuan Kritikal', note: 'Stop Work Order · Tidak dapat diterbitkan' },
];

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  score,
  project,
  onSelectElement,
  onNavigateToCap,
  onNavigateToCriteria,
  onExportExcel,
  onPrint,
}) => {
  // Top Priority Gaps (table 8 rows)
  const topGaps = Object.entries(project.assessments)
    .filter(([_, a]) => a.status === 'CRITICAL' || a.status === 'MAJOR' || a.status === 'MINOR')
    .map(([code, a]) => {
      const crit = SMK3_CRITERIA.find(c => c.code === code);
      return { code, status: a.status, elementNum: crit?.elementNum || 1, subElementName: crit?.subElementName || '', clauseText: crit?.clauseText || '', notes: a.findingNotes || '' };
    })
    .sort((a, b) => {
      const order = { CRITICAL: 0, MAJOR: 1, MINOR: 2 } as any;
      return (order[a.status] || 99) - (order[b.status] || 99);
    })
    .slice(0, 8);

  // Sorted elements by rate ascending (for horizontal bar chart)
  const elementBars = SMK3_ELEMENTS.map(el => ({
    ...el,
    elScore: score.elementScores[el.elementNum],
    rate: score.elementScores[el.elementNum]?.rate || 0,
  })).sort((a, b) => a.rate - b.rate);

  const getAwardRowHighlight = (level: string) => {
    return level === score.awardStatus;
  };

  return (
    <div className="h-full overflow-y-auto px-6 py-5 space-y-5 bg-[var(--canvas)]">

      {/* ── Row 1: Executive Summary Statement ── */}
      <div className="bg-[var(--surface)] border border-[var(--border-default)] rounded-[6px] px-5 py-4">
        <div
          className="text-[20px] font-semibold leading-snug"
          style={{
            color: score.hasCritical ? 'var(--status-noncompliant-solid)' :
              score.hasMajor ? '#B45309' :
              score.complianceRate >= 85 ? 'var(--status-compliant-solid)' :
              'var(--ink-900)'
          }}
        >
          Kesiapan: {score.complianceRate}%.{' '}
          {score.hasCritical && (
            <span>Gugur karena {score.totalCritical} temuan Kritikal (Pasal Lampiran II PP 50/2012).</span>
          )}
          {!score.hasCritical && score.hasMajor && (
            <span>Ditangguhkan karena {score.totalMajor} temuan Mayor — batas perbaikan 1 bulan.</span>
          )}
          {!score.hasCritical && !score.hasMajor && score.complianceRate >= 85 && (
            <span>Memenuhi syarat predikat Emas (≥ 85%).</span>
          )}
          {!score.hasCritical && !score.hasMajor && score.complianceRate >= 60 && score.complianceRate < 85 && (
            <span>Memenuhi syarat predikat Perak (60–84%).</span>
          )}
          {!score.hasCritical && !score.hasMajor && score.complianceRate < 60 && (
            <span>Belum memenuhi ambang kelulusan (&lt; 60%).</span>
          )}
        </div>

        <div className="mt-3 flex items-center gap-4 text-[12px] text-[var(--ink-500)]">
          <div>
            <span className="font-mono font-bold text-[var(--ink-900)] tabular-nums">{score.totalCompliant - score.totalOfi}</span>
            <span className="ml-1">sesuai</span>
          </div>
          <span className="text-[var(--border-strong)]">·</span>
          <div>
            <span className="font-mono font-bold text-[var(--ink-900)] tabular-nums">{score.totalOfi}</span>
            <span className="ml-1">OFI</span>
          </div>
          <span className="text-[var(--border-strong)]">·</span>
          <div className="flex items-center gap-1">
            <Circle size={10} className="fill-[var(--status-partial-solid)] text-transparent" />
            <span className="font-mono font-bold text-[var(--status-partial-solid)] tabular-nums">{score.totalMinor}</span>
            <span className="ml-1 text-[var(--status-partial-solid)]">minor</span>
          </div>
          <span className="text-[var(--border-strong)]">·</span>
          <div className="flex items-center gap-1">
            <Diamond size={10} className="fill-[#B45309] text-transparent" />
            <span className="font-mono font-bold tabular-nums" style={{ color: '#B45309' }}>{score.totalMajor}</span>
            <span className="ml-1" style={{ color: '#B45309' }}>mayor</span>
          </div>
          <span className="text-[var(--border-strong)]">·</span>
          <div className="flex items-center gap-1">
            <Triangle size={10} className="fill-[var(--status-noncompliant-solid)] text-transparent" />
            <span className="font-mono font-bold text-[var(--status-noncompliant-solid)] tabular-nums">{score.totalCritical}</span>
            <span className="ml-1 text-[var(--status-noncompliant-solid)]">kritikal</span>
          </div>
          <span className="text-[var(--border-strong)]">·</span>
          <div>
            <span className="font-mono font-bold text-[var(--ink-400)] tabular-nums">{score.totalUnassessed}</span>
            <span className="ml-1 text-[var(--ink-400)]">belum dinilai</span>
          </div>
        </div>
      </div>

      {/* ── Row 2: Radar 12 Elemen (horizontal bars) ── */}
      <div className="bg-[var(--surface)] border border-[var(--border-default)] rounded-[6px] overflow-hidden">
        <div className="px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--sunken)]">
          <span className="label-xs text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-500)]">
            Radar 12 Elemen (urut capaian terendah)
          </span>
        </div>

        <div className="px-4 py-3 space-y-1.5">
          {elementBars.map((el) => {
            const hasCritical = (el.elScore?.critical || 0) > 0;
            const hasMajor = (el.elScore?.major || 0) > 0;
            const barColor = hasCritical ? 'var(--status-noncompliant-solid)' :
              hasMajor ? '#B45309' :
              el.rate >= 85 ? 'var(--status-compliant-solid)' :
              el.rate >= 60 ? 'var(--accent)' :
              'var(--ink-400)';

            return (
              <div
                key={el.elementNum}
                className="flex items-center gap-2.5 cursor-pointer group"
                onClick={() => onSelectElement(el.elementNum)}
                title={`Buka Elemen ${el.elementNum}`}
              >
                {/* Element label (direct on bar, no separate legend) */}
                <span className="font-mono text-[11px] text-[var(--ink-500)] w-[24px] shrink-0 tabular-nums text-right">
                  {el.elementNum}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[11px] text-[var(--ink-700)] group-hover:text-[var(--ink-900)] transition-colors line-clamp-1 flex-1">
                      {el.name}
                    </span>
                    {hasCritical && <Triangle size={10} className="fill-[var(--status-noncompliant-solid)] text-transparent shrink-0" />}
                    {!hasCritical && hasMajor && <Diamond size={10} className="fill-[#B45309] text-transparent shrink-0" />}
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Bar */}
                    <div className="flex-1 h-[6px] bg-[var(--sunken)] rounded-[2px] overflow-hidden">
                      <div
                        className="h-full rounded-[2px] transition-all duration-200"
                        style={{ width: `${el.rate}%`, backgroundColor: barColor }}
                      />
                    </div>
                    {/* Score label (tabular-nums) */}
                    <span className="font-mono text-[11px] font-semibold tabular-nums shrink-0 w-[36px] text-right"
                      style={{ color: barColor }}>
                      {el.rate}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Row 3: Top Priority Gaps Table (8 baris, bukan kartu) ── */}
      {topGaps.length > 0 && (
        <div className="bg-[var(--surface)] border border-[var(--border-default)] rounded-[6px] overflow-hidden">
          <div className="px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--sunken)] flex items-center justify-between">
            <span className="label-xs text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-500)]">
              Prioritas Tertinggi — Top Gap
            </span>
            <button
              type="button"
              onClick={onNavigateToCap}
              className="text-[11px] font-medium text-[var(--accent)] hover:underline cursor-pointer"
            >
              Buka CAP Tracker →
            </button>
          </div>

          <table className="w-full text-[12px] border-collapse">
            <thead>
              <tr className="h-[28px] border-b border-[var(--border-subtle)] bg-[var(--canvas)] text-[10px] uppercase tracking-wider text-[var(--ink-400)] font-semibold">
                <th className="px-3 text-left w-[70px]">Kode</th>
                <th className="px-2 text-left w-[80px]">Klausul</th>
                <th className="px-2 text-left w-[80px]">Severity</th>
                <th className="px-3 text-left">Uraian Singkat</th>
                <th className="px-2 text-right w-[70px]">Gap Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {topGaps.map((gap, idx) => (
                <tr
                  key={gap.code}
                  onClick={() => onNavigateToCriteria?.(gap.code, gap.elementNum)}
                  className="h-[32px] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                >
                  <td className="px-3 font-mono text-[12px] font-semibold text-[var(--ink-900)] tabular-nums">
                    {gap.code}
                  </td>
                  <td className="px-2 text-[11px] text-[var(--ink-500)]">
                    {gap.subElementName}
                  </td>
                  <td className="px-2">
                    {gap.status === 'CRITICAL' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--status-noncompliant-solid)]">
                        <Triangle size={9} className="fill-[var(--status-noncompliant-solid)] text-transparent" />
                        Kritikal
                      </span>
                    )}
                    {gap.status === 'MAJOR' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold" style={{ color: '#B45309' }}>
                        <Diamond size={9} className="fill-[#B45309] text-transparent" />
                        Mayor
                      </span>
                    )}
                    {gap.status === 'MINOR' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--status-partial-solid)]">
                        <Circle size={9} className="fill-[var(--status-partial-solid)] text-transparent" />
                        Minor
                      </span>
                    )}
                  </td>
                  <td className="px-3 text-[var(--ink-700)] text-[12px] line-clamp-1">
                    {gap.notes || gap.clauseText}
                  </td>
                  <td className="px-2 text-right font-mono text-[11px] font-semibold text-[var(--status-noncompliant-solid)] tabular-nums">
                    −1
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Row 4: Predikat Sertifikasi — Tabel Aturan 4 Baris ── */}
      <div className="bg-[var(--surface)] border border-[var(--border-default)] rounded-[6px] overflow-hidden">
        <div className="px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--sunken)]">
          <span className="label-xs text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-500)]">
            Predikat Sertifikasi (Lampiran II PP 50/2012)
          </span>
        </div>

        <table className="w-full text-[12px] border-collapse">
          <thead>
            <tr className="h-[28px] border-b border-[var(--border-subtle)] bg-[var(--canvas)] text-[10px] uppercase tracking-wider text-[var(--ink-400)] font-semibold">
              <th className="px-3 text-left w-[120px]">Predikat</th>
              <th className="px-3 text-left">Kondisi / Syarat</th>
              <th className="px-3 text-left w-[200px]">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-subtle)]">
            {AWARD_TABLE.map((row) => {
              const isCurrent = getAwardRowHighlight(row.level);
              return (
                <tr
                  key={row.level}
                  className={`h-[32px] transition-colors ${
                    isCurrent
                      ? 'bg-[var(--accent-tint)] font-semibold'
                      : 'hover:bg-[#FAF9F6]'
                  }`}
                >
                  <td className={`px-3 font-mono text-[12px] font-semibold tabular-nums ${
                    row.level === 'GUGUR' ? 'text-[var(--status-noncompliant-solid)]' :
                    row.level === 'DITANGGUHKAN' ? 'text-[#B45309]' :
                    row.level === 'EMAS' ? 'text-[var(--status-compliant-solid)]' :
                    'text-[var(--ink-700)]'
                  }`}>
                    {row.level}
                    {isCurrent && (
                      <span className="ml-1 text-[10px] text-[var(--accent)] font-medium">← saat ini</span>
                    )}
                  </td>
                  <td className="px-3 text-[var(--ink-700)]">{row.condition}</td>
                  <td className="px-3 text-[var(--ink-500)] text-[11px]">{row.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
