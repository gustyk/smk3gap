'use client';

import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const sections = [
    {
      title: 'Navigasi Baris Kriteria',
      items: [
        { keys: ['J', '↓'], label: 'Pindah ke baris berikutnya' },
        { keys: ['K', '↑'], label: 'Pindah ke baris sebelumnya' },
        { keys: ['N'], label: 'Fokus ke kolom catatan temuan (textarea)' },
        { keys: ['I'], label: 'Buka / tutup panel Inspector kanan' },
        { keys: ['Esc'], label: 'Tutup panel / modal aktif' },
      ]
    },
    {
      title: 'Penetapan Nilai (Quick Scoring)',
      items: [
        { keys: ['1'], label: 'Status: Sesuai / Komplian' },
        { keys: ['2'], label: 'Status: OFI (Peluang Peningkatan)' },
        { keys: ['3'], label: 'Status: Temuan Minor' },
        { keys: ['4'], label: 'Status: Temuan Mayor' },
        { keys: ['5'], label: 'Status: Temuan Kritikal' },
        { keys: ['6'], label: 'Status: Tidak Berlaku (N/A)' },
      ]
    },
    {
      title: 'Navigasi Elemen & Tampilan',
      items: [
        { keys: ['['], label: 'Pindah ke Elemen sebelumnya' },
        { keys: [']'], label: 'Pindah ke Elemen berikutnya' },
        { keys: ['D'], label: 'Beralih mode Kompak / Nyaman' },
        { keys: ['⌘K', 'Ctrl+K'], label: 'Buka Command Palette (lompat klausul)' },
        { keys: ['?'], label: 'Buka panduan pintasan keyboard ini' },
      ]
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[var(--surface)] border border-[var(--border-default)] rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Pintasan Keyboard"
      >
        {/* Header */}
        <div className="h-[44px] px-4 bg-[var(--sunken)] border-b border-[var(--border-default)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Keyboard size={14} className="text-[var(--ink-500)]" />
            <span className="label-xs text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-700)]">
              Pintasan Keyboard
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-[3px] text-[var(--ink-400)] hover:text-[var(--ink-900)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto py-2 divide-y divide-[var(--border-subtle)]">
          {sections.map((section) => (
            <div key={section.title} className="px-4 py-3">
              <span className="label-xs block mb-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--ink-400)]">
                {section.title}
              </span>
              <div className="space-y-1">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[12px] py-0.5">
                    <span className="text-[var(--ink-700)]">{item.label}</span>
                    <div className="flex items-center gap-1 shrink-0">
                      {item.keys.map((key, ki) => (
                        <React.Fragment key={ki}>
                          <kbd className="px-1.5 py-0.5 font-mono text-[11px] text-[var(--ink-900)] bg-[var(--sunken)] border border-[var(--border-default)] rounded-[3px]">
                            {key}
                          </kbd>
                          {ki < item.keys.length - 1 && (
                            <span className="text-[var(--ink-400)] text-[10px]">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[var(--sunken)] border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
          <span className="text-[var(--ink-500)]">
            Tekan <kbd className="px-1 py-0.5 font-mono text-[10px] border border-[var(--border-default)] rounded-[2px] bg-[var(--surface)]">Esc</kbd> untuk menutup
          </span>
          <button
            type="button"
            onClick={onClose}
            className="h-[26px] px-3 text-[11px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-[3px] transition-colors cursor-pointer"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
