'use client';

import React, { useState } from 'react';
import { ScoreSummary } from '@/types/smk3';
import { SMK3_ELEMENTS } from '@/lib/data/smk3-data';

interface ElementRadarChartProps {
  score: ScoreSummary;
  onSelectElement?: (elemNum: number) => void;
  selectedElement?: number;
}

export const ElementRadarChart: React.FC<ElementRadarChartProps> = ({
  score,
  onSelectElement,
  selectedElement
}) => {
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);

  const size = 380;
  const center = size / 2;
  const radius = 135;
  const totalElements = 12;

  // Concentric levels
  const levels = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index: number, valueRatio: number) => {
    // Angle in radians, start from top (-PI / 2)
    const angle = (Math.PI * 2 / totalElements) * index - Math.PI / 2;
    const r = radius * Math.max(0, Math.min(1, valueRatio));
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y, angle };
  };

  const polygonPoints = SMK3_ELEMENTS.map((el, i) => {
    const elemScore = score.elementScores[el.elementNum];
    const ratio = elemScore ? elemScore.rate / 100 : 0;
    const { x, y } = getCoordinates(i, ratio);
    return `${x},${y}`;
  }).join(' ');

  const activeElementInfo = hoveredElement 
    ? SMK3_ELEMENTS.find((e) => e.elementNum === hoveredElement)
    : selectedElement 
    ? SMK3_ELEMENTS.find((e) => e.elementNum === selectedElement)
    : null;

  const activeElementScore = activeElementInfo 
    ? score.elementScores[activeElementInfo.elementNum] 
    : null;

  return (
    <div className="flex flex-col items-center justify-center p-2 w-full">
      <div className="relative">
        <svg width={size} height={size} className="overflow-visible">
          {/* Concentric Polygons / Rings */}
          {levels.map((lvl) => {
            const points = Array.from({ length: totalElements }).map((_, i) => {
              const { x, y } = getCoordinates(i, lvl);
              return `${x},${y}`;
            }).join(' ');

            return (
              <polygon
                key={lvl}
                points={points}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth={lvl === 1 ? '1.5' : '1'}
                strokeDasharray={lvl < 1 ? '3 3' : 'none'}
              />
            );
          })}

          {/* Level Markers Text (25%, 50%, 75%, 100%) */}
          {levels.map((lvl) => (
            <text
              key={lvl}
              x={center + 4}
              y={center - radius * lvl + 10}
              className="text-[9px] fill-slate-400 font-mono font-bold select-none"
            >
              {Math.round(lvl * 100)}%
            </text>
          ))}

          {/* Axes from Center to Vertices */}
          {Array.from({ length: totalElements }).map((_, i) => {
            const { x, y } = getCoordinates(i, 1.0);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            );
          })}

          {/* Data Polygon Fill & Stroke */}
          <polygon
            points={polygonPoints}
            fill="rgba(16, 185, 129, 0.18)"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="transition-all duration-300"
          />

          {/* Data Points on vertices */}
          {SMK3_ELEMENTS.map((el, i) => {
            const elemScore = score.elementScores[el.elementNum];
            const ratio = elemScore ? elemScore.rate / 100 : 0;
            const { x, y } = getCoordinates(i, ratio);
            const isSelected = selectedElement === el.elementNum || hoveredElement === el.elementNum;
            const hasCritical = elemScore && elemScore.critical > 0;
            const hasMajor = elemScore && elemScore.major > 0;

            const pointColor = hasCritical ? '#dc2626' : hasMajor ? '#ea580c' : isSelected ? '#0f172a' : '#10b981';

            return (
              <g 
                key={el.elementNum} 
                className="cursor-pointer" 
                onClick={() => onSelectElement?.(el.elementNum)}
                onMouseEnter={() => setHoveredElement(el.elementNum)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 6 : 4}
                  fill={pointColor}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="transition-all hover:scale-125"
                />
              </g>
            );
          })}

          {/* Outer Labels */}
          {SMK3_ELEMENTS.map((el, i) => {
            const { x, y, angle } = getCoordinates(i, 1.22);
            const elemScore = score.elementScores[el.elementNum];
            const rate = elemScore ? elemScore.rate : 0;
            const isSelected = selectedElement === el.elementNum || hoveredElement === el.elementNum;

            let textAnchor: 'start' | 'middle' | 'end' = 'middle';
            if (Math.cos(angle) > 0.3) textAnchor = 'start';
            else if (Math.cos(angle) < -0.3) textAnchor = 'end';

            return (
              <g 
                key={el.elementNum} 
                className="cursor-pointer group" 
                onClick={() => onSelectElement?.(el.elementNum)}
                onMouseEnter={() => setHoveredElement(el.elementNum)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <text
                  x={x}
                  y={y - 2}
                  textAnchor={textAnchor}
                  className={`text-[10px] font-bold transition-colors select-none font-mono ${
                    isSelected ? 'fill-slate-950 font-black underline' : 'fill-slate-600 group-hover:fill-slate-900'
                  }`}
                >
                  E{el.elementNum} ({rate}%)
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Tooltip Card at the bottom of the radar */}
      <div className="w-full mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs min-h-[58px] flex items-center justify-between">
        {activeElementInfo && activeElementScore ? (
          <>
            <div>
              <span className="font-extrabold text-slate-900">
                Elemen {activeElementInfo.elementNum}: {activeElementInfo.name}
              </span>
              <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                <span>{activeElementScore.compliant} / {activeElementScore.totalCriteria - activeElementScore.na} Sesuai</span>
                {activeElementScore.critical > 0 && <span className="text-red-700 font-bold">• {activeElementScore.critical} Kritikal</span>}
                {activeElementScore.major > 0 && <span className="text-orange-700 font-bold">• {activeElementScore.major} Mayor</span>}
                {activeElementScore.minor > 0 && <span className="text-amber-700 font-bold">• {activeElementScore.minor} Minor</span>}
              </div>
            </div>
            <button
              onClick={() => onSelectElement?.(activeElementInfo.elementNum)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold hover:bg-slate-800 transition-colors shrink-0"
            >
              Buka Klausul &rarr;
            </button>
          </>
        ) : (
          <div className="text-center w-full text-slate-400 text-xs">
            Arahkan kursor atau klik nomor elemen (E1 - E12) untuk melihat rincian
          </div>
        )}
      </div>
    </div>
  );
};
