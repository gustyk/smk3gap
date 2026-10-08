'use client';

import React, { useRef, useCallback } from 'react';
import { CriteriaMaster, CriteriaAssessment, FindingStatus } from '@/types/smk3';
import { StickyGroupHeader } from './primitives/StickyGroupHeader';
import { Row } from './primitives/Row';
import { Search, Filter, CheckCheck, Keyboard } from 'lucide-react';

interface CriteriaAreaProps {
  groupedCriteria: [string, CriteriaMaster[]][];
  allDisplayedCriteria: CriteriaMaster[];
  assessments: Record<string, CriteriaAssessment>;
  activeCriteriaCode: string | null;
  density: 'compact' | 'comfortable';
  statusFilter: 'ALL' | 'UNASSESSED' | 'COMPLIANT' | 'GAP' | 'NA';
  searchQuery: string;
  unassessedInElement: CriteriaMaster[];
  applicableInElement: CriteriaMaster[];
  selectedElement: number;
  onSetActiveCode: (code: string | null) => void;
  onUpdateAssessment: (code: string, updated: Partial<CriteriaAssessment>) => void;
  onStatusFilterChange: (f: 'ALL' | 'UNASSESSED' | 'COMPLIANT' | 'GAP' | 'NA') => void;
  onSearchChange: (q: string) => void;
  onBatchMarkCompliant: () => void;
  onInspectCriteria: (c: CriteriaMaster) => void;
  elementScore: {
    totalCriteria: number;
    compliant: number;
    minor: number;
    major: number;
    critical: number;
    ofi: number;
    na: number;
    rate: number;
  } | null;
  autoAdvance?: boolean;
}

