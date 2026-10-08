'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
import { CriteriaCard } from '@/components/CriteriaCard';
import { CriteriaDrawer } from '@/components/CriteriaDrawer';
import { DashboardOverview } from '@/components/DashboardOverview';
import { CapManager } from '@/components/CapManager';
import { ProfileModal } from '@/components/ProfileModal';
import { PrintReportView } from '@/components/PrintReportView';
import { KeyboardShortcutsModal } from '@/components/KeyboardShortcutsModal';

import { 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers,
  AlertTriangle,
  AlertOctagon,
  FileText,
  SlidersHorizontal,
  CheckCheck,
  PanelRightOpen,
  HelpCircle,
  Hash
} from 'lucide-react';

export default function HomePage() {
  const [project, setProject] = useState<AuditProject | null>(null);
  const [activeView, setActiveView] = useState<'assessment' | 'dashboard' | 'cap'>('assessment');
  const [selectedElement, setSelectedElement] = useState<number>(1);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState<boolean>(false);
  
  // Drawer state
  const [inspectingCriteria, setInspectingCriteria] = useState<CriteriaMaster | null>(null);

  // Density setting
  const [density, setDensity] = useState<'compact' | 'comfortable'>('comfortable');

  // Focused criteria index for keyboard navigation
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  
  // Search & Filters in Assessment View
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'UNASSESSED' | 'COMPLIANT' | 'GAP' | 'NA'>('ALL');

  // Load from LocalStorage on mount
  useEffect(() => {
    const p = loadProject();
    setProject(p);
  }, []);

  // Save changes to LocalStorage whenever project updates
  const updateProject = (newProject: AuditProject) => {
    setProject(newProject);
    saveProject(newProject);
  };

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

  // Current active element object
  const currentElementObj = useMemo(() => {
    return SMK3_ELEMENTS.find((e) => e.elementNum === selectedElement) || SMK3_ELEMENTS[0];
  }, [selectedElement]);

  // Handlers
  const handleUpdateAssessment = (code: string, updated: Partial<CriteriaAssessment>) => {
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

    // If status is a GAP (CRITICAL, MAJOR, MINOR) and no CAP exists, auto-initialize CAP item
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
  };

  const handleUpdateCap = (code: string, updated: Partial<CapItem>) => {
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
      [code]: {
        ...existing,
        ...updated
      }
    };

    updateProject({
      ...project,
      capItems: newCapItems
    });
  };

  const handleSaveProfile = (updatedProfile: CompanyProfile) => {
    if (!project) return;
    updateProject({
      ...project,
      profile: updatedProfile
    });
  };

  const handleTierChange = (tier: AuditTier) => {
    if (!project) return;
    updateProject({
      ...project,
      profile: {
        ...project.profile,
        auditTier: tier
      }
    });
  };

  const handleExportExcel = () => {
    if (!project || !score) return;
    exportAuditToExcel(project, score);
  };

  const handleExportJson = () => {
    if (!project) return;
    exportProjectToJson(project);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.profile && parsed.assessments) {
          updateProject(parsed);
          alert('Data proyek berhasil dipulihkan!');
        } else {
          alert('Format berkas JSON tidak valid.');
        }
      } catch (err) {
        alert('Gagal membaca berkas JSON: ' + (err as Error).message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleReset = () => {
    const fresh = createInitialProject();
    updateProject(fresh);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNavigateToCap = (code?: string) => {
    setActiveView('cap');
  };

  const handleNavigateToCriteria = (code: string, elementNum: number) => {
    setSelectedElement(elementNum);
    setActiveView('assessment');
    // Scroll to item after view change
    setTimeout(() => {
      const el = document.getElementById(`criteria-${code.replace(/\./g, '-')}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  // Batch action: Mark unassessed as compliant
  const unassessedInCurrentElement = useMemo(() => {
    return currentElementCriteria.filter(
      (c) => (project?.assessments[c.code]?.status || 'UNASSESSED') === 'UNASSESSED'
    );
  }, [currentElementCriteria, project?.assessments]);

  const handleBatchMarkCompliant = () => {
    if (!project || unassessedInCurrentElement.length === 0) return;
    const updated = { ...project.assessments };
    unassessedInCurrentElement.forEach((c) => {
      updated[c.code] = {
        status: 'COMPLIANT',
        findingNotes: 'Terpenuhi sesuai dokumen & implementasi lapangan.',
        evidenceFiles: [],
        updatedAt: new Date().toISOString()
      };
    });
    updateProject({
      ...project,
      assessments: updated
    });
    setIsBatchModalOpen(false);
  };

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      if (e.key === '?') {
        e.preventDefault();
        setIsHelpModalOpen(true);
        return;
      }

      if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setDensity((prev) => (prev === 'compact' ? 'comfortable' : 'compact'));
        return;
      }

      if (e.key === 'Escape') {
        if (inspectingCriteria) {
          setInspectingCriteria(null);
          return;
        }
        if (isHelpModalOpen) {
          setIsHelpModalOpen(false);
          return;
        }
        if (isBatchModalOpen) {
          setIsBatchModalOpen(false);
          return;
        }
      }

      if (activeView !== 'assessment') return;

      if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex((prev) => {
          const next = Math.min(displayedCriteria.length - 1, prev + 1);
          const targetCrit = displayedCriteria[next];
          if (targetCrit) {
            const el = document.getElementById(`criteria-${targetCrit.code.replace(/\./g, '-')}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          return next;
        });
      } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex((prev) => {
          const next = Math.max(0, prev - 1);
          const targetCrit = displayedCriteria[next];
          if (targetCrit) {
            const el = document.getElementById(`criteria-${targetCrit.code.replace(/\./g, '-')}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          return next;
        });
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        const currentCrit = displayedCriteria[focusedIndex];
        if (currentCrit) {
          setInspectingCriteria((prev) => (prev ? null : currentCrit));
        }
      } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
        e.preventDefault();
        const currentCrit = displayedCriteria[focusedIndex];
        if (currentCrit) {
          const statusMap: Record<string, FindingStatus> = {
            '1': 'COMPLIANT',
            '2': 'OFI',
            '3': 'MINOR',
            '4': 'MAJOR',
            '5': 'CRITICAL',
            '6': 'NA'
          };
          handleUpdateAssessment(currentCrit.code, { status: statusMap[e.key] });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, displayedCriteria, focusedIndex, inspectingCriteria, isHelpModalOpen, isBatchModalOpen]);

  if (!project || !score) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-bold text-slate-700">Memuat Basis Data SMK3 PP 50/2012...</p>
        </div>
      </div>
    );
  }

  const currentElementScore = score.elementScores[selectedElement];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans selection:bg-slate-200">
      
      {/* Printable Report View (Visible only during print) */}
      <PrintReportView project={project} score={score} />

      {/* Screen Interactive App */}
      <div className="print:hidden flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar
          project={project}
          score={score}
          onOpenProfile={() => setIsProfileModalOpen(true)}
          onTierChange={handleTierChange}
          onExportExcel={handleExportExcel}
          onExportJson={handleExportJson}
          onImportJson={handleImportJson}
          onReset={handleReset}
          onPrint={handlePrint}
          activeView={activeView}
          setActiveView={setActiveView}
          density={density}
          onToggleDensity={() => setDensity((prev) => (prev === 'compact' ? 'comfortable' : 'compact'))}
          onOpenHelp={() => setIsHelpModalOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* DASHBOARD VIEW */}
          {activeView === 'dashboard' && (
            <DashboardOverview
              score={score}
              project={project}
              onSelectElement={(elemNum) => {
                setSelectedElement(elemNum);
                setActiveView('assessment');
              }}
              onNavigateToCap={() => setActiveView('cap')}
              onNavigateToCriteria={handleNavigateToCriteria}
              onExportExcel={handleExportExcel}
              onPrint={handlePrint}
            />
          )}

          {/* CAP MANAGER VIEW */}
          {activeView === 'cap' && (
            <CapManager
              project={project}
              onUpdateCap={handleUpdateCap}
              onNavigateToCriteria={handleNavigateToCriteria}
              onExportExcel={handleExportExcel}
            />
          )}

          {/* ASSESSMENT CHECKLIST VIEW */}
          {activeView === 'assessment' && (
            <div className="space-y-5">
              
              {/* 12 Elements Tab Navigator */}
              <div className="bg-white rounded-2xl p-2.5 border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                  {SMK3_ELEMENTS.map((el) => {
                    const elScore = score.elementScores[el.elementNum];
                    const isSelected = selectedElement === el.elementNum;
                    const hasCritical = elScore && elScore.critical > 0;
                    const hasMajor = elScore && elScore.major > 0;
                    const hasMinor = elScore && elScore.minor > 0;

                    return (
                      <button
                        key={el.elementNum}
                        onClick={() => {
                          setSelectedElement(el.elementNum);
                          setFocusedIndex(0);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-2xs font-bold'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800'
                        }`}>
                          {el.elementNum}
                        </span>
                        <span className="truncate max-w-[130px] sm:max-w-none">{el.name}</span>
                        
                        {/* Status indicators */}
                        {elScore && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                            isSelected ? 'bg-white/20 text-white font-mono' :
                            hasCritical ? 'bg-red-100 text-red-800' :
                            hasMajor ? 'bg-orange-100 text-orange-800' :
                            hasMinor ? 'bg-amber-100 text-amber-800' :
                            elScore.rate >= 85 ? 'bg-emerald-100 text-emerald-800 font-mono' :
                            'bg-slate-200 text-slate-700 font-mono'
                          }`}>
                            {elScore.rate}%
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Element Header & Mini-Map Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs space-y-4">
                
                {/* Element Title & Score Summary */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-extrabold flex items-center justify-center shadow-2xs">
                        {currentElementObj.elementNum}
                      </span>
                      <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                        {currentElementObj.name}
                      </h2>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                      <span>Rentang Klausul: <strong className="text-slate-700 font-mono">{currentElementObj.criteriaRange}</strong></span>
                      <span>&bull;</span>
                      <span>Klausul Berlaku: <strong className="text-slate-700">{currentElementCriteria.length} Kriteria</strong></span>
                      <span>&bull;</span>
                      <span>Sub-Elemen: <strong className="text-slate-700">{groupedCriteria.length} Bagian</strong></span>
                    </p>
                  </div>

                  {/* Element Score Pill & Batch Action */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-xl border border-slate-200 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Capaian Elemen</span>
                        <span className="text-base font-black text-slate-900 font-mono">
                          {currentElementScore?.rate || 0}%
                        </span>
                      </div>
                      <div className="border-l border-slate-200 pl-3">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Kesesuaian</span>
                        <span className="font-bold text-slate-800">
                          {currentElementScore?.compliant || 0} / {(currentElementScore?.totalCriteria || 0) - (currentElementScore?.na || 0)} Patuh
                        </span>
                      </div>
                    </div>

                    {unassessedInCurrentElement.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setIsBatchModalOpen(true)}
                        title="Tandai seluruh kriteria yang belum dinilai di elemen ini sebagai Komplian"
                        className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-200"
                      >
                        <CheckCheck className="w-4 h-4 text-emerald-600" />
                        <span className="hidden sm:inline">Set Komplian ({unassessedInCurrentElement.length})</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Criteria Mini-Map Ribbon (Instant Visual Status & Jump) */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Hash className="w-3 h-3 text-slate-400" />
                      <span>Mini-Map Kriteria Elemen {selectedElement} (Klik untuk lompat cepat):</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {currentElementCriteria.length - unassessedInCurrentElement.length} / {currentElementCriteria.length} Dinilai
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {currentElementCriteria.map((c) => {
                      const st = project.assessments[c.code]?.status || 'UNASSESSED';
                      const badgeClasses = {
                        COMPLIANT: 'bg-emerald-600 text-white border-emerald-600',
                        OFI: 'bg-sky-600 text-white border-sky-600',
                        MINOR: 'bg-amber-500 text-white border-amber-500',
                        MAJOR: 'bg-orange-500 text-white border-orange-500',
                        CRITICAL: 'bg-red-600 text-white border-red-600 animate-pulse',
                        NA: 'bg-slate-600 text-white border-slate-600',
                        UNASSESSED: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }[st];

                      return (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => {
                            const el = document.getElementById(`criteria-${c.code.replace(/\./g, '-')}`);
                            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            const idx = displayedCriteria.findIndex((d) => d.code === c.code);
                            if (idx >= 0) setFocusedIndex(idx);
                          }}
                          title={`Klausul ${c.code} - ${st}`}
                          className={`px-2 py-0.5 rounded-md font-mono text-[11px] font-bold border transition-transform hover:scale-105 ${badgeClasses}`}
                        >
                          {c.code}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Filter and Search controls */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari klausul, nomor, kata kunci, catatan..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-400/20 focus:border-slate-400 bg-slate-50/50"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="w-full sm:w-auto px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-400/20 focus:border-slate-400 bg-white font-medium"
                    >
                      <option value="ALL">Semua Status Klausul</option>
                      <option value="UNASSESSED">Belum Dinilai Saja</option>
                      <option value="COMPLIANT">Hanya Komplian & OFI</option>
                      <option value="GAP">Hanya Temuan Gap (Kritikal / Mayor / Minor)</option>
                      <option value="NA">Hanya Tidak Berlaku (N/A)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sub-Element Grouped Criteria List */}
              <div className="space-y-6">
                {displayedCriteria.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs">
                    <FileText className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-slate-800">
                      Tidak Ada Kriteria yang Sesuai dengan Filter
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Coba bersihkan kata kunci pencarian atau ubah opsi filter status di atas.
                    </p>
                  </div>
                ) : (
                  groupedCriteria.map(([subElementName, criteriaList]) => (
                    <div key={subElementName} className="space-y-3">
                      {/* Sticky Sub-Element Header */}
                      <div className="sticky top-16 z-20 bg-slate-100/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-slate-600" />
                          <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                            {subElementName}
                          </h3>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                          {criteriaList.length} Kriteria
                        </span>
                      </div>

                      {/* Criteria Cards within Sub-Element */}
                      <div className="space-y-3">
                        {criteriaList.map((criterion) => {
                          const isFocused = displayedCriteria[focusedIndex]?.code === criterion.code;

                          return (
                            <CriteriaCard
                              key={criterion.code}
                              criteria={criterion}
                              assessment={project.assessments[criterion.code]}
                              onUpdateAssessment={handleUpdateAssessment}
                              onNavigateToCap={handleNavigateToCap}
                              onInspectCriteria={(c) => setInspectingCriteria(c)}
                              isSelected={isFocused}
                              density={density}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Element Switcher & Pagination */}
              <div className="flex items-center justify-between pt-4 pb-12">
                <button
                  disabled={selectedElement <= 1}
                  onClick={() => {
                    setSelectedElement((prev) => Math.max(1, prev - 1));
                    setFocusedIndex(0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Elemen Sebelumnya</span>
                </button>

                <span className="text-xs font-extrabold text-slate-500 font-mono">
                  Elemen {selectedElement} dari 12
                </span>

                <button
                  disabled={selectedElement >= 12}
                  onClick={() => {
                    setSelectedElement((prev) => Math.min(12, prev + 1));
                    setFocusedIndex(0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-2xs"
                >
                  <span>Elemen Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Slide-over Inspection Drawer */}
      <CriteriaDrawer
        isOpen={!!inspectingCriteria}
        criteria={inspectingCriteria}
        assessment={inspectingCriteria ? project.assessments[inspectingCriteria.code] : undefined}
        onClose={() => setInspectingCriteria(null)}
        onUpdateAssessment={handleUpdateAssessment}
        onNavigateToCap={handleNavigateToCap}
        onPrevCriteria={() => {
          if (!inspectingCriteria) return;
          const idx = displayedCriteria.findIndex((c) => c.code === inspectingCriteria.code);
          if (idx > 0) setInspectingCriteria(displayedCriteria[idx - 1]);
        }}
        onNextCriteria={() => {
          if (!inspectingCriteria) return;
          const idx = displayedCriteria.findIndex((c) => c.code === inspectingCriteria.code);
          if (idx < displayedCriteria.length - 1) setInspectingCriteria(displayedCriteria[idx + 1]);
        }}
        hasPrev={
          !!inspectingCriteria &&
          displayedCriteria.findIndex((c) => c.code === inspectingCriteria.code) > 0
        }
        hasNext={
          !!inspectingCriteria &&
          displayedCriteria.findIndex((c) => c.code === inspectingCriteria.code) < displayedCriteria.length - 1
        }
      />

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={project.profile}
        onSave={handleSaveProfile}
      />

      {/* Batch Mark Compliant Confirmation Modal */}
      {isBatchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center gap-3 text-emerald-600">
              <div className="p-2.5 bg-emerald-100 rounded-xl">
                <CheckCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Tandai Komplian Massal
                </h3>
                <p className="text-xs text-slate-500">Elemen {selectedElement}: {currentElementObj.name}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Anda akan menandai <strong>{unassessedInCurrentElement.length} kriteria</strong> yang belum dinilai pada Elemen ini sebagai <strong>Komplian (Patuh)</strong> dengan skor 1. Kriteria yang sudah dinilai sebelumnya tidak akan diubah.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsBatchModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleBatchMarkCompliant}
                className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
              >
                Ya, Tandai Komplian
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
