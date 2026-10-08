'use client';

import React from 'react';
import { AuditProject, ScoreSummary } from '@/types/smk3';
import { SMK3_ELEMENTS, SMK3_CRITERIA } from '@/lib/data/smk3-data';
import { getApplicableCriteria } from '@/lib/scoring';

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
    <div className="hidden print:block print:p-8 bg-white text-slate-900 font-sans text-xs leading-normal">
      {/* Official Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500 block">
              SISTEM MANAJEMEN KESELAMATAN DAN KESEHATAN KERJA (SMK3)
            </span>
            <h1 className="text-xl font-black uppercase text-slate-950 mt-1">
              LAPORAN FORMAL GAP ANALYSIS & AUDIT PENERAPAN SMK3
            </h1>
            <p className="text-xs text-slate-600 mt-0.5">
              Berdasarkan Ketentuan Peraturan Pemerintah Republik Indonesia No. 50 Tahun 2012 Lampiran II
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block border border-slate-900 px-3 py-1 font-mono font-bold text-xs uppercase">
              TINGKAT {project.profile.auditTier.toUpperCase()} ({score.totalApplicable} KRITERIA)
            </span>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">
              Dokumen Ref: SMK3-GAP-{new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Profil Perusahaan & Parameter Audit */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1 mb-2 text-slate-900">
          1. Profil Organisasi & Parameter Penilaian
        </h2>
        <table className="w-full border-collapse border border-slate-300 text-xs">
          <tbody>
            <tr>
              <td className="w-1/4 p-2 font-bold bg-slate-50 border border-slate-300">Nama Perusahaan</td>
              <td className="w-1/4 p-2 border border-slate-300">{project.profile.companyName}</td>
              <td className="w-1/4 p-2 font-bold bg-slate-50 border border-slate-300">Tanggal Asesmen</td>
              <td className="w-1/4 p-2 border border-slate-300">{project.profile.auditDate}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold bg-slate-50 border border-slate-300">Sektor / Bidang Usaha</td>
              <td className="p-2 border border-slate-300">{project.profile.industryType}</td>
              <td className="p-2 font-bold bg-slate-50 border border-slate-300">Lead Auditor / Penilai</td>
              <td className="p-2 border border-slate-300">{project.profile.leadAuditor}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold bg-slate-50 border border-slate-300">Tingkat Potensi Bahaya</td>
              <td className="p-2 border border-slate-300 font-bold">{project.profile.riskLevel} RISK</td>
              <td className="p-2 font-bold bg-slate-50 border border-slate-300">Jumlah Tenaga Kerja</td>
              <td className="p-2 border border-slate-300">{project.profile.employeeCount} Orang</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2: Hasil Skor & Predikat Sertifikasi */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1 mb-2 text-slate-900">
          2. Rekapitulasi Hasil Penilaian & Status Kelulusan
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <table className="border-collapse border border-slate-300 text-xs">
            <tbody>
              <tr>
                <td className="p-2 font-bold bg-slate-50 border border-slate-300">Total Kriteria Berlaku</td>
                <td className="p-2 border border-slate-300 font-mono text-right">{score.totalApplicable}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold bg-slate-50 border border-slate-300">Kriteria Sesuai / Komplian (Patuh)</td>
                <td className="p-2 border border-slate-300 font-mono text-right text-emerald-800 font-bold">
                  {score.totalCompliant}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-bold bg-slate-50 border border-slate-300">Peluang Peningkatan (OFI)</td>
                <td className="p-2 border border-slate-300 font-mono text-right">{score.totalOfi}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold bg-slate-50 border border-slate-300">Ketidaksesuaian Minor</td>
                <td className="p-2 border border-slate-300 font-mono text-right text-amber-800">{score.totalMinor}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold bg-slate-50 border border-slate-300">Ketidaksesuaian Mayor</td>
                <td className="p-2 border border-slate-300 font-mono text-right text-orange-800 font-bold">
                  {score.totalMajor}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-bold bg-slate-50 border border-slate-300">Ketidaksesuaian Kritikal</td>
                <td className="p-2 border border-slate-300 font-mono text-right text-red-800 font-bold">
                  {score.totalCritical}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-bold bg-slate-50 border border-slate-300">Tidak Berlaku (N/A)</td>
                <td className="p-2 border border-slate-300 font-mono text-right">{score.totalNA}</td>
              </tr>
            </tbody>
          </table>

          {/* Decision Box */}
          <div className="border-2 border-slate-900 p-4 rounded-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-500 block">
                SKOR TINGKAT KEPATUHAN:
              </span>
              <div className="text-3xl font-black text-slate-950 mt-1 font-mono">
                {score.complianceRate}%
              </div>
              <div className="text-xs font-bold uppercase mt-2 text-slate-900">
                PREDIKAT: {score.awardTitle}
              </div>
              <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                {score.awardDescription}
              </p>
            </div>
            <div className="text-[10px] text-slate-400 font-mono mt-2 border-t pt-2">
              Validasi Yuridis PP No. 50/2012 &bull; Kemnaker RI
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Tabel Rekapitulasi 12 Elemen */}
      <div className="mb-6 page-break-inside-avoid">
        <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1 mb-2 text-slate-900">
          3. Distribusi Capaian 12 Elemen Audit SMK3
        </h2>
        <table className="w-full border-collapse border border-slate-300 text-[11px]">
          <thead>
            <tr className="bg-slate-100 font-bold text-center">
              <th className="p-1.5 border border-slate-300 w-8">No</th>
              <th className="p-1.5 border border-slate-300 text-left">Nama Elemen Audit SMK3</th>
              <th className="p-1.5 border border-slate-300 w-16">Total</th>
              <th className="p-1.5 border border-slate-300 w-16 text-emerald-800">Komplian</th>
              <th className="p-1.5 border border-slate-300 w-12 text-amber-800">Minor</th>
              <th className="p-1.5 border border-slate-300 w-12 text-orange-800">Mayor</th>
              <th className="p-1.5 border border-slate-300 w-12 text-red-800">Kritikal</th>
              <th className="p-1.5 border border-slate-300 w-16 text-right">Skor (%)</th>
            </tr>
          </thead>
          <tbody>
            {SMK3_ELEMENTS.map((el) => {
              const elScore = score.elementScores[el.elementNum];
              return (
                <tr key={el.elementNum} className="border border-slate-300">
                  <td className="p-1.5 border border-slate-300 text-center font-mono">{el.elementNum}</td>
                  <td className="p-1.5 border border-slate-300 font-medium">{el.name}</td>
                  <td className="p-1.5 border border-slate-300 text-center font-mono">{elScore.totalCriteria}</td>
                  <td className="p-1.5 border border-slate-300 text-center font-mono font-bold text-emerald-800">{elScore.compliant}</td>
                  <td className="p-1.5 border border-slate-300 text-center font-mono">{elScore.minor}</td>
                  <td className="p-1.5 border border-slate-300 text-center font-mono">{elScore.major}</td>
                  <td className="p-1.5 border border-slate-300 text-center font-mono">{elScore.critical}</td>
                  <td className="p-1.5 border border-slate-300 text-right font-mono font-bold">{elScore.rate}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Section 4: Matriks Temuan Ketidaksesuaian & CAP */}
      {gapCriteria.length > 0 && (
        <div className="mb-6 page-break-before-always">
          <h2 className="text-sm font-bold uppercase border-b border-slate-300 pb-1 mb-2 text-slate-900">
            4. Daftar Ketidaksesuaian & Rencana Tindak Lanjut (CAP)
          </h2>
          <table className="w-full border-collapse border border-slate-300 text-[10px]">
            <thead>
              <tr className="bg-slate-100 font-bold text-center">
                <th className="p-1.5 border border-slate-300 w-12">Klausul</th>
                <th className="p-1.5 border border-slate-300 w-16">Kategori</th>
                <th className="p-1.5 border border-slate-300 text-left">Uraian Temuan / Bukti Objektif</th>
                <th className="p-1.5 border border-slate-300 text-left">Tindakan Korektif & Preventif</th>
                <th className="p-1.5 border border-slate-300 w-20">PIC</th>
                <th className="p-1.5 border border-slate-300 w-20">Target</th>
                <th className="p-1.5 border border-slate-300 w-16">Status</th>
              </tr>
            </thead>
            <tbody>
              {gapCriteria.map((c) => {
                const a = project.assessments[c.code];
                const cap = project.capItems[c.code];
                return (
                  <tr key={c.code} className="border border-slate-300">
                    <td className="p-1.5 border border-slate-300 font-mono font-bold text-center">{c.code}</td>
                    <td className="p-1.5 border border-slate-300 font-bold text-center">
                      <span className={
                        a?.status === 'CRITICAL' ? 'text-red-700' :
                        a?.status === 'MAJOR' ? 'text-orange-700' : 'text-amber-700'
                      }>
                        {a?.status}
                      </span>
                    </td>
                    <td className="p-1.5 border border-slate-300">
                      <div className="font-semibold text-slate-800">{c.clauseText}</div>
                      <div className="mt-0.5 text-slate-600 italic">Fakta: {a?.findingNotes || '-'}</div>
                    </td>
                    <td className="p-1.5 border border-slate-300">
                      <div><span className="font-bold">Korektif:</span> {cap?.correctiveAction || '-'}</div>
                      <div className="mt-0.5"><span className="font-bold">Preventif:</span> {cap?.preventiveAction || '-'}</div>
                    </td>
                    <td className="p-1.5 border border-slate-300 text-center">{cap?.pic || '-'}</td>
                    <td className="p-1.5 border border-slate-300 text-center font-mono">{cap?.dueDate || '-'}</td>
                    <td className="p-1.5 border border-slate-300 text-center font-bold">{cap?.status || 'OPEN'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Section 5: Lembar Pengesahan Tanda Tangan */}
      <div className="mt-8 pt-4 border-t border-slate-300 page-break-inside-avoid">
        <h2 className="text-sm font-bold uppercase mb-4 text-slate-900">
          5. Lembar Pengesahan Audit SMK3
        </h2>
        <div className="grid grid-cols-3 gap-6 text-center text-xs">
          <div>
            <p className="font-medium text-slate-600">Disusun Oleh,</p>
            <p className="font-bold text-slate-900 mt-0.5">Lead Auditor K3</p>
            <div className="h-16"></div>
            <p className="font-bold underline text-slate-900">({project.profile.leadAuditor})</p>
            <p className="text-[10px] text-slate-500">Auditor SMK3 Bersertifikat</p>
          </div>

          <div>
            <p className="font-medium text-slate-600">Diverifikasi Oleh,</p>
            <p className="font-bold text-slate-900 mt-0.5">Sekretaris P2K3 / Ahli K3</p>
            <div className="h-16"></div>
            <p className="font-bold underline text-slate-900">( ............................................ )</p>
            <p className="text-[10px] text-slate-500">SK Penunjukan Ahli K3 Umum</p>
          </div>

          <div>
            <p className="font-medium text-slate-600">Disetujui Oleh,</p>
            <p className="font-bold text-slate-900 mt-0.5">Pucuk Pimpinan / Direktur Utama</p>
            <div className="h-16"></div>
            <p className="font-bold underline text-slate-900">( ............................................ )</p>
            <p className="text-[10px] text-slate-500">{project.profile.companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
