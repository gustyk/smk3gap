/**
 * DESIGN TOKENS
 * SMK3 Gap Analysis Workstation (PP 50/2012)
 * Industrial Audit Design System Tokens (Linear / Stripe / GOV.UK / Excel / Bloomberg density)
 */

export const TOKENS = {
  colors: {
    // Warm neutral canvas & surfaces
    canvas: '#F7F6F3',
    surface: '#FFFFFF',
    sunken: '#EFEDE8',

    // Ink
    ink900: '#1C1B19',
    ink700: '#3F3D39',
    ink500: '#6B6862',
    ink400: '#8F8C85',

    // Hairline borders
    borderSubtle: '#E4E1DA',
    borderDefault: '#D3CFC6',
    borderStrong: '#A8A398',

    // Single Accent: Deep Teal
    accent: '#0F4C5C',
    accentHover: '#0B3A47',
    accentTint: '#E3EEF0',

    // Semantic status pairs (solid + tint)
    status: {
      compliant: { solid: '#2F6B3F', tint: '#E6F0E8', label: 'Sesuai' },
      ofi: { solid: '#8A5A00', tint: '#F6EBD3', label: 'OFI' },
      minor: { solid: '#8A5A00', tint: '#F6EBD3', label: 'Minor' },
      major: { solid: '#A12D2D', tint: '#F6E1E0', label: 'Mayor' },
      critical: { solid: '#A12D2D', tint: '#F6E1E0', label: 'Kritikal' },
      unassessed: { solid: '#6B6862', tint: '#EFEDE8', label: 'Belum Dinilai' },
      na: { solid: '#6B6862', tint: 'transparent', label: 'N/A' },
    },

    // Severity marks
    severity: {
      critical: { color: '#A12D2D', label: 'Kritikal' },
      major: { color: '#B45309', label: 'Mayor' },
      minor: { color: '#8A5A00', label: 'Minor' },
    }
  },

  typography: {
    fontUi: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scale: {
      xs: '11px',
      sm: '12px',
      base: '13px', // body default
      md: '14px',
      lg: '16px',
      xl: '20px',
      display: '28px',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      ui: 1.4,
      prose: 1.55,
    },
    maxMeasure: '68ch',
  },

  radius: {
    control: '4px',
    panel: '6px',
    none: '0px',
  },

  spacing: [4, 8, 12, 16, 24, 32, 48] as const,

  motion: {
    duration: '140ms',
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  }
} as const;

export type FindingStatusKey = 
  | 'COMPLIANT' 
  | 'OFI' 
  | 'MINOR' 
  | 'MAJOR' 
  | 'CRITICAL' 
  | 'NA' 
  | 'UNASSESSED';

export const STATUS_META: Record<FindingStatusKey, {
  label: string;
  shortcut: string;
  scoreLabel: string;
  solid: string;
  tint: string;
  border: string;
}> = {
  COMPLIANT: {
    label: 'Sesuai',
    shortcut: '1',
    scoreLabel: '1',
    solid: '#2F6B3F',
    tint: '#E6F0E8',
    border: '#B8D4BF',
  },
  OFI: {
    label: 'OFI',
    shortcut: '2',
    scoreLabel: '1',
    solid: '#8A5A00',
    tint: '#F6EBD3',
    border: '#E8D5A7',
  },
  MINOR: {
    label: 'Minor',
    shortcut: '3',
    scoreLabel: '0',
    solid: '#8A5A00',
    tint: '#F6EBD3',
    border: '#E8D5A7',
  },
  MAJOR: {
    label: 'Mayor',
    shortcut: '4',
    scoreLabel: '0',
    solid: '#A12D2D',
    tint: '#F6E1E0',
    border: '#E5BFBE',
  },
  CRITICAL: {
    label: 'Kritikal',
    shortcut: '5',
    scoreLabel: '0',
    solid: '#A12D2D',
    tint: '#F6E1E0',
    border: '#E5BFBE',
  },
  NA: {
    label: 'N/A',
    shortcut: '6',
    scoreLabel: '-',
    solid: '#6B6862',
    tint: '#F7F6F3',
    border: '#D3CFC6',
  },
  UNASSESSED: {
    label: 'Belum',
    shortcut: '-',
    scoreLabel: '?',
    solid: '#6B6862',
    tint: '#EFEDE8',
    border: '#E4E1DA',
  },
};
