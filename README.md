# Aplikasi Web Gap Analysis SMK3 (PP No. 50 Tahun 2012)

Aplikasi web modern, interaktif, dan komprehensif untuk evaluasi kesenjangan (*Gap Analysis*), audit mandiri (*Self-Assessment*), dan penyusunan *Corrective Action Plan* (CAP) penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) berbasis Peraturan Pemerintah No. 50 Tahun 2012.

---

## 📌 Fitur Utama

1. **Knowledge Base Terpadu 166 Kriteria**:
   - Diekstrak langsung dari berkas master `Tabel Audit SMK3 166 Kriteria PP 50 Tahun 2012.xlsx`.
   - Meliputi 12 Elemen Audit dan 40 Sub-Elemen normatif PP 50/2012.
   - Dilengkapi **Interpretasi Klausul**, **Daftar Bukti Objektif Acuan**, dan **Tolok Ukur Benchmark Temuan** (Komplian vs Minor vs Mayor vs Kritikal vs OFI).

2. **Dukungan 3 Tingkatan Penerapan Audit**:
   - **Tingkat Awal (64 Kriteria)**: Untuk perusahaan kecil / potensi bahaya rendah / tenaga kerja < 100 orang (Elemen 1 s/d 6).
   - **Tingkat Transisi (122 Kriteria)**: Untuk perusahaan menengah / potensi bahaya sedang (Elemen 1 s/d 9).
   - **Tingkat Lanjutan (166 Kriteria)**: Untuk industri risiko tinggi / potensi bahaya besar / tenaga kerja ≥ 100 orang (12 Elemen Lengkap).

3. **Mesin Penilaian Otomatis & Aturan Kelulusan Yuridis**:
   - Penghitungan persentase kepatuhan *real-time*: $\text{Skor (\%)} = \frac{\sum \text{Komplian}}{\text{Total Berlaku} - \text{N/A}} \times 100\%$.
   - **Simulasi Predikat Kemnaker**:
     - $\ge 85\%$: Tingkat Pencapaian Memuaskan (**Sertifikat Emas & Bendera Emas**).
     - $60\% - 84\%$: Tingkat Pencapaian Baik (**Sertifikat Perak & Bendera Perak**).
     - $< 60\%$: Tingkat Pencapaian Kurang (**Tidak Lulus**).
   - **Aturan Khusus PP 50/2012**:
     - *Gugur Otomatis* jika terdapat minimal 1 temuan **Kritikal** (*Stop Work Order*).
     - *Sertifikat Ditangguhkan* jika terdapat temuan **Mayor** (batas waktu perbaikan 1 bulan).

4. **Visual Dashboard & Radar Chart 12 Elemen**:
   - Diagram radar SVG interaktif untuk memetakan kekuatan dan kelemahan sistem per elemen.
   - Ringkasan proporsi temuan (*Finding Distribution Pills*).

5. **Matriks Corrective Action Plan (CAP) Tracker**:
   - Agregasi otomatis klausul yang memiliki gap (Kritikal, Mayor, Minor).
   - Analisis akar masalah (*Root Cause*), tindakan perbaikan, tindakan pencegahan, PIC, batas waktu, dan status tindak lanjut (*Open*, *In Progress*, *Resolved*, *Verified*).

6. **Penyimpanan Lokal & Ekspor Ganda**:
   - **Offline-First**: Data audit tersimpan aman dan otomatis di peramban pengguna (*LocalStorage*).
   - **Ekspor Excel (.xlsx)**: 3 sheet lengkap (*Ringkasan & Profil*, *Matriks 166 Kriteria*, dan *Matriks CAP*).
   - **Cetak Laporan Formal (PDF)**: Format dokumen standar audit siap cetak dilengkapi lembar pengesahan tanda tangan.
   - **Backup & Restore JSON**: Cadangkan atau pulihkan sesi audit kapan saja.

---

## 🚀 Menjalankan Aplikasi

Aplikasi dibangun menggunakan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS**.

### Menjalankan di Lingkungan Pengembangan
```bash
cd D:\Apps\SMK3GAP
npm run dev
```
Buka peramban di [http://localhost:3000](http://localhost:3000).

### Membangun Versi Produksi
```bash
npm run build
npm run start
```

---

## 📂 Struktur Proyek

```
D:\Apps\SMK3GAP/
├── app/
│   ├── layout.tsx              # Metadata dan root layout
│   ├── page.tsx                # Halaman utama aplikasi (Checklist, Dashboard, CAP)
│   └── globals.css             # Konfigurasi Tailwind CSS v4
├── components/
│   ├── Navbar.tsx              # Navigasi utama, status akreditasi, dan toolbar ekspor
│   ├── CriteriaCard.tsx        # Kartu interaktif klausul kriteria, bukti, dan benchmark
│   ├── DashboardOverview.tsx   # Dashboard analitik eksekutif dan distribusi skor
│   ├── ElementRadarChart.tsx   # Diagram radar SVG 12 elemen audit SMK3
│   ├── CapManager.tsx          # Matriks pelacak Corrective Action Plan (CAP)
│   ├── ProfileModal.tsx        # Modal konfigurasi perusahaan dan pemilihan tingkat audit
│   └── PrintReportView.tsx     # Template cetak laporan resmi PDF
├── lib/
│   ├── data/
│   │   ├── smk3-data.ts        # Master data TypeScript (166 kriteria, 12 elemen, 5 kategori)
│   │   └── smk3-data.json      # Master data format JSON
│   ├── scoring.ts              # Algoritma kalkulasi skor dan aturan yuridis PP 50/2012
│   ├── storage.ts              # Manajemen penyimpanan lokal dan cadangan JSON
│   └── excel-export.ts         # Modul generator berkas Excel (.xlsx) 3 lembar kerja
├── types/
│   └── smk3.ts                 # Definisi tipe data TypeScript domain SMK3
└── Tabel Audit SMK3 166 Kriteria PP 50 Tahun 2012.xlsx # Berkas sumber knowledge base
```
