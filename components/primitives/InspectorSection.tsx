'use client';

import React from 'react';

interface InspectorSectionProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export const InspectorSection: React.FC<InspectorSectionProps> = ({
  title,
  badge,
  children,
  className = ''
}) => {
  return (
    <section className={`py-3.5 border-b border-[var(--border-subtle)] ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="label-xs text-[11px] font-semibold text-[var(--ink-500)] tracking-[0.04em] uppercase">
          {title}
        </h3>
        {badge && (
          <span className="font-mono text-[10px] text-[var(--ink-400)] tabular-nums">
            {badge}
          </span>
        )}
      </div>
      <div className="text-[12px] leading-[1.55] text-[var(--ink-700)] max-w-[68ch]">
        {children}
      </div>
    </section>
  );
};
