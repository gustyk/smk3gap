'use client';

import React, { useState } from 'react';
import { AuditProject, CapItem, CriteriaMaster, FindingStatus } from '@/types/smk3';
import { SMK3_CRITERIA } from '@/lib/data/smk3-data';
import { getApplicableCriteria } from '@/lib/scoring';
import { calculateDefaultDueDate } from '@/lib/storage';
import { DataTable, CapRowData } from './primitives/DataTable';
import { SeverityMark } from './primitives/SeverityMark';
import { InspectorSection } from './primitives/InspectorSection';
import { Triangle, Diamond, Circle, Search, X, ArrowUpRight } from 'lucide-react';

interface CapManagerProps {
  project: AuditProject;
  onUpdateCap: (code: string, updated: Partial<CapItem>) => void;
  onNavigateToCriteria: (code: string, elementNum: number) => void;
  onExportExcel?: () => void;
}

export const CapManager: React.FC<CapManagerProps> = ({
  project,
  onUpdateCap,
  onNavigateToCriteria,
  onExportExcel,
}) => {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [filterSeverity, setFilterSeverity] = useState<'ALL' | 'CRITICAL' | 'MAJOR' | 'MINOR'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'VERIFIED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const applicable = getApplicableCriteria(project.profile.auditTier, SMK3_CRITERIA);

  const gapCriteria = applicable.filter(c => {
    const s = project.assessments[c.code]?.status;
    return s === 'CRITICAL' || s === 'MAJOR' || s === 'MINOR';
  });

  const filteredRows: CapRowData[] = gapCriteria
    .filter(c => {
      const a = project.assessments[c.code];
      const cap = project.capItems[c.code];
      if (filterSeverity !== 'ALL' && a?.status !== filterSeverity) return false;
      if (filterStatus !== 'ALL' && (cap?.status || 'OPEN') !== filterStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const m = c.code.toLowerCase().includes(q) ||
          c.clauseText.toLowerCase().includes(q) ||
          (a?.findingNotes || '').toLowerCase().includes(q) ||
          (cap?.pic || '').toLowerCase().includes(q);
        if (!m) return false;
      }
      return true;
    })
    .map(c => {
      const a = project.assessments[c.code];
      const cap = project.capItems[c.code] || {
        criteriaCode: c.code,
        rootCause: '',
        correctiveAction: '',
        preventiveAction: '',
        pic: '',
        dueDate: calculateDefaultDueDate(a?.status || 'MINOR'),
        status: 'OPEN' as const,
      };
      return {
        code: c.code,
        clauseText: c.clauseText,
        severity: a?.status || 'MINOR',
        findingNotes: a?.findingNotes || '',
        cap,
      };
    });

  // Selected row detail panel
  const selectedCriteria = selectedCode
    ? SMK3_CRITERIA.find(c => c.code === selectedCode)
    : null;
  const selectedAssessment = selectedCode ? project.assessments[selectedCode] : undefined;
  const selectedCap = selectedCode
    ? (project.capItems[selectedCode] || {
        criteriaCode: selectedCode,
        rootCause: '',
        correctiveAction: '',
        preventiveAction: '',
        pic: '',
        dueDate: calculateDefaultDueDate(selectedAssessment?.status || 'MINOR'),
        status: 'OPEN' as const,
      })
    : null;

  return (
    <div className="h-full flex flex-col bg-[var(--canvas)] overflow-hidden">
      {/* CAP Toolbar / Header (Height 40px) */}
      <div className="shrink-0 h-[40px] px-4 bg-[var(--surface)] border-b border-[var(--border-default)] flex items-center gap-3">
        <span className="label-xs font-semibold text-[11px] uppercase tracking-wider text-[var(--ink-700)] shrink-0">
          CAP Tracker
        </span>

        <span className="font-mono text-[11px] text-[var(--ink-500)] tabular-nums shrink-0">
          {gapCriteria.length} temuan
        </span>

        <div className="flex items-center gap-1 shrink-0">
          <Triangle size={10} className="fill-[var(--status-noncompliant-solid)] text-transparent" />
          <span className="font-mono text-[11px] text-[var(--status-noncompliant-solid)] tabular-nums">
            {gapCriteria.filter(c => project.assessments[c.code]?.status === 'CRITICAL').length}
          </span>
          <Diamond size={10} className="fill-[#B45309] text-transparent ml-1.5" />
          <span className="font-mono text-[11px] tabular-nums" style={{ color: '#B45309' }}>
            {gapCriteria.filter(c => project.assessments[c.code]?.status === 'MAJOR').length}
          </span>
          <Circle size={10} className="fill-[var(--status-partial-solid)] text-transparent ml-1.5" />
          <span className="font-mono text-[11px] text-[var(--status-partial-solid)] tabular-nums">
            {gapCriteria.filter(c => project.assessments[c.code]?.status === 'MINOR').length}
          </span>
        </div>

        <div className="flex-1" />

        {/* Search */}
        <div className="relative w-[220px]">
          <Search size={11} className="absolute left-2 top-[50%] -translate-y-1/2 text-[var(--ink-400)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Cari kode, temuan, PIC…"
            className="w-full h-[26px] pl-6 pr-2 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Severity */}
        <select
          value={filterSeverity}
          onChange={e => setFilterSeverity(e.target.value as any)}
          className="h-[26px] px-1.5 text-[11px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:border-[var(--accent)] focus:outline-none text-[var(--ink-700)] cursor-pointer"
        >
          <option value="ALL">Semua Severity</option>
          <option value="CRITICAL">Kritikal</option>
          <option value="MAJOR">Mayor</option>
          <option value="MINOR">Minor</option>
        </select>

        {/* Filter Status */}
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value as any)}
          className="h-[26px] px-1.5 text-[11px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:border-[var(--accent)] focus:outline-none text-[var(--ink-700)] cursor-pointer"
        >
          <option value="ALL">Semua Status</option>
          <option value="OPEN">OPEN</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="RESOLVED">RESOLVED</option>
          <option value="VERIFIED">VERIFIED</option>
        </select>
      </div>

      {/* Main Body: Table + Detail Panel side by side */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Dense Data Table */}
        <div className="flex-1 overflow-auto">
          {filteredRows.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center px-8">
                <p className="text-[12px] text-[var(--ink-500)]">
                  {gapCriteria.length === 0
                    ? 'Tidak ada temuan ketidaksesuaian. Seluruh kriteria dinilai Sesuai atau OFI.'
                    : 'Tidak ada item yang cocok dengan filter aktif.'}
                </p>
              </div>
            </div>
          ) : (
            <DataTable
              rows={filteredRows}
              selectedCode={selectedCode}
              onSelectRow={(code) => setSelectedCode(prev => prev === code ? null : code)}
              onUpdateCap={onUpdateCap}
            />
          )}
        </div>

        {/* Right: Detail Panel for selected row (5-Whys / root cause) */}
        {selectedCode && selectedCriteria && selectedCap && (
          <div className="w-[340px] shrink-0 border-l border-[var(--border-default)] bg-[var(--surface)] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-[40px] px-3 border-b border-[var(--border-subtle)] bg-[var(--sunken)] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-mono text-[12px] font-bold text-[var(--ink-900)]">{selectedCode}</span>
                <SeverityMark status={selectedAssessment?.status} showIcon size="sm" />
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const crit = SMK3_CRITERIA.find(c => c.code === selectedCode);
                    if (crit) onNavigateToCriteria(selectedCode, crit.elementNum);
                  }}
                  className="flex items-center gap-1 text-[11px] text-[var(--accent)] font-medium hover:underline cursor-pointer"
                >
                  <span>Checklist</span>
                  <ArrowUpRight size={11} />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCode(null)}
                  className="p-1 rounded-[3px] text-[var(--ink-400)] hover:text-[var(--ink-900)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Scrollable detail body */}
            <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3 text-[12px]">
              {/* Finding notes (read-only summary) */}
              <div className="py-2 border-b border-[var(--border-subtle)]">
                <span className="label-xs block mb-1">Catatan Temuan Lapangan:</span>
                <p className="text-[var(--ink-700)] leading-[1.45]">
                  {selectedAssessment?.findingNotes || '(Belum ada catatan temuan)'}
                </p>
              </div>

              {/* Akar Masalah (5-Whys style) */}
              <div>
                <label className="label-xs block mb-1">Analisis Akar Masalah (Root Cause):</label>
                <textarea
                  rows={3}
                  value={selectedCap.rootCause || ''}
                  onChange={e => onUpdateCap(selectedCode, { rootCause: e.target.value })}
                  placeholder="Apa akar penyebab terjadinya ketidaksesuaian ini?&#10;Mengapa hal ini terjadi? (metode 5-Why)"
                  className="w-full px-2.5 py-1.5 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-y leading-[1.4]"
                />
              </div>

              {/* Tindakan Korektif */}
              <div>
                <label className="label-xs block mb-1">Tindakan Korektif:</label>
                <textarea
                  rows={3}
                  value={selectedCap.correctiveAction || ''}
                  onChange={e => onUpdateCap(selectedCode, { correctiveAction: e.target.value })}
                  placeholder="Langkah perbaikan langsung untuk menyelesaikan temuan…"
                  className="w-full px-2.5 py-1.5 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-y leading-[1.4]"
                />
              </div>

              {/* Tindakan Preventif */}
              <div>
                <label className="label-xs block mb-1">Tindakan Preventif:</label>
                <textarea
                  rows={2}
                  value={selectedCap.preventiveAction || ''}
                  onChange={e => onUpdateCap(selectedCode, { preventiveAction: e.target.value })}
                  placeholder="Langkah pencegahan agar gap tidak berulang…"
                  className="w-full px-2.5 py-1.5 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-y leading-[1.4]"
                />
              </div>

              {/* Clause context for reference */}
              <div className="pt-2 border-t border-[var(--border-subtle)]">
                <span className="label-xs block mb-1">Teks Klausul PP 50/2012:</span>
                <p className="text-[11px] text-[var(--ink-500)] leading-[1.45]">
                  {selectedCriteria.clauseText}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
