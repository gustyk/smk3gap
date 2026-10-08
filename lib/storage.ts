import { AuditProject, CompanyProfile, FindingStatus, CapItem } from '@/types/smk3';

const STORAGE_KEY = 'smk3_gap_analysis_project_v1';

export const DEFAULT_PROFILE: CompanyProfile = {
  companyName: 'PT Perusahaan Contoh Sejahtera',
  industryType: 'Manufaktur & Fabrikasi',
  riskLevel: 'HIGH',
  employeeCount: 150,
  leadAuditor: 'Auditor SMK3 Internal',
  auditDate: new Date().toISOString().split('T')[0],
  auditTier: 'lanjutan'
};

export function createInitialProject(): AuditProject {
  return {
    id: 'proj_' + Date.now(),
    profile: { ...DEFAULT_PROFILE },
    assessments: {},
    capItems: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export function loadProject(): AuditProject {
  if (typeof window === 'undefined') return createInitialProject();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = createInitialProject();
      saveProject(initial);
      return initial;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load project from localStorage:', e);
    return createInitialProject();
  }
}

export function saveProject(project: AuditProject): void {
  if (typeof window === 'undefined') return;
  try {
    project.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
  } catch (e) {
    console.error('Failed to save project to localStorage:', e);
  }
}

export function exportProjectToJson(project: AuditProject): void {
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(project, null, 2)
  )}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonString);
  const cleanName = project.profile.companyName.replace(/[^a-zA-Z0-9_-]/g, '_');
  downloadAnchor.setAttribute(
    'download',
    `GapAnalysis_SMK3_${cleanName}_${new Date().toISOString().split('T')[0]}.json`
  );
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function calculateDefaultDueDate(status: FindingStatus): string {
  const now = new Date();
  if (status === 'CRITICAL') {
    // Immediate - same day or +1 day
    now.setDate(now.getDate() + 1);
  } else if (status === 'MAJOR') {
    // Max 1 month according to PP 50/2012
    now.setMonth(now.getMonth() + 1);
  } else if (status === 'MINOR') {
    // Max 3 months according to PP 50/2012
    now.setMonth(now.getMonth() + 3);
  } else {
    now.setMonth(now.getMonth() + 1);
  }
  return now.toISOString().split('T')[0];
}
