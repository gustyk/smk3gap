'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Download, 
  Upload, 
  Printer, 
  FileSpreadsheet, 
  SlidersHorizontal, 
  Command, 
  Minimize2, 
  Maximize2,
  ChevronDown,
  RotateCcw
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
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  project,
  score,
  onOpenProfile,
  onExportExcel,
  onExportJson,
  onImportJson,
  onReset,
  onPrint,
  activeView,
  setActiveView,
  density,
  onToggleDensity,
  onOpenCommandPalette
}) => {
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const exportMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      setLastSavedTime(`${hh}:${mm}`);
    };
    updateTime();
  }, [project.updatedAt]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(e.target as Node)) {
        setIsExportMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalGaps = score.totalCritical + score.totalMajor + score.totalMinor;

  // Legal award status text representation (not a loud banner)
  const getAwardStatusText = () => {
    if (score.hasCritical) return { text: `Kesiapan: ${score.complianceRate}% · Gugur (Kritikal)`, color: 'var(--status-noncompliant-solid)' };
    if (score.hasMajor) return { text: `Kesiapan: ${score.complianceRate}% · Ditangguhkan`, color: '#B45309' };
    if (score.complianceRate >= 85) return { text: `Kesiapan: ${score.complianceRate}% · Emas`, color: 'var(--status-compliant-solid)' };
    if (score.complianceRate >= 60) return { text: `Kesiapan: ${score.complianceRate}% · Perak`, color: 'var(--ink-700)' };
    return { text: `Kesiapan: ${score.complianceRate}% · Kurang`, color: 'var(--status-noncompliant-solid)' };
  };

  const statusText = getAwardStatusText();

  return (
    <header className="h-[44px] shrink-0 bg-[var(--surface)] border-b border-[var(--border-default)] px-3 flex items-center justify-between select-none z-30">
      {/* Left: Project & Profile Identification */}
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="font-mono text-[11px] font-bold tracking-wider text-[var(--accent)] uppercase shrink-0">
          SMK3 PP 50/2012
        </span>

        <span className="text-[var(--border-strong)]">|</span>

        <button
          onClick={onOpenProfile}
          title="Klik untuk ubah profil organisasi / tingkat asesmen"
          className="truncate text-[12px] font-semibold text-[var(--ink-900)] hover:text-[var(--accent)] transition-colors cursor-pointer"
        >
          {project.profile.companyName}
        </button>

        <span className="font-mono text-[11px] text-[var(--ink-500)] shrink-0 hidden sm:inline tabular-nums">
          ({score.totalApplicable} kriteria)
        </span>
      </div>

      {/* Center: Main Workstation View Switcher */}
      <nav className="flex items-center bg-[var(--sunken)] p-[2px] rounded-[4px] border border-[var(--border-subtle)] text-[12px] font-medium">
        <button
          onClick={() => setActiveView('assessment')}
          className={`px-2.5 py-1 rounded-[3px] transition-colors cursor-pointer ${
            activeView === 'assessment'
              ? 'bg-[var(--surface)] text-[var(--ink-900)] font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
              : 'text-[var(--ink-500)] hover:text-[var(--ink-900)]'
          }`}
        >
          Checklist
        </button>

        <button
          onClick={() => setActiveView('dashboard')}
          className={`px-2.5 py-1 rounded-[3px] transition-colors cursor-pointer ${
            activeView === 'dashboard'
              ? 'bg-[var(--surface)] text-[var(--ink-900)] font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
              : 'text-[var(--ink-500)] hover:text-[var(--ink-900)]'
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveView('cap')}
          className={`px-2.5 py-1 rounded-[3px] transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeView === 'cap'
              ? 'bg-[var(--surface)] text-[var(--ink-900)] font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
              : 'text-[var(--ink-500)] hover:text-[var(--ink-900)]'
          }`}
        >
          <span>CAP Tracker</span>
          {totalGaps > 0 && (
            <span className="font-mono text-[10px] text-[var(--status-noncompliant-solid)] font-semibold tabular-nums">
              ({totalGaps})
            </span>
          )}
        </button>
      </nav>

      {/* Right: Operational Controls & Indicator */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Juridical Status (Quiet text, not a banner) */}
        <div 
          style={{ color: statusText.color }} 
          className="hidden md:inline font-mono text-[11px] font-semibold tabular-nums"
        >
          {statusText.text}
        </div>

        {/* Save indicator: Small text "Tersimpan 14:32" */}
        <span className="font-mono text-[11px] text-[var(--ink-400)] tabular-nums hidden lg:inline">
          Tersimpan {lastSavedTime}
        </span>

        {/* Command Palette Button (⌘K) */}
        <button
          onClick={onOpenCommandPalette}
          title="Buka menu perintah & lompat kode klausul (⌘K / Ctrl+K)"
          className="flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-[var(--ink-500)] hover:text-[var(--ink-900)] bg-[var(--sunken)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-[4px] cursor-pointer transition-colors"
        >
          <Command size={12} />
          <span>K</span>
        </button>

        {/* Density Toggle (Compact vs Comfortable) */}
        <button
          onClick={onToggleDensity}
          title={density === 'compact' ? 'Beralih ke Mode Nyaman' : 'Beralih ke Mode Kompak'}
          className="p-1.5 text-[var(--ink-500)] hover:text-[var(--ink-900)] hover:bg-[var(--sunken)] rounded-[4px] cursor-pointer transition-colors"
        >
          {density === 'compact' ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
        </button>

        {/* Unified Export Dropdown */}
        <div className="relative" ref={exportMenuRef}>
          <button
            onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
            className="flex items-center gap-1 px-2 py-1 text-[12px] font-medium text-[var(--ink-900)] bg-[var(--sunken)] hover:bg-[var(--border-subtle)] border border-[var(--border-default)] rounded-[4px] cursor-pointer transition-colors"
          >
            <span>Ekspor</span>
            <ChevronDown size={12} className="text-[var(--ink-500)]" />
          </button>

          {isExportMenuOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-[var(--surface)] border border-[var(--border-default)] rounded-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] py-1 z-50 text-[12px]">
              <button
                onClick={() => {
                  setIsExportMenuOpen(false);
                  onExportExcel();
                }}
                className="w-full px-3 py-1.5 text-left flex items-center gap-2 text-[var(--ink-900)] hover:bg-[var(--sunken)] cursor-pointer"
              >
                <FileSpreadsheet size={13} className="text-[var(--ink-500)]" />
                <span>Format Excel (.xlsx)</span>
              </button>

              <button
                onClick={() => {
                  setIsExportMenuOpen(false);
                  onPrint();
                }}
                className="w-full px-3 py-1.5 text-left flex items-center gap-2 text-[var(--ink-900)] hover:bg-[var(--sunken)] cursor-pointer"
              >
                <Printer size={13} className="text-[var(--ink-500)]" />
                <span>Cetak Dokumen Formal (PDF)</span>
              </button>

              <div className="my-1 border-t border-[var(--border-subtle)]" />

              <button
                onClick={() => {
                  setIsExportMenuOpen(false);
                  onExportJson();
                }}
                className="w-full px-3 py-1.5 text-left flex items-center gap-2 text-[var(--ink-700)] hover:bg-[var(--sunken)] cursor-pointer"
              >
                <Download size={13} className="text-[var(--ink-500)]" />
                <span>Cadangkan Data (JSON)</span>
              </button>

              <button
                onClick={() => {
                  setIsExportMenuOpen(false);
                  fileInputRef.current?.click();
                }}
                className="w-full px-3 py-1.5 text-left flex items-center gap-2 text-[var(--ink-700)] hover:bg-[var(--sunken)] cursor-pointer"
              >
                <Upload size={13} className="text-[var(--ink-500)]" />
                <span>Pulihkan Data (JSON)</span>
              </button>
            </div>
          )}
        </div>

        {/* Profile / Configuration trigger */}
        <button
          onClick={onOpenProfile}
          title="Konfigurasi Profil Perusahaan & Parameter Audit"
          className="p-1.5 text-[var(--ink-500)] hover:text-[var(--ink-900)] hover:bg-[var(--sunken)] rounded-[4px] cursor-pointer transition-colors"
        >
          <SlidersHorizontal size={14} />
        </button>

        {/* Hidden file input for JSON import */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={onImportJson}
        />
      </div>
    </header>
  );
};
