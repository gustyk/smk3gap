'use client';

import React, { useState } from 'react';
import { X, Building2, User, Calendar, Users, Info } from 'lucide-react';
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
  onSave,
}) => {
  const [formData, setFormData] = useState<CompanyProfile>(profile);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const isMandatoryLanjutan = formData.employeeCount >= 100 || formData.riskLevel === 'HIGH';

  const tierOptions: { value: AuditTier; label: string; count: number; description: string }[] = [
    { value: 'awal', label: 'Tingkat Awal', count: 64, description: 'Skala kecil, potensi bahaya rendah, tenaga kerja < 100 orang.' },
    { value: 'transisi', label: 'Tingkat Transisi', count: 122, description: 'Skala menengah dengan permesinan atau potensi bahaya sedang.' },
    { value: 'lanjutan', label: 'Tingkat Lanjutan', count: 166, description: 'Wajib bagi industri risiko tinggi atau tenaga kerja ≥ 100 orang.' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[var(--surface)] border border-[var(--border-default)] rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-[44px] px-4 bg-[var(--sunken)] border-b border-[var(--border-default)] flex items-center justify-between">
          <span className="label-xs text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-700)]">
            Profil Perusahaan & Parameter Audit
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-[3px] text-[var(--ink-400)] hover:text-[var(--ink-900)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto text-[12px]">
          {/* Nama Perusahaan */}
          <div>
            <label className="block text-[11px] font-medium text-[var(--ink-700)] mb-1">Nama Perusahaan</label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={e => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full h-[30px] px-2.5 text-[13px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              placeholder="PT Nama Perusahaan"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Sektor Usaha */}
            <div>
              <label className="block text-[11px] font-medium text-[var(--ink-700)] mb-1">Sektor / Bidang Usaha</label>
              <input
                type="text"
                required
                value={formData.industryType}
                onChange={e => setFormData({ ...formData, industryType: e.target.value })}
                className="w-full h-[30px] px-2.5 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                placeholder="Manufaktur Kimia"
              />
            </div>

            {/* Risk Level */}
            <div>
              <label className="block text-[11px] font-medium text-[var(--ink-700)] mb-1">Kategori Tingkat Bahaya</label>
              <select
                value={formData.riskLevel}
                onChange={e => setFormData({ ...formData, riskLevel: e.target.value as any })}
                className="w-full h-[30px] px-2 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:border-[var(--accent)] focus:outline-none cursor-pointer text-[var(--ink-900)]"
              >
                <option value="LOW">Rendah (Low Risk)</option>
                <option value="MEDIUM">Sedang (Medium Risk)</option>
                <option value="HIGH">Tinggi (High Risk)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Jumlah TK */}
            <div>
              <label className="block text-[11px] font-medium text-[var(--ink-700)] mb-1">Jumlah Tenaga Kerja</label>
              <input
                type="number"
                min="1"
                required
                value={formData.employeeCount}
                onChange={e => setFormData({ ...formData, employeeCount: parseInt(e.target.value) || 0 })}
                className="w-full h-[30px] px-2.5 font-mono text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors tabular-nums"
              />
            </div>

            {/* Tanggal Audit */}
            <div>
              <label className="block text-[11px] font-medium text-[var(--ink-700)] mb-1">Tanggal Asesmen</label>
              <input
                type="date"
                required
                value={formData.auditDate}
                onChange={e => setFormData({ ...formData, auditDate: e.target.value })}
                className="w-full h-[30px] px-2.5 font-mono text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Lead Auditor */}
          <div>
            <label className="block text-[11px] font-medium text-[var(--ink-700)] mb-1">Lead Auditor / Penilai K3</label>
            <input
              type="text"
              required
              value={formData.leadAuditor}
              onChange={e => setFormData({ ...formData, leadAuditor: e.target.value })}
              className="w-full h-[30px] px-2.5 text-[12px] rounded-[3px] border border-[var(--border-default)] bg-[var(--canvas)] focus:bg-[var(--surface)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              placeholder="Nama Auditor K3 Bersertifikat"
            />
          </div>

          {/* Statutory notice */}
          {isMandatoryLanjutan && (
            <div className="px-3 py-2.5 rounded-[4px] bg-[var(--accent-tint)] border border-[var(--border-subtle)] text-[11px] text-[var(--ink-700)]">
              <strong>Pasal 5 ayat (2) PP 50/2012:</strong> Perusahaan dengan ≥ 100 tenaga kerja atau risiko tinggi <strong>wajib Tingkat Lanjutan (166 Kriteria).</strong>
            </div>
          )}

          {/* Audit Tier Selection */}
          <div>
            <label className="block text-[11px] font-medium text-[var(--ink-700)] mb-1.5">Tingkat Penerapan SMK3</label>
            <div className="space-y-1.5">
              {tierOptions.map(tier => (
                <label
                  key={tier.value}
                  className={`flex items-start gap-3 px-3 py-2.5 rounded-[4px] border cursor-pointer transition-colors ${
                    formData.auditTier === tier.value
                      ? 'border-[var(--accent)] bg-[var(--accent-tint)]'
                      : 'border-[var(--border-default)] hover:bg-[var(--sunken)]'
                  }`}
                >
                  <input
                    type="radio"
                    name="auditTier"
                    value={tier.value}
                    checked={formData.auditTier === tier.value}
                    onChange={() => setFormData({ ...formData, auditTier: tier.value })}
                    className="mt-0.5 accent-[var(--accent)] cursor-pointer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[12px] font-semibold text-[var(--ink-900)]">{tier.label}</span>
                      <span className="font-mono text-[11px] text-[var(--ink-500)] tabular-nums shrink-0">
                        {tier.count} kriteria
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--ink-500)] mt-0.5">
                      {tier.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={onClose}
              className="h-[30px] px-3 text-[12px] font-medium text-[var(--ink-700)] hover:bg-[var(--sunken)] rounded-[3px] transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="h-[30px] px-4 text-[12px] font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-[3px] transition-colors cursor-pointer"
            >
              Simpan profil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
