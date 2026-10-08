'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  AlertOctagon, 
  Sparkles, 
  FileCheck2, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Clock,
  BookOpen,
  ClipboardList,
  Scale,
  PanelRightOpen,
  Plus
} from 'lucide-react';
import { CriteriaMaster, CriteriaAssessment, FindingStatus } from '@/types/smk3';

interface CriteriaCardProps {
  criteria: CriteriaMaster;
  assessment?: CriteriaAssessment;
  onUpdateAssessment: (code: string, updated: Partial<CriteriaAssessment>) => void;
  onNavigateToCap?: (code: string) => void;
  onInspectCriteria?: (criteria: CriteriaMaster) => void;
  isSelected?: boolean;
  density?: 'compact' | 'comfortable';
}

export const CriteriaCard: React.FC<CriteriaCardProps> = ({
  criteria,
  assessment,
  onUpdateAssessment,
  onNavigateToCap,
  onInspectCriteria,
  isSelected = false,
  density = 'comfortable'
}) => {
  const [inlineTab, setInlineTab] = useState<'none' | 'interpretation' | 'evidence' | 'benchmarks'>('none');
  const [showNotes, setShowNotes] = useState(false);

  const currentStatus: FindingStatus = assessment?.status || 'UNASSESSED';
  const notes = assessment?.findingNotes || '';

  const handleStatusChange = (status: FindingStatus) => {
    onUpdateAssessment(criteria.code, { status });
  };

  const quickSnippets = [
    'SOP disahkan & disosialisasikan',
    'Rekaman ada & mutakhir',
    'Belum ada bukti pelaksanaan',
    'Perlu penyesuaian regulasi',
    'Lisensi K3 kedaluwarsa'
  ];

  const handleAddSnippet = (snippet: string) => {
    const updated = notes.trim() ? `${notes}\n• ${snippet}` : `• ${snippet}`;
    onUpdateAssessment(criteria.code, { findingNotes: updated });
  };

  const getStatusBadge = () => {
    switch (currentStatus) {
      case 'COMPLIANT':
        return {
          label: 'Komplian',
          sub: 'Patuh (1)',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          dot: 'bg-emerald-500'
        };
      case 'OFI':
        return {
          label: 'OFI',
          sub: 'Peluang (1)',
          bg: 'bg-sky-50 text-sky-800 border-sky-300',
          dot: 'bg-sky-500'
        };
      case 'MINOR':
        return {
          label: 'Minor',
          sub: 'Gap Kecil (0)',
          bg: 'bg-amber-50 text-amber-800 border-amber-300',
          dot: 'bg-amber-500'
        };
      case 'MAJOR':
        return {
          label: 'Mayor',
          sub: 'Wajib Perbaikan (0)',
          bg: 'bg-orange-50 text-orange-800 border-orange-400',
          dot: 'bg-orange-500'
        };
      case 'CRITICAL':
        return {
          label: 'Kritikal',
          sub: 'Fatal / Gugur (0)',
          bg: 'bg-red-50 text-red-800 border-red-500 ring-1 ring-red-400',
          dot: 'bg-red-600'
        };
      case 'NA':
        return {
          label: 'N/A',
          sub: 'Tidak Berlaku',
          bg: 'bg-slate-100 text-slate-700 border-slate-300',
          dot: 'bg-slate-400'
        };
      case 'UNASSESSED':
      default:
        return {
          label: 'Belum Dinilai',
          sub: 'Pending',
          bg: 'bg-slate-50 text-slate-500 border-slate-200',
          dot: 'bg-slate-300'
        };
    }
  };

  const statusStyle = getStatusBadge();
  const isCompact = density === 'compact';

  return (
    <div 
      id={`criteria-${criteria.code.replace(/\./g, '-')}`}
      className={`rounded-xl border transition-all duration-150 bg-white ${
        isSelected ? 'ring-2 ring-emerald-500 border-emerald-500 shadow-sm' :
        currentStatus === 'CRITICAL' ? 'border-red-400 ring-1 ring-red-300 shadow-2xs' :
        currentStatus === 'MAJOR' ? 'border-orange-300 shadow-2xs' :
        currentStatus === 'MINOR' ? 'border-amber-200' :
        currentStatus === 'COMPLIANT' ? 'border-emerald-200' :
        currentStatus === 'OFI' ? 'border-sky-200' :
        'border-slate-200 hover:border-slate-300'
      }`}
    >
      <div className={isCompact ? 'p-3.5 sm:p-4' : 'p-4 sm:p-5'}>
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-slate-900 text-white tracking-wide">
              {criteria.code}
            </span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-600">
                  {criteria.subElementName}
                </span>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1">
                  {criteria.tiers.awal && (
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-xs">
                      Awal
                    </span>
                  )}
                  {criteria.tiers.transisi && (
                    <span className="text-[10px] font-bold bg-teal-100 text-teal-800 px-1.5 py-0.2 rounded-xs">
                      Transisi
                    </span>
                  )}
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-xs">
                    Lanjutan
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Status Pill */}
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${statusStyle.bg}`}>
              <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
              <span>{statusStyle.label}</span>
              <span className="text-[10px] opacity-80 font-normal hidden sm:inline">({statusStyle.sub})</span>
            </span>

            {/* Side Drawer Inspection Trigger */}
            {onInspectCriteria && (
              <button
                type="button"
                onClick={() => onInspectCriteria(criteria)}
                title="Buka panel inspeksi klausul lengkap [I]"
                className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center gap-1 text-xs font-medium"
              >
                <PanelRightOpen className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline text-[11px]">Inspeksi</span>
              </button>
            )}
          </div>
        </div>

        {/* Clause Text */}
        <p className={`text-slate-900 font-medium leading-relaxed ${
          isCompact ? 'mt-2 text-xs sm:text-[13px]' : 'mt-3 text-xs sm:text-sm'
        }`}>
          {criteria.clauseText}
        </p>

        {/* Quick Helper Pill Buttons */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setInlineTab(inlineTab === 'interpretation' ? 'none' : 'interpretation')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-medium flex items-center gap-1 transition-colors ${
              inlineTab === 'interpretation' 
                ? 'bg-blue-100 text-blue-900 font-bold' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3 h-3" />
            <span>Interpretasi</span>
            {inlineTab === 'interpretation' ? <ChevronUp className="w-2.5 h-2.5" /> : <ChevronDown className="w-2.5 h-2.5" />}
          </button>

          <button
            type="button"
            onClick={() => setInlineTab(inlineTab === 'evidence' ? 'none' : 'evidence')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-medium flex items-center gap-1 transition-colors ${
              inlineTab === 'evidence' 
                ? 'bg-emerald-100 text-emerald-900 font-bold' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ClipboardList className="w-3 h-3" />
            <span>Bukti Acuan</span>
            {inlineTab === 'evidence' ? <ChevronUp className="w-2.5 h-2.5" /> : <ChevronDown className="w-2.5 h-2.5" />}
          </button>

          <button
            type="button"
            onClick={() => setInlineTab(inlineTab === 'benchmarks' ? 'none' : 'benchmarks')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-medium flex items-center gap-1 transition-colors ${
              inlineTab === 'benchmarks' 
                ? 'bg-amber-100 text-amber-900 font-bold' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Scale className="w-3 h-3" />
            <span>Benchmark Temuan</span>
            {inlineTab === 'benchmarks' ? <ChevronUp className="w-2.5 h-2.5" /> : <ChevronDown className="w-2.5 h-2.5" />}
          </button>

          {notes && !showNotes && (
            <button
              type="button"
              onClick={() => setShowNotes(true)}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1 ml-auto"
            >
              <FileText className="w-3 h-3" />
              <span>Ada Catatan Temuan</span>
            </button>
          )}
        </div>

        {/* Inline Helper Display */}
        {inlineTab === 'interpretation' && (
          <div className="mt-2.5 p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-blue-950 leading-relaxed animate-in fade-in">
            <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-1">
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              <span>Interpretasi Normatif PP 50/2012:</span>
            </div>
            <p>{criteria.interpretation}</p>
          </div>
        )}

        {inlineTab === 'evidence' && (
          <div className="mt-2.5 p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 leading-relaxed animate-in fade-in">
            <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
              <ClipboardList className="w-3.5 h-3.5 text-emerald-700" />
              <span>Daftar Bukti Objektif Acuan:</span>
            </div>
            <p className="whitespace-pre-line">{criteria.expectedEvidence}</p>
          </div>
        )}

        {inlineTab === 'benchmarks' && (
          <div className="mt-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2 animate-in fade-in">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-slate-600" />
              <span>Tolok Ukur Penetapan Status:</span>
            </div>
            <div className="p-2 rounded bg-emerald-50 text-emerald-900">
              <span className="font-bold text-[10px] block">✅ KOMPLIAN (PATUH):</span>
              <p className="text-[11px] mt-0.5">{criteria.conditions.compliant}</p>
            </div>
            {criteria.conditions.ofi && (
              <div className="p-2 rounded bg-sky-50 text-sky-900">
                <span className="font-bold text-[10px] block">💡 PELUANG PENINGKATAN (OFI):</span>
                <p className="text-[11px] mt-0.5">{criteria.conditions.ofi}</p>
              </div>
            )}
            <div className="p-2 rounded bg-amber-50 text-amber-900">
              <span className="font-bold text-[10px] block">⚠️ TEMUAN MINOR:</span>
              <p className="text-[11px] mt-0.5">{criteria.conditions.minor}</p>
            </div>
            <div className="p-2 rounded bg-orange-50 text-orange-900">
              <span className="font-bold text-[10px] block">🚨 TEMUAN MAYOR:</span>
              <p className="text-[11px] mt-0.5">{criteria.conditions.major}</p>
            </div>
            <div className="p-2 rounded bg-red-50 text-red-900">
              <span className="font-bold text-[10px] block">⛔ TEMUAN KRITIKAL:</span>
              <p className="text-[11px] mt-0.5">{criteria.conditions.critical}</p>
            </div>
          </div>
        )}

        {/* 6 Status Scoring Buttons with hotkey badges */}
        <div className="mt-3.5 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Nilai Pemenuhan (Hotkeys: 1 - 6):
            </span>
            {!showNotes && !notes && (
              <button
                type="button"
                onClick={() => setShowNotes(true)}
                className="text-[11px] font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                <span>Tambah Catatan Temuan</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            <button
              type="button"
              onClick={() => handleStatusChange('COMPLIANT')}
              className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all border text-center ${
                currentStatus === 'COMPLIANT'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs ring-2 ring-emerald-500/20'
                  : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              <div>Komplian</div>
              <div className="text-[10px] font-normal opacity-80">[1]</div>
            </button>

            <button
              type="button"
              onClick={() => handleStatusChange('OFI')}
              className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all border text-center ${
                currentStatus === 'OFI'
                  ? 'bg-sky-600 text-white border-sky-600 shadow-2xs ring-2 ring-sky-500/20'
                  : 'bg-white text-sky-700 border-sky-200 hover:bg-sky-50'
              }`}
            >
              <div>OFI</div>
              <div className="text-[10px] font-normal opacity-80">[2]</div>
            </button>

            <button
              type="button"
              onClick={() => handleStatusChange('MINOR')}
              className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all border text-center ${
                currentStatus === 'MINOR'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-2xs ring-2 ring-amber-500/20'
                  : 'bg-white text-amber-700 border-amber-200 hover:bg-amber-50'
              }`}
            >
              <div>Minor</div>
              <div className="text-[10px] font-normal opacity-80">[3]</div>
            </button>

            <button
              type="button"
              onClick={() => handleStatusChange('MAJOR')}
              className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all border text-center ${
                currentStatus === 'MAJOR'
                  ? 'bg-orange-600 text-white border-orange-600 shadow-2xs ring-2 ring-orange-500/20'
                  : 'bg-white text-orange-700 border-orange-200 hover:bg-orange-50'
              }`}
            >
              <div>Mayor</div>
              <div className="text-[10px] font-normal opacity-80">[4]</div>
            </button>

            <button
              type="button"
              onClick={() => handleStatusChange('CRITICAL')}
              className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all border text-center ${
                currentStatus === 'CRITICAL'
                  ? 'bg-red-600 text-white border-red-600 shadow-2xs ring-2 ring-red-500/20'
                  : 'bg-white text-red-700 border-red-200 hover:bg-red-50'
              }`}
            >
              <div>Kritikal</div>
              <div className="text-[10px] font-normal opacity-80">[5]</div>
            </button>

            <button
              type="button"
              onClick={() => handleStatusChange('NA')}
              className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all border text-center ${
                currentStatus === 'NA'
                  ? 'bg-slate-700 text-white border-slate-700 shadow-2xs ring-2 ring-slate-500/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div>N/A</div>
              <div className="text-[10px] font-normal opacity-80">[6]</div>
            </button>
          </div>
        </div>

        {/* Finding Notes & Quick Snippets Box */}
        {(showNotes || notes.length > 0 || currentStatus === 'CRITICAL' || currentStatus === 'MAJOR' || currentStatus === 'MINOR') && (
          <div className="mt-3 pt-2 border-t border-slate-100 animate-in fade-in duration-150">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Catatan Temuan / Fakta Objektif:</span>
              </label>

              {(currentStatus === 'CRITICAL' || currentStatus === 'MAJOR' || currentStatus === 'MINOR') && onNavigateToCap && (
                <button
                  type="button"
                  onClick={() => onNavigateToCap(criteria.code)}
                  className="text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1"
                >
                  <span>Buka di Matriks CAP &rarr;</span>
                </button>
              )}
            </div>

            {/* Quick Snippets row */}
            <div className="flex flex-wrap gap-1 mb-1.5">
              {quickSnippets.map((snip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddSnippet(snip)}
                  className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-[10px] text-slate-600 font-medium transition-colors"
                >
                  + {snip}
                </button>
              ))}
            </div>

            <textarea
              rows={isCompact ? 2 : 2}
              value={notes}
              onChange={(e) => onUpdateAssessment(criteria.code, { findingNotes: e.target.value })}
              placeholder="Tuliskan nomor dokumen SOP, pengesahan direktur, temuan fisik, atau rincian ketidaksesuaian..."
              className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-400/20 focus:border-slate-400 bg-slate-50/50"
            />
          </div>
        )}
      </div>
    </div>
  );
};
