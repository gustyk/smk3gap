'use client';

import React from 'react';
import { Triangle, Diamond, Circle, CheckCircle2, HelpCircle } from 'lucide-react';
import { FindingStatus } from '@/types/smk3';

interface SeverityMarkProps {
  status?: FindingStatus;
  showIcon?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const SeverityMark: React.FC<SeverityMarkProps> = ({
  status,
  showIcon = true,
  size = 'sm',
  className = ''
}) => {
  if (!status) return null;

  const iconSize = size === 'sm' ? 12 : 14;

  switch (status) {
    case 'CRITICAL':
      return (
        <span 
          className={`inline-flex items-center gap-1.5 font-medium text-[var(--status-noncompliant-solid)] ${className}`}
          title="Temuan Kritikal - Potensi Bahaya Katastropik / Stop Work"
        >
          {showIcon && <Triangle size={iconSize} className="fill-[var(--status-noncompliant-solid)] shrink-0" strokeWidth={1.5} />}
          <span className="font-semibold uppercase tracking-wider text-[11px]">Kritikal</span>
        </span>
      );

    case 'MAJOR':
      return (
        <span 
          className={`inline-flex items-center gap-1.5 font-medium text-[#B45309] ${className}`}
          title="Temuan Mayor - Pelanggaran Perundangan Wajib / Penangguhan 1 Bulan"
        >
          {showIcon && <Diamond size={iconSize} className="fill-[#B45309] shrink-0" strokeWidth={1.5} />}
          <span className="font-semibold uppercase tracking-wider text-[11px]">Mayor</span>
        </span>
      );

    case 'MINOR':
      return (
        <span 
          className={`inline-flex items-center gap-1.5 font-medium text-[var(--status-partial-solid)] ${className}`}
          title="Temuan Minor - Ketidakkonsistenan Prosedural / Batas 3 Bulan"
        >
          {showIcon && <Circle size={iconSize} className="fill-[var(--status-partial-solid)] shrink-0" strokeWidth={1.5} />}
          <span className="font-semibold uppercase tracking-wider text-[11px]">Minor</span>
        </span>
      );

    case 'COMPLIANT':
      return (
        <span 
          className={`inline-flex items-center gap-1.5 font-medium text-[var(--status-compliant-solid)] ${className}`}
          title="Komplian - Seluruh Persyaratan Terpenuhi (Skor: 1)"
        >
          {showIcon && <CheckCircle2 size={iconSize} className="shrink-0" strokeWidth={1.5} />}
          <span className="font-semibold uppercase tracking-wider text-[11px]">Sesuai</span>
        </span>
      );

    case 'OFI':
      return (
        <span 
          className={`inline-flex items-center gap-1.5 font-medium text-[var(--status-partial-solid)] ${className}`}
          title="OFI - Peluang Peningkatan Kualitas (Skor: 1)"
        >
          {showIcon && <HelpCircle size={iconSize} className="shrink-0" strokeWidth={1.5} />}
          <span className="font-semibold uppercase tracking-wider text-[11px]">OFI</span>
        </span>
      );

    case 'NA':
      return (
        <span 
          className={`inline-flex items-center gap-1.5 font-medium text-[var(--ink-500)] ${className}`}
          title="N/A - Tidak Berlaku pada Ruang Lingkup Perusahaan"
        >
          <span className="font-mono text-[11px] font-semibold">N/A</span>
        </span>
      );

    case 'UNASSESSED':
    default:
      return (
        <span className={`inline-flex items-center gap-1.5 text-[var(--ink-400)] ${className}`}>
          <span className="text-[11px] font-mono">Belum</span>
        </span>
      );
  }
};
