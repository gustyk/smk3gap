'use client';

import React from 'react';
import { CriteriaMaster, CriteriaAssessment, FindingStatus } from '@/types/smk3';
import { InspectorSection } from './primitives/InspectorSection';
import { SeverityMark } from './primitives/SeverityMark';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

interface InspectorPanelProps {
  criteria: CriteriaMaster | null;
  assessment?: CriteriaAssessment;
  onClose: () => void;
  onNavigateToCap?: (code: string) => void;
  className?: string;
}

export const InspectorPanel: React.FC<InspectorPanelProps> = ({
  criteria,
  assessment,
  onClose,
  onNavigateToCap,
  className = ''
}) => {
  if (!criteria) {
    return (
      <aside className={`w-[360px] h-full bg-[var(--surface)] border-l border-[var(--border-default)] p-6 flex items-center justify-center text-center text-[var(--ink-400)] select-none ${className}`}>
        <p className="text-[12px]">Pilih salah satu baris kriteria untuk melihat acuan bukti dan interpretasi normatif.</p>
      </aside>
    );
  }

  const currentStatus: FindingStatus = assessment?.status || 'UNASSESSED';
  const hasGap = currentStatus === 'CRITICAL' || currentStatus === 'MAJOR' || currentStatus === 'MINOR';

  return (
    <aside className={`w-[360px] h-full bg-[var(--surface)] border-l border-[var(--border-default)] flex flex-col overflow-hidden select-text ${className}`}>
      {/* Header bar (Height 44px matching topbar rhythm) */}
      <div className="h-[44px] shrink-0 px-4 border-b border-[var(--border-subtle)] bg-[var(--sunken)] flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono text-[13px] font-bold text-[var(--ink-900)] tabular-nums">
            {criteria.code}
          </span>
          <span className="text-[var(--border-strong)]">·</span>
          <span className="text-[11px] font-medium text-[var(--ink-500)] truncate uppercase tracking-wider">
            {criteria.subElementName}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          title="Tutup Panel Inspeksi (Esc)"
          className="p-1 rounded-[3px] text-[var(--ink-400)] hover:text-[var(--ink-900)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
        >
          <X size={15} />
        </button>
      </div>

      {/* Scrollable Content Body (Vertical rhythm) */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {/* Full Clause Text */}
        <div className="py-2.5 border-b border-[var(--border-subtle)]">
          <span className="label-xs block mb-1">Teks Kriteria PP 50/2012:</span>
          <p className="text-[13px] font-medium text-[var(--ink-900)] leading-[1.4]">
            {criteria.clauseText}
          </p>

          <div className="mt-2 flex items-center justify-between text-[11px]">
            <SeverityMark status={currentStatus} showIcon size="sm" />
            
            {hasGap && onNavigateToCap && (
              <button
                type="button"
                onClick={() => onNavigateToCap(criteria.code)}
                className="text-[var(--accent)] font-medium hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Buka di CAP Tracker</span>
                <ArrowRight size={11} />
              </button>
            )}
          </div>
        </div>

        {/* Section 1: Interpretasi Normatif */}
        <InspectorSection title="Interpretasi Normatif & Konteks">
          <p className="text-[12px] text-[var(--ink-700)] leading-[1.55]">
            {criteria.interpretation}
          </p>
        </InspectorSection>

        {/* Section 2: Bukti Objektif Acuan */}
        <InspectorSection title="Bukti Objektif & Dokumen Lapangan">
          <p className="text-[12px] text-[var(--ink-700)] leading-[1.55] whitespace-pre-line">
            {criteria.expectedEvidence}
          </p>
        </InspectorSection>

        {/* Section 3: Tolok Ukur / Benchmark Temuan (Bertingkat tanpa accordion) */}
        <InspectorSection title="Tolok Ukur Penetapan Status">
          <div className="space-y-2 mt-1">
            <div className="p-2 rounded-[3px] bg-[var(--status-compliant-tint)] border border-[var(--status-compliant-border)] text-[11px]">
              <span className="font-semibold text-[var(--status-compliant-solid)] uppercase block tracking-wider text-[10px]">
                Kondisi Sesuai (Komplian):
              </span>
              <p className="text-[var(--ink-900)] mt-0.5 leading-[1.45]">{criteria.conditions.compliant}</p>
            </div>

            {criteria.conditions.ofi && (
              <div className="p-2 rounded-[3px] bg-[var(--status-partial-tint)] border border-[var(--status-partial-border)] text-[11px]">
                <span className="font-semibold text-[var(--status-partial-solid)] uppercase block tracking-wider text-[10px]">
                  Peluang Peningkatan (OFI):
                </span>
                <p className="text-[var(--ink-900)] mt-0.5 leading-[1.45]">{criteria.conditions.ofi}</p>
              </div>
            )}

            <div className="p-2 rounded-[3px] bg-[var(--status-partial-tint)] border border-[var(--status-partial-border)] text-[11px]">
              <span className="font-semibold text-[var(--status-partial-solid)] uppercase block tracking-wider text-[10px]">
                Kondisi Temuan Minor:
              </span>
              <p className="text-[var(--ink-900)] mt-0.5 leading-[1.45]">{criteria.conditions.minor}</p>
            </div>

            <div className="p-2 rounded-[3px] bg-[var(--status-noncompliant-tint)] border border-[var(--status-noncompliant-border)] text-[11px]">
              <span className="font-semibold text-[var(--status-noncompliant-solid)] uppercase block tracking-wider text-[10px]">
                Kondisi Temuan Mayor:
              </span>
              <p className="text-[var(--ink-900)] mt-0.5 leading-[1.45]">{criteria.conditions.major}</p>
            </div>

            <div className="p-2 rounded-[3px] bg-[var(--status-noncompliant-tint)] border border-[var(--status-noncompliant-border)] text-[11px]">
              <span className="font-semibold text-[var(--status-noncompliant-solid)] uppercase block tracking-wider text-[10px]">
                Kondisi Temuan Kritikal (Gugur):
              </span>
              <p className="text-[var(--ink-900)] mt-0.5 leading-[1.45]">{criteria.conditions.critical}</p>
            </div>
          </div>
        </InspectorSection>
      </div>
    </aside>
  );
};
