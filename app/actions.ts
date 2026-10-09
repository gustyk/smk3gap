'use server';

import { PrismaClient } from '@prisma/client';
import { AuditProject } from '@/types/smk3';
import { createInitialProject } from '@/lib/storage';

// Initialize Prisma client globally to prevent hot reload issues in dev
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function loadLatestProjectDb(): Promise<AuditProject> {
  // We just fetch the most recently updated project
  let p = await prisma.auditProject.findFirst({
    orderBy: { updatedAt: 'desc' },
    include: {
      assessments: true,
      capItems: true
    }
  });

  if (!p) {
    const initial = createInitialProject();
    await saveProjectToDb(initial);
    return initial;
  }

  // Map to AuditProject type
  const assessmentsRecord: Record<string, any> = {};
  p.assessments.forEach((a: any) => {
    assessmentsRecord[a.criteriaCode] = {
      status: a.status,
      findingNotes: a.findingNotes || ''
    };
  });

  const capItemsRecord: Record<string, any> = {};
  p.capItems.forEach((c: any) => {
    capItemsRecord[c.criteriaCode] = {
      rootCause: c.rootCause || '',
      correctiveAction: c.correctiveAction || '',
      preventiveAction: c.preventiveAction || '',
      pic: c.pic || '',
      dueDate: c.dueDate || '',
      status: c.status
    };
  });

  return {
    id: p.id,
    profile: {
      companyName: p.companyName,
      industryType: p.industryType,
      riskLevel: p.riskLevel as 'LOW'|'MEDIUM'|'HIGH',
      employeeCount: p.employeeCount,
      leadAuditor: p.leadAuditor,
      auditDate: p.auditDate,
      auditTier: p.auditTier as 'awal'|'transisi'|'lanjutan'
    },
    assessments: assessmentsRecord,
    capItems: capItemsRecord,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString()
  };
}

export async function saveProjectToDb(project: AuditProject): Promise<void> {
  // Upsert the main project
  await prisma.auditProject.upsert({
    where: { id: project.id },
    create: {
      id: project.id,
      companyName: project.profile.companyName,
      industryType: project.profile.industryType,
      riskLevel: project.profile.riskLevel,
      employeeCount: project.profile.employeeCount,
      leadAuditor: project.profile.leadAuditor,
      auditDate: project.profile.auditDate,
      auditTier: project.profile.auditTier
    },
    update: {
      companyName: project.profile.companyName,
      industryType: project.profile.industryType,
      riskLevel: project.profile.riskLevel,
      employeeCount: project.profile.employeeCount,
      leadAuditor: project.profile.leadAuditor,
      auditDate: project.profile.auditDate,
      auditTier: project.profile.auditTier
    }
  });

  // Since it's a bulk save, we can run operations in transaction
  const ops = [];

  for (const [code, val] of Object.entries(project.assessments)) {
    ops.push(
      prisma.criteriaAssessment.upsert({
        where: { projectId_criteriaCode: { projectId: project.id, criteriaCode: code } },
        create: {
          projectId: project.id,
          criteriaCode: code,
          status: val.status,
          findingNotes: val.findingNotes
        },
        update: {
          status: val.status,
          findingNotes: val.findingNotes
        }
      })
    );
  }

  for (const [code, val] of Object.entries(project.capItems)) {
    ops.push(
      prisma.capItem.upsert({
        where: { projectId_criteriaCode: { projectId: project.id, criteriaCode: code } },
        create: {
          projectId: project.id,
          criteriaCode: code,
          rootCause: val.rootCause,
          correctiveAction: val.correctiveAction,
          preventiveAction: val.preventiveAction,
          pic: val.pic,
          dueDate: val.dueDate,
          status: val.status
        },
        update: {
          rootCause: val.rootCause,
          correctiveAction: val.correctiveAction,
          preventiveAction: val.preventiveAction,
          pic: val.pic,
          dueDate: val.dueDate,
          status: val.status
        }
      })
    );
  }

  // Execute in batches to prevent transaction limits
  const BATCH_SIZE = 50;
  for (let i = 0; i < ops.length; i += BATCH_SIZE) {
    await prisma.$transaction(ops.slice(i, i + BATCH_SIZE));
  }
}
