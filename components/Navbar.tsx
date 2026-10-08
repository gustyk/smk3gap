'use client';

import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  FileSpreadsheet, 
  Printer, 
  Download, 
  Upload, 
  RotateCcw,
  SlidersHorizontal,
  Award,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  HelpCircle,
  Minimize2,
  Maximize2,
  MoreVertical,
  X
} from 'lucide-react';
import { AuditProject, ScoreSummary, AuditTier } from '@/types/smk3';

interface NavbarProps {
  project: AuditProject;
  score: ScoreSummary;
  onOpenProfile: () => void;
  onTierChange: (tier: AuditTier) => void;
  onExportExcel: () => void;
  onExportJson: () => void;
  onImportJson: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  onPrint: () => void;
  activeView: 'assessment' | 'dashboard' | 'cap';
  setActiveView: (view: 'assessment' | 'dashboard' | 'cap') => void;
  density: 'compact' | 'comfortable';
  onToggleDensity: () => void;
  onOpenHelp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  project,
  score,
  onOpenProfile,
  onTierChange,
  onExportExcel,
  onExportJson,
  onImportJson,
  onReset,
  onPrint,
  activeView,
  setActiveView,
  density,
  onToggleDensity,
  onOpenHelp
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);

  const getBadgeStyle = () => {
    switch (score.awardStatus) {
      case 'EMAS':
        return {
          container: 'bg-amber-50 text-amber-900 border-amber-300',
          dot: 'bg-amber-500',
          label: 'Emas (≥85%)'
        };
      case 'PERAK':
        return {
          container: 'bg-slate-100 text-slate-800 border-slate-300',
          dot: 'bg-slate-500',
          label: 'Perak (60-84%)'
        };
      case 'DITANGGUHKAN':
        return {
          container: 'bg-orange-50 text-orange-900 border-orange-300',
          dot: 'bg-orange-500',
          label: 'Ditangguhkan (Ada Mayor)'
        };
      case 'GUGUR':
        return {
          container: 'bg-red-50 text-red-900 border-red-400 animate-pulse',
          dot: 'bg-red-600',
          label: 'Gugur (Ada Kritikal)'
        };
      case 'KURANG':
      default:
        return {
          container: 'bg-rose-50 text-rose-800 border-rose-300',
          dot: 'bg-rose-500',
          label: 'Kurang (<60%)'
        };
    }
  };

  const badge = getBadgeStyle();
  const totalGaps = score.totalCritical + score.totalMajor + score.totalMinor;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Branding & Organization Info */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight leading-tight">
                    SMK3 Workstation
                  </h1>
                  <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    PP 50/2012
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <button
                    onClick={onOpenProfile}
                    className="font-semibold text-slate-700 hover:text-emerald-700 hover:underline flex items-center gap-1 transition-colors"
                    title="Klik untuk ubah profil perusahaan"
                  >
                    <span>{project.profile.companyName}</span>
                  </button>
                  <span className="text-slate-300">•</span>
                  <span className="capitalize font-medium">
                    Tingkat {project.profile.auditTier} ({score.totalApplicable} Kriteria)
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-[11px] text-emerald-600 font-medium hidden sm:inline flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 inline" />
                    Auto-saved
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Main Navigation Tabs */}
            <nav className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-semibold">
              <button
                onClick={() => setActiveView('assessment')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeView === 'assessment'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Checklist 12 Elemen
              </button>
              <button
                onClick={() => setActiveView('dashboard')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeView === 'dashboard'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dashboard Eksekutif
              </button>
              <button
                onClick={() => setActiveView('cap')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeView === 'cap'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Matriks CAP</span>
                {totalGaps > 0 && (
                  <span className="bg-rose-500 text-white rounded-full px-1.5 py-0.2 text-[10px] font-bold">
                    {totalGaps}
                  </span>
                )}
              </button>
            </nav>

            {/* Right: Operational Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Juridical Result Pill */}
              <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold ${badge.container}`}>
                <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                <span className="font-mono text-sm">{score.complianceRate}%</span>
                <span className="text-[11px] font-semibold opacity-90">• {badge.label}</span>
              </div>

              {/* Density Toggle Button */}
              <button
                onClick={onToggleDensity}
                title={density === 'compact' ? 'Ubah ke mode Comfortable (D)' : 'Ubah ke mode Compact (D)'}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                {density === 'compact' ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>

              {/* Keyboard Help Button */}
              <button
                onClick={onOpenHelp}
                title="Panduan Pintasan Keyboard (?)"
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
              </button>

              {/* Profile Config */}
              <button
                onClick={onOpenProfile}
                title="Profil Perusahaan & Tingkat Audit"
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>

              {/* Excel Export */}
              <button
                onClick={onExportExcel}
                title="Ekspor Seluruh Data ke Excel (.xlsx)"
                className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span className="hidden sm:inline">Export Excel</span>
              </button>

              {/* Print PDF */}
              <button
                onClick={onPrint}
                title="Cetak Laporan Audit Formal (PDF)"
                className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Cetak PDF</span>
              </button>

              {/* More Tools Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                  title="Alat Cadangan & Pulihkan"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>

                {isToolsMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 text-xs">
                    <button
                      onClick={() => {
                        setIsToolsMenuOpen(false);
                        onExportJson();
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                    >
                      <Download className="w-4 h-4 text-slate-400" />
                      <span>Cadangkan Data (JSON)</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsToolsMenuOpen(false);
                        fileInputRef.current?.click();
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                    >
                      <Upload className="w-4 h-4 text-slate-400" />
                      <span>Pulihkan Data (JSON)</span>
                    </button>

                    <div className="border-t border-slate-100 my-1" />

                    <button
                      onClick={() => {
                        setIsToolsMenuOpen(false);
                        setIsResetModalOpen(true);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-rose-50 flex items-center gap-2 text-rose-700"
                    >
                      <RotateCcw className="w-4 h-4 text-rose-500" />
                      <span>Reset Penilaian Sesi Ini</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Hidden file input for import */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                className="hidden"
                onChange={onImportJson}
              />
            </div>
          </div>

          {/* Mobile Bottom Bar */}
          <div className="flex md:hidden border-t border-slate-200 py-2 justify-around text-xs font-semibold">
            <button
              onClick={() => setActiveView('assessment')}
              className={`px-3 py-1.5 rounded-lg ${
                activeView === 'assessment' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'
              }`}
            >
              Checklist
            </button>
            <button
              onClick={() => setActiveView('dashboard')}
              className={`px-3 py-1.5 rounded-lg ${
                activeView === 'dashboard' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveView('cap')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
                activeView === 'cap' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'
              }`}
            >
              <span>Matriks CAP</span>
              {totalGaps > 0 && (
                <span className="bg-rose-500 text-white rounded-full px-1.5 py-0.2 text-[10px] font-bold">
                  {totalGaps}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Safe Reset Confirmation Modal */}
      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-2.5 bg-rose-100 rounded-xl">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Konfirmasi Reset Penilaian
                </h3>
                <p className="text-xs text-slate-500">Tindakan ini tidak dapat dibatalkan</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Seluruh penilaian kriteria, fakta temuan, dan matriks CAP yang tersimpan saat ini akan dibersihkan kembali ke nilai awal. Disarankan melakukan <strong>Cadangkan Data (JSON)</strong> terlebih dahulu jika Anda ingin menyimpan salinan.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsResetModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsResetModalOpen(false);
                  onReset();
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs transition-colors"
              >
                Ya, Reset Seluruh Data
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
