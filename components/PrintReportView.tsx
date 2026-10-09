'use client';

import React from 'react';
import { AuditProject, ScoreSummary } from '@/types/smk3';
import { SMK3_ELEMENTS, SMK3_CRITERIA } from '@/lib/data/smk3-data';
import { getApplicableCriteria } from '@/lib/scoring';
import { SeverityMark } from './primitives/SeverityMark';

interface PrintReportViewProps {
  project: AuditProject;
  score: ScoreSummary;
}

export const PrintReportView: React.FC<PrintReportViewProps> = ({
  project,
  score
}) => {
  const applicable = getApplicableCriteria(project.profile.auditTier, SMK3_CRITERIA);
  
  const gapCriteria = applicable.filter((c) => {
    const s = project.assessments[c.code]?.status;
    return s === 'CRITICAL' || s === 'MAJOR' || s === 'MINOR';
  });

  return (
    <div className="hidden print:block print:p-8 bg-white text-[var(--ink-900)] font-sans text-[11px] leading-[1.4] max-w-none">
      {/* Official Header */}
      <div className="border-b-2 border-[var(--ink-900)] pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="label-xs text-[9px] font-semibold tracking-wider uppercase text-[var(--ink-500)] block">
              SISTEM MANAJEMEN KESELAMATAN DAN KESEHATAN KERJA (SMK3)
            </span>
            <h1 className="text-[18px] font-bold uppercase text-[var(--ink-900)] mt-1">
              LAPORAN HASIL GAP ANALYSIS & AUDIT SMK3
            </h1>
            <p className="text-[11px] text-[var(--ink-700)] mt-0.5">
              Lampiran II Peraturan Pemerintah Republik Indonesia No. 50 Tahun 2012
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block border border-[var(--ink-900)] px-2.5 py-1 font-mono font-bold text-[11px] uppercase">
              TINGKAT {project.profile.auditTier.toUpperCase()} ({score.totalApplicable} KRITERIA)
            </span>
            <div className="text-[9px] text-[var(--ink-500)] mt-1 font-mono">
              Dokumen Ref: SMK3-GAP-{new Date().getFullYear()}-{project.id.slice(-6)}
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Profil Perusahaan & Parameter Audit */}
      <div className="mb-6">
        <h2 className="text-[12px] font-bold uppercase border-b border-[var(--border-strong)] pb-1 mb-2 text-[var(--ink-900)]">
          1. Profil Organisasi & Parameter Penilaian
        </h2>
        <table className="w-full border-collapse border border-[var(--border-default)] text-[11px]">
          <tbody>
            <tr>
              <td className="w-1/4 p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Nama Perusahaan</td>
              <td className="w-1/4 p-2 border border-[var(--border-default)]">{project.profile.companyName}</td>
              <td className="w-1/4 p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Tanggal Asesmen</td>
              <td className="w-1/4 p-2 font-mono border border-[var(--border-default)]">{project.profile.auditDate}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Sektor / Bidang Usaha</td>
              <td className="p-2 border border-[var(--border-default)]">{project.profile.industryType}</td>
              <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Lead Auditor / Penilai</td>
              <td className="p-2 border border-[var(--border-default)]">{project.profile.leadAuditor}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Kategori Tingkat Bahaya</td>
              <td className="p-2 border border-[var(--border-default)] font-semibold">{project.profile.riskLevel} RISK</td>
              <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Jumlah Tenaga Kerja</td>
              <td className="p-2 font-mono border border-[var(--border-default)]">{project.profile.employeeCount} Orang</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2: Hasil Skor & Predikat Sertifikasi */}
      <div className="mb-6">
        <h2 className="text-[12px] font-bold uppercase border-b border-[var(--border-strong)] pb-1 mb-2 text-[var(--ink-900)]">
          2. Rekapitulasi Hasil Penilaian & Status Kelulusan
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <table className="border-collapse border border-[var(--border-default)] text-[11px]">
            <tbody>
              <tr>
                <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Total Kriteria Berlaku</td>
                <td className="p-2 border border-[var(--border-default)] font-mono text-right">{score.totalApplicable}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Kriteria Komplian (Patuh)</td>
                <td className="p-2 border border-[var(--border-default)] font-mono font-bold text-right">
                  {score.totalCompliant}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Ketidaksesuaian Minor</td>
                <td className="p-2 border border-[var(--border-default)] font-mono text-right">{score.totalMinor}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Ketidaksesuaian Mayor</td>
                <td className="p-2 border border-[var(--border-default)] font-mono font-bold text-right">
                  {score.totalMajor}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Ketidaksesuaian Kritikal</td>
                <td className="p-2 border border-[var(--border-default)] font-mono font-bold text-right">
                  {score.totalCritical}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold bg-[#FAF9F6] border border-[var(--border-default)]">Tidak Berlaku (N/A)</td>
                <td className="p-2 border border-[var(--border-default)] font-mono text-right">{score.totalNA}</td>
              </tr>
            </tbody>
          </table>

          {/* Decision Box */}
          <div className="border border-[var(--border-strong)] p-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase text-[var(--ink-500)] block">
                SKOR TINGKAT KEPATUHAN:
              </span>
              <div className="text-[28px] font-black text-[var(--ink-900)] mt-1 font-mono">
                {score.complianceRate}%
              </div>
              <div className="text-[11px] font-bold uppercase mt-2 text-[var(--ink-900)]">
                PREDIKAT: {score.awardTitle}
              </div>
              <p className="text-[10px] text-[var(--ink-700)] mt-2 leading-[1.45]">
                {score.awardDescription}
              </p>
            </div>
            <div className="text-[9px] text-[var(--ink-500)] mt-3 border-t border-[var(--border-subtle)] pt-2 uppercase">
              Validasi Yuridis PP No. 50/2012
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Tabel Rekapitulasi 12 Elemen */}
      <div className="mb-6 page-break-inside-avoid">
        <h2 className="text-[12px] font-bold uppercase border-b border-[var(--border-strong)] pb-1 mb-2 text-[var(--ink-900)]">
          3. Distribusi Capaian 12 Elemen Audit SMK3
        </h2>
        <table className="w-full border-collapse border border-[var(--border-default)] text-[10px]">
          <thead>
            <tr className="bg-[#FAF9F6] font-semibold text-center border-b border-[var(--border-default)]">
              <th className="p-1.5 border border-[var(--border-default)] w-8">No</th>
              <th className="p-1.5 border border-[var(--border-default)] text-left">Nama Elemen Audit SMK3</th>
              <th className="p-1.5 border border-[var(--border-default)] w-12">Total</th>
              <th className="p-1.5 border border-[var(--border-default)] w-16">Komplian</th>
              <th className="p-1.5 border border-[var(--border-default)] w-12">Minor</th>
              <th className="p-1.5 border border-[var(--border-default)] w-12">Mayor</th>
              <th className="p-1.5 border border-[var(--border-default)] w-12">Kritikal</th>
              <th className="p-1.5 border border-[var(--border-default)] w-12">N/A</th>
              <th className="p-1.5 border border-[var(--border-default)] w-16 text-right">Skor (%)</th>
            </tr>
          </thead>
          <tbody>
            {SMK3_ELEMENTS.map((el) => {
              const elScore = score.elementScores[el.elementNum];
              return (
                <tr key={el.elementNum} className="border border-[var(--border-subtle)]">
                  <td className="p-1.5 border-r border-[var(--border-subtle)] text-center font-mono">{el.elementNum}</td>
                  <td className="p-1.5 border-r border-[var(--border-subtle)] font-medium text-[11px]">{el.name}</td>
                  <td className="p-1.5 border-r border-[var(--border-subtle)] text-center font-mono">{elScore.totalCriteria}</td>
                  <td className="p-1.5 border-r border-[var(--border-subtle)] text-center font-mono font-bold">{elScore.compliant}</td>
                  <td className="p-1.5 border-r border-[var(--border-subtle)] text-center font-mono">{elScore.minor}</td>
                  <td className="p-1.5 border-r border-[var(--border-subtle)] text-center font-mono font-bold">{elScore.major > 0 ? elScore.major : 0}</td>
                  <td className="p-1.5 border-r border-[var(--border-subtle)] text-center font-mono font-bold">{elScore.critical > 0 ? elScore.critical : 0}</td>
                  <td className="p-1.5 border-r border-[var(--border-subtle)] text-center font-mono">{elScore.na}</td>
                  <td className="p-1.5 border-l border-[var(--border-default)] text-right font-mono font-bold">{elScore.rate}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Section 4: Matriks Temuan Ketidaksesuaian & CAP */}
      {gapCriteria.length > 0 && (
        <div className="mb-6 page-break-before-always">
          <h2 className="text-[12px] font-bold uppercase border-b border-[var(--border-strong)] pb-1 mb-2 text-[var(--ink-900)]">
            4. Daftar Ketidaksesuaian & Rencana Tindak Lanjut (CAP)
          </h2>
          <table className="w-full border-collapse border border-[var(--border-default)] text-[10px]">
            <thead>
              <tr className="bg-[#FAF9F6] font-semibold text-center border-b border-[var(--border-default)]">
                <th className="p-2 border border-[var(--border-default)] w-12">Klausul</th>
                <th className="p-2 border border-[var(--border-default)] w-20">Kategori</th>
                <th className="p-2 border border-[var(--border-default)] text-left">Uraian Temuan / Bukti Objektif</th>
                <th className="p-2 border border-[var(--border-default)] text-left">Analisis Akar Masalah (Root Cause)</th>
                <th className="p-2 border border-[var(--border-default)] text-left">Tindakan Korektif & Preventif</th>
                <th className="p-2 border border-[var(--border-default)] w-16">Batas Waktu</th>
              </tr>
            </thead>
            <tbody>
              {gapCriteria.map((c) => {
                const a = project.assessments[c.code];
                const cap = project.capItems[c.code];
                return (
                  <tr key={c.code} className="border-b border-[var(--border-default)]">
                    <td className="p-2 border-r border-[var(--border-subtle)] font-mono font-bold text-center align-top">{c.code}</td>
                    <td className="p-2 border-r border-[var(--border-subtle)] font-bold text-center align-top">
                      <div className="flex justify-center">
                        <SeverityMark status={a?.status} showIcon={false} size="sm" />
                      </div>
                    </td>
                    <td className="p-2 border-r border-[var(--border-subtle)] align-top">
                      <div className="font-semibold text-[var(--ink-900)] mb-1 leading-[1.3]">{c.clauseText}</div>
                      <div className="text-[var(--ink-700)] leading-[1.3]"><span className="font-semibold text-[var(--ink-900)]">Fakta:</span> {a?.findingNotes || '-'}</div>
                    </td>
                    <td className="p-2 border-r border-[var(--border-subtle)] align-top leading-[1.3] text-[var(--ink-700)]">
                      {cap?.rootCause || '-'}
                    </td>
                    <td className="p-2 border-r border-[var(--border-subtle)] align-top leading-[1.3]">
                      <div className="mb-1"><span className="font-semibold text-[var(--ink-900)] block">Korektif:</span> <span className="text-[var(--ink-700)]">{cap?.correctiveAction || '-'}</span></div>
                      <div><span className="font-semibold text-[var(--ink-900)] block">Preventif:</span> <span className="text-[var(--ink-700)]">{cap?.preventiveAction || '-'}</span></div>
                    </td>
                    <td className="p-2 align-top text-center">
                      <div className="font-mono font-bold">{cap?.dueDate || '-'}</div>
                      <div className="text-[9px] mt-1 uppercase tracking-wider text-[var(--ink-500)]">{cap?.pic || '-'}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Section 5: Lembar Pengesahan Tanda Tangan */}
      <div className="mt-8 pt-4 border-t border-[var(--border-strong)] page-break-inside-avoid">
        <h2 className="text-[12px] font-bold uppercase mb-6 text-[var(--ink-900)] text-center">
          5. Lembar Pengesahan Audit SMK3
        </h2>
        <div className="grid grid-cols-3 gap-6 text-center text-[11px]">
          <div>
            <p className="font-medium text-[var(--ink-700)]">Disusun Oleh,</p>
            <p className="font-bold text-[var(--ink-900)] mt-0.5">Lead Auditor K3</p>
            <div className="h-20"></div>
            <p className="font-bold text-[var(--ink-900)]">({project.profile.leadAuditor})</p>
            <p className="text-[9px] text-[var(--ink-500)] uppercase tracking-wider mt-0.5 border-t border-[var(--border-default)] pt-1 mx-8">Auditor SMK3 Bersertifikat</p>
          </div>

          <div>
            <p className="font-medium text-[var(--ink-700)]">Diverifikasi Oleh,</p>
            <p className="font-bold text-[var(--ink-900)] mt-0.5">Sekretaris P2K3 / Ahli K3</p>
            <div className="h-20"></div>
            <p className="font-bold text-[var(--ink-900)]">( ............................................ )</p>
            <p className="text-[9px] text-[var(--ink-500)] uppercase tracking-wider mt-0.5 border-t border-[var(--border-default)] pt-1 mx-8">SK Penunjukan Ahli K3 Umum</p>
          </div>

          <div>
            <p className="font-medium text-[var(--ink-700)]">Disetujui Oleh,</p>
            <p className="font-bold text-[var(--ink-900)] mt-0.5">Pucuk Pimpinan / Direktur Utama</p>
            <div className="h-20"></div>
            <p className="font-bold text-[var(--ink-900)]">( ............................................ )</p>
            <p className="text-[9px] text-[var(--ink-500)] uppercase tracking-wider mt-0.5 border-t border-[var(--border-default)] pt-1 mx-8">{project.profile.companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
