'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  AuditProject, 
  AuditTier, 
  CriteriaAssessment, 
  CapItem, 
  CompanyProfile,
  FindingStatus,
  CriteriaMaster
} from '@/types/smk3';
import { SMK3_ELEMENTS, SMK3_CRITERIA } from '@/lib/data/smk3-data';
import { calculateScores, getApplicableCriteria } from '@/lib/scoring';
import { 
  loadProject, 
  saveProject, 
  createInitialProject, 
  exportProjectToJson, 
  calculateDefaultDueDate 
} from '@/lib/storage';
import { exportAuditToExcel } from '@/lib/excel-export';

import { Navbar } from '@/components/Navbar';
import { ElementRail } from '@/components/ElementRail';
import { CriteriaArea } from '@/components/CriteriaArea';
import { InspectorPanel } from '@/components/InspectorPanel';
import { DashboardOverview } from '@/components/DashboardOverview';
import { CapManager } from '@/components/CapManager';
import { ProfileModal } from '@/components/ProfileModal';
import { KeyboardShortcutsModal } from '@/components/KeyboardShortcutsModal';
import { CommandPalette } from '@/components/primitives/CommandPalette';
import { PrintReportView } from '@/components/PrintReportView';

export default function HomePage() {
  const [project, setProject] = useState<AuditProject | null>(null);
  const [activeView, setActiveView] = useState<'assessment' | 'dashboard' | 'cap'>('assessment');
  const [selectedElement, setSelectedElement] = useState<number>(1);
  
  // Modals
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  
  // Assessment View State
  const [activeCriteriaCode, setActiveCriteriaCode] = useState<string | null>(null);
  const [density, setDensity] = useState<'compact' | 'comfortable'>('comfortable');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'UNASSESSED' | 'COMPLIANT' | 'GAP' | 'NA'>('ALL');
  const [autoAdvance, setAutoAdvance] = useState(true);

  // Inspector Panel State
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(true);

  // Load from LocalStorage on mount
  useEffect(() => {
    const p = loadProject();
    setProject(p);
  }, []);

  // Save changes to LocalStorage whenever project updates
  const updateProject = useCallback((newProject: AuditProject) => {
    setProject(newProject);
    saveProject(newProject);
  }, []);

  // Calculate live compliance scores
  const score = useMemo(() => {
    if (!project) return null;
    return calculateScores(project.profile.auditTier, project.assessments);
  }, [project]);

  // Applicable criteria for current tier
  const applicableCriteria = useMemo(() => {
    if (!project) return [];
    return getApplicableCriteria(project.profile.auditTier, SMK3_CRITERIA);
  }, [project?.profile.auditTier]);

  // Criteria in the currently selected element
  const currentElementCriteria = useMemo(() => {
    return applicableCriteria.filter((c) => c.elementNum === selectedElement);
  }, [applicableCriteria, selectedElement]);

  // Filtered criteria based on search & status filter
  const displayedCriteria = useMemo(() => {
    return currentElementCriteria.filter((c) => {
      const a = project?.assessments[c.code];
      const status = a?.status || 'UNASSESSED';

      // Status Filter
      if (statusFilter === 'UNASSESSED' && status !== 'UNASSESSED') return false;
      if (statusFilter === 'COMPLIANT' && (status !== 'COMPLIANT' && status !== 'OFI')) return false;
      if (statusFilter === 'GAP' && (status !== 'CRITICAL' && status !== 'MAJOR' && status !== 'MINOR')) return false;
      if (statusFilter === 'NA' && status !== 'NA') return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inCode = c.code.toLowerCase().includes(q);
        const inText = c.clauseText.toLowerCase().includes(q);
        const inSub = c.subElementName.toLowerCase().includes(q);
        const inNotes = (a?.findingNotes || '').toLowerCase().includes(q);
        if (!inCode && !inText && !inSub && !inNotes) return false;
      }

      return true;
    });
  }, [currentElementCriteria, project?.assessments, statusFilter, searchQuery]);

  // Group displayed criteria by sub-element
  const groupedCriteria = useMemo(() => {
    const map = new Map<string, CriteriaMaster[]>();
    displayedCriteria.forEach((crit) => {
      const group = crit.subElementName;
      if (!map.has(group)) {
        map.set(group, []);
      }
      map.get(group)!.push(crit);
    });
    return Array.from(map.entries());
  }, [displayedCriteria]);

  const applicableCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    applicableCriteria.forEach(c => {
      counts[c.elementNum] = (counts[c.elementNum] || 0) + 1;
    });
    return counts;
  }, [applicableCriteria]);

  const assessedCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    if (!project) return counts;
    applicableCriteria.forEach(c => {
      if (project.assessments[c.code] && project.assessments[c.code].status !== 'UNASSESSED') {
        counts[c.elementNum] = (counts[c.elementNum] || 0) + 1;
      }
    });
    return counts;
  }, [applicableCriteria, project]);

  const unassessedInCurrentElement = useMemo(() => {
    return currentElementCriteria.filter(
      (c) => (project?.assessments[c.code]?.status || 'UNASSESSED') === 'UNASSESSED'
    );
  }, [currentElementCriteria, project?.assessments]);

  // Handlers
  const handleUpdateAssessment = useCallback((code: string, updated: Partial<CriteriaAssessment>) => {
    if (!project) return;
    const existing = project.assessments[code] || {
      status: 'UNASSESSED',
      findingNotes: '',
      evidenceFiles: []
    };

    const newAssessment: CriteriaAssessment = {
      ...existing,
      ...updated,
      updatedAt: new Date().toISOString()
    };

    const newAssessments = {
      ...project.assessments,
      [code]: newAssessment
    };

    // Auto-init CAP
    const newCapItems = { ...project.capItems };
    const status = newAssessment.status;
    if ((status === 'CRITICAL' || status === 'MAJOR' || status === 'MINOR') && !newCapItems[code]) {
      newCapItems[code] = {
        criteriaCode: code,
        rootCause: '',
        correctiveAction: '',
        preventiveAction: '',
        pic: '',
        dueDate: calculateDefaultDueDate(status),
        status: 'OPEN'
      };
    }

    updateProject({
      ...project,
      assessments: newAssessments,
      capItems: newCapItems
    });
  }, [project, updateProject]);

  const handleUpdateCap = useCallback((code: string, updated: Partial<CapItem>) => {
    if (!project) return;
    const existing = project.capItems[code] || {
      criteriaCode: code,
      rootCause: '',
      correctiveAction: '',
      preventiveAction: '',
      pic: '',
      dueDate: calculateDefaultDueDate('MINOR'),
      status: 'OPEN'
    };

    const newCapItems = {
      ...project.capItems,
      [code]: { ...existing, ...updated }
    };

    updateProject({
      ...project,
      capItems: newCapItems
    });
  }, [project, updateProject]);

  const handleBatchMarkCompliant = useCallback(() => {
    if (!project || unassessedInCurrentElement.length === 0) return;
    if (!window.confirm(`Tandai ${unassessedInCurrentElement.length} kriteria sebagai Sesuai?`)) return;
    
    const updated = { ...project.assessments };
    unassessedInCurrentElement.forEach((c) => {
      updated[c.code] = {
        status: 'COMPLIANT',
        findingNotes: 'Terpenuhi sesuai dokumen & implementasi lapangan.',
        evidenceFiles: [],
        updatedAt: new Date().toISOString()
      };
    });
    updateProject({ ...project, assessments: updated });
  }, [project, unassessedInCurrentElement, updateProject]);

  // Keyboard Navigation Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command palette trigger (Cmd+K / Ctrl+K)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
        return;
      }

      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        // Only Esc works inside inputs
        if (e.key === 'Escape') {
          e.preventDefault();
          target.blur();
        }
        return;
      }

      if (e.key === '?') {
        e.preventDefault();
        setIsHelpModalOpen(true);
        return;
      }

      if (e.key === 'Escape') {
        if (isCommandPaletteOpen) { setIsCommandPaletteOpen(false); return; }
        if (isHelpModalOpen) { setIsHelpModalOpen(false); return; }
        if (isProfileModalOpen) { setIsProfileModalOpen(false); return; }
        if (activeCriteriaCode) { setActiveCriteriaCode(null); return; }
      }

      // View-specific shortcuts
      if (activeView === 'assessment') {
        if (e.key === 'i' || e.key === 'I') {
          e.preventDefault();
          setIsInspectorOpen(!isInspectorOpen);
          return;
        }

        if (e.key === '[' || e.key === ']') {
          e.preventDefault();
          setSelectedElement(prev => {
            let next = prev + (e.key === '[' ? -1 : 1);
            if (next < 1) next = 12;
            if (next > 12) next = 1;
            return next;
          });
          setActiveCriteriaCode(null);
          return;
        }

        const codes = displayedCriteria.map(c => c.code);
        const currentIndex = activeCriteriaCode ? codes.indexOf(activeCriteriaCode) : -1;

        if (e.key === 'j' || e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIndex = currentIndex < codes.length - 1 ? currentIndex + 1 : currentIndex;
          if (nextIndex >= 0) {
            setActiveCriteriaCode(codes[nextIndex]);
            const el = document.getElementById(`criteria-row-${codes[nextIndex].replace(/\./g, '-')}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else if (e.key === 'k' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex >= 0 ? currentIndex : 0;
          if (prevIndex >= 0 && codes.length > 0) {
            setActiveCriteriaCode(codes[prevIndex]);
            const el = document.getElementById(`criteria-row-${codes[prevIndex].replace(/\./g, '-')}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else if (e.key === 'n' || e.key === 'N') {
          e.preventDefault();
          if (activeCriteriaCode) {
            const el = document.getElementById(`notes-${activeCriteriaCode.replace(/\./g, '-')}`);
            el?.focus();
          }
        } else if (activeCriteriaCode && ['1', '2', '3', '4', '5', '6'].includes(e.key)) {
          e.preventDefault();
          const statusMap: Record<string, FindingStatus> = {
            '1': 'COMPLIANT', '2': 'OFI', '3': 'MINOR', '4': 'MAJOR', '5': 'CRITICAL', '6': 'NA'
          };
          handleUpdateAssessment(activeCriteriaCode, { status: statusMap[e.key] });
          
          if (autoAdvance) {
            const nextIndex = currentIndex < codes.length - 1 ? currentIndex + 1 : currentIndex;
            if (nextIndex > currentIndex) {
              setActiveCriteriaCode(codes[nextIndex]);
              setTimeout(() => {
                const el = document.getElementById(`criteria-row-${codes[nextIndex].replace(/\./g, '-')}`);
                el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }, 50);
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, activeCriteriaCode, displayedCriteria, isCommandPaletteOpen, isHelpModalOpen, isProfileModalOpen, isInspectorOpen, autoAdvance, handleUpdateAssessment]);

  if (!project || !score) {
    return (
      <div className="h-screen flex items-center justify-center bg-[var(--canvas)]">
        <p className="text-[12px] font-medium text-[var(--ink-500)]">Memuat basis data SMK3...</p>
      </div>
    );
  }

  // Find currently inspected criteria object
  const inspectingCriteria = activeCriteriaCode 
    ? SMK3_CRITERIA.find(c => c.code === activeCriteriaCode) || null
    : null;

  return (
    <>
      {/* 
        This component is hidden on screen and only visible during print. 
        It contains the properly formatted formal audit report.
      */}
      <PrintReportView project={project} score={score} />

      {/* Main Screen UI (Hidden during print) */}
      <div className="print:hidden flex flex-col h-screen overflow-hidden text-[var(--ink-900)] selection:bg-[var(--accent-tint)] selection:text-[var(--ink-900)]">
        {/* 44px Top Navbar */}
      <Navbar
        project={project}
        score={score}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onTierChange={(tier) => updateProject({ ...project, profile: { ...project.profile, auditTier: tier } })}
        onExportExcel={() => exportAuditToExcel(project, score)}
        onExportJson={() => exportProjectToJson(project)}
        onImportJson={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (ev) => {
            try {
              const parsed = JSON.parse(ev.target?.result as string);
              if (parsed.profile && parsed.assessments) {
                updateProject(parsed);
                alert('Data proyek berhasil dipulihkan!');
              }
            } catch (err) {}
          };
          reader.readAsText(file);
          e.target.value = '';
        }}
        onReset={() => updateProject(createInitialProject())}
        onPrint={() => window.print()}
        activeView={activeView}
        setActiveView={setActiveView}
        density={density}
        onToggleDensity={() => setDensity(d => d === 'compact' ? 'comfortable' : 'compact')}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Body Area */}
      <div className="flex flex-1 overflow-hidden bg-[var(--canvas)]">
        
        {activeView === 'assessment' && (
          <>
            {/* Zone 1: Element Rail (232px) */}
            <ElementRail
              selectedElement={selectedElement}
              score={score}
              applicableCounts={applicableCounts}
              assessedCounts={assessedCounts}
              isCollapsed={false} // Would be responsive <1280px in full impl
              onSelectElement={(num) => {
                setSelectedElement(num);
                setActiveCriteriaCode(null);
              }}
            />

            {/* Zone 2: Criteria Checklist Center (Flexible) */}
            <CriteriaArea
              groupedCriteria={groupedCriteria}
              allDisplayedCriteria={displayedCriteria}
              assessments={project.assessments}
              activeCriteriaCode={activeCriteriaCode}
              density={density}
              statusFilter={statusFilter}
              searchQuery={searchQuery}
              unassessedInElement={unassessedInCurrentElement}
              applicableInElement={currentElementCriteria}
              selectedElement={selectedElement}
              onSetActiveCode={setActiveCriteriaCode}
              onUpdateAssessment={handleUpdateAssessment}
              onStatusFilterChange={setStatusFilter}
              onSearchChange={setSearchQuery}
              onBatchMarkCompliant={handleBatchMarkCompliant}
              onInspectCriteria={(c) => setIsInspectorOpen(true)}
              elementScore={score.elementScores[selectedElement] || null}
              autoAdvance={autoAdvance}
            />

            {/* Zone 3: Inspector Panel (360px) */}
            {isInspectorOpen && (
              <InspectorPanel
                criteria={inspectingCriteria}
                assessment={inspectingCriteria ? project.assessments[inspectingCriteria.code] : undefined}
                onClose={() => setIsInspectorOpen(false)}
                onNavigateToCap={() => setActiveView('cap')}
              />
            )}
          </>
        )}

        {activeView === 'dashboard' && (
          <div className="flex-1 overflow-hidden">
            <DashboardOverview
              score={score}
              project={project}
              onSelectElement={(num) => {
                setSelectedElement(num);
                setActiveView('assessment');
              }}
              onNavigateToCap={() => setActiveView('cap')}
              onNavigateToCriteria={(code, elem) => {
                setSelectedElement(elem);
                setActiveCriteriaCode(code);
                setActiveView('assessment');
                // Allow view change then scroll
                setTimeout(() => {
                  const el = document.getElementById(`criteria-row-${code.replace(/\./g, '-')}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }}
              onExportExcel={() => exportAuditToExcel(project, score)}
              onPrint={() => window.print()}
            />
          </div>
        )}

        {activeView === 'cap' && (
          <div className="flex-1 overflow-hidden">
            <CapManager
              project={project}
              onUpdateCap={handleUpdateCap}
              onNavigateToCriteria={(code, elem) => {
                setSelectedElement(elem);
                setActiveCriteriaCode(code);
                setActiveView('assessment');
                setTimeout(() => {
                  const el = document.getElementById(`criteria-row-${code.replace(/\./g, '-')}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }}
            />
          </div>
        )}
      </div>

      {/* Modals & Overlays */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        criteria={SMK3_CRITERIA}
        elements={SMK3_ELEMENTS}
        onSelectCriteria={(code: string, elem: number) => {
          setSelectedElement(elem);
          setActiveCriteriaCode(code);
          setActiveView('assessment');
          setTimeout(() => {
            const el = document.getElementById(`criteria-row-${code.replace(/\./g, '-')}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }}
        onSelectElement={(elem: number) => {
          setSelectedElement(elem);
          setActiveCriteriaCode(null);
          setActiveView('assessment');
        }}
        onSelectView={setActiveView}
        onExportExcel={() => exportAuditToExcel(project, score)}
        onPrint={() => window.print()}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onToggleDensity={() => setDensity(d => d === 'compact' ? 'comfortable' : 'compact')}
      />

      <KeyboardShortcutsModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={project.profile}
        onSave={(updated) => updateProject({ ...project, profile: updated })}
      />
    </div>
    </>
  );
}
