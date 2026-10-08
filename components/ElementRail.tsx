'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import { SMK3_ELEMENTS } from '@/lib/data/smk3-data';
import { ScoreSummary } from '@/types/smk3';
import { Triangle, Diamond, Circle } from 'lucide-react';

interface ElementRailProps {
  selectedElement: number;
  score: ScoreSummary;
  applicableCounts: Record<number, number>;  // elemNum -> applicable criteria count
  assessedCounts: Record<number, number>;    // elemNum -> assessed criteria count
  isCollapsed: boolean;
  onSelectElement: (num: number) => void;
}

export const ElementRail: React.FC<ElementRailProps> = ({
  selectedElement,
  score,
  applicableCounts,
  assessedCounts,
  isCollapsed,
  onSelectElement,
}) => {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedElement]);

  return (
    <aside
      className={`flex flex-col shrink-0 h-full bg-[var(--surface)] border-r border-[var(--border-default)] overflow-y-auto overflow-x-hidden transition-all duration-140 ${
        isCollapsed ? 'w-[56px]' : 'w-[232px]'
      }`}
    >
      {/* Rail Label */}
      {!isCollapsed && (
        <div className="h-[28px] px-3 flex items-center border-b border-[var(--border-subtle)] bg-[var(--sunken)] shrink-0">
          <span className="label-xs font-semibold text-[11px] tracking-wider uppercase text-[var(--ink-500)]">
            12 Elemen SMK3
          </span>
        </div>
      )}

      {/* Element list */}
      <div className="flex flex-col py-1">
        {SMK3_ELEMENTS.map((el) => {
          const elScore = score.elementScores[el.elementNum];
          const isSelected = selectedElement === el.elementNum;
          const total = applicableCounts[el.elementNum] || 0;
          const assessed = assessedCounts[el.elementNum] || 0;
          const progressPct = total > 0 ? Math.round((assessed / total) * 100) : 0;
          const hasCritical = (elScore?.critical || 0) > 0;
          const hasMajor = (elScore?.major || 0) > 0;
          const rate = elScore?.rate || 0;

          if (isCollapsed) {
            return (
              <button
                key={el.elementNum}
                ref={isSelected ? activeRef : undefined}
                type="button"
                onClick={() => onSelectElement(el.elementNum)}
                title={`Elemen ${el.elementNum}: ${el.name}`}
                className={`flex flex-col items-center justify-center w-full h-[48px] border-b border-[var(--border-subtle)] transition-colors cursor-pointer relative ${
                  isSelected
                    ? 'bg-[var(--accent-tint)] text-[var(--accent)]'
                    : 'bg-[var(--surface)] text-[var(--ink-700)] hover:bg-[#FAF9F6]'
                }`}
              >
                {/* Left indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${isSelected ? 'bg-[var(--accent)]' : 'bg-transparent'}`} />

                <span className="font-mono text-[13px] font-bold tabular-nums">
                  {el.elementNum}
                </span>

                {/* Small severity dot if finding */}
                {hasCritical && (
                  <Triangle size={8} className="fill-[var(--status-noncompliant-solid)] text-transparent mt-0.5" />
                )}
                {!hasCritical && hasMajor && (
                  <Diamond size={8} className="fill-[#B45309] text-transparent mt-0.5" />
                )}
              </button>
            );
          }

          return (
            <button
              key={el.elementNum}
              ref={isSelected ? activeRef : undefined}
              type="button"
              onClick={() => onSelectElement(el.elementNum)}
              className={`flex flex-col w-full px-3 py-2 text-left border-b border-[var(--border-subtle)] transition-colors cursor-pointer relative group ${
                isSelected
                  ? 'bg-[var(--accent-tint)]'
                  : 'bg-[var(--surface)] hover:bg-[#FAF9F6]'
              }`}
            >
              {/* Left 2px accent indicator */}
              <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors ${isSelected ? 'bg-[var(--accent)]' : 'bg-transparent'}`} />

              <div className="flex items-center justify-between mb-1">
                {/* Element number (mono, 12px) */}
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`font-mono text-[12px] font-bold tabular-nums shrink-0 ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--ink-900)]'}`}>
                    {String(el.elementNum).padStart(2, '0')}
                  </span>
                  <span className={`text-[12px] leading-snug line-clamp-1 ${isSelected ? 'text-[var(--ink-900)] font-medium' : 'text-[var(--ink-700)]'}`}>
                    {el.name}
                  </span>
                </div>

                {/* Finding severity dot (right side) */}
                <div className="shrink-0 flex items-center gap-1 ml-1">
                  {hasCritical && (
                    <Triangle size={9} className="fill-[var(--status-noncompliant-solid)] text-transparent" aria-label="Ada temuan kritikal" />
                  )}
                  {!hasCritical && hasMajor && (
                    <Diamond size={9} className="fill-[#B45309] text-transparent" aria-label="Ada temuan mayor" />
                  )}
                </div>
              </div>

              {/* Progress count + bar */}
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-[11px] tabular-nums text-[var(--ink-500)] shrink-0">
                  {assessed}/{total}
                </span>

                {/* 2px-high progress bar */}
                <div className="flex-1 h-[2px] bg-[var(--border-subtle)] rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-200 rounded-full ${
                      hasCritical ? 'bg-[var(--status-noncompliant-solid)]' :
                      hasMajor ? 'bg-[#B45309]' :
                      rate >= 85 ? 'bg-[var(--status-compliant-solid)]' :
                      rate >= 60 ? 'bg-[var(--accent)]' :
                      progressPct > 0 ? 'bg-[var(--border-strong)]' : 'bg-transparent'
                    }`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <span className="font-mono text-[11px] tabular-nums text-[var(--ink-400)] shrink-0">
                  {rate}%
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
