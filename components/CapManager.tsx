'use client';

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  AlertOctagon, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  User, 
  Filter, 
  ArrowLeft,
  Search,
  ShieldAlert,
  Table,
  LayoutGrid,
  FileSpreadsheet,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { AuditProject, CapItem, CriteriaMaster, FindingStatus } from '@/types/smk3';
import { SMK3_CRITERIA } from '@/lib/data/smk3-data';
import { getApplicableCriteria } from '@/lib/scoring';
import { calculateDefaultDueDate } from '@/lib/storage';

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
  onExportExcel
}) => {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [filterSeverity, setFilterSeverity] = useState<'ALL' | 'CRITICAL' | 'MAJOR' | 'MINOR'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'VERIFIED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const applicable = getApplicableCriteria(project.profile.auditTier, SMK3_CRITERIA);

  // Filter criteria that have gaps
  const gapCriteria = applicable.filter((c) => {
    const assessment = project.assessments[c.code];
    const status = assessment?.status;
    return status === 'CRITICAL' || status === 'MAJOR' || status === 'MINOR';
  });

  const filteredItems = gapCriteria.filter((c) => {
    const assessment = project.assessments[c.code];
    const cap = project.capItems[c.code];
    const severity = assessment?.status;
    const itemStatus = cap?.status || 'OPEN';

    if (filterSeverity !== 'ALL' && severity !== filterSeverity) return false;
    if (filterStatus !== 'ALL' && itemStatus !== filterStatus) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchCode = c.code.toLowerCase().includes(q);
      const matchText = c.clauseText.toLowerCase().includes(q);
      const matchNotes = (assessment?.findingNotes || '').toLowerCase().includes(q);
      const matchPic = (cap?.pic || '').toLowerCase().includes(q);
      if (!matchCode && !matchText && !matchNotes && !matchPic) return false;
    }

    return true;
  });

  const getSeverityBadge = (status?: FindingStatus) => {
    switch (status) {
      case 'CRITICAL':
        return {
          label: 'Kritikal',
          badge: 'bg-red-100 text-red-900 border-red-300',
          limit: 'Segera / Seketika'
        };
      case 'MAJOR':
        return {
          label: 'Mayor',
          badge: 'bg-orange-100 text-orange-900 border-orange-300',
          limit: 'Maks. 1 Bulan'
        };
      case 'MINOR':
      default:
        return {
          label: 'Minor',
          badge: 'bg-amber-100 text-amber-900 border-amber-300',
          limit: 'Maks. 3 Bulan'
        };
    }
  };

  const getSlaRemaining = (dueDateStr?: string) => {
    if (!dueDateStr) return null;
    const due = new Date(dueDateStr);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { text: `Terlewat ${Math.abs(diffDays)} hari`, color: 'text-red-700 bg-red-50 border-red-200' };
    } else if (diffDays === 0) {
      return { text: 'Jatuh Tempo Hari Ini', color: 'text-orange-700 bg-orange-50 border-orange-200' };
    } else {
      return { text: `Sisa ${diffDays} hari`, color: 'text-slate-600 bg-slate-50 border-slate-200' };
    }
  };

  return (
    <div className="space-y-6">
      
      {/* CAP Header & Controls */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                Matriks Corrective Action Plan (CAP Tracker)
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Daftar rencana perbaikan atas seluruh temuan ketidaksesuaian sesuai batas waktu yuridis PP No. 50/2012
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilan Matriks Spreadsheet (Dense Table)"
              >
                <Table className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tabel Matriks</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilan Kartu Aksi Terperinci"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Kartu Detail</span>
              </button>
            </div>

            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-rose-50 text-rose-800 border border-rose-200">
              {gapCriteria.length} Temuan Gap
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kode kriteria, temuan, PIC..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50"
            />
          </div>

          <div>
            <select
              value={filterSeverity}
              onChange={(e) => setFilterSeverity(e.target.value as any)}
              className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
            >
              <option value="ALL">Semua Tingkat Keparahan</option>
              <option value="CRITICAL">Temuan Kritikal (Stop Work)</option>
              <option value="MAJOR">Temuan Mayor (Maks. 1 Bln)</option>
              <option value="MINOR">Temuan Minor (Maks. 3 Bln)</option>
            </select>
          </div>

          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
            >
              <option value="ALL">Semua Status Tindak Lanjut</option>
              <option value="OPEN">Status: OPEN (Belum Ditindaklanjuti)</option>
              <option value="IN_PROGRESS">Status: IN PROGRESS (Sedang Berjalan)</option>
              <option value="RESOLVED">Status: RESOLVED (Telah Diperbaiki)</option>
              <option value="VERIFIED">Status: VERIFIED (Tuntas Terverifikasi)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content: Table Mode vs Card Mode */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900">
            {gapCriteria.length === 0
              ? 'Tidak Ada Temuan Ketidaksesuaian!'
              : 'Tidak Ada Item yang Sesuai dengan Filter'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
            {gapCriteria.length === 0
              ? 'Seluruh kriteria audit yang telah dinilai berstatus Komplian (Patuh) atau OFI. Pertahankan standar SMK3 perusahaan Anda!'
              : 'Coba ubah opsi filter atau kata kunci pencarian di atas.'}
          </p>
        </div>
      ) : viewMode === 'table' ? (
        /* TABLE / SPREADSHEET VIEW */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-3 px-3 w-16">Kode</th>
                  <th className="py-3 px-3 w-24">Tingkat</th>
                  <th className="py-3 px-4 min-w-[200px]">Uraian Temuan / Fakta Lapangan</th>
                  <th className="py-3 px-4 min-w-[200px]">Tindakan Korektif</th>
                  <th className="py-3 px-4 min-w-[200px]">Tindakan Preventif</th>
                  <th className="py-3 px-3 w-32">PIC</th>
                  <th className="py-3 px-3 w-36">Target SLA</th>
                  <th className="py-3 px-3 w-32">Status</th>
                  <th className="py-3 px-2 w-10 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredItems.map((c) => {
                  const assessment = project.assessments[c.code];
                  const cap = project.capItems[c.code] || {
                    criteriaCode: c.code,
                    rootCause: '',
                    correctiveAction: '',
                    preventiveAction: '',
                    pic: '',
                    dueDate: calculateDefaultDueDate(assessment?.status || 'MINOR'),
                    status: 'OPEN'
                  };

                  const sev = getSeverityBadge(assessment?.status);
                  const sla = getSlaRemaining(cap.dueDate);

                  return (
                    <tr key={c.code} className="hover:bg-slate-50/70 transition-colors align-top">
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">
                        {c.code}
                      </td>

                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] border ${sev.badge} inline-block`}>
                          {sev.label}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">{sev.limit}</div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-800 line-clamp-2">{c.clauseText}</div>
                        <div className="mt-1 text-[11px] text-rose-800 bg-rose-50/70 p-1.5 rounded-md border border-rose-100">
                          {assessment?.findingNotes || '(Belum ada catatan temuan)'}
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <textarea
                          rows={2}
                          value={cap.correctiveAction}
                          onChange={(e) => onUpdateCap(c.code, { correctiveAction: e.target.value })}
                          placeholder="Rencana perbaikan..."
                          className="w-full p-1.5 text-xs rounded-md border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 bg-white"
                        />
                      </td>

                      <td className="py-3 px-4">
                        <textarea
                          rows={2}
                          value={cap.preventiveAction}
                          onChange={(e) => onUpdateCap(c.code, { preventiveAction: e.target.value })}
                          placeholder="Rencana pencegahan..."
                          className="w-full p-1.5 text-xs rounded-md border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 bg-white"
                        />
                      </td>

                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={cap.pic}
                          onChange={(e) => onUpdateCap(c.code, { pic: e.target.value })}
                          placeholder="Nama PIC"
                          className="w-full p-1.5 text-xs rounded-md border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 bg-white"
                        />
                      </td>

                      <td className="py-3 px-3">
                        <input
                          type="date"
                          value={cap.dueDate}
                          onChange={(e) => onUpdateCap(c.code, { dueDate: e.target.value })}
                          className="w-full p-1.5 text-xs rounded-md border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 bg-white font-mono"
                        />
                        {sla && (
                          <div className={`mt-1 text-[10px] font-bold px-1.5 py-0.5 rounded border inline-block ${sla.color}`}>
                            {sla.text}
                          </div>
                        )}
                      </td>

                      <td className="py-3 px-3">
                        <select
                          value={cap.status}
                          onChange={(e) => onUpdateCap(c.code, { status: e.target.value as any })}
                          className={`w-full p-1.5 text-xs font-bold rounded-md border focus:outline-hidden ${
                            cap.status === 'VERIFIED' ? 'text-emerald-700 border-emerald-400 bg-emerald-50/50' :
                            cap.status === 'RESOLVED' ? 'text-blue-700 border-blue-400 bg-blue-50/50' :
                            cap.status === 'IN_PROGRESS' ? 'text-amber-700 border-amber-400 bg-amber-50/50' :
                            'text-rose-700 border-rose-300 bg-rose-50/50'
                          }`}
                        >
                          <option value="OPEN">OPEN</option>
                          <option value="IN_PROGRESS">IN PROGRESS</option>
                          <option value="RESOLVED">RESOLVED</option>
                          <option value="VERIFIED">VERIFIED</option>
                        </select>
                      </td>

                      <td className="py-3 px-2 text-center">
                        <button
                          type="button"
                          onClick={() => onNavigateToCriteria(c.code, c.elementNum)}
                          title="Buka Klausul di Checklist"
                          className="p-1 rounded text-slate-400 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* CARDS VIEW */
        <div className="space-y-4">
          {filteredItems.map((c) => {
            const assessment = project.assessments[c.code];
            const cap = project.capItems[c.code] || {
              criteriaCode: c.code,
              rootCause: '',
              correctiveAction: '',
              preventiveAction: '',
              pic: '',
              dueDate: calculateDefaultDueDate(assessment?.status || 'MINOR'),
              status: 'OPEN'
            };

            const sev = getSeverityBadge(assessment?.status);
            const sla = getSlaRemaining(cap.dueDate);

            return (
              <div
                key={c.code}
                className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 transition-all hover:border-slate-300"
              >
                {/* Header item */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-slate-900 text-white">
                      {c.code}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {c.elementName} &bull; {c.subElementName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${sev.badge}`}>
                      {sev.label} ({sev.limit})
                    </span>
                    <button
                      onClick={() => onNavigateToCriteria(c.code, c.elementNum)}
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>Lihat Klausul &rarr;</span>
                    </button>
                  </div>
                </div>

                {/* Clause & Finding Facts */}
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-700 block mb-1">Teks Klausul PP 50/2012:</span>
                    <p className="text-slate-600 leading-relaxed">{c.clauseText}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-200">
                    <span className="font-bold text-rose-900 block mb-1">Fakta / Catatan Temuan Lapangan:</span>
                    <p className="text-rose-950 leading-relaxed">
                      {assessment?.findingNotes || '(Belum ada catatan temuan.)'}
                    </p>
                  </div>
                </div>

                {/* CAP Form Fields */}
                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Analisis Akar Masalah (Root Cause):
                    </label>
                    <textarea
                      rows={2}
                      value={cap.rootCause}
                      onChange={(e) => onUpdateCap(c.code, { rootCause: e.target.value })}
                      placeholder="Identifikasi akar penyebab terjadinya gap..."
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Tindakan Korektif (Corrective Action):
                    </label>
                    <textarea
                      rows={2}
                      value={cap.correctiveAction}
                      onChange={(e) => onUpdateCap(c.code, { correctiveAction: e.target.value })}
                      placeholder="Langkah perbaikan langsung atas temuan..."
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Tindakan Preventif (Preventive Action):
                    </label>
                    <textarea
                      rows={2}
                      value={cap.preventiveAction}
                      onChange={(e) => onUpdateCap(c.code, { preventiveAction: e.target.value })}
                      placeholder="Langkah pencegahan agar gap tidak berulang..."
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                    />
                  </div>
                </div>

                {/* PIC, Deadline & Status Bar */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 items-end bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Penanggung Jawab (PIC):</span>
                    </label>
                    <input
                      type="text"
                      value={cap.pic}
                      onChange={(e) => onUpdateCap(c.code, { pic: e.target.value })}
                      placeholder="Nama / Divisi PIC"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        Target Batas Waktu:
                      </span>
                      {sla && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${sla.color}`}>
                          {sla.text}
                        </span>
                      )}
                    </label>
                    <input
                      type="date"
                      value={cap.dueDate}
                      onChange={(e) => onUpdateCap(c.code, { dueDate: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Status Penyelesaian:
                    </label>
                    <select
                      value={cap.status}
                      onChange={(e) => onUpdateCap(c.code, { status: e.target.value as any })}
                      className={`w-full px-2.5 py-1.5 text-xs font-bold rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 bg-white ${
                        cap.status === 'VERIFIED' ? 'text-emerald-700 border-emerald-400' :
                        cap.status === 'RESOLVED' ? 'text-blue-700 border-blue-400' :
                        cap.status === 'IN_PROGRESS' ? 'text-amber-700 border-amber-400' :
                        'text-rose-700 border-rose-300'
                      }`}
                    >
                      <option value="OPEN">OPEN (Belum Selesai)</option>
                      <option value="IN_PROGRESS">IN PROGRESS (Sedang Dikerjakan)</option>
                      <option value="RESOLVED">RESOLVED (Tuntas Perbaikan)</option>
                      <option value="VERIFIED">VERIFIED (Terverifikasi Auditor)</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
