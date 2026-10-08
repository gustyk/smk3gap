'use client';

import React from 'react';
import { 
  Award, 
  AlertTriangle, 
  AlertOctagon, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  TrendingUp,
  FileSpreadsheet,
  Printer,
  ShieldCheck,
  Flag,
  ShieldAlert,
  ArrowRight,
  ChevronRight,
  Check,
  Info
} from 'lucide-react';
import { ScoreSummary, AuditProject } from '@/types/smk3';
import { SMK3_ELEMENTS, SMK3_CRITERIA } from '@/lib/data/smk3-data';
import { ElementRadarChart } from './ElementRadarChart';

interface DashboardOverviewProps {
  score: ScoreSummary;
  project: AuditProject;
  onSelectElement: (elemNum: number) => void;
  onNavigateToCap: () => void;
  onNavigateToCriteria?: (code: string, elemNum: number) => void;
  onExportExcel: () => void;
  onPrint: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  score,
  project,
  onSelectElement,
  onNavigateToCap,
  onNavigateToCriteria,
  onExportExcel,
  onPrint
}) => {
  // Extract top severe gaps (Critical & Major)
  const urgentGaps = Object.entries(project.assessments)
    .filter(([_, a]) => a.status === 'CRITICAL' || a.status === 'MAJOR')
    .map(([code, a]) => {
      const crit = SMK3_CRITERIA.find((c) => c.code === code);
      return {
        code,
        status: a.status,
        clauseText: crit?.clauseText || '',
        elementNum: crit?.elementNum || 1,
        elementName: crit?.elementName || '',
        notes: a.findingNotes || ''
      };
    })
    .slice(0, 5); // top 5

  const getAwardCardStyle = () => {
    switch (score.awardStatus) {
      case 'EMAS':
        return {
          border: 'border-amber-300 bg-amber-50/50',
          badge: 'bg-amber-100 text-amber-900 border-amber-300',
          title: 'text-amber-950',
          icon: 'text-amber-600'
        };
      case 'PERAK':
        return {
          border: 'border-slate-300 bg-slate-50',
          badge: 'bg-slate-200 text-slate-800 border-slate-300',
          title: 'text-slate-900',
          icon: 'text-slate-600'
        };
      case 'DITANGGUHKAN':
        return {
          border: 'border-orange-300 bg-orange-50/50',
          badge: 'bg-orange-100 text-orange-900 border-orange-300',
          title: 'text-orange-950',
          icon: 'text-orange-600'
        };
      case 'GUGUR':
        return {
          border: 'border-red-400 bg-red-50/60 ring-1 ring-red-300',
          badge: 'bg-red-100 text-red-900 border-red-300',
          title: 'text-red-950',
          icon: 'text-red-600'
        };
      case 'KURANG':
      default:
        return {
          border: 'border-rose-200 bg-rose-50/40',
          badge: 'bg-rose-100 text-rose-900 border-rose-300',
          title: 'text-rose-950',
          icon: 'text-rose-600'
        };
    }
  };

  const awardStyle = getAwardCardStyle();

  return (
    <div className="space-y-6">
      
      {/* Statutory Legal Alert if Critical or Major findings exist */}
      {score.hasCritical && (
        <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-300 text-red-950 flex items-start gap-3.5 shadow-xs">
          <div className="p-2 rounded-xl bg-red-100 text-red-700 shrink-0">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm text-red-900">
                Peringatan Yuridis PP No. 50/2012: Temuan Kritikal Terdeteksi ({score.totalCritical} Klausul)
              </h3>
              <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-red-200 text-red-800">
                Gugur Otomatis
              </span>
            </div>
            <p className="text-xs text-red-800 mt-1 leading-relaxed">
              Berdasarkan Lampiran II PP No. 50 Tahun 2012, jika terdapat minimal 1 (satu) kriteria berstatus Kritikal, sertifikasi dinyatakan <strong>gugur otomatis</strong> dan auditor wajib menerbitkan rekomendasi <em>Stop Work Order</em>. Seluruh temuan kritikal wajib diselesaikan sebelum audit ulang.
            </p>
          </div>
          <button
            onClick={onNavigateToCap}
            className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 shrink-0 shadow-2xs transition-colors"
          >
            Buka CAP Kritikal
          </button>
        </div>
      )}

      {score.hasMajor && !score.hasCritical && (
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-300 text-orange-950 flex items-start gap-3.5 shadow-xs">
          <div className="p-2 rounded-xl bg-orange-100 text-orange-700 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm text-orange-900">
                Peringatan Sertifikasi: Temuan Mayor Terdeteksi ({score.totalMajor} Klausul)
              </h3>
              <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-orange-200 text-orange-800">
                Sertifikat Ditangguhkan
              </span>
            </div>
            <p className="text-xs text-orange-800 mt-1 leading-relaxed">
              Penetapan sertifikat ditangguhkan sementara hingga perbaikan diverifikasi tuntas. Batas waktu perbaikan temuan Mayor maksimal <strong>1 (satu) bulan kalender</strong> terhitung sejak tanggal pelaksanaan audit.
            </p>
          </div>
          <button
            onClick={onNavigateToCap}
            className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 shrink-0 shadow-2xs transition-colors"
          >
            Buka CAP Mayor
          </button>
        </div>
      )}

      {/* Top 3 Executive Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Card 1: Score & Compliance Gauge */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="uppercase tracking-wider">Skor Pemenuhan Audit</span>
              <span className="capitalize font-bold text-slate-800">Tingkat {project.profile.auditTier}</span>
            </div>

            <div className="flex items-baseline gap-2.5">
              <span className="text-5xl font-black text-slate-900 tracking-tight font-mono">
                {score.complianceRate}%
              </span>
              <span className="text-xs font-semibold text-slate-500">
                ({score.totalCompliant} dari {score.totalApplicable - score.totalNA} berlaku)
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-slate-100 rounded-full mt-4 overflow-hidden p-0.5 border border-slate-200">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  score.awardStatus === 'EMAS' ? 'bg-amber-500' :
                  score.awardStatus === 'PERAK' ? 'bg-slate-700' :
                  score.awardStatus === 'DITANGGUHKAN' ? 'bg-orange-500' :
                  'bg-rose-500'
                }`}
                style={{ width: `${Math.min(100, Math.max(0, score.complianceRate))}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-400 mt-2 font-mono">
              <span>0% (Kurang)</span>
              <span>60% (Perak)</span>
              <span>85% (Emas)</span>
              <span>100%</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
            <span className="text-slate-500">Klausul Belum Dinilai:</span>
            <span className="font-bold text-slate-800 font-mono">{score.totalUnassessed} kriteria</span>
          </div>
        </div>

        {/* Card 2: Award Predicate & Legal Certification */}
        <div className={`rounded-2xl p-6 border shadow-xs flex flex-col justify-between ${awardStyle.border}`}>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Flag className="w-4 h-4 text-slate-600" />
                <span>Predikat Yuridis Kemnaker</span>
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${awardStyle.badge}`}>
                {score.awardStatus}
              </span>
            </div>

            <h3 className={`text-xl font-extrabold leading-tight mt-1 ${awardStyle.title}`}>
              {score.awardTitle}
            </h3>

            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {score.awardDescription}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Rujukan Hukum:</span>
            <span className="font-semibold text-slate-700">PP 50/2012 Lampiran II</span>
          </div>
        </div>

        {/* Card 3: Actionable Gap Summary */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Status Ketidaksesuaian (Gap)
              </span>
              <span className="text-xs font-mono font-bold text-slate-800">
                Total {score.totalCritical + score.totalMajor + score.totalMinor} Temuan
              </span>
            </div>

            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between p-2 rounded-xl bg-red-50/70 border border-red-200 text-xs">
                <span className="font-bold text-red-900 flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-red-600" />
                  Kritikal (Stop Work)
                </span>
                <span className="font-mono font-black text-red-800">{score.totalCritical}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-orange-50/70 border border-orange-200 text-xs">
                <span className="font-bold text-orange-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  Mayor (Maks. 1 Bulan)
                </span>
                <span className="font-mono font-black text-orange-800">{score.totalMajor}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  Minor (Maks. 3 Bulan)
                </span>
                <span className="font-mono font-black text-amber-800">{score.totalMinor}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4">
            <button
              onClick={onNavigateToCap}
              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <span>Buka Matriks Rencana Aksi (CAP)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 6 Finding Categories Metric Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase block">Komplian</span>
          <span className="text-2xl font-black text-emerald-700 mt-1 block font-mono">{score.totalCompliant - score.totalOfi}</span>
          <span className="text-[10px] text-emerald-600 font-medium">Patuh Penuh</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase block">OFI</span>
          <span className="text-2xl font-black text-sky-700 mt-1 block font-mono">{score.totalOfi}</span>
          <span className="text-[10px] text-sky-600 font-medium">Peluang Nilai Tambah</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase block">Minor</span>
          <span className="text-2xl font-black text-amber-700 mt-1 block font-mono">{score.totalMinor}</span>
          <span className="text-[10px] text-amber-600 font-medium">Ketidaksesuaian Kecil</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase block">Mayor</span>
          <span className="text-2xl font-black text-orange-700 mt-1 block font-mono">{score.totalMajor}</span>
          <span className="text-[10px] text-orange-600 font-medium">Penangguhan 1 Bln</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase block">Kritikal</span>
          <span className="text-2xl font-black text-red-700 mt-1 block font-mono">{score.totalCritical}</span>
          <span className="text-[10px] text-red-600 font-medium">Stop Work / Gugur</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase block">N/A</span>
          <span className="text-2xl font-black text-slate-700 mt-1 block font-mono">{score.totalNA}</span>
          <span className="text-[10px] text-slate-500 font-medium">Dikecualikan</span>
        </div>
      </div>

      {/* Top Urgent Priority Items if any */}
      {urgentGaps.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <h4 className="text-sm font-extrabold text-slate-900">
                Temuan Prioritas Mendesak (Perlu Tindakan Cepat)
              </h4>
            </div>
            <button
              onClick={onNavigateToCap}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1"
            >
              <span>Lihat Seluruhnya di CAP &rarr;</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {urgentGaps.map((item) => (
              <div 
                key={item.code} 
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs hover:bg-slate-50/50 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <span className={`px-2 py-0.5 rounded-md font-mono font-bold text-[11px] shrink-0 ${
                    item.status === 'CRITICAL' ? 'bg-red-100 text-red-900 border border-red-300' : 'bg-orange-100 text-orange-900 border border-orange-300'
                  }`}>
                    {item.code}
                  </span>
                  <div>
                    <span className="font-bold text-slate-800 line-clamp-1">{item.clauseText}</span>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      {item.notes ? `Fakta: ${item.notes}` : `Elemen: ${item.elementName}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onNavigateToCriteria?.(item.code, item.elementNum)}
                    className="px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-[11px] flex items-center gap-1 transition-colors"
                  >
                    <span>Buka Klausul</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Visual Radar & Elements Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Radar Chart (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Diagram Radar 12 Elemen</span>
            </h4>
            <span className="text-[11px] text-slate-500 font-medium">Peta Keseimbangan Sistem</span>
          </div>
          <ElementRadarChart score={score} onSelectElement={onSelectElement} />
        </div>

        {/* 12 Elements Score Grid (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Rincian Kepatuhan 12 Elemen Audit SMK3
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Klik baris elemen mana pun untuk langsung membuka daftar klausul
              </p>
            </div>
          </div>

          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {SMK3_ELEMENTS.map((el) => {
              const elScore = score.elementScores[el.elementNum];
              const rate = elScore ? elScore.rate : 0;
              const hasGap = elScore && (elScore.critical > 0 || elScore.major > 0 || elScore.minor > 0);

              return (
                <div
                  key={el.elementNum}
                  onClick={() => onSelectElement(el.elementNum)}
                  className="p-3 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50/80 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {el.elementNum}
                      </span>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1">
                        {el.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {elScore?.critical > 0 && (
                        <span className="text-[10px] bg-red-100 text-red-800 font-bold px-1.5 py-0.2 rounded-xs">
                          {elScore.critical} Kritikal
                        </span>
                      )}
                      {elScore?.major > 0 && (
                        <span className="text-[10px] bg-orange-100 text-orange-800 font-bold px-1.5 py-0.2 rounded-xs">
                          {elScore.major} Mayor
                        </span>
                      )}
                      {elScore?.minor > 0 && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-xs">
                          {elScore.minor} Minor
                        </span>
                      )}
                      <span className="text-xs font-extrabold text-slate-900 font-mono ml-1">
                        {rate}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        rate >= 85 ? 'bg-emerald-500' :
                        rate >= 60 ? 'bg-teal-500' :
                        rate > 0 ? 'bg-amber-500' : 'bg-slate-300'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(0, rate))}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1">
                    <span>{el.criteriaRange}</span>
                    <span>
                      {elScore?.compliant || 0} dari {(elScore?.totalCriteria || 0) - (elScore?.na || 0)} kriteria sesuai
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
