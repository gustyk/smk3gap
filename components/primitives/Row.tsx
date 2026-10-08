'use client';

import React, { useRef, useEffect } from 'react';
import { CriteriaMaster, CriteriaAssessment, FindingStatus } from '@/types/smk3';
import { SegmentedStatus } from './SegmentedStatus';
import { SeverityMark } from './SeverityMark';
import { FileText, ChevronRight, Check } from 'lucide-react';

interface RowProps {
  criteria: CriteriaMaster;
  assessment?: CriteriaAssessment;
  isActive: boolean;
  isCompact?: boolean;
  onSelect: () => void;
  onStatusChange: (status: FindingStatus) => void;
  onNotesChange: (notes: string) => void;
  autoFocusNotes?: boolean;
}

const QUICK_SNIPPETS = [
  'SOP disahkan & disosialisasikan',
  'Rekaman lengkap & mutakhir',
  'Belum ada bukti pelaksanaan',
  'Perlu penyesuaian regulasi',
  'Lisensi K3 kedaluwarsa',
];

export const Row: React.FC<RowProps> = ({
  criteria,
  assessment,
  isActive,
  isCompact = false,
  onSelect,
  onStatusChange,
  onNotesChange,
  autoFocusNotes = false,
}) => {
  const currentStatus = assessment?.status || 'UNASSESSED';
  const notes = assessment?.findingNotes || '';
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isActive && autoFocusNotes && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isActive, autoFocusNotes]);

  const handleAddSnippet = (snippet: string) => {
    const updated = notes.trim() ? `${notes}\n• ${snippet}` : `• ${snippet}`;
    onNotesChange(updated);
  };

  const hasNotes = notes.trim().length > 0;
  const isGap = currentStatus === 'CRITICAL' || currentStatus === 'MAJOR' || currentStatus === 'MINOR';

  return (
    <div
      id={`criteria-row-${criteria.code.replace(/\./g, '-')}`}
      onClick={onSelect}
      className={`group relative border-b border-[var(--border-subtle)] transition-colors duration-120 cursor-pointer select-none ${
        isActive 
          ? 'bg-[var(--accent-tint)]' 
          : 'bg-[var(--surface)] hover:bg-[#FAF9F6]'
      }`}
    >
      {/* 2px active indicator on left border */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-120 ${
          isActive ? 'bg-[var(--accent)]' : 'bg-transparent'
        }`}
      />

      {/* Main Row Content */}
      <div 
        className={`flex items-center gap-3 pl-3 pr-2.5 ${
          isCompact ? 'min-h-[38px] py-1' : 'min-h-[48px] py-1.5'
        }`}
      >
        {/* Clause Code (64px, mono, tabular-nums) */}
        <div className="w-[64px] shrink-0 font-mono text-[12px] font-semibold text-[var(--ink-900)] tabular-nums">
          {criteria.code}
        </div>

        {/* Clause text (max 2 lines clamped, 13px/12px) */}
        <div className="flex-1 min-w-0 pr-2">
          <p 
            className={`text-[var(--ink-900)] line-clamp-2 leading-[1.35] ${
              isCompact ? 'text-[12px]' : 'text-[13px]'
            }`}
            title={criteria.clauseText}
          >
            {criteria.clauseText}
          </p>
        </div>

        {/* Notes & Evidence indicator (if present) */}
        <div className="shrink-0 flex items-center gap-1.5 min-w-[36px] justify-end">
          {hasNotes && (
            <span 
              title={`Catatan temuan: ${notes}`}
              className="inline-flex items-center gap-0.5 text-[11px] font-medium text-[var(--accent)]"
            >
              <FileText size={13} strokeWidth={1.5} />
            </span>
          )}
          {isGap && (
            <SeverityMark status={currentStatus} showIcon size="sm" />
          )}
        </div>

        {/* Segmented Status Controller (6 options) */}
        <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
          <SegmentedStatus
            value={currentStatus}
            onChange={onStatusChange}
            compact={isCompact}
          />
        </div>
      </div>

      {/* Inline Expanded Notes Section (Only for active row) */}
      {isActive && (
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="px-3 pb-3 pt-1 border-t border-[var(--border-subtle)] bg-[var(--surface)] text-[12px] animate-none"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="label-xs text-[11px] font-semibold text-[var(--ink-500)] flex items-center gap-1">
              <FileText size={12} strokeWidth={1.5} />
              <span>Fakta Bukti / Catatan Ketidaksesuaian [N]:</span>
            </span>

            {/* Snippet chips */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {QUICK_SNIPPETS.map((snip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddSnippet(snip)}
                  className="px-1.5 py-0.5 text-[10px] font-medium rounded-[3px] bg-[var(--sunken)] hover:bg-[var(--border-subtle)] text-[var(--ink-700)] border border-[var(--border-subtle)] transition-colors cursor-pointer shrink-0"
                >
                  + {snip}
                </button>
              ))}
            </div>
          </div>

          <textarea
            ref={textareaRef}
            rows={2}
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            placeholder="Ketik fakta objektif, nomor dokumen SOP/IK, hasil wawancara, atau bukti fisik lapangan..."
            className="w-full px-2.5 py-1.5 text-[12px] text-[var(--ink-900)] rounded-[4px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-y leading-[1.4]"
          />
        </div>
      )}
    </div>
  );
};
