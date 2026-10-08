'use client';

import React from 'react';
import { FindingStatus } from '@/types/smk3';
import { STATUS_META, FindingStatusKey } from '@/lib/tokens';

interface SegmentedStatusProps {
  value?: FindingStatus;
  onChange: (status: FindingStatus) => void;
  compact?: boolean;
  disabled?: boolean;
  className?: string;
}

const STATUS_OPTIONS: { key: FindingStatusKey; label: string; shortcut: string }[] = [
  { key: 'COMPLIANT', label: 'Sesuai', shortcut: '1' },
  { key: 'OFI', label: 'OFI', shortcut: '2' },
  { key: 'MINOR', label: 'Minor', shortcut: '3' },
  { key: 'MAJOR', label: 'Mayor', shortcut: '4' },
  { key: 'CRITICAL', label: 'Kritis', shortcut: '5' },
  { key: 'NA', label: 'N/A', shortcut: '6' },
];

export const SegmentedStatus: React.FC<SegmentedStatusProps> = ({
  value,
  onChange,
  compact = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div 
      role="radiogroup"
      aria-label="Status Kriteria"
      className={`inline-flex items-stretch rounded-[4px] border border-[var(--border-default)] bg-[var(--sunken)] p-[1px] select-none ${className}`}
    >
      {STATUS_OPTIONS.map((opt) => {
        const isSelected = value === opt.key;
        const meta = STATUS_META[opt.key];

        // Specific style if selected
        let activeStyle: React.CSSProperties = {};
        if (isSelected) {
          if (opt.key === 'CRITICAL') {
            activeStyle = {
              backgroundColor: 'var(--status-noncompliant-solid)',
              color: '#FFFFFF',
              borderColor: 'var(--status-noncompliant-solid)',
            };
          } else {
            activeStyle = {
              backgroundColor: meta.tint,
              color: meta.solid,
              borderColor: meta.border,
            };
          }
        }

        return (
          <button
            key={opt.key}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              onChange(opt.key);
            }}
            title={`${meta.label} [Pintasan: ${opt.shortcut}]`}
            style={isSelected ? activeStyle : undefined}
            className={`flex items-center justify-center gap-1 transition-colors duration-120 border rounded-[3px] font-medium leading-none cursor-pointer outline-none ${
              compact ? 'px-1.5 py-0.5 text-[11px]' : 'px-2 py-1 text-[12px]'
            } ${
              isSelected
                ? 'font-semibold border-solid'
                : 'border-transparent text-[var(--ink-500)] hover:text-[var(--ink-900)] hover:bg-[var(--canvas)]'
            }`}
          >
            <span className="font-mono text-[10px] text-[var(--ink-400)] tabular-nums">
              {opt.shortcut}
            </span>
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