export const CriteriaArea: React.FC<CriteriaAreaProps> = ({
  groupedCriteria,
  allDisplayedCriteria,
  assessments,
  activeCriteriaCode,
  density,
  statusFilter,
  searchQuery,
  unassessedInElement,
  applicableInElement,
  selectedElement,
  onSetActiveCode,
  onUpdateAssessment,
  onStatusFilterChange,
  onSearchChange,
  onBatchMarkCompliant,
  onInspectCriteria,
  elementScore,
  autoAdvance = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStatusChange = useCallback((code: string, status: FindingStatus) => {
    onUpdateAssessment(code, { status });

    // Auto-advance to next row after scoring
    if (autoAdvance) {
      const idx = allDisplayedCriteria.findIndex(c => c.code === code);
      if (idx >= 0 && idx < allDisplayedCriteria.length - 1) {
        const next = allDisplayedCriteria[idx + 1];
        onSetActiveCode(next.code);
        // Scroll next row into view
        setTimeout(() => {
          const el = document.getElementById(`criteria-row-${next.code.replace(/\./g, '-')}`);
          el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }, 80);
      }
    }
  }, [allDisplayedCriteria, onSetActiveCode, onUpdateAssessment, autoAdvance]);

  const handleNotesChange = useCallback((code: string, notes: string) => {
    onUpdateAssessment(code, { findingNotes: notes });
  }, [onUpdateAssessment]);

  const assessed = applicableInElement.filter(c => {
    const s = assessments[c.code]?.status;
    return s && s !== 'UNASSESSED';
  }).length;

  const findingCount = applicableInElement.filter(c => {
    const s = assessments[c.code]?.status;
    return s === 'CRITICAL' || s === 'MAJOR' || s === 'MINOR';
  }).length;

  // Mini-map: 8px strip with one block per criterion (right edge)
  const renderMinimap = () => {
    return (
      <div 
        className="absolute right-0 top-0 bottom-0 w-[8px] flex flex-col gap-[1px] py-1 px-[2px] z-10 bg-[var(--sunken)] border-l border-[var(--border-subtle)] overflow-hidden"
        aria-hidden="true"
      >
        {applicableInElement.map((c) => {
          const st = assessments[c.code]?.status || 'UNASSESSED';
          let color = 'var(--border-subtle)';
          if (st === 'COMPLIANT') color = 'var(--status-compliant-solid)';
          else if (st === 'OFI') color = 'var(--status-partial-solid)';
          else if (st === 'MINOR') color = 'var(--status-partial-solid)';
          else if (st === 'MAJOR') color = '#B45309';
          else if (st === 'CRITICAL') color = 'var(--status-noncompliant-solid)';
          else if (st === 'NA') color = 'var(--ink-400)';

          const isActive = activeCriteriaCode === c.code;

          return (
            <div
              key={c.code}
              onClick={() => {
                onSetActiveCode(c.code);
                const el = document.getElementById(`criteria-row-${c.code.replace(/\./g, '-')}`);
                el?.scrollIntoView({ block: 'center', behavior: 'smooth' });
              }}
              title={`${c.code} · ${st}`}
              className="cursor-pointer flex-1 min-h-[3px] max-h-[12px] rounded-[1px] transition-opacity hover:opacity-80"
              style={{
                backgroundColor: color,
                opacity: isActive ? 1 : 0.65,
                outline: isActive ? `1px solid var(--accent)` : 'none',
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex-1 h-full min-w-0 flex flex-col bg-[var(--canvas)] border-r border-[var(--border-default)] overflow-hidden relative">
      {/* Filter / Search Bar (height 40px, pinned top) */}
      <div className="shrink-0 px-3 py-2 h-[40px] flex items-center gap-2 border-b border-[var(--border-subtle)] bg-[var(--surface)]">
        {/* Search */}
        <div className="relative flex-1 max-w-[260px]">
          <Search size={12} className="absolute left-2 top-[50%] -translate-y-1/2 text-[var(--ink-400)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Cari klausul, kode, atau catatan…"
            className="w-full h-[26px] pl-6 pr-2 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1">
          <Filter size={11} className="text-[var(--ink-400)]" />
          <select
            value={statusFilter}
            onChange={e => onStatusFilterChange(e.target.value as any)}
            className="h-[26px] px-1.5 text-[11px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:border-[var(--accent)] focus:outline-none text-[var(--ink-700)] cursor-pointer"
          >
            <option value="ALL">Semua</option>
            <option value="UNASSESSED">Belum Dinilai</option>
            <option value="COMPLIANT">Sesuai / OFI</option>
            <option value="GAP">Temuan Gap</option>
            <option value="NA">N/A</option>
          </select>
        </div>

        <div className="flex-1" />

        {/* Progress indicator */}
        <span className="font-mono text-[11px] text-[var(--ink-500)] tabular-nums">
          {assessed}/{applicableInElement.length}
          {elementScore && (
            <span className="ml-1 text-[var(--ink-400)]">· {elementScore.rate}%</span>
          )}
        </span>

        {/* Batch mark compliant */}
        {unassessedInElement.length > 0 && (
          <button
            type="button"
            onClick={onBatchMarkCompliant}
            title={`Tandai ${unassessedInElement.length} kriteria belum dinilai sebagai Sesuai`}
            className="h-[26px] px-2 text-[11px] font-medium text-[var(--ink-700)] border border-[var(--border-default)] rounded-[3px] hover:bg-[var(--sunken)] hover:border-[var(--border-strong)] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <CheckCheck size={12} />
            <span>Sesuai ({unassessedInElement.length})</span>
          </button>
        )}
      </div>

      {/* Criteria Rows (scrollable body, relative for minimap) */}
      <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative">
        {allDisplayedCriteria.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center px-8">
            <p className="text-[12px] text-[var(--ink-500)]">
              Tidak ada kriteria yang sesuai dengan filter. Ubah opsi filter untuk melihat daftar kriteria.
            </p>
          </div>
        ) : (
          <div className="pr-[10px]"> {/* padding-right for minimap */}
            {groupedCriteria.map(([subElementName, criteriaList]) => {
              // Count assessed and findings in this sub-element
              const subAssessed = criteriaList.filter(c => {
                const s = assessments[c.code]?.status;
                return s && s !== 'UNASSESSED';
              }).length;
              const subFindings = criteriaList.filter(c => {
                const s = assessments[c.code]?.status;
                return s === 'CRITICAL' || s === 'MAJOR' || s === 'MINOR';
              }).length;

              return (
                <div key={subElementName}>
                  <StickyGroupHeader
                    title={subElementName}
                    total={criteriaList.length}
                    assessed={subAssessed}
                    findingCount={subFindings}
                  />

                  {criteriaList.map((criterion) => {
                    const isActive = activeCriteriaCode === criterion.code;

                    return (
                      <Row
                        key={criterion.code}
                        criteria={criterion}
                        assessment={assessments[criterion.code]}
                        isActive={isActive}
                        isCompact={density === 'compact'}
                        onSelect={() => {
                          onSetActiveCode(isActive ? null : criterion.code);
                          if (!isActive) {
                            onInspectCriteria(criterion);
                          }
                        }}
                        onStatusChange={(status) => handleStatusChange(criterion.code, status)}
                        onNotesChange={(notes) => handleNotesChange(criterion.code, notes)}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {/* 8px minimap strip on right edge */}
        {applicableInElement.length > 0 && renderMinimap()}
      </div>

      {/* Keyboard shortcut footer (permanent, small) */}
      <div className="shrink-0 h-[24px] px-3 border-t border-[var(--border-subtle)] bg-[var(--sunken)] flex items-center gap-3 text-[10px] font-mono text-[var(--ink-400)] select-none">
        <Keyboard size={10} />
        <span>J/K pindah</span>
        <span>1–6 nilai</span>
        <span>N catatan</span>
        <span>I inspeksi</span>
        <span>[ ] elemen</span>
        <span>⌘K lompat</span>
      </div>
    </div>
  );
};
