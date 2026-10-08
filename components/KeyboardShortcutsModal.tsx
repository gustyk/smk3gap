'use client';

import React from 'react';
import { X, Keyboard, Command } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    {
      category: 'Navigasi Kriteria',
      items: [
        { key: 'J atau ↓', label: 'Pindah ke Kriteria Berikutnya' },
        { key: 'K atau ↑', label: 'Pindah ke Kriteria Sebelumnya' },
        { key: 'I', label: 'Buka / Tutup Drawer Inspeksi Klausul' },
        { key: 'Esc', label: 'Tutup Drawer / Modal Dialog' },
      ]
    },
    {
      category: 'Penetapan Nilai Cepat (Quick Scoring)',
      items: [
        { key: '1', label: 'Tetapkan status: Komplian (Patuh) [Skor: 1]' },
        { key: '2', label: 'Tetapkan status: Peluang Peningkatan (OFI) [Skor: 1]' },
        { key: '3', label: 'Tetapkan status: Temuan Minor [Skor: 0]' },
        { key: '4', label: 'Tetapkan status: Temuan Mayor [Skor: 0]' },
        { key: '5', label: 'Tetapkan status: Temuan Kritikal [Skor: 0]' },
        { key: '6', label: 'Tetapkan status: Tidak Berlaku (N/A) [Exclude]' },
      ]
    },
    {
      category: 'Tampilan & Sistem',
      items: [
        { key: 'D', label: 'Ubah Kepadatan Tampilan (Compact / Comfortable)' },
        { key: '?', label: 'Buka Panduan Pintasan Keyboard ini' },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-slate-900 text-white rounded-lg">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Pintasan Keyboard (Auditor Hotkeys)
              </h2>
              <p className="text-xs text-slate-500">
                Akselerasi audit kecepatan tinggi tanpa melepas tangan dari keyboard
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {shortcuts.map((sec, idx) => (
            <div key={idx} className="space-y-2.5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {sec.category}
              </h3>
              <div className="bg-slate-50 rounded-xl border border-slate-200/80 divide-y divide-slate-100">
                {sec.items.map((item, i) => (
                  <div key={i} className="px-3.5 py-2.5 flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium">{item.label}</span>
                    <kbd className="px-2.5 py-1 bg-white border border-slate-300 rounded-md font-mono text-slate-800 font-bold shadow-2xs text-[11px]">
                      {item.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Tekan <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Esc</kbd> kapan saja untuk menutup</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
