'use client';

import React, { useState } from 'react';
import { X, Building2, User, Calendar, AlertTriangle, Layers, Users, Info, CheckCircle2 } from 'lucide-react';
import { CompanyProfile, AuditTier } from '@/types/smk3';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CompanyProfile;
  onSave: (updated: CompanyProfile) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave
}) => {
  const [formData, setFormData] = useState<CompanyProfile>(profile);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const isMandatoryLanjutan = formData.employeeCount >= 100 || formData.riskLevel === 'HIGH';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-slate-900 text-white rounded-xl">
              <Building2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Profil Perusahaan & Parameter Audit
              </h2>
              <p className="text-xs text-slate-500">
                Landasan yuridis asesmen berbasis PP No. 50 Tahun 2012
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nama Perusahaan
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              placeholder="Contoh: PT Sumber Makmur Kencana"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Sektor / Bidang Usaha
              </label>
              <input
                type="text"
                required
                value={formData.industryType}
                onChange={(e) => setFormData({ ...formData, industryType: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                placeholder="Contoh: Manufaktur Kimia"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Kategori Tingkat Bahaya
              </label>
              <select
                value={formData.riskLevel}
                onChange={(e) => setFormData({ ...formData, riskLevel: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white font-medium"
              >
                <option value="LOW">Rendah (Low Risk)</option>
                <option value="MEDIUM">Sedang (Medium Risk)</option>
                <option value="HIGH">Tinggi (High Risk)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Jumlah Tenaga Kerja
              </label>
              <div className="relative">
                <Users className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.employeeCount}
                  onChange={(e) => setFormData({ ...formData, employeeCount: parseInt(e.target.value) || 0 })}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tanggal Audit / Asesmen
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="date"
                  required
                  value={formData.auditDate}
                  onChange={(e) => setFormData({ ...formData, auditDate: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-mono"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Lead Auditor / Penilai K3
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                required
                value={formData.leadAuditor}
                onChange={(e) => setFormData({ ...formData, leadAuditor: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                placeholder="Nama Auditor K3"
              />
            </div>
          </div>

          {/* Statutory Recommendation Banner */}
          {isMandatoryLanjutan && (
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Ketentuan Pasal 5 ayat (2) PP 50/2012:</span>
                <p className="mt-0.5 text-blue-800 leading-relaxed text-[11px]">
                  Perusahaan dengan tenaga kerja $\ge 100$ orang atau memiliki potensi bahaya tinggi <strong>wajib menerapkan Tingkat Lanjutan (166 Kriteria)</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Audit Tier Selection */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Pilihan Tingkat Penerapan Audit SMK3
            </label>
            <div className="space-y-2">
              <label
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.auditTier === 'awal'
                    ? 'border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/10'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="auditTier"
                  value="awal"
                  checked={formData.auditTier === 'awal'}
                  onChange={() => setFormData({ ...formData, auditTier: 'awal' })}
                  className="mt-1 text-emerald-600 focus:ring-emerald-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Tingkat Awal (64 Kriteria)</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-medium">Elemen 1 s/d 6</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Skala kecil, potensi bahaya rendah, dan tenaga kerja &lt; 100 orang.
                  </p>
                </div>
              </label>

              <label
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.auditTier === 'transisi'
                    ? 'border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/10'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="auditTier"
                  value="transisi"
                  checked={formData.auditTier === 'transisi'}
                  onChange={() => setFormData({ ...formData, auditTier: 'transisi' })}
                  className="mt-1 text-emerald-600 focus:ring-emerald-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Tingkat Transisi (122 Kriteria)</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-medium">Elemen 1 s/d 9</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Skala menengah dengan permesinan atau potensi bahaya sedang.
                  </p>
                </div>
              </label>

              <label
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  formData.auditTier === 'lanjutan'
                    ? 'border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/10'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="auditTier"
                  value="lanjutan"
                  checked={formData.auditTier === 'lanjutan'}
                  onChange={() => setFormData({ ...formData, auditTier: 'lanjutan' })}
                  className="mt-1 text-emerald-600 focus:ring-emerald-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Tingkat Lanjutan (166 Kriteria)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">12 Elemen Lengkap</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Wajib bagi industri risiko tinggi (pertambangan, migas, konstruksi) atau tenaga kerja $\ge 100$ orang.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex items-center justify-end gap-2.5 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
            >
              Simpan Profil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
