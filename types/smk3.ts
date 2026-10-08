export type AuditTier = 'awal' | 'transisi' | 'lanjutan';

export type FindingStatus = 
  | 'COMPLIANT' 
  | 'MINOR' 
  | 'MAJOR' 
  | 'CRITICAL' 
  | 'OFI' 
  | 'NA' 
  | 'UNASSESSED';

export interface CriteriaConditions {
  compliant: string;
  critical: string;
  major: string;
  minor: string;
  ofi: string;
}

export interface CriteriaTiers {
  awal: boolean;
  transisi: boolean;
  lanjutan: boolean;
}

export interface CriteriaMaster {
  no: number;
  code: string;
  elementNum: number;
  elementName: string;
  subElementName: string;
  clauseText: string;
  interpretation: string;
  expectedEvidence: string;
  conditions: CriteriaConditions;
  tiers: CriteriaTiers;
}

export interface ElementSummary {
  elementNum: number;
  name: string;
  criteriaRange: string;
  totalAwal: number;
  totalTransisi: number;
  totalLanjutan: number;
}

export interface FindingCategoryGuide {
  category: string;
  definition: string;
  parameters: string;
  consequences: string;
  timeLimit: string;
}

export interface CompanyProfile {
  companyName: string;
  industryType: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  employeeCount: number;
  leadAuditor: string;
  auditDate: string;
  auditTier: AuditTier;
}

export interface CriteriaAssessment {
  status: FindingStatus;
  findingNotes: string;
  evidenceFiles: string[];
  updatedAt?: string;
}

export interface CapItem {
  criteriaCode: string;
  rootCause: string;
  correctiveAction: string;
  preventiveAction: string;
  pic: string;
  dueDate: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'VERIFIED';
}

export interface AuditProject {
  id: string;
  profile: CompanyProfile;
  assessments: Record<string, CriteriaAssessment>;
  capItems: Record<string, CapItem>;
  createdAt: string;
  updatedAt: string;
}

export interface ScoreSummary {
  totalApplicable: number;
  totalCompliant: number; // Includes COMPLIANT + OFI
  totalMinor: number;
  totalMajor: number;
  totalCritical: number;
  totalOfi: number;
  totalNA: number;
  totalUnassessed: number;
  complianceRate: number; // in percentage (0 - 100)
  hasCritical: boolean;
  hasMajor: boolean;
  awardStatus: 'EMAS' | 'PERAK' | 'KURANG' | 'GUGUR' | 'DITANGGUHKAN';
  awardTitle: string;
  awardDescription: string;
  elementScores: Record<number, {
    totalCriteria: number;
    compliant: number;
    minor: number;
    major: number;
    critical: number;
    ofi: number;
    na: number;
    rate: number;
  }>;
}
