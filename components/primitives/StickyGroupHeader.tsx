'use client';

import React from 'react';

interface StickyGroupHeaderProps {
  title: string;
  total: number;
  assessed: number;
  findingCount?: number;
  className?: string;
}

export const StickyGroupHeader: React.FC<StickyGroupHeaderProps> = ({
  title,
  total,
  assessed,
  findingCount = 0,
  className = ''
}) => {
  return (
    <div 
      className={`sticky top-0 z-10 h-[28px] px-3 bg-[var(--sunken)] border-b border-[var(--border-subtle)] flex items-center justify-between text-[11px] uppercase tracking-[0.04em] font-medium text-[var(--ink-700)] select-none ${className}`}
    >
      <div className="flex items-center gap-2 truncate">
        <span className="font-semibold text-[var(--ink-900)] truncate">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-[var(--ink-500)] tabular-nums">
        <span>
          {assessed}/{total}
        </span>
        {findingCount > 0 && (
          <>
            <span className="text-[var(--border-strong)]">·</span>
            <span className="text-[var(--status-noncompliant-solid)] font-semibold">
              {findingCount} temuan
            </span>
          </>
        )}
      </div>
    </div>
  );
};
