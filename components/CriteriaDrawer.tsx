'use client';

import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  ClipboardList, 
  Scale, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';
import { CriteriaMaster, CriteriaAssessment, FindingStatus } from '@/types/smk3';

interface CriteriaDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  criteria: CriteriaMaster | null;
  assessment?: CriteriaAssessment;
  onUpdateAssessment: (code: string, updated: Partial<CriteriaAssessment>) => void;
  onNavigateToCap?: (code: string) => void;
  onPrevCriteria?: () => void;
  onNextCriteria?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const CriteriaDrawer: React.FC<CriteriaDrawerProps> = ({
  isOpen,
  onClose,
  criteria,
  assessment,
  onUpdateAssessment,
  onNavigateToCap,
  onPrevCriteria,
  onNextCriteria,
  hasPrev = false,
  hasNext = false
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'interpretation' | 'evidence' | 'benchmarks'>('all');

  if (!isOpen || !criteria) return null;

  const currentStatus: FindingStatus = assessment?.status || 'UNASSESSED';
  const notes = assessment?.findingNotes || '';

  const handleStatusChange = (status: FindingStatus) => {
    onUpdateAssessment(criteria.code, { status });
  };

  const quickSnippets = [
    'SOP terdokumentasi, disahkan & disosialisasikan',
    'Rekaman implementasi lengkap & mutakhir',
    'SOP ada, namun pelaksanaan belum konsisten di lapangan',
    'Belum ada prosedur tertulis yang disahkan pimpinan',
    'Dokumen/lisensi K3 telah kedaluwarsa (perlu perpanjangan)',
    'Telah dilakukan evaluasi berkala oleh P2K3'
  ];

  const handleAddSnippet = (snippet: string) => {
    const updated = notes.trim() ? `${notes}\n• ${snippet}` : `• ${snippet}`;
    onUpdateAssessment(criteria.code, { findingNotes: updated });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-2xs animate-in fade-in duration-150">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
          
          {/* Top Bar Navigation */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-slate-900 text-white">
                {criteria.code}
              </span>
              <span className="text-xs font-semibold text-slate-500 truncate max-w-[240px]">
                {criteria.elementName}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              

              <button
                type="button"
                onClick={() => handleStatusChange('MINOR')}
                className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all border text-center ${
                  currentStatus === 'MINOR'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs ring-2 ring-amber-500/20'
                    : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-50'
                }`}
              >
                <div>Minor</div>
                <div className="text-[10px] opacity-80">[3]</div>
              </button>

              <button
                type="button"
                onClick={() => handleStatusChange('MAJOR')}
                className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all border text-center ${
                  currentStatus === 'MAJOR'
                    ? 'bg-orange-600 text-white border-orange-600 shadow-xs ring-2 ring-orange-500/20'
                    : 'bg-white text-orange-700 border-orange-300 hover:bg-orange-50'
                }`}
              >
                <div>Mayor</div>
                <div className="text-[10px] opacity-80">[4]</div>
              </button>

              <button
                type="button"
                onClick={() => handleStatusChange('CRITICAL')}
                className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all border text-center ${
                  currentStatus === 'CRITICAL'
                    ? 'bg-red-600 text-white border-red-600 shadow-xs ring-2 ring-red-500/20'
                    : 'bg-white text-red-700 border-red-300 hover:bg-red-50'
                }`}
              >
                <div>Kritikal</div>
                <div className="text-[10px] opacity-80">[5]</div>
              </button>

              <button
                type="button"
                onClick={() => handleStatusChange('NA')}
                className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all border text-center ${
                  currentStatus === 'NA'
                    ? 'bg-slate-700 text-white border-slate-700 shadow-xs ring-2 ring-slate-500/20'
                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <div>N/A</div>
                <div className="text-[10px] opacity-80">[6]</div>
              </button>
            </div>
          </div>

          {/* Section Filter Tabs */}
          <div className="px-6 pt-3 bg-white border-b border-slate-200 flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-2 text-xs font-bold border-b-2 transition-all ${
                activeTab === 'all'
                  ? 'border-slate-900 text-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Semua Panduan
            </button>
            <button
              onClick={() => setActiveTab('interpretation')}
              className={`pb-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1 ${
                activeTab === 'interpretation'
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Interpretasi</span>
            </button>
            <button
              onClick={() => setActiveTab('evidence')}
              className={`pb-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1 ${
                activeTab === 'evidence'
                  ? 'border-emerald-600 text-emerald-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Bukti Acuan</span>
            </button>
            <button
              onClick={() => setActiveTab('benchmarks')}
              className={`pb-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1 ${
                activeTab === 'benchmarks'
                  ? 'border-amber-600 text-amber-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Benchmark Temuan</span>
            </button>
          </div>

          {/* Scrollable Inspection Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-5">
            {/* 1. Interpretation */}
            {(activeTab === 'all' || activeTab === 'interpretation') && (
              <div className="bg-blue-50/70 border border-blue-200/90 rounded-xl p-4 text-xs">
                <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-700" />
                  <span>Interpretasi & Konteks Yuridis PP 50/2012:</span>
                </div>
                <p className="text-blue-950 leading-relaxed font-normal">
                  {criteria.interpretation}
                </p>
              </div>
            )}

            {/* 2. Expected Evidence */}
            {(activeTab === 'all' || activeTab === 'evidence') && (
              <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-xl p-4 text-xs">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-2">
                  <ClipboardList className="w-4 h-4 text-emerald-700" />
                  <span>Daftar Bukti Objektif & Dokumen Lapangan:</span>
                </div>
                <p className="text-emerald-950 leading-relaxed font-normal whitespace-pre-line">
                  {criteria.expectedEvidence}
                </p>
              </div>
            )}

            {/* 3. Finding Benchmarks */}
            {(activeTab === 'all' || activeTab === 'benchmarks') && (
              <div className="space-y-2.5">
                <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-slate-600" />
                  <span>Tolok Ukur Penetapan Kategori Temuan:</span>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <span className="font-bold block text-[11px] text-emerald-800 uppercase tracking-wide">
                    ✅ Kondisi Komplian (Patuh):
                  </span>
                  <p className="mt-1 leading-relaxed">{criteria.conditions.compliant}</p>
                </div>

                

                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <span className="font-bold block text-[11px] text-amber-800 uppercase tracking-wide">
                    ⚠️ Kondisi Temuan Minor:
                  </span>
                  <p className="mt-1 leading-relaxed">{criteria.conditions.minor}</p>
                </div>

                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-900">
                  <span className="font-bold block text-[11px] text-orange-800 uppercase tracking-wide">
                    🚨 Kondisi Temuan Mayor (Penangguhan Sertifikat):
                  </span>
                  <p className="mt-1 leading-relaxed">{criteria.conditions.major}</p>
                </div>

                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-900">
                  <span className="font-bold block text-[11px] text-red-800 uppercase tracking-wide">
                    ⛔ Kondisi Temuan Kritikal (Gugur / Stop Work Order):
                  </span>
                  <p className="mt-1 leading-relaxed">{criteria.conditions.critical}</p>
                </div>
              </div>
            )}

            {/* Finding Notes & Quick Snippets */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>Catatan Temuan / Bukti Objektif Auditor:</span>
                </label>
                {(currentStatus === 'CRITICAL' || currentStatus === 'MAJOR' || currentStatus === 'MINOR') && onNavigateToCap && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigateToCap(criteria.code);
                    }}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                  >
                    <span>Buka Matriks CAP</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Quick Snippets Pills */}
              <div>
                <span className="text-[10px] font-semibold text-slate-400 block mb-1">
                  Tempel Templat Bukti Cepat (+):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickSnippets.map((snip, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleAddSnippet(snip)}
                      className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-[10px] text-slate-700 font-medium transition-colors text-left"
                    >
                      + {snip}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                rows={3}
                value={notes}
                onChange={(e) => onUpdateAssessment(criteria.code, { findingNotes: e.target.value })}
                placeholder="Tuliskan nomor dokumen SOP, tanggal pengesahan, temuan fisik lapangan, atau rincian ketidaksesuaian..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-400/20 focus:border-slate-500 bg-white"
              />
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
            <span className="text-slate-500">
              Perubahan tersimpan otomatis di peramban
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
            >
              Selesai Memeriksa
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
