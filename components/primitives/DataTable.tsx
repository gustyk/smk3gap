'use client';

import React, { useState } from 'react';
import { CapItem, CriteriaMaster, FindingStatus } from '@/types/smk3';
import { SeverityMark } from './SeverityMark';
import { Triangle, Clock, ArrowUpDown, ChevronRight } from 'lucide-react';

export interface CapRowData {
  code: string;
  clauseText: string;
  severity: FindingStatus;
  findingNotes: string;
  cap: CapItem;
}

interface DataTableProps {
  rows: CapRowData[];
  selectedCode?: string | null;
  onSelectRow: (code: string) => void;
  onUpdateCap: (code: string, updated: Partial<CapItem>) => void;
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  rows,
  selectedCode,
  onSelectRow,
  onUpdateCap,
  className = ''
}) => {
  const [sortField, setSortField] = useState<'code' | 'severity' | 'dueDate' | 'status'>('code');
  const [sortAsc, setSortAsc] = useState(true);

  const calculateDaysRemaining = (dueDate?: string) => {
    if (!dueDate) return { label: '-', isOverdue: false, isUrgent: false };
    const due = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { label: `Lewat ${Math.abs(diffDays)}h`, isOverdue: true, isUrgent: true };
    }
    if (diffDays === 0) {
      return { label: 'Hari ini', isOverdue: false, isUrgent: true };
    }
    return { label: `H-${diffDays}`, isOverdue: false, isUrgent: diffDays <= 7 };
  };

  const handleSort = (field: 'code' | 'severity' | 'dueDate' | 'status') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'code') {
      comparison = a.code.localeCompare(b.code, undefined, { numeric: true });
    } else if (sortField === 'severity') {
      const order: Record<FindingStatus, number> = {
        CRITICAL: 1,
        MAJOR: 2,
        MINOR: 3,
        COMPLIANT: 4,
        OFI: 5,
        NA: 6,
        UNASSESSED: 7
      };
      comparison = (order[a.severity] || 99) - (order[b.severity] || 99);
    } else if (sortField === 'dueDate') {
      comparison = (a.cap.dueDate || '').localeCompare(b.cap.dueDate || '');
    } else if (sortField === 'status') {
      comparison = (a.cap.status || '').localeCompare(b.cap.status || '');
    }
    return sortAsc ? comparison : -comparison;
  });

  return (
    <div className={`w-full overflow-x-auto border border-[var(--border-default)] bg-[var(--surface)] ${className}`}>
      <table className="w-full text-left border-collapse text-[12px] font-sans">
        {/* Sticky Header (Height 32px) */}
        <thead className="sticky top-0 z-20 bg-[var(--sunken)] border-b border-[var(--border-default)] text-[11px] uppercase tracking-[0.04em] text-[var(--ink-500)] select-none">
          <tr className="h-[32px]">
            {/* Pinned Column 1: Kode */}
            <th 
              onClick={() => handleSort('code')}
              className="sticky left-0 z-30 bg-[var(--sunken)] w-[68px] min-w-[68px] px-2.5 font-semibold text-[var(--ink-700)] cursor-pointer hover:text-[var(--ink-900)] border-r border-[var(--border-subtle)]"
            >
              <div className="flex items-center justify-between">
                <span>Kode</span>
                <ArrowUpDown size={10} className="opacity-50" />
              </div>
            </th>

            {/* Pinned Column 2: Severity */}
            <th 
              onClick={() => handleSort('severity')}
              className="sticky left-[68px] z-30 bg-[var(--sunken)] w-[90px] min-w-[90px] px-2 font-semibold text-[var(--ink-700)] cursor-pointer hover:text-[var(--ink-900)] border-r border-[var(--border-subtle)]"
            >
              <div className="flex items-center justify-between">
                <span>Tingkat</span>
                <ArrowUpDown size={10} className="opacity-50" />
              </div>
            </th>

            <th className="px-3 min-w-[220px] font-semibold text-[var(--ink-700)]">
              Uraian Temuan / Bukti Lapangan
            </th>

            <th className="px-2.5 min-w-[180px] font-semibold text-[var(--ink-700)]">
              Akar Masalah (Root Cause)
            </th>

            <th className="px-2.5 min-w-[200px] font-semibold text-[var(--ink-700)]">
              Tindakan Korektif
            </th>

            <th className="px-2 w-[110px] min-w-[110px] font-semibold text-[var(--ink-700)]">
              PIC
            </th>

            <th 
              onClick={() => handleSort('dueDate')}
              className="px-2 w-[110px] min-w-[110px] font-semibold text-[var(--ink-700)] cursor-pointer hover:text-[var(--ink-900)]"
            >
              <div className="flex items-center justify-between">
                <span>Batas Waktu</span>
                <ArrowUpDown size={10} className="opacity-50" />
              </div>
            </th>

            <th className="px-2 w-[90px] min-w-[90px] font-semibold text-[var(--ink-700)]">
              Sisa Hari
            </th>

            <th 
              onClick={() => handleSort('status')}
              className="px-2 w-[110px] min-w-[110px] font-semibold text-[var(--ink-700)] cursor-pointer hover:text-[var(--ink-900)]"
            >
              <div className="flex items-center justify-between">
                <span>Status</span>
                <ArrowUpDown size={10} className="opacity-50" />
              </div>
            </th>
          </tr>
        </thead>

        {/* Rows (Height 36px default) */}
        <tbody className="divide-y divide-[var(--border-subtle)]">
          {sortedRows.map((row) => {
            const isSelected = selectedCode === row.code;
            const remaining = calculateDaysRemaining(row.cap.dueDate);

            return (
              <tr
                key={row.code}
                onClick={() => onSelectRow(row.code)}
                className={`h-[36px] transition-colors duration-120 cursor-pointer ${
                  isSelected 
                    ? 'bg-[var(--accent-tint)]' 
                    : 'bg-[var(--surface)] hover:bg-[#FAF9F6]'
                }`}
              >
                {/* Pinned Left 1: Kode */}
                <td 
                  className={`sticky left-0 z-10 px-2.5 font-mono text-[12px] font-semibold border-r border-[var(--border-subtle)] tabular-nums ${
                    isSelected ? 'bg-[var(--accent-tint)] text-[var(--accent)]' : 'bg-[var(--surface)] text-[var(--ink-900)]'
                  }`}
                >
                  {row.code}
                </td>

                {/* Pinned Left 2: Severity */}
                <td 
                  className={`sticky left-[68px] z-10 px-2 border-r border-[var(--border-subtle)] ${
                    isSelected ? 'bg-[var(--accent-tint)]' : 'bg-[var(--surface)]'
                  }`}
                >
                  <SeverityMark status={row.severity} showIcon size="sm" />
                </td>

                {/* Temuan */}
                <td className="px-3 py-1">
                  <div className="line-clamp-1 text-[var(--ink-900)]" title={row.findingNotes || row.clauseText}>
                    {row.findingNotes || row.clauseText}
                  </div>
                </td>

                {/* Akar Masalah (Direct Inline Edit) */}
                <td className="px-1.5 py-0.5" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    value={row.cap.rootCause || ''}
                    onChange={(e) => onUpdateCap(row.code, { rootCause: e.target.value })}
                    placeholder="Identifikasi akar masalah..."
                    className="w-full h-[28px] px-2 text-[12px] rounded-[3px] border border-transparent hover:border-[var(--border-default)] focus:border-[var(--accent)] focus:bg-[var(--surface)] bg-transparent outline-none transition-colors"
                  />
                </td>

                {/* Tindakan Korektif (Direct Inline Edit) */}
                <td className="px-1.5 py-0.5" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    value={row.cap.correctiveAction || ''}
                    onChange={(e) => onUpdateCap(row.code, { correctiveAction: e.target.value })}
                    placeholder="Tindakan perbaikan..."
                    className="w-full h-[28px] px-2 text-[12px] rounded-[3px] border border-transparent hover:border-[var(--border-default)] focus:border-[var(--accent)] focus:bg-[var(--surface)] bg-transparent outline-none transition-colors"
                  />
                </td>

                {/* PIC */}
                <td className="px-1.5 py-0.5" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    value={row.cap.pic || ''}
                    onChange={(e) => onUpdateCap(row.code, { pic: e.target.value })}
                    placeholder="PIC..."
                    className="w-full h-[28px] px-2 text-[12px] rounded-[3px] border border-transparent hover:border-[var(--border-default)] focus:border-[var(--accent)] focus:bg-[var(--surface)] bg-transparent outline-none transition-colors"
                  />
                </td>

                {/* Batas Waktu */}
                <td className="px-1.5 py-0.5" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="date"
                    value={row.cap.dueDate || ''}
                    onChange={(e) => onUpdateCap(row.code, { dueDate: e.target.value })}
                    className="w-full h-[28px] px-1 text-[11px] font-mono rounded-[3px] border border-transparent hover:border-[var(--border-default)] focus:border-[var(--accent)] focus:bg-[var(--surface)] bg-transparent outline-none transition-colors tabular-nums"
                  />
                </td>

                {/* Sisa Hari: Teks + Ikon (Tanpa badge terang) */}
                <td className="px-2 font-mono text-[11px] tabular-nums whitespace-nowrap">
                  {remaining.isOverdue ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-[var(--status-noncompliant-solid)]">
                      <Triangle size={10} className="fill-[var(--status-noncompliant-solid)] shrink-0" />
                      <span>{remaining.label}</span>
                    </span>
                  ) : remaining.isUrgent ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-[#B45309]">
                      <Clock size={11} className="shrink-0" />
                      <span>{remaining.label}</span>
                    </span>
                  ) : (
                    <span className="text-[var(--ink-500)]">
                      {remaining.label}
                    </span>
                  )}
                </td>

                {/* Status */}
                <td className="px-1.5 py-0.5" onClick={(e) => e.stopPropagation()}>
                  <select
                    value={row.cap.status || 'OPEN'}
                    onChange={(e) => onUpdateCap(row.code, { status: e.target.value as any })}
                    className={`w-full h-[26px] px-1.5 text-[11px] font-medium rounded-[3px] border border-[var(--border-default)] bg-[var(--surface)] focus:border-[var(--accent)] outline-none cursor-pointer ${
                      row.cap.status === 'VERIFIED' ? 'text-[var(--status-compliant-solid)] font-semibold' :
                      row.cap.status === 'RESOLVED' ? 'text-[var(--accent)]' :
                      row.cap.status === 'IN_PROGRESS' ? 'text-[#B45309]' :
                      'text-[var(--status-noncompliant-solid)]'
                    }`}
                  >
                    <option value="OPEN">OPEN</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="VERIFIED">VERIFIED</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
