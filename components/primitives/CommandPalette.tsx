'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CriteriaMaster, ElementSummary } from '@/types/smk3';
import { Search, ArrowRight, CornerDownLeft, FileSpreadsheet, Printer, SlidersHorizontal, Eye } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  criteria: CriteriaMaster[];
  elements: ElementSummary[];
  onSelectCriteria: (code: string, elementNum: number) => void;
  onSelectElement: (elementNum: number) => void;
  onSelectView: (view: 'assessment' | 'dashboard' | 'cap') => void;
  onExportExcel: () => void;
  onPrint: () => void;
  onOpenProfile: () => void;
  onToggleDensity: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  criteria,
  elements,
  onSelectCriteria,
  onSelectElement,
  onSelectView,
  onExportExcel,
  onPrint,
  onOpenProfile,
  onToggleDensity
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Build items based on query
  const q = query.trim().toLowerCase();

  // 1. Actions
  const actionItems = [
    { id: 'view-assessment', category: 'Navigasi', label: 'Buka Checklist 12 Elemen', icon: Eye, action: () => onSelectView('assessment') },
    { id: 'view-dashboard', category: 'Navigasi', label: 'Buka Dashboard Eksekutif', icon: Eye, action: () => onSelectView('dashboard') },
    { id: 'view-cap', category: 'Navigasi', label: 'Buka Matriks CAP Tracker', icon: Eye, action: () => onSelectView('cap') },
    { id: 'export-excel', category: 'Aksi', label: 'Ekspor Seluruh Data ke Excel (.xlsx)', icon: FileSpreadsheet, action: onExportExcel },
    { id: 'print-pdf', category: 'Aksi', label: 'Cetak Laporan Audit Formal (PDF)', icon: Printer, action: onPrint },
    { id: 'toggle-density', category: 'Tampilan', label: 'Beralih Kepadatan (Kompak / Nyaman)', icon: SlidersHorizontal, action: onToggleDensity },
    { id: 'open-profile', category: 'Konfigurasi', label: 'Ubah Profil Perusahaan & Tingkat Audit', icon: SlidersHorizontal, action: onOpenProfile },
  ].filter(item => !q || item.label.toLowerCase().includes(q) || item.category.toLowerCase().includes(q));

  // 2. Element matches
  const elementItems = elements
    .filter(el => !q || el.name.toLowerCase().includes(q) || `elemen ${el.elementNum}`.includes(q))
    .slice(0, 4)
    .map(el => ({
      id: `elem-${el.elementNum}`,
      category: 'Elemen',
      label: `Elemen ${el.elementNum}: ${el.name}`,
      action: () => onSelectElement(el.elementNum)
    }));

  // 3. Criteria matches (code or text)
  const criteriaItems = criteria
    .filter(c => !q || c.code.toLowerCase().includes(q) || c.clauseText.toLowerCase().includes(q))
    .slice(0, 8)
    .map(c => ({
      id: `crit-${c.code}`,
      category: 'Klausul',
      code: c.code,
      label: `${c.code} · ${c.clauseText}`,
      action: () => onSelectCriteria(c.code, c.elementNum)
    }));

  const allItems = [...criteriaItems, ...elementItems, ...actionItems];

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard controls within palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, allItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + allItems.length) % Math.max(1, allItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const current = allItems[selectedIndex];
      if (current) {
        current.action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/35 select-none"
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[var(--surface)] border border-[var(--border-default)] rounded-[6px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] text-[13px]"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-3 h-[42px] border-b border-[var(--border-subtle)] bg-[var(--surface)]">
          <Search size={15} className="text-[var(--ink-400)] shrink-0 mr-2.5" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ketik kode klausul (mis. 6.5.2), elemen, atau perintah..."
            className="w-full h-full bg-transparent text-[var(--ink-900)] placeholder-[var(--ink-400)] text-[13px] border-none outline-none font-sans"
          />
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-[var(--ink-400)] border border-[var(--border-subtle)] rounded-[3px] bg-[var(--sunken)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[340px] overflow-y-auto py-1.5 divide-y divide-[var(--border-subtle)]">
          {allItems.length === 0 ? (
            <div className="p-6 text-center text-[12px] text-[var(--ink-500)]">
              Tidak ada hasil yang cocok dengan &quot;{query}&quot;
            </div>
          ) : (
            allItems.map((item, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`px-3 py-2 flex items-center justify-between cursor-pointer transition-colors duration-120 ${
                    isSelected ? 'bg-[var(--accent-tint)] text-[var(--ink-900)]' : 'text-[var(--ink-700)] hover:bg-[#FAF9F6]'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-400)] px-1 py-0.5 rounded-[2px] bg-[var(--sunken)] shrink-0">
                      {item.category}
                    </span>
                    <span className="truncate text-[12px] font-medium leading-none">
                      {item.label}
                    </span>
                  </div>

                  {isSelected && (
                    <CornerDownLeft size={12} className="text-[var(--accent)] shrink-0" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-3 py-2 bg-[var(--sunken)] border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--ink-500)] font-mono">
          <span>&uarr;&darr; Pilih · Enter Jalankan</span>
          <span>SMK3 PP 50/2012</span>
        </div>
      </div>
    </div>
  );
};
