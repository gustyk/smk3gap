import { CriteriaMaster, ElementSummary, FindingCategoryGuide } from '@/types/smk3';

export const SMK3_ELEMENTS: ElementSummary[] = [
  {
    "elementNum": 1,
    "name": "Pembangunan dan Pemeliharaan Komitmen",
    "criteriaRange": "1.1.1 - 1.4.11",
    "totalAwal": 12,
    "totalTransisi": 20,
    "totalLanjutan": 26
  },
  {
    "elementNum": 2,
    "name": "Pembuatan dan Pendokumentasian Rencana K3",
    "criteriaRange": "2.1.1 - 2.4.1",
    "totalAwal": 6,
    "totalTransisi": 11,
    "totalLanjutan": 14
  },
  {
    "elementNum": 3,
    "name": "Pengendalian Perancangan dan Peninjauan Kontrak",
    "criteriaRange": "3.1.1 - 3.2.4",
    "totalAwal": 2,
    "totalTransisi": 5,
    "totalLanjutan": 8
  },
  {
    "elementNum": 4,
    "name": "Pengendalian Dokumen",
    "criteriaRange": "4.1.1 - 4.2.3",
    "totalAwal": 2,
    "totalTransisi": 4,
    "totalLanjutan": 7
  },
  {
    "elementNum": 5,
    "name": "Pembelian dan Pengendalian Produk",
    "criteriaRange": "5.1.1 - 5.4.2",
    "totalAwal": 4,
    "totalTransisi": 6,
    "totalLanjutan": 9
  },
  {
    "elementNum": 6,
    "name": "Keamanan Bekerja Berdasarkan SMK3",
    "criteriaRange": "6.1.1 - 6.9.1",
    "totalAwal": 16,
    "totalTransisi": 32,
    "totalLanjutan": 41
  },
  {
    "elementNum": 7,
    "name": "Standar Pemantauan",
    "criteriaRange": "7.1.1 - 7.4.5",
    "totalAwal": 6,
    "totalTransisi": 13,
    "totalLanjutan": 17
  },
  {
    "elementNum": 8,
    "name": "Pelaporan dan Perbaikan Kekurangan",
    "criteriaRange": "8.1.1 - 8.4.1",
    "totalAwal": 3,
    "totalTransisi": 6,
    "totalLanjutan": 9
  },
  {
    "elementNum": 9,
    "name": "Pengelolaan Material dan Perpindahannya",
    "criteriaRange": "9.1.1 - 9.3.5",
    "totalAwal": 4,
    "totalTransisi": 9,
    "totalLanjutan": 12
  },
  {
    "elementNum": 10,
    "name": "Pengumpulan dan Penggunaan Data",
    "criteriaRange": "10.1.1 - 10.2.2",
    "totalAwal": 2,
    "totalTransisi": 4,
    "totalLanjutan": 6
  },
  {
    "elementNum": 11,
    "name": "Pemeriksaan Sistem Manajemen K3 (Audit Internal)",
    "criteriaRange": "11.1.1 - 11.1.3",
    "totalAwal": 1,
    "totalTransisi": 2,
    "totalLanjutan": 3
  },
  {
    "elementNum": 12,
    "name": "Pengembangan Keterampilan dan Kemampuan",
    "criteriaRange": "12.1.1 - 12.5.1",
    "totalAwal": 6,
    "totalTransisi": 10,
    "totalLanjutan": 14
  }
];

export const SMK3_FINDING_CATEGORIES: FindingCategoryGuide[] = [
  {
    "category": "Kritikal (Critical Non-Conformance)",
    "definition": "Temuan yang berpotensi menimbulkan kecelakaan kerja fatal (fatality / kematian) seketika atau bencana katastropik yang segera mengancam keselamatan nyawa pekerja, aset besar perusahaan, dan lingkungan masyarakat, atau ketidakpatuhan mutlak terhadap temuan mayor sebelumnya.",
    "parameters": "Contoh: Bekerja di ketinggian 10 m tanpa sabuk pengaman/jaring; masuk ruang terbatas (confined space) tanpa uji gas dan tanpa izin; mengoperasikan boiler dengan safety valve mati/dibaut; bypass sistem interlock proteksi ledakan gas.",
    "consequences": "GAGAL TOTAL. Sertifikat SMK3 TIDAK DAPAT DITERBITKAN. Lembaga Audit Independen wajib segera menerbitkan laporan ketidaksesuaian kritis dan perusahaan dilaporkan kepada Direktur Pengawasan Norma K3 Kemnaker RI untuk penegakan hukum.",
    "timeLimit": "Segera / Seketika (Pekerjaan wajib dihentikan / Stop Work Order saat itu juga)."
  },
  {
    "category": "Mayor (Major Non-Conformance)",
    "definition": "Temuan yang memenuhi salah satu dari 4 kondisi: (1) Tidak memenuhi ketentuan peraturan perundang-undangan K3 yang bersifat wajib; (2) Tidak melaksanakan salah satu prinsip dasar SMK3 (Kebijakan, Perencanaan, Pelaksanaan, Pemantauan & Evaluasi, Peninjauan Ulang); (3) Ditemukan temuan minor berulang di beberapa unit kerja untuk satu kriteria audit yang sama; (4) Berpotensi menimbulkan kecelakaan berat atau penyakit akibat kerja (PAK) yang serius.",
    "parameters": "Contoh: Tidak memiliki SK Pengesahan P2K3; tidak memiliki Ahli K3 bersertifikat Kemnaker; tidak pernah melakukan Riksa Uji berkala forklift/boiler; tidak melakukan MCU berkala; tidak ada sistem izin kerja (PTW) untuk pekerjaan berbahaya.",
    "consequences": "Sertifikat DITANGGUHKAN. Perusahaan belum dapat direkomendasikan memperoleh sertifikat penghargaan SMK3 (Bendera Perak/Emas) sampai seluruh temuan mayor diperbaiki dan diverifikasi tuntas melalui audit tindakan perbaikan (Verification Audit).",
    "timeLimit": "Maksimal 1 (satu) bulan kalender sejak closing meeting audit."
  },
  {
    "category": "Minor (Minor Non-Conformance)",
    "definition": "Ketidakkonsistenan dalam pemenuhan persyaratan peraturan perundang-undangan, standar, pedoman teknis, atau prosedur internal SMK3 yang tidak berdampak langsung terhadap keselamatan jiwa atau tidak merusak keutuhan sistem manajemen K3 secara menyeluruh.",
    "parameters": "Contoh: Dokumen SOP tidak mencantumkan tanggal pengesahan; formulir inspeksi APAR terlambat diisi 1 bulan; penempatan kotak P3K terhalang barang sementara; sertifikat pelatihan ada namun belum diarsipkan di file HRD.",
    "consequences": "Sertifikat TETAP DAPAT DITERBITKAN jika persentase total kepatuhan kriteria memenuhi ambang batas (>=60% atau >=85%), dengan catatan perusahaan wajib menyampaikan Corrective Action Plan (CAP) tertulis.",
    "timeLimit": "Maksimal 3 (tiga) bulan atau dipantau pada audit pengawasan berkala berikutnya."
  },
  {
    "category": "Komplian (Compliant / Patuh)",
    "definition": "Kondisi di mana seluruh persyaratan kriteria audit terpenuhi secara konsisten, baik secara administratif (de jure - ada dokumen kebijakan, manual, SOP, catatan) maupun secara operasional di lapangan (de facto - dipahami pekerja dan diterapkan konsisten).",
    "parameters": "Contoh: Kebijakan K3 ditandatangani direktur dan dipajang; P2K3 aktif lapor triwulan ke Disnaker; seluruh operator alat berat memiliki SIO Kemnaker aktif; sarana pemadam api rutin diuji dan bertekanan normal.",
    "consequences": "Dihitung sebagai nilai 'SESUAI' (1 poin pemenuhan) dalam kalkulasi persentase kepatuhan penerapan SMK3.",
    "timeLimit": "Pertahankan dan terus tingkatkan (Continual Improvement)."
  },
  {
    "category": "OFI (Opportunity for Improvement)",
    "definition": "Kondisi di mana persyaratan kriteria audit secara legal dan prosedural telah terpenuhi (status Sesuai), namun auditor melihat adanya peluang atau ruang untuk meningkatkan efisiensi, keandalan, ketertelusuran, atau adopsi teknologi mutakhir.",
    "parameters": "Contoh: Transisi dari checklist inspeksi kertas ke aplikasi seluler digital; penambahan sensor IoT pemantau getaran mesin; pembentukan program kebugaran kerja holistik (wellness program).",
    "consequences": "Tidak memengaruhi skor kelulusan audit dan tidak berstatus ketidaksesuaian. Bersifat saran nilai tambah (value-added recommendation) dari auditor.",
    "timeLimit": "Fleksibel / Sesuai rencana strategis manajemen perusahaan."
  }
];

export const SMK3_CRITERIA: CriteriaMaster[] = [
  {
    "no": 1,
    "code": "1.1.1",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.1 Kebijakan K3",
    "clauseText": "Terdapat kebijakan K3 yang tertulis, bertanggal, ditandatangani oleh pengusaha atau pengurus, secara jelas menyatakan tujuan dan sasaran K3 serta komitmen terhadap peningkatan K3 secara berkelanjutan.",
    "interpretation": "Perusahaan wajib memiliki komitmen tertulis dari pucuk pimpinan tertinggi (Direktur/Presiden Direktur) yang menetapkan visi, misi, komitmen kepatuhan regulasi, dan peningkatan berkelanjutan sistem manajemen K3.",
    "expectedEvidence": "Dokumen Kebijakan K3 bertandatangan basah/digital sah pimpinan tertinggi, bertanggal, dokumen visi & sasaran K3, bukti pajangan kebijakan di area kerja strategis.",
    "conditions": {
      "compliant": "Kebijakan K3 tertulis lengkap, bertanggal, disahkan pucuk pimpinan, memuat komitmen peningkatan berkelanjutan, dan relevan dengan skala risiko perusahaan.",
      "critical": "Perusahaan beroperasi pada industri risiko tinggi tanpa memiliki komitmen dasar K3 sama sekali dari manajemen puncak, sehingga menimbulkan kondisi berbahaya ekstrem tanpa arahan keselamatan.",
      "major": "Tidak terdapat kebijakan K3 tertulis sama sekali, atau kebijakan tidak ditandatangani pimpinan tertinggi (hanya paraf staf), atau tidak memuat komitmen pemenuhan perundang-undangan.",
      "minor": "Kebijakan K3 ada dan ditandatangani namun belum mencantumkan tanggal pengesahan atau belum diperbarui setelah pergantian pimpinan organisasi/restrukturisasi formal.",
      "ofi": "Kebijakan sudah lengkap dan sah, namun dapat ditingkatkan dengan penambahan media sosialisasi digital interaktif (misal video induksi mandiri atau portal intranet)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 2,
    "code": "1.1.2",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.1 Kebijakan K3",
    "clauseText": "Kebijakan disusun oleh pengusaha dan/atau pengurus setelah melalui proses konsultasi dengan wakil tenaga kerja.",
    "interpretation": "Penyusunan dan peninjauan kebijakan K3 harus melibatkan perwakilan pekerja atau serikat pekerja/P2K3 guna memastikan aspirasi keselamatan tenaga kerja terakomodasi.",
    "expectedEvidence": "Notulensi rapat pembahasan kebijakan K3 bersama perwakilan pekerja/serikat pekerja, daftar hadir rapat konsultasi, form masukan draft kebijakan dari anggota P2K3.",
    "conditions": {
      "compliant": "Tersedia bukti otentik proses konsultasi formal (notulensi, absensi, masukan) antara pengurus dan perwakilan pekerja/serikat buruh sebelum pengesahan kebijakan.",
      "critical": "Tidak berlaku langsung untuk kriteria ini secara mandiri.",
      "major": "Kebijakan K3 ditetapkan secara sepihak oleh manajemen puncak tanpa ada mekanisme konsultasi sama sekali dengan wakil pekerja atau pengurus P2K3.",
      "minor": "Proses konsultasi telah dilakukan secara informal namun notulensi atau daftar hadir perwakilan pekerja belum terarsip secara tertib.",
      "ofi": "Mekanisme konsultasi dapat disempurnakan dengan survei keterlibatan K3 digital (safety perception survey) berkala kepada seluruh karyawan sebelum review tahunan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 3,
    "code": "1.1.3",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.1 Kebijakan K3",
    "clauseText": "Perusahaan mengkomunikasikan kebijakan K3 kepada seluruh tenaga kerja, tamu, kontraktor, pelanggan, dan pemasok dengan tata cara yang tepat.",
    "interpretation": "Kebijakan K3 bukan dokumen rahasia; wajib disosialisasikan dan dipahami oleh internal pekerja maupun pihak eksternal (kontraktor, vendor, tamu) yang beraktivitas di tempat kerja.",
    "expectedEvidence": "Papan pengumuman/banner kebijakan K3 di gerbang masuk/lobby/workshop, materi induksi K3 (safety induction), buku saku K3, klausul kebijakan pada lampiran PO/kontrak vendor.",
    "conditions": {
      "compliant": "Kebijakan terpasang jelas di area operasional, disampaikan dalam induksi keselamatan bagi tamu/kontraktor, dan pekerja memahami isi pokok komitmen K3 saat diwawancarai.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Kebijakan K3 disimpan tertutup tanpa pernah disosialisasikan, pekerja dan kontraktor di area berbahaya sama sekali tidak mengetahui keberadaan kebijakan K3.",
      "minor": "Sosialisasi telah dilakukan ke karyawan tetap, namun belum terdokumentasi penyampaiannya kepada kontraktor temporer atau materi induksi belum mencantumkan poin kebijakan.",
      "ofi": "Menyediakan QR Code di pintu masuk tamu untuk mengakses kebijakan K3 dan petunjuk keselamatan interaktif secara multilingual."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 4,
    "code": "1.1.4",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.1 Kebijakan K3",
    "clauseText": "Kebijakan khusus dibuat untuk masalah K3 yang bersifat khusus.",
    "interpretation": "Bila perusahaan memiliki bahaya spesifik (misal: pekerjaan di ketinggian, ruang terbatas, zat karsinogenik, radiasi, HIV/AIDS, narkoba, pelecehan kerja), dibuat kebijakan turunan/khusus.",
    "expectedEvidence": "Dokumen Kebijakan Khusus bertandatangan manajemen (misal: Kebijakan Stop Work Authority, Kebijakan Bebas Alkohol & Narkoba, Kebijakan Pencegahan HIV/AIDS di Tempat Kerja).",
    "conditions": {
      "compliant": "Tersedia kebijakan khusus tertulis yang relevan dengan profil bahaya tinggi atau regulasi wajib (seperti Permenaker 68/2004 tentang HIV/AIDS) dan disahkan manajemen.",
      "critical": "Perusahaan mengoperasikan fasilitas berbahaya ekstrem (misal radiasi/B3 beracun tinggi) tanpa kebijakan proteksi khusus sehingga pekerja terpapar bahaya mematikan tanpa protokol.",
      "major": "Perusahaan memiliki aktivitas risiko tinggi spesifik namun menolak membuat kebijakan/komitmen khusus kendali bahaya tersebut.",
      "minor": "Kebijakan khusus ada namun klausul pengendaliannya belum mencakup pembaruan standar pedoman teknis terbaru.",
      "ofi": "Mengintegrasikan kebijakan khusus ke dalam modul digital mobile app internal karyawan untuk kemudahan akses regulasi."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 5,
    "code": "1.1.5",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.1 Kebijakan K3",
    "clauseText": "Kebijakan K3 dan kebijakan khusus lainnya ditinjau ulang secara berkala untuk menjamin bahwa kebijakan tersebut sesuai dengan perubahan yang terjadi dalam perusahaan dan dalam peraturan perundang-undangan.",
    "interpretation": "Manajemen wajib meninjau kesesuaian kebijakan K3 secara berkala (misal tahunan) atau saat terjadi perubahan organisasi, proses kerja, insiden besar, atau regulasi baru.",
    "expectedEvidence": "Notulensi rapat tinjauan manajemen (Management Review) yang mengevaluasi kebijakan K3, riwayat revisi dokumen kebijakan (change log), laporan evaluasi relevansi kebijakan.",
    "conditions": {
      "compliant": "Terdapat bukti peninjauan berkala berkala minimal setahun sekali dengan evaluasi ketercapaian komitmen dan pemutakhiran regulasi.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Kebijakan K3 tidak pernah ditinjau ulang selama lebih dari 3 tahun berturut-turut meskipun telah terjadi perubahan signifikan dalam skala bisnis atau regulasi nasional.",
      "minor": "Peninjauan kebijakan telah dibahas dalam rapat manajemen, namun belum dituangkan dalam formulir riwayat perubahan dokumen resmi.",
      "ofi": "Menetapkan matriks indikator pemicu review kebijakan otomatis (misal terjadi fatality, perubahan kepemilikan saham >50%, ekspansi pabrik baru)."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 6,
    "code": "1.2.1",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.2 Tanggung Jawab & Wewenang",
    "clauseText": "Tanggung jawab dan wewenang untuk mengambil tindakan dan melaporkan kepada semua pihak yang terkait dalam perusahaan di bidang K3 telah ditetapkan, diinformasikan dan didokumentasikan.",
    "interpretation": "Uraian tugas (job description) seluruh tingkatan jabatan dari manajemen puncak hingga pelaksana lapangan harus memuat tanggung jawab dan wewenang jelas di bidang K3.",
    "expectedEvidence": "Dokumen Job Description seluruh posisi kerja dengan klausul K3, bagan struktur organisasi K3/P2K3, bukti serah terima uraian tugas, SOP pelaporan masalah K3.",
    "conditions": {
      "compliant": "Seluruh personil memiliki uraian tanggung jawab dan wewenang K3 terdokumentasi, memahami perannya, dan mekanisme eskalasi laporan operasional berjalan efektif.",
      "critical": "Tidak ada penetapan personil pengendali keselamatan pada instalasi proses berisiko tinggi sehingga terjadi pembiaran kondisi kritis tanpa ada pihak yang berwenang bertindak.",
      "major": "Manajemen operasional menolak bertanggung jawab atas aspek K3 di unitnya karena tidak dicantumkan dalam job description resmi perusahaan.",
      "minor": "Job description telah mencakup aspek K3 untuk level manajerial, namun beberapa deskripsi pekerjaan level staf pelaksana belum diperbarui.",
      "ofi": "Menerapkan Key Performance Indicators (KPI) K3 terukur yang terhubung langsung dengan sistem penilaian kinerja (performance appraisal) tahunan karyawan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 7,
    "code": "1.2.2",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.2 Tanggung Jawab & Wewenang",
    "clauseText": "Penunjukan penanggung jawab K3 harus sesuai peraturan perundang-undangan yang berlaku.",
    "interpretation": "Perusahaan wajib menunjuk personil yang memiliki kompetensi dan lisensi resmi sesuai regulasi pemerintah (misal Ahli K3 Umum, Ahli K3 Kimia, Ahli K3 Listrik, Ahli K3 Kebakaran).",
    "expectedEvidence": "Surat Keputusan Penunjukan (SKP) Ahli K3 dari Menaker RI yang masih berlaku, lisensi K3 personil, sertifikat kompetensi penanggung jawab teknis K3.",
    "conditions": {
      "compliant": "Penunjukan Ahli K3 sah dibuktikan dengan SKP dan lisensi resmi dari Kementerian Ketenagakerjaan yang aktif dan sesuai bidang usaha perusahaan.",
      "critical": "Perusahaan risiko tinggi beroperasi tanpa penanggung jawab K3 tersertifikasi sama sekali dan menolak memenuhi kewajiban penunjukan reguler.",
      "major": "SKP Ahli K3 telah kedaluwarsa lebih dari 1 tahun tanpa ada proses perpanjangan, atau personil yang ditunjuk tidak memiliki kompetensi sesuai klasifikasi bahaya wajib.",
      "minor": "Proses perpanjangan SKP/Lisensi Ahli K3 sedang berjalan (dibuktikan dengan resi/surat keterangan pengurusan dari Disnaker/Kemnaker).",
      "ofi": "Mengikutsertakan personil K3 dalam sertifikasi kompetensi profesi tambahan (misal BNSP Auditor SMK3, NEBOSH, atau pelatihan teknis spesialis)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 8,
    "code": "1.2.3",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.2 Tanggung Jawab & Wewenang",
    "clauseText": "Pimpinan unit kerja dalam suatu perusahaan bertanggung jawab atas kinerja K3 pada unit kerjanya.",
    "interpretation": "Tanggung jawab keselamatan kerja bukan hanya beban departemen HSE/K3, melainkan tanggung jawab lini (line management) pimpinan masing-masing unit kerja/divisi.",
    "expectedEvidence": "Laporan inspeksi rutin oleh Kepala Bagian/Departemen, target KPI K3 masing-masing unit, notulensi rapat unit kerja yang membahas isu K3 internal.",
    "conditions": {
      "compliant": "Para pimpinan unit kerja aktif memantau kondisi K3 unitnya, memimpin briefing/safety talk, dan bertanggung jawab atas mitigasi bahaya di areanya.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Pimpinan unit kerja secara terbuka menolak keterlibatan dalam keselamatan kerja dan mengalihkan seluruh beban operasional K3 hanya kepada petugas safety.",
      "minor": "Pimpinan unit kerja telah melaksanakan pengawasan K3 namun tidak mendokumentasikan hasil evaluasi keselamatan berkala di unitnya.",
      "ofi": "Membuat program kompetisi keselamatan antardepartemen (HSE Department Award) untuk memacu keterlibatan manajer lini."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 9,
    "code": "1.2.4",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.2 Tanggung Jawab & Wewenang",
    "clauseText": "Pengusaha atau pengurus bertanggung jawab secara penuh untuk menjamin pelaksanaan SMK3.",
    "interpretation": "Direksi/Pengurus perusahaan memegang akuntabilitas tertinggi dalam menyediakan anggaran, sumber daya manusia, sarana prasarana, dan komitmen sistemik SMK3.",
    "expectedEvidence": "Rencana Kerja & Anggaran Perusahaan (RKAP) khusus alokasi K3, persetujuan program SMK3 tahunan oleh Direksi, rekaman kehadiran Direksi dalam acara kunci K3.",
    "conditions": {
      "compliant": "Manajemen puncak menyediakan alokasi sumber daya finansial, fasilitas, dan personalia yang memadai untuk menjamin berjalannya seluruh elemen SMK3.",
      "critical": "Manajemen puncak dengan sengaja menghentikan seluruh program keselamatan untuk efisiensi biaya sehingga terjadi bahaya kematian sistemik.",
      "major": "Tidak ada komitmen penyediaan anggaran K3 sama sekali sehingga program wajib keselamatan tidak dapat dieksekusi.",
      "minor": "Anggaran K3 telah disetujui namun terdapat keterlambatan realisasi belanja peralatan keselamatan pendukung non-kritis.",
      "ofi": "Menerapkan pelaporan berkala dashboard alokasi dan efektivitas investasi K3 (ROI on Health & Safety) kepada Dewan Komisaris/Direksi."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 10,
    "code": "1.2.5",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.2 Tanggung Jawab & Wewenang",
    "clauseText": "Petugas yang bertanggung jawab untuk penanganan keadaan darurat telah ditetapkan dan mendapatkan pelatihan.",
    "interpretation": "Perusahaan harus memiliki tim tanggap darurat (Emergency Response Team / ERT) resmi yang terlatih dan bersertifikat sesuai potensi kedaruratan (kebakaran, gempa, tumpahan B3).",
    "expectedEvidence": "SK Tim Tanggap Darurat / Damkar Perusahaan, sertifikat pelatihan penanggulangan kebakaran/evakuasi/first aid personil tim darurat, jadwal piket regu darurat.",
    "conditions": {
      "compliant": "Tim tanggap darurat telah dibentuk resmi, personil inti memiliki sertifikat pelatihan kompetensi (misal Regu Kebakaran Peran Kelas D/C/B/A), dan struktur siap operasional.",
      "critical": "Perusahaan potensi bahaya kebakaran/ledakan besar tidak memiliki regu tanggap darurat atau petugas pemadam sama sekali di tempat kerja.",
      "major": "Tim tanggap darurat dibentuk hanya di atas kertas (SK) tanpa pernah sekalipun diberikan pelatihan penanganan kedaruratan.",
      "minor": "Sebagian personil tim tanggap darurat telah mutasi/resign dan penggantinya belum secara resmi diangkat atau dijadwalkan pelatihan formal.",
      "ofi": "Mengadakan latihan gabungan penanganan darurat bersama dinas pemadam kebakaran daerah dan rumah sakit rujukan sekitar secara terjadwal."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 11,
    "code": "1.2.6",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.2 Tanggung Jawab & Wewenang",
    "clauseText": "Perusahaan mendapatkan saran-saran dari para ahli di bidang K3 yang berasal dari dalam dan/atau luar perusahaan.",
    "interpretation": "Perusahaan memanfaatkan tenaga ahli K3 internal (Ahli K3 tersertifikasi) atau konsultan/PJK3/akademisi luar untuk memberikan telaah teknis mitigasi bahaya.",
    "expectedEvidence": "Laporan telaah teknis K3 oleh Ahli K3 Umum/Spesialis, rekomendasi tertulis PJK3 (Perusahaan Jasa K3), risalah konsultasi teknis dengan Pengawas Ketenagakerjaan.",
    "conditions": {
      "compliant": "Tersedia bukti formal penerimaan masukan, telaah risiko, atau audit berkala dari pihak ahli K3 internal/eksternal yang ditindaklanjuti perusahaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan mengabaikan secara sengaja rekomendasi teknis wajib dari Ahli K3 berwenang atau Pengawas Ketenagakerjaan terkait bahaya struktural.",
      "minor": "Saran ahli K3 telah diterima secara lisan namun belum didokumentasikan dalam formulir rekomendasi teknis perbaikan manajemen.",
      "ofi": "Membangun kemitraan strategis dengan asosiasi profesi K3 (seperti WSO, IAKKI) untuk benchmark implementasi standar keselamatan terkini."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 12,
    "code": "1.2.7",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.2 Tanggung Jawab & Wewenang",
    "clauseText": "Kinerja K3 termuat dalam laporan tahunan perusahaan atau laporan lain yang setingkat.",
    "interpretation": "Akuntabilitas K3 harus dilaporkan secara transparan dalam Annual Report perusahaan atau Sustainability Report (Laporan Keberlanjutan) tahunan resmi.",
    "expectedEvidence": "Buku Annual Report / Sustainability Report tahunan perusahaan yang mencantumkan bab kinerja K3 (Lost Time Injury, Safety Manhours, Zero Accident, program K3).",
    "conditions": {
      "compliant": "Kinerja keselamatan kerja (statistik kecelakaan, jam kerja selamat, capaian program) tersaji jelas dan akurat dalam laporan tahunan korporasi.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan skala menengah/besar tidak memuat aspek keselamatan sama sekali dalam pertanggungjawaban tahunan manajemen.",
      "minor": "Kinerja K3 tercantum dalam laporan tahunan namun data statistiknya belum diverifikasi atau perhitungannya belum mengikuti standar Kepmenaker 607/1989.",
      "ofi": "Mengadopsi kerangka pelaporan keberlanjutan standar global seperti GRI (Global Reporting Initiative) Standards 403: Occupational Health and Safety."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 13,
    "code": "1.3.1",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.3 Tinjauan & Evaluasi",
    "clauseText": "Tinjauan terhadap penerapan SMK3 meliputi kebijakan, perencanaan, pelaksanaan, pemantauan dan evaluasi telah dilakukan, dicatat dan didokumentasikan.",
    "interpretation": "Rapat Tinjauan Manajemen (RTM) SMK3 harus diselenggarakan secara formal mencakup seluruh siklus manajemen (PDCA) untuk menilai efektivitas implementasi.",
    "expectedEvidence": "Agenda RTM, materi presentasi RTM, notulensi rapat RTM yang dihadiri Top Management, daftar hadir, dan dokumen ringkasan evaluasi siklus SMK3.",
    "conditions": {
      "compliant": "RTM SMK3 terlaksana minimal 1 tahun sekali, mencakup seluruh agenda wajib (kebijakan, sasaran, hasil audit, investigasi insiden, status tindakan korektif).",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak pernah dilakukan tinjauan manajemen SMK3 sama sekali oleh manajemen puncak dalam kurun waktu evaluasi audit.",
      "minor": "RTM telah dilaksanakan namun agendanya belum lengkap (misal belum membahas pemenuhan tindak lanjut audit internal sebelumnya).",
      "ofi": "Melaksanakan Pra-Tinjauan Manajemen per kuartal (Quarterly HSE Review) sebelum rapat pleno tahunan bersama Direktur Utama."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 14,
    "code": "1.3.2",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.3 Tinjauan & Evaluasi",
    "clauseText": "Hasil tinjauan dimasukkan dalam perencanaan tindakan manajemen.",
    "interpretation": "Keputusan dan output dari Rapat Tinjauan Manajemen wajib dijadikan input resmi bagi program kerja dan rencana anggaran K3 tahun berikutnya.",
    "expectedEvidence": "Matriks Rencana Tindak Lanjut (Action Plan) RTM, dokumen Program Kerja K3 tahun berjalan yang memuat tindak lanjut keputusan RTM, alokasi PIC dan timeline.",
    "conditions": {
      "compliant": "Terdapat action plan konkret bertarget waktu dan penanggung jawab atas setiap rekomendasi RTM yang terintegrasi ke rencana kerja bisnis perusahaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Hasil RTM diabaikan secara total dan tidak satupun keputusan perbaikan ditindaklanjuti dalam rencana operasional manajemen.",
      "minor": "Rencana tindakan telah dibuat namun beberapa butir perbaikan belum mencantumkan target tanggal penyelesaian yang pasti.",
      "ofi": "Menggunakan sistem pelacak digital (digital action tracker) dengan notifikasi otomatis ke masing-masing penanggung jawab perbaikan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 15,
    "code": "1.3.3",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.3 Tinjauan & Evaluasi",
    "clauseText": "Pengurus harus meninjau ulang pelaksanaan SMK3 secara berkala untuk menilai kesesuaian dan efektivitas SMK3.",
    "interpretation": "Pengurus/manajemen operasional harus memiliki mekanisme review berkala untuk mengukur kesesuaian sistem dengan dinamika operasional harian.",
    "expectedEvidence": "Laporan review periodik bulanan/triwulanan K3, memo internal evaluasi efektivitas SOP keselamatan, risalah evaluasi perubahan operasional terhadap SMK3.",
    "conditions": {
      "compliant": "Pengurus secara berkesinambungan mengevaluasi efektivitas implementasi prosedur dan kontrol K3 di unit-unit kerja lapangan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Sistem SMK3 dibiarkan pasif tanpa pemantauan pengurus, sehingga prosedur tertulis tidak mencerminkan kenyataan praktik berbahaya di lapangan.",
      "minor": "Review berkala dilakukan namun jadwal pelaksanaannya mundur dari jadwal tentatif yang telah ditetapkan dalam manual K3.",
      "ofi": "Menetapkan audit kesesuaian operasional berbasis peninjauan mandiri (self-assessment checklist) oleh para supervisor pabrik/proyek."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 16,
    "code": "1.4.1",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Keterlibatan dan penjadwalan konsultasi tenaga kerja dengan wakil perusahaan didokumentasikan dan disebarluaskan ke seluruh tenaga kerja.",
    "interpretation": "Perusahaan harus memiliki jadwal resmi dan mekanisme terdokumentasi untuk pertemuan konsultasi keselamatan antara manajemen dan perwakilan pekerja.",
    "expectedEvidence": "Jadwal tahunan rapat P2K3, bukti pengumuman jadwal di papan informasi/email broadcast, prosedur komunikasi & konsultasi K3, absensi rapat.",
    "conditions": {
      "compliant": "Jadwal konsultasi K3 tersedia rapi, diumumkan ke seluruh karyawan, dan diselenggarakan sesuai jadwal dengan dokumentasi lengkap.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan melarang atau menghalangi proses konsultasi keselamatan antara pekerja dan manajemen.",
      "minor": "Jadwal pertemuan konsultasi ada, namun perubahan jadwal rapat bulanan belum dipublikasikan ke papan pengumuman karyawan.",
      "ofi": "Menyediakan forum digital terbuka (misal portal saran K3 online) agar pekerja non-shift dapat menyampaikan aspirasi kapan saja."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 17,
    "code": "1.4.2",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Terdapat prosedur yang memudahkan konsultasi mengenai perubahan-perubahan yang mempunyai implikasi terhadap K3.",
    "interpretation": "Bila terjadi Management of Change (MOC) seperti mesin baru, layout baru, atau bahan kimia baru, ada SOP konsultasi dengan tenaga kerja terdampak.",
    "expectedEvidence": "Prosedur Manajemen Perubahan (MOC / SOP Konsultasi Perubahan), form evaluasi dampak K3 akibat perubahan, notulensi sosialisasi modifikasi proses.",
    "conditions": {
      "compliant": "Tersedia prosedur MOC yang dijalankan secara konsisten dengan mengikutsertakan masukan pekerja sebelum modifikasi operasional diberlakukan.",
      "critical": "Perubahan proses produksi kritis beracun/berbahaya dilakukan tanpa analisis dan konsultasi keselamatan hingga timbul insiden fatal seketika.",
      "major": "Perubahan sarana kerja skala masif diterapkan tanpa konsultasi dan tanpa identifikasi bahaya sebelumnya terhadap operator yang menjalankan.",
      "minor": "Prosedur MOC tersedia, namun form persetujuan perubahan belum ditandatangani oleh wakil pekerja bagian terkait.",
      "ofi": "Menyusun lembar alur kerja (workflow) MOC digital yang memerlukan verifikasi kelayakan K3 sebelum PO modifikasi disetujui tim purchasing."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 18,
    "code": "1.4.3",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Perusahaan telah membentuk P2K3 sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Sesuai UU 1/1970 dan Permenaker 04/1987, tempat kerja dengan >=100 pekerja atau risiko tinggi wajib membentuk Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3).",
    "expectedEvidence": "Surat Keputusan (SK) Pengesahan P2K3 resmi dari Dinas Tenaga Kerja (Disnaker) setempat yang masih berlaku, struktur organisasi P2K3.",
    "conditions": {
      "compliant": "P2K3 resmi dibentuk dan disahkan oleh Disnaker setempat, dengan susunan kepengurusan yang mencerminkan komposisi bipartit (manajemen dan pekerja).",
      "critical": "Perusahaan risiko tinggi dengan ribuan pekerja sama sekali tidak membentuk P2K3 dan menolak kewajiban hukum keselamatan kerja nasional.",
      "major": "P2K3 belum disahkan oleh Disnaker berwenang, atau masa berlaku SK P2K3 habis dan perubahan pengurus besar tidak dilaporkan untuk perbaruan SK.",
      "minor": "SK Pengesahan P2K3 ada, namun terdapat satu personil anggota yang resign dan surat usulan pembaruan pengurus baru sedang diajukan ke dinas.",
      "ofi": "Membentuk sub-komite teknis khusus di bawah P2K3 (misal Sub-Komite Tanggap Darurat, Sub-Komite Ergonomi & Ergonomics Center)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 19,
    "code": "1.4.4",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Ketua P2K3 adalah pimpinan puncak atau pengurus.",
    "interpretation": "Ketua P2K3 wajib dijabat oleh pimpinan tertinggi perusahaan (Direktur/General Manager/Plant Manager) agar keputusan K3 memiliki kekuatan eksekutif langsung.",
    "expectedEvidence": "SK Pengesahan P2K3 Disnaker yang mencantumkan nama dan jabatan Ketua P2K3, bagan organisasi perusahaan membuktikan posisi puncak pengurus.",
    "conditions": {
      "compliant": "Ketua P2K3 adalah pimpinan puncak di lokasi kerja (Top Management) yang memiliki kewenangan penuh pengambilan keputusan operasional dan finansial.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Ketua P2K3 dijabat oleh personil level staf/pelaksana lapangan yang tidak memiliki wewenang eksekutif mengambil keputusan manajerial.",
      "minor": "Pimpinan puncak menjabat sebagai Ketua P2K3 namun jarang mendelegasikan mandat saat berhalangan hadir dalam rapat pleno.",
      "ofi": "Mengagendakan sesi pengarahan khusus (executive safety briefing) rutin dari Ketua P2K3 dalam setiap Townhall bulanan perusahaan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 20,
    "code": "1.4.5",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Sekretaris P2K3 adalah Ahli K3 sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Sesuai Permenaker No. 04/MEN/1987, Sekretaris P2K3 harus seorang Ahli K3 Umum/Spesialis yang telah ditunjuk resmi oleh Menteri Ketenagakerjaan.",
    "expectedEvidence": "SKP (Surat Keputusan Penunjukan) Ahli K3 dari Kemnaker atas nama Sekretaris P2K3, Lisensi K3 aktif, tercantum dalam SK Pengesahan P2K3 Disnaker.",
    "conditions": {
      "compliant": "Sekretaris P2K3 berlisensi Ahli K3 aktif dari Kemnaker RI dan namanya tercantum sah dalam SK Pengesahan P2K3.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Sekretaris P2K3 bukan Ahli K3 bersertifikat dan tidak memiliki legalitas penunjukan dari Kementerian Ketenagakerjaan.",
      "minor": "Sekretaris P2K3 memiliki sertifikat Ahli K3 namun SKP perpanjangan dari Kemnaker masih dalam proses administrasi dinas ketenagakerjaan.",
      "ofi": "Menyertakan sekretaris P2K3 dalam pelatihan sertifikasi Lead Auditor SMK3/ISO 45001 untuk memperkuat kapabilitas tata kelola sistem."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 21,
    "code": "1.4.6",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "P2K3 menitikberatkan kegiatan pada pengembangan kebijakan dan prosedur untuk mengendalikan risiko.",
    "interpretation": "Fokus kerja P2K3 bukan sekadar formalitas rapat, melainkan menghasilkan telaah risiko nyata, perumusan SOP keselamatan, dan pencegahan insiden.",
    "expectedEvidence": "Notulensi rapat P2K3 memuat telaah HIRA/HIRADC, rekomendasi SOP baru hasil evaluasi bahaya, program mitigasi risiko yang diajukan ke direksi.",
    "conditions": {
      "compliant": "Agenda dan realisasi kerja P2K3 terbukti fokus pada analisis risiko operasional, investigasi akar penyebab insiden, dan perbaikan kontrol teknis.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "P2K3 pasif total dan tidak pernah membuat telaah, kebijakan, atau prosedur pengendalian risiko di tempat kerja.",
      "minor": "Rekomendasi pengendalian risiko dibuat oleh P2K3 namun analisis skala prioritas risikonya belum konsisten menggunakan matriks risiko resmi.",
      "ofi": "Menerapkan metode Failure Mode and Effects Analysis (FMEA) atau Bowtie Analysis dalam kajian risiko strategis tahunan P2K3."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 22,
    "code": "1.4.7",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Susunan pengurus P2K3 didokumentasikan dan diinformasikan kepada tenaga kerja.",
    "interpretation": "Seluruh pekerja harus mengetahui siapa saja wakil mereka dalam P2K3 serta bagaimana cara menghubungi pengurus jika menemukan kondisi bahaya.",
    "expectedEvidence": "Bagan struktur organisasi P2K3 dipajang di papan pengumuman/intranet lengkap dengan foto, divisi kerja, dan nomor kontak darurat pengurus.",
    "conditions": {
      "compliant": "Struktur P2K3 terpasang jelas di seluruh area kerja utama dan pekerja mengenali perwakilan P2K3 di departemen masing-masing.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Informasi pengurus P2K3 dirahasiakan sehingga pekerja tidak tahu kepada siapa harus melaporkan bahaya keselamatan di tempat kerja.",
      "minor": "Bagan struktur P2K3 terpasang namun belum diperbarui setelah terjadi pergantian pengurus pada salah satu divisi pendukung.",
      "ofi": "Menambahkan foto profil dan peran spesifik pengurus P2K3 pada kartu tanda pengenal (ID Card) atau seragam kerja khusus safety representative."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 23,
    "code": "1.4.8",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "P2K3 mengadakan pertemuan secara teratur dan hasilnya disebarluaskan di tempat kerja.",
    "interpretation": "Pertemuan pleno P2K3 wajib diselenggarakan secara teratur (minimal 1 kali setiap bulan) dan risalah pembahasannya dikomunikasikan ke pekerja.",
    "expectedEvidence": "Notulensi rapat bulanan P2K3 selama 12 bulan terakhir, daftar hadir rapat, bukti edaran/pajangan ringkasan hasil rapat di mading pabrik/portal internal.",
    "conditions": {
      "compliant": "Rapat rutin bulanan terselenggara konsisten setiap bulan dengan notulensi rinci yang disosialisasikan secara terbuka kepada seluruh unit kerja.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "P2K3 tidak pernah mengadakan pertemuan rutin dalam periode evaluasi audit (hanya ada nama organisasi tanpa aktivitas rapat).",
      "minor": "Rapat bulanan terlaksana namun terdapat 1-2 bulan yang digabung (rapelan) karena kendala operasional mendesak.",
      "ofi": "Membuat ringkasan infografis satu halaman (One Page Safety Bulletin) atas hasil rapat bulanan P2K3 untuk disebar via aplikasi pesan kerja."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 24,
    "code": "1.4.9",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "P2K3 melaporkan kegiatannya secara teratur sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Sesuai Pasal 12 Permenaker 04/1987, pengurus P2K3 wajib menyampaikan laporan tertulis pelaksanaan kegiatan kepada Disnaker setempat minimal tiap 3 bulan sekali.",
    "expectedEvidence": "Tanda terima resmi (ekspedisi/stempel cap pos/surat balasan digital) laporan triwulan P2K3 dari Dinas Tenaga Kerja setempat selama minimal 1 tahun.",
    "conditions": {
      "compliant": "Laporan Triwulan P2K3 lengkap (Triwulan I, II, III, IV) dilaporkan tepat waktu dan memiliki bukti tanda terima sah dari Disnaker kabupaten/kota/provinsi.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak pernah mengirimkan laporan triwulan P2K3 ke Dinas Tenaga Kerja selama lebih dari 1 tahun penuh.",
      "minor": "Laporan triwulan P2K3 dibuat dan dikirim, namun pengiriman triwulan terakhir terlambat melewati batas waktu awal bulan berikutnya.",
      "ofi": "Melakukan integrasi pengiriman laporan digital melalui sistem pelaporan ketenagakerjaan online terpadu (Kemnaker WLKP/SIAPkerja)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 25,
    "code": "1.4.10",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Dibentuk kelompok-kelompok kerja dan dipilih dari wakil-wakil tenaga kerja yang ditunjuk sebagai penanggung jawab keselamatan dan kesehatan kerja di tempat kerjanya dan kepadanya diberikan pelatihan yang sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Pembentukan gugus kendali mutu K3 / Safety Committee di tingkat seksi/regu kerja lapangan beserta pelatihan dasar keselamatan bagi perwakilan pekerja.",
    "expectedEvidence": "SK Penunjukan Safety Champion / Perwakilan K3 Bagian / Fire Warden per unit, catatan pelatihan identifikasi bahaya dan K3 praktis bagi kelompok kerja.",
    "conditions": {
      "compliant": "Terdapat kelompok kerja keselamatan di setiap area kerja yang dipimpin perwakilan terlatih untuk memonitor kepatuhan K3 harian.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada keterlibatan perwakilan pekerja sama sekali di lini bawah dan tidak pernah ada pelatihan K3 dasar bagi penanggung jawab area.",
      "minor": "Kelompok kerja telah ditunjuk namun belum seluruh perwakilan mendapatkan pembekalan pelatihan identifikasi bahaya terstandar.",
      "ofi": "Memberikan sertifikat apresiasi berkala bagi kelompok kerja K3 terbaik dengan rekor zero unsafe act di areanya."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 26,
    "code": "1.4.11",
    "elementNum": 1,
    "elementName": "Elemen 1: Pembangunan dan Pemeliharaan Komitmen",
    "subElementName": "1.4 Keterlibatan & Konsultasi",
    "clauseText": "Susunan kelompok-kelompok kerja yang telah terbentuk didokumentasikan dan diinformasikan kepada tenaga kerja.",
    "interpretation": "Daftar nama dan penugasan perwakilan K3 kelompok kerja (Safety Representative / Champion) diumumkan agar diketahui oleh rekan sekerja di unitnya.",
    "expectedEvidence": "Papan informasi regu K3 unit kerja, daftar nama contact person safety shift yang terpasang di dinding operasional, daftar rilis intranet.",
    "conditions": {
      "compliant": "Susunan penanggung jawab K3 kelompok kerja terdokumentasi rapi dan dipublikasikan secara transparan di area kerja masing-masing.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Kelompok kerja tidak terdokumentasi dan rekan sekerja tidak mengetahui siapa petugas K3 di areanya saat terjadi kondisi kritis.",
      "minor": "Susunan kelompok kerja ada di arsip safety, namun papan pengumuman di area kerja bengkel belum memuat pembaruan susunan anggota regu.",
      "ofi": "Mencantumkan pin atau ban lengan khusus 'Safety Rep' pada seragam harian petugas kelompok kerja agar mudah diidentifikasi rekan kerja."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 27,
    "code": "2.1.1",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.1 Rencana Strategi K3",
    "clauseText": "Terdapat prosedur terdokumentasi untuk identifikasi potensi bahaya, penilaian, dan pengendalian risiko K3.",
    "interpretation": "Perusahaan wajib menetapkan prosedur resmi Hazard Identification, Risk Assessment, and Determining Control (HIRADC / IBPR) yang mencakup seluruh aktivitas.",
    "expectedEvidence": "SOP Identifikasi Bahaya Penilaian Risiko dan Pengendaliannya (HIRADC/IBPR), form IBPR terstandar dengan skala matriks kemungkinan & keparahan yang jelas.",
    "conditions": {
      "compliant": "Prosedur HIRADC/IBPR terdokumentasi komprehensif, disahkan, mencakup aktivitas rutin, non-rutin, darurat, dan mengadopsi hierarki pengendalian.",
      "critical": "Perusahaan tidak memiliki sistem identifikasi bahaya sama sekali dan beroperasi dengan risiko ledakan/fatality tanpa kendali apapun.",
      "major": "Prosedur HIRADC tidak ada sama sekali atau tidak memuat metodologi penilaian risiko yang jelas sesuai kaidah keselamatan kerja.",
      "minor": "Prosedur HIRADC tersedia namun belum mencantumkan ketentuan peninjauan saat terjadi perubahan material atau instalasi baru.",
      "ofi": "Mengadopsi perangkat lunak identifikasi bahaya berbasis cloud yang terintegrasi dengan permit-to-work sistem."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 28,
    "code": "2.1.2",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.1 Rencana Strategi K3",
    "clauseText": "Identifikasi potensi bahaya, penilaian, dan pengendalian risiko K3 sebagai rencana strategi K3 dilakukan oleh petugas yang berkompeten.",
    "interpretation": "Penyusunan dokumen HIRADC/IBPR harus dilakukan oleh tim multidisiplin yang memiliki sertifikat kompetensi atau pelatihan identifikasi bahaya terstandar.",
    "expectedEvidence": "Sertifikat pelatihan HIRADC/Risk Assessment personil tim penyusun, daftar riwayat hidup/kompetensi tim penilai risiko, SK Tim Risk Assessment.",
    "conditions": {
      "compliant": "Tim penilai risiko terdiri dari personil yang kompeten (bersertifikat pelatihan IBPR/Ahli K3) dan melibatkan penanggung jawab teknis area.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Identifikasi risiko disusun oleh pihak yang sama sekali tidak memahami operasional teknis atau tidak kompeten, menghasilkan dokumen fiktif.",
      "minor": "Penyusunan HIRADC melibatkan supervisor berpengalaman namun sertifikat bukti pelatihan formal IBPR-nya belum lengkap di file personalia.",
      "ofi": "Menyelenggarakan workshop penyegaran tahunan asesmen risiko lanjutan (seperti HAZOP / FMEA) bagi seluruh pimpinan seksi operasional."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 29,
    "code": "2.1.3",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.1 Rencana Strategi K3",
    "clauseText": "Rencana strategi K3 sekurang-kurangnya berdasarkan tinjauan awal, identifikasi potensi bahaya, penilaian, pengendalian risiko, dan peraturan perundang-undangan serta informasi K3 lain baik dari dalam maupun luar perusahaan.",
    "interpretation": "Penyusunan rencana strategis K3 harus komprehensif mengintegrasikan hasil initial review, matriks risiko, audit kepatuhan hukum, dan histori insiden masa lalu.",
    "expectedEvidence": "Dokumen Rencana Strategis K3 (Rencana 3-5 tahunan K3), laporan tinjauan awal (gap analysis), daftar regulasi K3 yang diacu, statistik kecelakaan.",
    "conditions": {
      "compliant": "Rencana strategis K3 disusun secara ilmiah berdasarkan data risiko nyata, tinjauan awal, dan kepatuhan peraturan hukum ketenagakerjaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Rencana K3 dibuat tanpa referensi bahaya nyata dan mengabaikan seluruh kewajiban peraturan perundang-undangan pokok.",
      "minor": "Rencana K3 telah memuat identifikasi bahaya dan regulasi, namun data histori insiden masa lalu belum sepenuhnya dimasukkan sebagai dasar evaluasi.",
      "ofi": "Membuat peta jalan (Safety Strategic Roadmap) visual yang dipresentasikan ke seluruh jajaran manajemen untuk penyelarasan visi jangka panjang."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 30,
    "code": "2.1.4",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.1 Rencana Strategi K3",
    "clauseText": "Rencana strategi K3 yang telah ditetapkan digunakan untuk mengendalikan risiko K3 dengan menetapkan tujuan dan sasaran yang dapat diukur dan menjadi prioritas serta menyediakan sumber daya.",
    "interpretation": "Rencana K3 harus diturunkan ke dalam Tujuan & Sasaran K3 tahunan yang memenuhi kaidah SMART (Specific, Measurable, Achievable, Relevant, Time-bound).",
    "expectedEvidence": "Matriks Sasaran dan Program K3 Tahunan, alokasi PIC, anggaran biaya, indikator pengukuran (misal Zero Fatality, FR < 1.0, 100% inspeksi terlaksana).",
    "conditions": {
      "compliant": "Sasaran K3 terukur, memiliki jadwal target yang realistis, penanggung jawab yang jelas, dan alokasi anggaran sumber daya yang disetujui pimpinan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada sasaran K3 terukur, atau sasaran dibuat tanpa menyediakan alokasi sumber daya sehingga program tidak pernah dapat direalisasikan.",
      "minor": "Sasaran K3 ditetapkan namun beberapa indikator kinerja belum terukur secara kuantitatif (misal hanya bertuliskan 'meningkatkan keselamatan').",
      "ofi": "Menerapkan Balanced Scorecard K3 yang menggabungkan indikator lagging (kejadian) dan leading (pencegahan/inspeksi/pelatihan)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 31,
    "code": "2.1.5",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.1 Rencana Strategi K3",
    "clauseText": "Rencana kerja dan rencana khusus yang berkaitan dengan produk, proses, proyek atau tempat kerja tertentu telah dibuat dengan menetapkan tujuan dan sasaran yang dapat diukur, menetapkan waktu pencapaian dan menyediakan sumber daya.",
    "interpretation": "Jika ada proyek khusus (misal pembangunan gedung baru, perombakan lini pabrik, turnaround/shutdown), harus ada Safety Management Plan (SMP) terpisah.",
    "expectedEvidence": "Dokumen HSE Plan Proyek / Rencana Khusus K3 Proyek, jadwal rencana kerja K3 proyek, anggaran K3 proyek, approval pimpinan proyek.",
    "conditions": {
      "compliant": "Setiap proyek, proses baru, atau pekerjaan khusus memiliki HSE Plan spesifik yang terukur, lengkap dengan jadwal mitigasi dan sumber daya mandiri.",
      "critical": "Pekerjaan proyek berisiko fatalitas tinggi dijalankan tanpa rencana keselamatan khusus sama sekali di tengah fasilitas aktif yang padat pekerja.",
      "major": "Perusahaan menjalankan proyek modifikasi besar tanpa menyusun rencana kerja K3 khusus yang disyaratkan regulasi konstruksi/industri.",
      "minor": "Rencana kerja khusus proyek ada, namun penetapan timeline penyelesaian tahapan mitigasi risiko belum diselaraskan dengan master schedule proyek.",
      "ofi": "Menyusun template standar Project HSE Plan terpadu yang dapat dikustomisasi cepat untuk setiap tender proyek baru."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 32,
    "code": "2.1.6",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.1 Rencana Strategi K3",
    "clauseText": "Rencana K3 diselaraskan dengan rencana sistem manajemen perusahaan.",
    "interpretation": "Program K3 tidak boleh berjalan sendiri-sendiri secara terisolasi, melainkan terintegrasi dengan rencana bisnis perusahaan (Rencana Strategis Perusahaan / Business Plan).",
    "expectedEvidence": "Dokumen Rencana Kerja dan Anggaran Perusahaan (RKAP) terpadu, dokumen sistem manajemen integrasi (QHSE Management System), roadmap bisnis.",
    "conditions": {
      "compliant": "Sasaran dan alokasi K3 termaktub di dalam rencana bisnis tahunan korporasi dan selaras dengan target produktivitas perusahaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Target K3 bertentangan dengan kebijakan manajemen produksi (misal target produksi memaksakan bypass sistem pengaman mesin demi kecepatan).",
      "minor": "Penyelarasan sudah ada dalam pembahasan rapat direksi namun belum tercermin secara eksplisit dalam dokumen Key Performance Indicator perusahaan.",
      "ofi": "Menerapkan sistem manajemen terintegrasi penuh (Integrated Management System ISO 9001, ISO 14001, dan SMK3 PP 50/2012)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 33,
    "code": "2.2.1",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.2 Manual SMK3",
    "clauseText": "Manual SMK3 meliputi kebijakan, tujuan, rencana, prosedur K3, instruksi kerja, formulir, catatan dan tanggung jawab serta wewenang tanggung jawab K3 untuk semua tingkatan dalam perusahaan.",
    "interpretation": "Perusahaan wajib memiliki Buku Manual SMK3 yang menjadi pedoman induk (Level 1) sistem manajemen keselamatan dan kesehatan kerja.",
    "expectedEvidence": "Buku Dokumen Manual SMK3 yang mencantumkan hirarki dokumentasi, kebijakan, uraian tanggung jawab, dan referensi seluruh prosedur K3.",
    "conditions": {
      "compliant": "Manual SMK3 lengkap, mutakhir, disahkan pimpinan puncak, dan mencakup seluruh elemen serta struktur hirarki dokumentasi perusahaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak memiliki Manual SMK3 sama sekali sebagai acuan induk tata kelola keselamatan.",
      "minor": "Manual SMK3 tersedia namun daftar referensi prosedur dan instruksi kerja di lampirannya belum diperbarui sesuai nomor dokumen revisi terakhir.",
      "ofi": "Menyediakan portal Manual SMK3 digital interaktif dengan hyperlink langsung menuju seluruh SOP dan formulir terkait."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 34,
    "code": "2.2.2",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.2 Manual SMK3",
    "clauseText": "Terdapat manual khusus yang berkaitan dengan produk, proses, atau tempat kerja tertentu.",
    "interpretation": "Bila terdapat operasional atau fasilitas yang memiliki spesifikasi bahaya unik (misal manual boiler, manual penanganan gas beracun), tersedia manual khusus.",
    "expectedEvidence": "Manual Operasi Khusus (misal: Manual K3 Laboratorium B3, Manual Keselamatan Dermaga / Jetty, Manual Keselamatan Operasi Ruang Bersih/Cleanroom).",
    "conditions": {
      "compliant": "Tersedia manual teknis keselamatan khusus pada tempat kerja atau peralatan berkategori bahaya tinggi dan dijadikan panduan operasional.",
      "critical": "Instalasi berisiko ledakan/katastropik dioperasikan tanpa manual petunjuk keselamatan khusus sehingga terjadi maloperasi fatal.",
      "major": "Perusahaan memiliki proses dengan bahaya kritis namun menolak menyusun manual keselamatan operasional khusus fasilitas tersebut.",
      "minor": "Manual khusus tersedia di ruang kontrol, namun belum diberi kode penomoran dokumen resmi di daftar induk dokumentasi perusahaan.",
      "ofi": "Melengkapi manual khusus dengan panduan troubleshooting visual (diagram alir darurat langkah demi langkah) di panel kontrol mesin."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 35,
    "code": "2.2.3",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.2 Manual SMK3",
    "clauseText": "Manual Sistem Manajemen K3 mudah didapat oleh semua personil dalam perusahaan sesuai kebutuhan.",
    "interpretation": "Manual SMK3 tidak boleh disimpan terkunci di lemari safety officer; harus dapat diakses bebas oleh supervisor, mandor, dan pekerja yang memerlukan acuan.",
    "expectedEvidence": "Salinan manual terkendali (controlled copy) di setiap departemen, akses jaringan komputer/intranet dokumen K3, bukti sosialisasi lokasi penyimpanan manual.",
    "conditions": {
      "compliant": "Manual SMK3 mudah diakses oleh personil di seluruh area operasional baik melalui salinan dokumen fisik terkendali maupun sistem digital intranet.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Akses manual SMK3 dilarang atau dibatasi secara ketat sehingga personil operasional tidak dapat mempelajari ketentuan keselamatan kerja wajib.",
      "minor": "Manual dapat diakses di portal intranet, namun beberapa pekerja lapangan di unit terpencil belum memiliki akun atau akses komputer untuk membacanya.",
      "ofi": "Menyediakan aplikasi e-manual K3 yang dapat diunduh di smartphone karyawan dan dapat dibuka secara offline saat bertugas di lapangan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 36,
    "code": "2.3.1",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.3 Peraturan Perundangan",
    "clauseText": "Terdapat prosedur yang terdokumentasi untuk mengidentifikasi, memperoleh, memelihara dan memahami peraturan perundang-undangan, standar, pedoman teknis, dan persyaratan lain yang relevan di bidang K3 untuk seluruh tenaga kerja di perusahaan.",
    "interpretation": "Perusahaan wajib memiliki prosedur baku untuk menelusuri, menginventarisasi, dan memperbarui daftar regulasi K3 yang berlaku bagi kegiatan usahanya.",
    "expectedEvidence": "SOP Identifikasi dan Pemenuhan Peraturan Perundang-undangan K3, bukti langganan info hukum atau akses portal regulasi resmi pemerintah.",
    "conditions": {
      "compliant": "Tersedia prosedur terdokumentasi yang mengatur frekuensi identifikasi regulasi baru dan mekanisme verifikasi pemenuhan hukum keselamatan kerja.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada prosedur identifikasi regulasi sama sekali, perusahaan tidak mengetahui kewajiban hukum keselamatan kerja yang mengikat operasionalnya.",
      "minor": "Prosedur identifikasi regulasi ada namun belum memuat batas waktu maksimal pembaruan daftar setelah regulasi baru pemerintah diundangkan.",
      "ofi": "Bekerja sama dengan sistem pemantauan hukum otomatis (legal compliance monitoring software) yang memberikan pembaruan regulasi real-time."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 37,
    "code": "2.3.2",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.3 Peraturan Perundangan",
    "clauseText": "Penanggung jawab untuk memelihara dan mendistribusikan informasi terbaru mengenai peraturan perundang-undangan, standar, pedoman teknis, dan persyaratan lain telah ditetapkan.",
    "interpretation": "Harus ada personil (misal Bagian Legal / Ahli K3) yang ditunjuk secara resmi dengan uraian tugas memelihara kepatuhan regulasi K3.",
    "expectedEvidence": "Surat penunjukan penanggung jawab kepatuhan regulasi K3 / Job description personil HSE-Legal, rekaman distribusi update regulasi ke departemen terkait.",
    "conditions": {
      "compliant": "Telah ditetapkan personil penanggung jawab yang aktif memelihara dan menyebarkan ringkasan regulasi K3 terbaru kepada unit terkait.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada personil yang bertanggung jawab sehingga regulasi kedaluwarsa tetap dipakai dan pelanggaran hukum berulang terjadi tanpa kendali.",
      "minor": "Personil telah ditunjuk namun bukti distribusi informasi regulasi terbaru ke pimpinan unit kerja teknis belum terarsip rapi.",
      "ofi": "Menerbitkan 'HSE Legal Bulletin' berkala per semester yang berisi ringkasan implikasi operasional undang-undang baru bagi tiap departemen."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 38,
    "code": "2.3.3",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.3 Peraturan Perundangan",
    "clauseText": "Persyaratan pada peraturan perundang-undangan, standar, pedoman teknis, dan persyaratan lain yang relevan di bidang K3 dimasukkan pada prosedur-prosedur dan petunjuk-petunjuk kerja.",
    "interpretation": "Ketentuan hukum K3 (seperti batas kebisingan Permenaker 5/2018, syarat scaffolding Permenaker 1/1980) wajib tercermin dalam klausul SOP kerja harian.",
    "expectedEvidence": "Daftar Pemenuhan Peraturan K3 (Legal Register & Compliance Evaluation), referensi pasal undang-undang yang tercantum dalam teks SOP operasional.",
    "conditions": {
      "compliant": "Setiap SOP operasional relevan secara eksplisit mencantumkan dan mematuhi batasan standar teknis yang diwajibkan oleh peraturan perundangan.",
      "critical": "SOP sengaja menginstruksikan metode kerja yang bertentangan dengan hukum keselamatan dan membahayakan keselamatan jiwa pekerja.",
      "major": "Prosedur operasional mengabaikan persyaratan keselamatan wajib (misal SOP bejana tekan dibuat tanpa mengacu syarat sertifikasi dan safety valve).",
      "minor": "SOP telah mencakup standar keselamatan namun referensi nomor peraturan perundangan yang tertulis di footer dokumen masih merujuk regulasi lama.",
      "ofi": "Menyusun matriks korelasi silang (cross-reference matrix) antara pasal-pasal undang-undang K3 dengan pasal-pasal dalam SOP internal perusahaan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 39,
    "code": "2.3.4",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.3 Peraturan Perundangan",
    "clauseText": "Perubahan pada peraturan perundang-undangan, standar, pedoman teknis, dan persyaratan lain yang relevan di bidang K3 digunakan untuk peninjauan prosedur-prosedur dan petunjuk-petunjuk kerja.",
    "interpretation": "Jika ada regulasi baru diundangkan oleh pemerintah, perusahaan wajib mengkaji dampaknya dan merevisi SOP atau IK terkait agar selalu patuh.",
    "expectedEvidence": "Notulensi review prosedur pasca terbitnya regulasi baru, riwayat revisi SOP operasional, memo permohonan penyesuaian proses kerja.",
    "conditions": {
      "compliant": "Perusahaan secara konsisten merevisi dan memutakhirkan SOP operasional segera setelah terbitnya regulasi K3 pemerintah yang baru.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Regulasi baru mewajibkan izin/pengujian keselamatan ketat namun perusahaan menolak merevisi SOP dan tetap menggunakan metode terlarang.",
      "minor": "SOP sedang dalam tahap drafting revisi untuk mengakomodasi regulasi baru namun belum tuntas disahkan melewati target internal.",
      "ofi": "Menetapkan target Service Level Agreement (SLA) maksimal 60 hari untuk pembaruan SOP internal setelah peraturan menteri baru disahkan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 40,
    "code": "2.4.1",
    "elementNum": 2,
    "elementName": "Elemen 2: Pembuatan dan Pendokumentasian Rencana K3",
    "subElementName": "2.4 Informasi K3",
    "clauseText": "Informasi yang dibutuhkan mengenai kegiatan K3 disebarluaskan secara sistematis kepada seluruh tenaga kerja, tamu, kontraktor, pelanggan, dan pemasok.",
    "interpretation": "Penyebaran informasi K3 (prosedur darurat, peringatan bahaya, data statistik keselamatan, jadwal training) harus terstruktur bagi seluruh pemangku kepentingan.",
    "expectedEvidence": "Papan pengumuman K3, Safety induction kit untuk tamu/kontraktor, safety flyer, brosur K3, siaran email/intranet berkala K3.",
    "conditions": {
      "compliant": "Tersedia sistem komunikasi K3 yang menjangkau seluruh pekerja dan pihak ketiga yang beraktivitas di area perusahaan secara terjadwal dan konsisten.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada penyebaran informasi K3 sama sekali; tamu dan kontraktor dibiarkan masuk area bahaya tinggi tanpa briefing keselamatan apapun.",
      "minor": "Informasi K3 tersampaikan baik ke pekerja tetap namun materi informasi untuk kontraktor temporer belum lengkap terpasang di pos masuk.",
      "ofi": "Mengembangkan TV display digital di lobi dan area kantin yang menayangkan statistik keselamatan, tips harian K3, dan video interaktif secara kontinu."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 41,
    "code": "3.1.1",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.1 Pengendalian Perancangan",
    "clauseText": "Prosedur yang terdokumentasi mempertimbangkan identifikasi potensi bahaya, penilaian, dan pengendalian risiko yang dilakukan pada tahap perancangan dan modifikasi.",
    "interpretation": "Perusahaan harus memiliki prosedur terdokumentasi yang memastikan setiap desain pabrik, mesin baru, fasilitas, atau modifikasi proses telah mengkaji aspek K3 sejak awal perancangan (Design Safety / Inherently Safer Design).",
    "expectedEvidence": "SOP Pengendalian Perancangan dan Modifikasi (Design & Engineering MOC), formulir evaluasi keselamatan desain (Safety Design Review / HAZOP report / risk assessment tahap desain).",
    "conditions": {
      "compliant": "Prosedur perancangan terdokumentasi lengkap dan diterapkan pada setiap proyek baru atau modifikasi instalasi dengan kajian risiko terverifikasi.",
      "critical": "Perancangan fasilitas bertekanan tinggi/bahan beracun dilakukan serampangan tanpa kajian risiko hingga membahayakan integritas struktur dan mengancam nyawa pekerja di sekitarnya.",
      "major": "Fasilitas atau modifikasi pabrik dijalankan tanpa prosedur perancangan dan mengabaikan kajian keselamatan kerja sama sekali.",
      "minor": "Prosedur perancangan ada dan kajian risiko teknis dilakukan, namun catatan checklist kajian keselamatan tahap konseptual belum terarsip di folder proyek.",
      "ofi": "Menerapkan metodologi Design for Safety (DfS) formal dengan melibatkan certified safety professional sejak tahap Front-End Engineering Design (FEED)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 42,
    "code": "3.1.2",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.1 Pengendalian Perancangan",
    "clauseText": "Prosedur, instruksi kerja dalam penggunaan produk, pengoperasian mesin dan peralatan, instalasi, pesawat atau proses serta informasi lainnya yang berkaitan dengan K3 telah dikembangkan selama perancangan dan/atau modifikasi.",
    "interpretation": "Ketika mesin atau fasilitas baru dirancang/dimodifikasi, SOP pengoperasian aman, petunjuk keselamatan instalasi, dan batasan operasi aman harus sudah disusun bersamaan.",
    "expectedEvidence": "Draft Standard Operating Procedure (SOP) dan Instruksi Kerja (IK) operasi mesin baru yang disusun oleh tim perancang sebelum commissioning, dokumen operating manual dengan peringatan K3.",
    "conditions": {
      "compliant": "SOP dan IK operasi aman telah siap dan disahkan sebelum peralatan/proses hasil rancangan mulai dioperasikan oleh pekerja.",
      "critical": "Mesin baru berisiko tinggi dioperasikan tanpa instruksi kerja dan tanpa pengaman, mengakibatkan pekerja beroperasi dalam bahaya terjepit/terpotong seketika.",
      "major": "Peralatan baru sudah beroperasi penuh selama berbulan-bulan namun tidak ada SOP atau petunjuk keselamatan pengoperasian yang dikembangkan.",
      "minor": "SOP operasi mesin telah dibuat namun instruksi kerja pembersihan atau penanganan gangguan sementara (troubleshooting) masih berupa draft.",
      "ofi": "Menyertakan barcode video instruksi pengoperasian aman pada pelat mesin agar operator dapat memindai dan menonton cara operasi aman melalui tablet kerja."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 43,
    "code": "3.1.3",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.1 Pengendalian Perancangan",
    "clauseText": "Petugas yang berkompeten melakukan verifikasi bahwa perancangan dan/atau modifikasi memenuhi persyaratan K3 yang ditetapkan sebelum penggunaan hasil rancangan.",
    "interpretation": "Sebelum hasil rancangan/modifikasi diserahterimakan dan digunakan (Pre-Startup Safety Review / PSSR), harus ada verifikasi dan validasi keselamatan oleh Ahli K3 atau engineer yang kompeten.",
    "expectedEvidence": "Dokumen verifikasi desain, formulir checklist Pre-Startup Safety Review (PSSR) bertandatangan Ahli K3/insinyur yang kompeten, berita acara uji coba keselamatan (safety sign-off).",
    "conditions": {
      "compliant": "Terdapat dokumen PSSR/verifikasi formal yang membuktikan seluruh fitur keselamatan telah terpasang dan berfungsi sempurna sebelum fasilitas dioperasikan.",
      "critical": "Sistem keselamatan interlocking atau pengaman tekanan dilepas/dilewati (bypass) dan dioperasikan tanpa verifikasi, memicu ancaman ledakan nyata.",
      "major": "Fasilitas hasil modifikasi langsung digunakan tanpa melalui proses verifikasi keselamatan oleh personil yang berwenang.",
      "minor": "Proses verifikasi PSSR telah dilakukan dan mesin aman, namun tanda tangan persetujuan akhir Ahli K3 terlambat didokumentasikan di lembar serah terima.",
      "ofi": "Menerapkan sistem checklist PSSR digital berbasis mobile app yang terhubung langsung dengan approval manajemen engineering."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 44,
    "code": "3.1.4",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.1 Pengendalian Perancangan",
    "clauseText": "Semua perubahan dan modifikasi perancangan yang mempunyai implikasi terhadap K3 diidentifikasikan, didokumentasikan, ditinjau ulang dan disetujui oleh petugas yang berwenang sebelum pelaksanaan.",
    "interpretation": "Setiap perubahan rancangan di tengah jalan (engineering change request) yang berpotensi mengubah beban kerja, titik bahaya, atau emisi harus dinilai ulang dan disetujui sebelum dieksekusi.",
    "expectedEvidence": "Formulir Engineering Change Request (ECR) / Change Notice yang memuat analisis dampak keselamatan, rekaman review multidisplin, bukti otorisasi tertulis manajemen.",
    "conditions": {
      "compliant": "Setiap modifikasi teknis tercatat resmi, dinilai dampaknya terhadap K3, dan disetujui oleh pejabat teknis berwenang sebelum fisik diubah.",
      "critical": "Perubahan jalur pipa gas/listrik tegangan tinggi dilakukan secara diam-diam tanpa persetujuan sehingga menciptakan titik bahaya fatal.",
      "major": "Modifikasi sarana produksi dilakukan secara liar di lapangan tanpa adanya dokumentasi telaah dampak K3 dan otorisasi formal.",
      "minor": "Formulir perubahan telah disetujui oleh Manajer Teknik, namun paraf pemberitahuan kepada departemen K3 terlambat 1 hari kerja.",
      "ofi": "Menetapkan alur notifikasi otomatis dalam Enterprise Resource Planning (ERP) jika ada revisi gambar teknik CAD yang berlabel dampak K3."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 45,
    "code": "3.2.1",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.2 Peninjauan Kontrak",
    "clauseText": "Prosedur yang terdokumentasi harus mampu mengidentifikasi bahaya dan menilai risiko K3 bagi tenaga kerja, lingkungan dan masyarakat, dimana prosedur tersebut digunakan pada saat memasok barang dan jasa dalam suatu kontrak.",
    "interpretation": "Perusahaan harus memiliki prosedur baku untuk mengkaji risiko K3 ketika bertindak sebagai pemasok/kontraktor atau saat membuat kontrak pengadaan barang/jasa bagi pelanggan.",
    "expectedEvidence": "SOP Peninjauan Kontrak (Contract Review Procedure) yang memuat klausul telaah risiko K3, form identifikasi bahaya layanan kontrak, dokumen tender review.",
    "conditions": {
      "compliant": "Prosedur peninjauan kontrak mencakup identifikasi bahaya bagi pekerja, masyarakat, dan lingkungan serta diterapkan secara konsisten pada setiap pengikatan kontrak.",
      "critical": "Menandatangani kontrak pekerjaan berbahaya tinggi tanpa identifikasi risiko dan tanpa menyediakan APD/metode kerja aman bagi pekerja di lokasi klien berisiko fatal.",
      "major": "Perusahaan mengabaikan seluruh kewajiban identifikasi risiko keselamatan dalam kontrak kerja sama penyediaan jasa.",
      "minor": "Prosedur peninjauan kontrak tersedia namun belum secara tegas mencakup identifikasi risiko bagi masyarakat sekitar area proyek.",
      "ofi": "Menyusun pedoman baku Contractor Safety Management System (CSMS) terpadu untuk peninjauan seluruh kontrak pengadaan proyek."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 46,
    "code": "3.2.2",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.2 Peninjauan Kontrak",
    "clauseText": "Identifikasi bahaya dan penilaian risiko dilakukan pada tahap tinjauan kontrak oleh petugas yang berkompeten.",
    "interpretation": "Kajian risiko dalam kontrak harus dijalankan oleh personil yang memahami seluk-beluk teknis K3 (Ahli K3 / Estimator terlatih K3), bukan semata pertimbangan finansial oleh bagian sales/marketing.",
    "expectedEvidence": "Laporan evaluasi risiko prakontrak bertandatangan Ahli K3/Risk Officer, sertifikat kompetensi personil peninjau kontrak K3.",
    "conditions": {
      "compliant": "Peninjauan risiko kontrak dilakukan secara profesional oleh petugas yang berkompeten dan hasilnya dituangkan dalam lembar verifikasi prakontrak.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Peninjauan kontrak hanya dilakukan dari sudut pandang laba-rugi tanpa melibatkan petugas kompeten K3 sehingga aspek keselamatan vital terabaikan.",
      "minor": "Peninjau kontrak memiliki kualifikasi teknis namun sertifikat pelatihan pembekalan regulasi kontrak K3-nya belum diperbarui.",
      "ofi": "Mengikutsertakan tim komersial/marketing dalam pelatihan dasar Contract Safety Risk Assessment agar tanggap terhadap klausul bahaya K3."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 47,
    "code": "3.2.3",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.2 Peninjauan Kontrak",
    "clauseText": "Kontrak ditinjau ulang untuk menjamin bahwa pemasok dapat memenuhi persyaratan K3 bagi pelanggan.",
    "interpretation": "Verifikasi kemampuan rekanan (pemasok/subkontraktor) untuk memenuhi ketentuan standar K3 yang disyaratkan oleh perusahaan atau pelanggan akhir.",
    "expectedEvidence": "Lembar penilaian prakualifikasi K3 kontraktor/pemasok, hasil audit kepatuhan keselamatan calon vendor, bukti penyampaian regulasi K3 perusahaan kepada vendor.",
    "conditions": {
      "compliant": "Tersedia bukti evaluasi menyeluruh terhadap kapabilitas keselamatan kerja pemasok sebelum penetapan kontrak kerja sama.",
      "critical": "Menunjuk vendor tanpa peralatan keselamatan memadai untuk pekerjaan berbahaya tinggi (misal scaffolding roboh tanpa sabuk pengaman) hingga terjadi korban jiwa.",
      "major": "Mempekerjakan kontraktor berisiko tinggi tanpa melakukan peninjauan kemampuan dan komitmen pemenuhan syarat K3 sama sekali.",
      "minor": "Peninjauan kemampuan K3 vendor dilakukan namun skor kelulusan CSMS belum didokumentasikan di lembar rangkuman kontrak.",
      "ofi": "Menerapkan sistem prakualifikasi vendor online terintegrasi (e-Procurement CSMS portal) dengan sistem bintang rating kepatuhan keselamatan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 48,
    "code": "3.2.4",
    "elementNum": 3,
    "elementName": "Elemen 3: Pengendalian Perancangan dan Peninjauan Kontrak",
    "subElementName": "3.2 Peninjauan Kontrak",
    "clauseText": "Catatan tinjauan kontrak dipelihara dan didokumentasikan.",
    "interpretation": "Seluruh berkas, notulensi negosiasi klausul keselamatan, persetujuan syarat K3, dan rekaman evaluasi kontrak harus disimpan dan mudah ditelusuri kembali.",
    "expectedEvidence": "Arsip dokumen kontrak lengkap dengan lampiran HSE Requirement, berkas evaluasi prakontrak yang tersusun rapi di bagian legal/procurement.",
    "conditions": {
      "compliant": "Seluruh rekaman tinjauan kontrak K3 tersimpan sistematis, memiliki nomor referensi yang jelas, dan dapat ditunjukkan saat diaudit.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Catatan tinjauan kontrak K3 dihilangkan secara sengaja atau tidak pernah didokumentasikan sama sekali.",
      "minor": "Catatan tinjauan kontrak ada, namun pengarsipan salinan lampiran persyaratan keselamatan belum dikelompokkan dalam satu map induk proyek.",
      "ofi": "Melakukan digitalisasi penuh seluruh arsip kontrak K3 dengan enkripsi dokumen dan backup di peladen awan terpercaya."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 49,
    "code": "4.1.1",
    "elementNum": 4,
    "elementName": "Elemen 4: Pengendalian Dokumen",
    "subElementName": "4.1 Persetujuan & Pengeluaran Dokumen",
    "clauseText": "Dokumen K3 mempunyai identifikasi status, wewenang, tanggal pengeluaran dan tanggal modifikasi.",
    "interpretation": "Setiap dokumen sistem K3 (Manual, SOP, IK, Formulir) harus memiliki metadata lengkap: judul, nomor dokumen, nomor revisi, tanggal berlaku, dan siapa pembuat/pemeriksa/penyetuju.",
    "expectedEvidence": "Format header/footer terstandar pada seluruh dokumen K3 yang memuat nomor dokumen, status revisi, tanggal efektif, dan kolom tanda tangan pengesahan.",
    "conditions": {
      "compliant": "Seluruh dokumen K3 memiliki penomoran unik, riwayat status revisi, tanggal terbit, dan disahkan oleh pejabat yang berwenang.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Dokumen-dokumen prosedur keselamatan utama beredar bebas tanpa identitas status, tanpa nomor revisi, dan tanpa otorisasi sah manajemen.",
      "minor": "Ditemukan 1-2 instruksi kerja di lantai pabrik yang format nomor revisinya belum diperbarui sesuai daftar induk dokumen terbaru.",
      "ofi": "Menerapkan sistem Document Management System (DMS) berbasis kode QR untuk memverifikasi keabsahan dan status revisi dokumen secara instan di lapangan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 50,
    "code": "4.1.2",
    "elementNum": 4,
    "elementName": "Elemen 4: Pengendalian Dokumen",
    "subElementName": "4.1 Persetujuan & Pengeluaran Dokumen",
    "clauseText": "Penerima distribusi dokumen tercantum dalam dokumen tersebut.",
    "interpretation": "Harus ada daftar distribusi dokumen terkendali (Distribution List) agar saat terjadi revisi, seluruh salinan dokumen lama dapat ditarik dari para pemegang dokumen.",
    "expectedEvidence": "Daftar Distribusi Dokumen Terkendali (Controlled Copy Distribution Matrix), tanda terima distribusi dokumen pada masing-masing departemen.",
    "conditions": {
      "compliant": "Daftar penerima salinan terkendali tercantum dengan jelas di dokumen atau dikelola melalui matriks distribusi dokumen induk yang mutakhir.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Dokumen didistribusikan tanpa kontrol sama sekali, sehingga pihak pengendali tidak mengetahui siapa saja yang memegang dokumen keselamatan kerja.",
      "minor": "Daftar distribusi ada di sekretariat K3 namun lembar distribusi di halaman lampiran dokumen beberapa departemen belum terisi lengkap.",
      "ofi": "Mengganti distribusi fisik kertas dengan akses digital berbasis hak otorisasi role-based access control pada server terpusat."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 51,
    "code": "4.1.3",
    "elementNum": 4,
    "elementName": "Elemen 4: Pengendalian Dokumen",
    "subElementName": "4.1 Persetujuan & Pengeluaran Dokumen",
    "clauseText": "Dokumen K3 edisi terbaru disimpan secara sistematis pada tempat yang ditentukan.",
    "interpretation": "Dokumen yang masih berlaku (current edition) harus ditempatkan di lokasi yang mudah dijangkau oleh personil yang memerlukannya dalam operasional harian.",
    "expectedEvidence": "Master copy dokumen di ruang arsip Document Controller, display folder SOP di stasiun kerja/ruang kontrol, ketersediaan file pdf di server resmi.",
    "conditions": {
      "compliant": "Dokumen edisi terbaru tersimpan rapi, tertata sistematis sesuai indeks, dan selalu siap digunakan oleh para operator di area kerja.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Dokumen K3 edisi terbaru hilang atau tercecer sehingga pekerja tidak memiliki acuan standar kerja aman saat mengoperasikan pabrik.",
      "minor": "Penyimpanan dokumen sistematis namun penataan folder arsip di salah satu unit kerja belum mengikuti kode klasifikasi standar perusahaan.",
      "ofi": "Membuat perpustakaan keselamatan digital terpadu (Digital HSE Library) dengan fitur pencarian kata kunci cerdas (full-text search)."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 52,
    "code": "4.1.4",
    "elementNum": 4,
    "elementName": "Elemen 4: Pengendalian Dokumen",
    "subElementName": "4.1 Persetujuan & Pengeluaran Dokumen",
    "clauseText": "Dokumen usang segera disingkirkan dari penggunaannya sedangkan dokumen usang yang disimpan untuk keperluan tertentu diberi tanda khusus.",
    "interpretation": "Dokumen yang sudah tidak berlaku (obsolete) harus ditarik dari peredaran guna mencegah salah penerapan. Bila disimpan sebagai arsip sejarah, wajib distempel 'KEDALUWARSA / OBSOLETE'.",
    "expectedEvidence": "Berita acara penarikan/pemusnahan dokumen lama, stempel fisik atau watermark digital bertuliskan 'OBSOLETE / TIDAK BERLAKU' pada arsip dokumen lama.",
    "conditions": {
      "compliant": "Tidak ditemukan dokumen usang di tempat kerja, dan seluruh arsip riwayat dokumen lama diberi tanda cap kedaluwarsa secara tegas.",
      "critical": "Penggunaan prosedur usang yang telah dinyatakan berbahaya menyebabkan insiden fatalitas di area operasional.",
      "major": "Dokumen prosedur usang dibiarkan menumpuk di meja kerja dan masih aktif dipakai sebagai acuan oleh operator mesin.",
      "minor": "Dokumen usang sudah ditarik dari lantai produksi dan disimpan di lemari arsip, namun stempel 'OBSOLETE' belum dibubuhkan pada dokumen tersebut.",
      "ofi": "Menerapkan sistem penguncian otomatis (auto-archiving) pada portal dokumen digital sehingga dokumen versi lama otomatis berpindah ke folder arsip terproteksi."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 53,
    "code": "4.2.1",
    "elementNum": 4,
    "elementName": "Elemen 4: Pengendalian Dokumen",
    "subElementName": "4.2 Perubahan Dokumen",
    "clauseText": "Terdapat sistem untuk membuat dan menyetujui perubahan terhadap dokumen K3.",
    "interpretation": "Perubahan dokumen K3 tidak boleh dilakukan sembarangan; harus melalui usulan resmi Formulir Permohonan Perubahan Dokumen (Document Change Request) dan disetujui pihak berwenang.",
    "expectedEvidence": "SOP Pengendalian Dokumen & Rekaman K3, formulir Document Change Request (DCR) yang disetujui Document Controller dan Pengurus K3.",
    "conditions": {
      "compliant": "Tersedia prosedur baku perubahan dokumen yang ditaati secara konsisten dalam setiap usulan revisi SOP atau instruksi keselamatan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Prosedur keselamatan diubah secara sepihak dan liar (misal coretan pena di SOP) tanpa sistem otorisasi dan kajian keselamatan yang sah.",
      "minor": "Perubahan dokumen telah disetujui oleh Kepala Departemen namun nomor registrasi DCR belum dicatat dalam log book Document Controller.",
      "ofi": "Menerapkan alur persetujuan perubahan dokumen berbasis tanda tangan elektronik bersertifikat (digital signature)."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 54,
    "code": "4.2.2",
    "elementNum": 4,
    "elementName": "Elemen 4: Pengendalian Dokumen",
    "subElementName": "4.2 Perubahan Dokumen",
    "clauseText": "Dalam hal terjadi perubahan diberikan alasan terjadinya perubahan dan tertera dalam dokumen atau lampirannya dan menginformasikan kepada pihak terkait.",
    "interpretation": "Pada dokumen yang direvisi, harus terdapat tabel riwayat perubahan (Revision History Table) yang menjelaskan klausul mana yang diubah dan apa dasar pertimbangannya.",
    "expectedEvidence": "Tabel riwayat revisi pada halaman depan/belakang SOP yang memuat nomor klausul lama, klausul baru, dan alasan perubahan; memo edaran sosialisasi revisi.",
    "conditions": {
      "compliant": "Alasan perubahan terdokumentasi jelas dalam lembar riwayat dokumen dan informasi revisi telah dikomunikasikan secara resmi ke seluruh pemegang dokumen.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Dokumen dirombak total tanpa ada catatan alasan perubahan, dan personil pelaksana tidak diberi tahu mengenai adanya revisi petunjuk kerja aman.",
      "minor": "Alasan revisi dokumen dicatat singkat pada memo pengantar namun belum disalin ke dalam tabel riwayat revisi dokumen resmi.",
      "ofi": "Menyorot teks yang diubah dengan warna latar belakang khusus (highlight tracking) pada draft sosialisasi untuk memudahkan pemahaman pekerja."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 55,
    "code": "4.2.3",
    "elementNum": 4,
    "elementName": "Elemen 4: Pengendalian Dokumen",
    "subElementName": "4.2 Perubahan Dokumen",
    "clauseText": "Terdapat prosedur pengendalian dokumen atau daftar seluruh dokumen yang mencantumkan status dari setiap dokumen tersebut, dalam upaya mencegah penggunaan dokumen yang usang.",
    "interpretation": "Perusahaan harus memiliki Daftar Induk Dokumen K3 (Masterlist of Documents) yang memuat status terkini seluruh dokumen untuk mencegah penggunaan dokumen kedaluwarsa.",
    "expectedEvidence": "Dokumen Masterlist / Daftar Induk Dokumen Internal dan Eksternal K3 yang memuat judul, nomor dokumen, nomor revisi, tanggal berlaku, dan lokasi distribusi.",
    "conditions": {
      "compliant": "Daftar induk dokumen terpelihara mutakhir, mencerminkan seluruh dokumen yang aktif, dan dijadikan referensi keabsahan dokumen di seluruh divisi.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak memiliki daftar induk dokumen sama sekali sehingga tidak ada kejelasan dokumen mana yang resmi berlaku.",
      "minor": "Daftar induk dokumen ada namun terdapat 1 revisi SOP baru yang belum dimasukkan ke dalam daftar pemutakhiran bulanan.",
      "ofi": "Membuat Masterlist Dokumen online dengan link dinamis yang otomatis terbarui setiap kali ada dokumen baru yang dirilis oleh Document Controller."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 56,
    "code": "5.1.1",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.1 Spesifikasi Pembelian",
    "clauseText": "Terdapat prosedur yang terdokumentasi yang dapat menjamin bahwa spesifikasi teknik dan informasi lain yang relevan dengan K3 telah diperiksa sebelum keputusan untuk membeli.",
    "interpretation": "Prosedur pengadaan barang dan jasa harus mengatur bahwa sebelum PO diterbitkan, spesifikasi teknis keselamatan (safety feature, sertifikasi alat, sertifikat uji) wajib diverifikasi.",
    "expectedEvidence": "SOP Pembelian Barang dan Jasa Berwawasan K3, formulir Purchase Requisition (PR) yang memiliki kolom verifikasi aspek K3 oleh personil safety.",
    "conditions": {
      "compliant": "Prosedur pembelian K3 terdokumentasi dan dijalankan, memastikan tidak ada peralatan berbahaya dibeli tanpa evaluasi keselamatan awal.",
      "critical": "Membeli zat kimia peledak/beracun terlarang tanpa verifikasi keselamatan yang berakibat pada pajanan mematikan langsung bagi pekerja pabrik.",
      "major": "Departemen Purchasing membeli mesin atau zat kimia berbahaya tanpa pernah melakukan pemeriksaan spesifikasi keselamatan kerja sama sekali.",
      "minor": "Pemeriksaan spesifikasi K3 telah dilakukan oleh tim teknisi, namun checklist tinjauan K3 belum dilampirkan pada berkas purchase order.",
      "ofi": "Memasukkan modul 'Safety Screening' otomatis dalam software procurement/SAP perusahaan sehingga PR barang teknis otomatis mewajibkan persetujuan HSE."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 57,
    "code": "5.1.2",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.1 Spesifikasi Pembelian",
    "clauseText": "Spesifikasi pembelian untuk setiap sarana produksi, zat kimia atau jasa harus dilengkapi spesifikasi yang sesuai dengan persyaratan peraturan perundang-undangan dan standar K3.",
    "interpretation": "Setiap pesanan sarana produksi (alat berat, boiler, crane) atau bahan kimia wajib melampirkan persyaratan legalitas (SNI, izin edar, sertifikasi pabrik, Lembar Data Keselamatan/MSDS).",
    "expectedEvidence": "Lampiran dokumen spesifikasi K3 pada PO/Surat Perjanjian Kerja Sama, permintaan MSDS/LDKB berbahasa Indonesia, klausul standar teknis pada dokumen lelang.",
    "conditions": {
      "compliant": "Seluruh spesifikasi pembelian sarana produksi dan bahan kimia secara eksplisit mencantumkan kewajiban pemenuhan regulasi K3 nasional dan standar teknis.",
      "critical": "Membeli pesawat angkat-angkut rakitan ilegal tanpa sertifikasi kelaikan yang dipaksakan beroperasi hingga roboh dan menewaskan operator.",
      "major": "Spesifikasi pembelian mengabaikan seluruh standar keselamatan wajib yang digariskan undang-undang ketenagakerjaan.",
      "minor": "Spesifikasi teknis telah mencakup standar mutu dan K3, namun kewajiban penyertaan LDKB berbahasa Indonesia belum tertulis di dokumen kontrak pengadaan.",
      "ofi": "Menyusun Buku Katalog Standar Spesifikasi Pembelian K3 (HSE Buying Guide) untuk seluruh kategori alat dan material kerja berulang."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 58,
    "code": "5.1.3",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.1 Spesifikasi Pembelian",
    "clauseText": "Konsultasi dengan tenaga kerja yang kompeten pada saat keputusan pembelian dilakukan untuk menetapkan persyaratan K3 dicantumkan dalam spesifikasi pembelian dan diinformasikan kepada tenaga kerja yang menggunakannya.",
    "interpretation": "Dalam memilih alat pelindung diri, mesin baru, atau perkakas tangan, manajemen pengadaan harus berkonsultasi dengan pekerja atau operator pemakai demi menjamin kenyamanan ergonomi dan kecocokan proteksi.",
    "expectedEvidence": "Formulir uji coba produk (trial form APD/peralatan), notulensi konsultasi/evaluasi calon alat kerja bersama perwakilan user/operator, tanda terima evaluasi sampel.",
    "conditions": {
      "compliant": "Tersedia bukti konsultasi nyata dengan pekerja pemakai dan Ahli K3 sebelum pembelian alat baru, dan spesifikasi akhir diinformasikan kepada calon pengguna.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Manajemen membeli APD berkualitas rendah/tidak layak pakai secara sepihak tanpa konsultasi yang mengakibatkan pekerja menolak memakai atau terluka.",
      "minor": "Konsultasi lisan telah dilakukan saat pengetesan sampel APD, namun lembar kuesioner penilaian ergonomi dari operator belum diarsip tertulis.",
      "ofi": "Mengadakan 'Safety Expo Mini' internal di mana para vendor memamerkan opsi alat kerja dan pekerja dapat memberikan voting preferensi produk."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 59,
    "code": "5.1.4",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.1 Spesifikasi Pembelian",
    "clauseText": "Kebutuhan pelatihan, pasokan alat pelindung diri dan perubahan terhadap prosedur kerja harus dipertimbangkan sebelum pembelian dan penggunaannya.",
    "interpretation": "Sebelum mendatangkan mesin/alat/bahan baru, perusahaan harus sudah merencanakan: apakah perlu training khusus? apakah butuh APD tambahan? apakah SOP lama harus direvisi?",
    "expectedEvidence": "Klausul Transfer of Technology / Training dari vendor pada kontrak pembelian mesin, anggaran APD khusus, jadwal revisi SOP sebelum mesin tiba.",
    "conditions": {
      "compliant": "Rencana pelatihan, ketersediaan APD khusus, dan draf revisi prosedur telah siap dan terintegrasi dalam rencana pengadaan sebelum alat dioperasikan.",
      "critical": "Membeli bahan beracun/gas mematikan tanpa menyediakan respirator dan pelatihan penanganan darurat bagi pekerja yang ditugaskan membuka wadah bahan.",
      "major": "Alat baru berteknologi rumit didatangkan dan langsung disuruh operasikan tanpa ada pelatihan operator dan tanpa APD yang dipersyaratkan manufaktur.",
      "minor": "Pelatihan dari vendor telah dijadwalkan namun pengadaan filter respirator khusus pengganti masih dalam status indent pengiriman.",
      "ofi": "Membuat paket terintegrasi (Turnkey Safety Package) dalam setiap PO mesin baru yang mewajibkan vendor menyertakan training kit dan APD starter pack."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 60,
    "code": "5.1.5",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.1 Spesifikasi Pembelian",
    "clauseText": "Persyaratan K3 dievaluasi dan menjadi pertimbangan dalam seleksi pembelian.",
    "interpretation": "Aspek kepatuhan K3 vendor/pemasok dan kualitas keselamatan produk harus memiliki bobot penilaian formal dalam matriks evaluasi pengadaan tender (bid evaluation).",
    "expectedEvidence": "Lembar evaluasi penawaran tender (Commercial & Technical Bid Evaluation) yang memuat kriteria penilaian K3 dengan bobot persentase nilai yang ditentukan.",
    "conditions": {
      "compliant": "Kriteria keselamatan kerja menjadi salah satu faktor penentu utama dalam matriks seleksi pemenang tender pengadaan barang dan jasa.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan selalu memenangkan penawar termurah yang terbukti berkali-kali melanggar standar keselamatan dan memasok barang rekondisi berbahaya.",
      "minor": "Aspek K3 dinilai dalam rapat seleksi vendor, namun skor pembobotan teknis K3 belum distandarkan dalam format tabel evaluasi purchasing.",
      "ofi": "Menerapkan sistem scoring digital otomatis yang menggugurkan vendor secara otomatis (knock-out criteria) jika gagal memenuhi syarat mutlak K3."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 61,
    "code": "5.2.1",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.2 Verifikasi Barang & Jasa",
    "clauseText": "Barang dan jasa yang dibeli diperiksa kesesuaiannya dengan spesifikasi pembelian.",
    "interpretation": "Saat barang/alat tiba di gudang atau jasa diserahkan, tim penerima (Receiving/Quality Control/HSE) wajib melakukan inspeksi fisik (Incoming Inspection) untuk mencocokkan spesifikasi K3.",
    "expectedEvidence": "Formulir Pemeriksaan Penerimaan Barang (Incoming Inspection Report / Goods Receipt Note with HSE checklist), sertifikat kalibrasi/uji dari pabrik.",
    "conditions": {
      "compliant": "Setiap barang dan jasa yang diterima diperiksa kesesuaian aspek K3-nya sebelum disimpan di gudang atau diserahterimakan ke lini produksi.",
      "critical": "Bahan kimia tanpa label/salah label diterima dan langsung dimasukkan ke jalur proses berisiko reaksi eksotermik/ledakan fatal.",
      "major": "Barang teknis berbahaya dan APD diterima dan langsung dipakai tanpa pernah ada proses pemeriksaan kesesuaian spesifikasi keselamatan sama sekali.",
      "minor": "Pemeriksaan fisik barang telah dilakukan, namun tanda tangan verifikator K3 pada formulir penerimaan barang belum lengkap.",
      "ofi": "Menggunakan sistem pemindaian barcode digital pada area receiving bay untuk memvalidasi nomor batch dan sertifikat kelayakan keselamatan pabrikan secara instan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 62,
    "code": "5.3.1",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.3 Barang Dipasok Pelanggan",
    "clauseText": "Barang dan jasa yang dipasok pelanggan, sebelum digunakan terlebih dahulu diidentifikasi potensi bahaya dan dinilai risikonya dan catatan tersebut dipelihara.",
    "interpretation": "Jika pelanggan memasok bahan baku, mold, mesin titipan, atau material untuk dikerjakan perusahaan (customer-supplied product), material tersebut harus dinilai bahaya K3-nya sebelum diproses.",
    "expectedEvidence": "Formulir Pemeriksaan Material Pasokan Pelanggan, kajian HIRA atas material/alat titipan pelanggan, MSDS dari pelanggan, berita acara serah terima.",
    "conditions": {
      "compliant": "Tersedia prosedur dan rekaman penilaian risiko atas seluruh barang/jasa pasokan pelanggan sebelum material tersebut dioperasikan di tempat kerja.",
      "critical": "Menggunakan bahan kimia berbahaya pasokan pelanggan tanpa identifikasi bahaya sehingga memicu pelepasan gas beracun yang mengancam nyawa personil pabrik.",
      "major": "Material titipan pelanggan berkategori bahaya tinggi langsung dimasukkan ke proses kerja tanpa izin kerja dan tanpa identifikasi bahaya.",
      "minor": "Pemeriksaan material pasokan pelanggan telah dilakukan, namun salinan MSDS dari pelanggan terlambat diarsipkan di gudang penyimpanan.",
      "ofi": "Menyusun klausul standar dalam nota kesepahaman (MOU) dengan pelanggan yang mewajibkan penyertaan sertifikat uji keselamatan pada seluruh material titipan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 63,
    "code": "5.4.1",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.4 Ketertelusuran Produk",
    "clauseText": "Semua produk yang digunakan dalam proses produksi dapat diidentifikasi di seluruh tahapan produksi dan instalasi, jika terdapat potensi masalah K3.",
    "interpretation": "Bahan baku, komponen kritis, dan produk antara harus diberi kode penomoran/identifikasi (nomor lot/batch) agar bila terjadi kegagalan fungsi atau kecelakaan, sumber material dapat ditelusuri.",
    "expectedEvidence": "Label identitas nomor batch/lot pada wadah material, kartu kontrol proses produksi (traveler card / routing sheet), sistem penandaan status inspeksi material.",
    "conditions": {
      "compliant": "Seluruh produk dan material kimia/kritis teridentifikasi jelas statusnya di setiap stasiun kerja sehingga memudahkan penelusuran jika timbul anomali K3.",
      "critical": "Bahan berbahaya tidak berlabel bercampur dengan bahan aman di lini produksi sehingga terjadi kekeliruan fatal yang memicu ledakan pabrik.",
      "major": "Tidak ada sistem penandaan dan ketertelusuran produk sama sekali; material berbahaya tidak beridentitas tersebar liar di area kerja.",
      "minor": "Sistem ketertelusuran berjalan baik, namun terdapat beberapa wadah material sekunder yang label identitas batch-nya memudar terkena cipratan air.",
      "ofi": "Menerapkan teknologi RFID tag atau label barcode tahan cairan kimia pada seluruh wadah perantara di lantai produksi."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 64,
    "code": "5.4.2",
    "elementNum": 5,
    "elementName": "Elemen 5: Pembelian dan Pengendalian Produk",
    "subElementName": "5.4 Ketertelusuran Produk",
    "clauseText": "Terdapat prosedur yang terdokumentasi untuk penelusuran produk yang telah terjual, jika terdapat potensi masalah K3 di dalam penggunaannya.",
    "interpretation": "Perusahaan harus memiliki prosedur penarikan produk (Product Recall Procedure) jika produk yang sudah dijual ke pasar terbukti memiliki cacat yang membahayakan keselamatan konsumen/publik.",
    "expectedEvidence": "SOP Penarikan Produk (Product Recall SOP) terkait aspek keselamatan, rekaman simulasi penarikan produk (mock recall), daftar kontak darurat distribusi pasar.",
    "conditions": {
      "compliant": "Tersedia prosedur penarikan produk cacat K3 yang teruji melalui simulasi penarikan berkala dan memiliki struktur tim krisis recall yang siap digerakkan.",
      "critical": "Perusahaan mengetahui produknya mengandung bahaya fatal yang dapat merenggut nyawa konsumen namun dengan sengaja menyembunyikan dan menolak penarikan produk.",
      "major": "Perusahaan menghasilkan produk konsumen/industri berisiko tinggi namun tidak memiliki prosedur atau mekanisme penarikan produk yang cacat keselamatan.",
      "minor": "Prosedur penarikan produk ada, namun simulasi penarikan produk tahunan (mock recall) belum dilaksanakan sesuai jadwal internal.",
      "ofi": "Membangun sistem pelacakan serial number produk berbasis cloud yang dapat mendeteksi lokasi distribusi hingga ke tingkat distributor tier-2."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 65,
    "code": "6.1.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Petugas yang kompeten telah mengidentifikasi bahaya, menilai dan mengendalikan risiko yang timbul dari suatu proses kerja.",
    "interpretation": "Setiap tahapan proses kerja wajib dibuatkan dokumen identifikasi bahaya dan penilaian risiko (HIRADC/JSA) oleh personil yang memahami operasional dan berlisensi/berkompeten.",
    "expectedEvidence": "Dokumen HIRADC / JSA (Job Safety Analysis) untuk seluruh aktivitas kerja, bukti keterlibatan personil berkompeten (sertifikat pelatihan K3/Risk Assessment).",
    "conditions": {
      "compliant": "Seluruh aktivitas proses kerja memiliki HIRADC/JSA komprehensif yang dibuat oleh personil kompeten dan selalu dimutakhirkan.",
      "critical": "Proses kerja berbahaya ekstrem (pekerjaan panas di tangki BBM/gas) dijalankan tanpa identifikasi bahaya sama sekali, memicu ledakan maut seketika.",
      "major": "Proses kerja utama pabrik dijalankan tanpa pernah dilakukan identifikasi bahaya dan penilaian risiko sama sekali.",
      "minor": "Dokumen JSA telah dibuat namun tanda tangan persetujuan dari supervisor area belum dibubuhkan pada dokumen kerja.",
      "ofi": "Menerapkan platform JSA interaktif berbasis aplikasi mobile di mana operator dapat memverifikasi bahaya langsung sebelum memulai pekerjaan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 66,
    "code": "6.1.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Apabila upaya pengendalian risiko diperlukan, maka upaya tersebut ditetapkan melalui tingkat pengendalian.",
    "interpretation": "Penetapan mitigasi risiko wajib mengikuti Hierarki Pengendalian Risiko (Hierarchy of Control): Eliminasi, Substitusi, Rekayasa Teknik, Pengendalian Administratif, dan Alat Pelindung Diri (APD).",
    "expectedEvidence": "Klausul pengendalian dalam formulir HIRADC yang mencerminkan penerapan 5 tingkatan pengendalian bahaya secara berurutan, laporan rekayasa engineering pengaman mesin.",
    "conditions": {
      "compliant": "Pengendalian bahaya memprioritaskan eliminasi/rekayasa teknik sebelum mengandalkan APD, dan terdokumentasi dalam dokumen pengendalian risiko.",
      "critical": "Mengabaikan pengendalian rekayasa pada sumber bahaya fatal (misal membiarkan kebocoran gas beracun) dan hanya menyuruh pekerja mengenakan masker kain biasa.",
      "major": "Perusahaan selalu hanya mengandalkan APD untuk seluruh jenis bahaya tingkat tinggi tanpa pernah mempertimbangkan pengendalian teknis/administratif.",
      "minor": "Hierarki pengendalian telah diterapkan di lapangan namun penulisan opsi kontrol pada tabel HIRADC belum runut sesuai 5 tingkatan.",
      "ofi": "Mendokumentasikan studi kasus keberhasilan eliminasi bahaya melalui inovasi rekayasa teknik (engineering safe design) dalam buletin K3 korporat."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 67,
    "code": "6.1.3",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Terdapat prosedur atau petunjuk kerja yang terdokumentasi untuk mengendalikan risiko yang teridentifikasi dan dibuat atas dasar masukan dari personil yang kompeten serta tenaga kerja yang terkait dan disahkan oleh orang yang berwenang di perusahaan.",
    "interpretation": "SOP dan Instruksi Kerja (IK) aman harus disusun bersama dengan melibatkan operator lapangan pemakai dan disahkan oleh pimpinan operasional berwenang.",
    "expectedEvidence": "Dokumen SOP/IK Kerja Aman (Safe Work Procedure), notulensi penyusunan SOP melibatkan operator, tanda tangan pengesahan Manager/Direktur.",
    "conditions": {
      "compliant": "Tersedia SOP/IK aman untuk setiap pekerjaan berisiko, disahkan manajemen, dan disusun berdasarkan masukan langsung dari tenaga kerja terkait.",
      "critical": "Melakukan pekerjaan berisiko tinggi tanpa instruksi kerja aman tertulis, mengakibatkan kecelakaan fatal yang menewaskan pekerja di lokasi.",
      "major": "Tidak ada SOP/IK kerja aman untuk operasional mesin-mesin kritis di area produksi.",
      "minor": "SOP kerja aman tersedia di ruang mandor namun lembar instruksi kerja praktis belum terpasang di dekat panel mesin terkait.",
      "ofi": "Membuat petunjuk kerja aman visual berbasis foto grafis (Visual Work Instruction) di setiap workstation untuk memudahkan pemahaman operator baru."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 68,
    "code": "6.1.4",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Kepatuhan terhadap peraturan perundang-undangan, standar serta pedoman teknis yang relevan diperhatikan pada saat mengembangkan atau melakukan modifikasi atau petunjuk kerja.",
    "interpretation": "Pembuatan dan perubahan instruksi kerja harus selalu merujuk pada standar keselamatan teknis dan perundangan K3 yang berlaku.",
    "expectedEvidence": "Klausul referensi hukum dalam SOP, checklist peninjauan kepatuhan perundangan pada dokumen modifikasi prosedur kerja.",
    "conditions": {
      "compliant": "Instruksi kerja dan SOP secara taat asas mematuhi batasan hukum dan standar teknis yang diwajibkan oleh regulator ketenagakerjaan.",
      "critical": "Petunjuk kerja memuat instruksi yang secara terang-terangan melanggar undang-undang keselamatan dan membahayakan keselamatan umum.",
      "major": "Modifikasi petunjuk kerja menurunkan standar keselamatan di bawah batas aman yang diwajibkan oleh undang-undang.",
      "minor": "Instruksi kerja telah mematuhi ketentuan teknis namun nomor permenaker yang dijadikan acuan pada lembar referensi belum diperbarui ke edisi terbaru.",
      "ofi": "Menyertakan tautan digital ke naskah undang-undang pada daftar referensi internal SOP."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 69,
    "code": "6.1.5",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Terdapat sistem izin kerja untuk tugas berisiko tinggi.",
    "interpretation": "Pekerjaan non-rutin dengan risiko tinggi (hot work, confined space, lifting, working at height, excavation, electrical work) wajib dikendalikan melalui Sistem Izin Kerja Aman (Permit to Work / PTW).",
    "expectedEvidence": "SOP Izin Kerja (Permit to Work System), arsip form izin kerja (Hot Work, Confined Space, Working at Height, Electrical, Excavation) yang terisi lengkap dengan JSA, checklist gas test, dan tanda tangan otorisator.",
    "conditions": {
      "compliant": "Sistem izin kerja aman berjalan tertib, izin diterbitkan sebelum pekerjaan dimulai, diverifikasi di lapangan oleh safety officer, dan ditutup setelah pekerjaan selesai.",
      "critical": "Pekerjaan ruang terbatas (confined space) atau pekerjaan panas di area uap mudah terbakar dilakukan tanpa surat izin kerja dan tanpa tes gas, menyebabkan ledakan fatal atau keracunan gas mematikan.",
      "major": "Perusahaan menjalankan pekerjaan risiko tinggi secara rutin tanpa menerapkan sistem izin kerja sama sekali.",
      "minor": "Izin kerja telah diterbitkan dan dipatuhi di lapangan, namun penutupan izin kerja (handover/closure) terlambat ditandatangani pengawas.",
      "ofi": "Menerapkan sistem Electronic Permit to Work (e-PTW) berbasis tablet yang memvalidasi kualifikasi pekerja dan otorisasi secara digital."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 70,
    "code": "6.1.6",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Alat pelindung diri disediakan sesuai kebutuhan dan digunakan secara benar serta selalu dipelihara dalam kondisi layak pakai.",
    "interpretation": "Pengusaha wajib menyediakan APD secara cuma-cuma sesuai standar bahaya, memastikan pekerja memakainya secara benar, dan menyediakan fasilitas penyimpanan/perawatan APD.",
    "expectedEvidence": "Matriks Kebutuhan APD per area kerja, tanda terima penyerahan APD ke pekerja, observasi pemakaian APD di lapangan, fasilitas loker/tempat penyimpanan APD.",
    "conditions": {
      "compliant": "APD tersedia cukup, dibagikan gratis, dipakai secara disiplin oleh pekerja sesuai jenis bahaya, dan dalam kondisi fisik terawat bersih.",
      "critical": "Pekerja diinstruksikan bekerja pada ketinggian 10 meter tanpa body harness dan tali pengaman, atau di area gas beracun tanpa masker respirator, memicu risiko jatuh/mati seketika.",
      "major": "Perusahaan memungut biaya APD dari pekerja atau tidak menyediakan APD wajib di area kerja berbahaya tinggi.",
      "minor": "APD disediakan lengkap namun ditemukan beberapa helm keselamatan pekerja yang kotor atau diletakkan sembarangan di lantai saat jam istirahat.",
      "ofi": "Menyediakan mesin pembersih dan disinfeksi otomatis untuk helm dan respirator kerja di dekat pintu keluar area produksi."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 71,
    "code": "6.1.7",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Alat pelindung diri yang digunakan dipastikan telah dinyatakan layak pakai sesuai dengan standar dan/atau peraturan perundang-undangan yang berlaku.",
    "interpretation": "APD yang diadakan harus memiliki sertifikasi standar mutu resmi (SNI, ANSI, CE, NIOSH, EN) dan dipastikan kelayakannya melalui inspeksi berkala.",
    "expectedEvidence": "Sertifikat uji kelayakan pabrikan (Certificate of Conformity) APD, cap tanda SNI/ANSI/CE pada fisik APD, lembar inspeksi kelayakan APD rutin.",
    "conditions": {
      "compliant": "Seluruh APD yang digunakan bersertifikat standar resmi (SNI/internasional yang setara) dan memiliki catatan inspeksi kelayakan rutin.",
      "critical": "Menggunakan APD palsu/rusak total untuk menahan bahaya tegangan tinggi atau gas beracun yang mengakibatkan kegagalan proteksi dan kematian pekerja.",
      "major": "Pengadaan APD tidak bersertifikasi (barang tiruan tanpa standar mutu keselamatan) yang mudah pecah/rusak saat terkena benturan atau bahan kimia.",
      "minor": "Sertifikat mutu APD ada di file purchasing namun penandaan masa kedaluwarsa (kadaluarsa helm kerja >5 tahun) belum dipantau dalam daftar inventaris.",
      "ofi": "Membuat jadwal rotasi dan penggantian APD otomatis (preventive PPE replacement) berdasarkan batas usia pakai pabrikan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 72,
    "code": "6.1.8",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.1 Sistem Kerja",
    "clauseText": "Upaya pengendalian risiko dievaluasi secara berkala apabila terjadi ketidaksesuaian atau perubahan pada proses kerja.",
    "interpretation": "Efektivitas mitigasi risiko yang ada wajib ditinjau ulang secara berkala atau seketika saat terjadi kecelakaan kerja, near-miss, atau pergantian mesin/metode.",
    "expectedEvidence": "Notulensi rapat review HIRA pasca insiden, revisi formulir HIRADC setelah terjadi ketidaksesuaian, laporan evaluasi efektivitas kontrol bahaya.",
    "conditions": {
      "compliant": "Terdapat bukti evaluasi berkala atas pengendalian risiko yang terpasang dan diperbarui segera setelah terjadi deviasi atau perubahan proses kerja.",
      "critical": "Terjadi kecelakaan fatal akibat kegagalan kontrol, namun perusahaan menolak mengevaluasi dan tetap membiarkan proses maut tersebut beroperasi tanpa proteksi tambahan.",
      "major": "Tidak pernah dilakukan evaluasi atas efektivitas upaya pengendalian risiko meskipun telah terjadi kecelakaan kerja berat berulang.",
      "minor": "Evaluasi risiko pasca kecelakaan kecil telah dibahas namun pembaruan kolom mitigasi pada dokumen induk HIRADC belum ditandatangani.",
      "ofi": "Menerapkan sistem audit efektivitas kontrol berkala (Control Effectiveness Assessment) berbasis skor kuantitatif."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 73,
    "code": "6.2.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.2 Pengawasan",
    "clauseText": "Dilakukan pengawasan untuk menjamin bahwa setiap pekerjaan dilaksanakan dengan aman dan mengikuti prosedur dan petunjuk kerja yang telah ditentukan.",
    "interpretation": "Supervisor dan mandor harus aktif mengawasi kepatuhan pekerja terhadap SOP keselamatan kerja di lapangan secara berkesinambungan.",
    "expectedEvidence": "Log book pengawasan harian supervisor, checklist patroli keselamatan pengawas, observasi lapangan yang menunjukkan kehadiran pengawas di area kerja kritis.",
    "conditions": {
      "compliant": "Pengawasan keselamatan berjalan efektif, supervisor aktif menegur dan mengarahkan pekerja untuk selalu menaati prosedur kerja aman.",
      "critical": "Pekerjaan konstruksi/pemasangan instalasi berbahaya tinggi ditinggalkan tanpa pengawas sama sekali, mengakibatkan kecelakaan fatal yang meruntuhkan struktur.",
      "major": "Tidak ada fungsi pengawasan keselamatan di lapangan, pekerja dibiarkan mengabaikan seluruh SOP kerja aman tanpa teguran dari pimpinan.",
      "minor": "Pengawasan keselamatan dilakukan rutin namun catatan patroli pengawas dalam buku log harian belum diisi secara lengkap.",
      "ofi": "Menerapkan program Behavioral Based Safety (BBS) di mana pengawas mencatat observasi perilaku aman dan tidak aman menggunakan aplikasi seluler."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 74,
    "code": "6.2.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.2 Pengawasan",
    "clauseText": "Setiap orang diawasi sesuai dengan tingkat kemampuan dan tingkat risiko tugas.",
    "interpretation": "Intensitas pengawasan harus proporsional: pekerja baru, pekerja magang, atau tugas berisiko tinggi wajib mendapatkan pengawasan ekstra ketat (rasio pengawasan lebih rapat).",
    "expectedEvidence": "Program mentoring/pendampingan pekerja baru (buddy system), penetapan rasio supervisor-pekerja pada pekerjaan risiko tinggi, catatan pengawasan khusus magang.",
    "conditions": {
      "compliant": "Pengawasan disesuaikan dengan profil risiko: pekerja yunior/tugas kritis diawasi secara melekat oleh personil senior yang kompeten.",
      "critical": "Menugaskan pekerja baru tanpa pengalaman dan tanpa pengawasan untuk mengoperasikan mesin berisiko fatalitas tinggi.",
      "major": "Semua pekerja diperlakukan sama tanpa ada pengawasan khusus untuk tugas berkategori kritis atau untuk personil yang belum berpengalaman.",
      "minor": "Sistem buddy system untuk pekerja baru telah berjalan namun log evaluasi mingguan pendampingan belum ditandatangani supervisor.",
      "ofi": "Memberikan warna helm keselamatan khusus (misal warna hijau) bagi pekerja baru selama masa probation 3 bulan agar mudah diawasi oleh pengawas lapangan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 75,
    "code": "6.2.3",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.2 Pengawasan",
    "clauseText": "Pengawas/penyelia ikut serta dalam identifikasi bahaya dan membuat upaya pengendalian.",
    "interpretation": "Para pengawas/supervisor garis depan harus dilibatkan secara aktif dalam penyusunan HIRADC dan JSA karena mereka yang paling memahami dinamika riil lapangan.",
    "expectedEvidence": "Tanda tangan supervisor pada dokumen HIRA/JSA departemennya, notulensi rapat identifikasi bahaya dengan kehadiran supervisor lini.",
    "conditions": {
      "compliant": "Penyelia lini berkontribusi nyata dalam mengidentifikasi bahaya operasional dan merumuskan langkah pengendalian praktis di areanya.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Penyusunan HIRADC dilakukan sepihak oleh departemen K3 di balik meja tanpa pernah melibatkan supervisor operasional lapangan.",
      "minor": "Supervisor terlibat dalam diskusi identifikasi bahaya namun belum seluruhnya menandatangani lembar pengesahan HIRA unitnya.",
      "ofi": "Menyelenggarakan lokakarya tahunan 'Supervisor as Safety Leader' untuk mempertajam kemampuan analisis bahaya para pengawas."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 76,
    "code": "6.2.4",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.2 Pengawasan",
    "clauseText": "Pengawas/penyelia diikutsertakan dalam melakukan penyelidikan dan pembuatan laporan terhadap terjadinya kecelakaan dan penyakit akibat kerja serta wajib menyerahkan laporan dan saran-saran kepada pengusaha atau pengurus.",
    "interpretation": "Bila terjadi insiden/near-miss di unit kerjanya, pengawas area wajib menjadi anggota tim investigasi dan memberikan usulan perbaikan nyata.",
    "expectedEvidence": "Laporan Investigasi Kecelakaan Kerja bertandatangan supervisor area, rekomendasi perbaikan dari supervisor kepada manajemen, Berita Acara Pemeriksaan.",
    "conditions": {
      "compliant": "Supervisor selalu memimpin atau tergabung dalam investigasi insiden di unitnya dan menyerahkan rekomendasi pencegahan kepada pengurus.",
      "critical": "Supervisor menyembunyikan kecelakaan berat di unitnya dari pengurus dan melarang pekerja melapor untuk menutupi kesalahan.",
      "major": "Investigasi kecelakaan kerja tidak pernah mengikutsertakan pengawas lapangan yang menguasai kronologi kejadian.",
      "minor": "Supervisor ikut menginvestigasi namun lembar saran tindakan perbaikan diserahkan melebihi batas waktu 2x24 jam.",
      "ofi": "Membekali seluruh pengawas dengan pelatihan teknik investigasi akar masalah (Root Cause Analysis / TapRooT / 5-Whys)."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 77,
    "code": "6.2.5",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.2 Pengawasan",
    "clauseText": "Pengawas/penyelia ikut serta dalam proses konsultasi.",
    "interpretation": "Penyelia harus menjadi jembatan komunikasi K3, aktif menghadiri rapat konsultasi P2K3, dan memfasilitasi dialog keselamatan antara pekerja dan manajemen.",
    "expectedEvidence": "Daftar hadir supervisor dalam rapat pleno P2K3, notulensi safety talk harian yang dipimpin supervisor, rekaman penyampaian aspirasi pekerja oleh supervisor.",
    "conditions": {
      "compliant": "Penyelia aktif terlibat dalam rapat konsultasi K3 dan rutin mengadakan dialog keselamatan dengan pekerja binaannya.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Penyelia dilarang oleh manajemen menghadiri rapat K3 atau menolak mendengarkan aspirasi keselamatan pekerja di unitnya.",
      "minor": "Penyelia hadir dalam rapat konsultasi K3 namun belum mendokumentasikan notulensi pengarahan keselamatan mingguan kepada timnya.",
      "ofi": "Menyediakan wadah forum bulanan 'Coffee Morning with Supervisors' khusus membahas ide-ide perbaikan keselamatan kerja."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 78,
    "code": "6.3.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.3 Seleksi & Penempatan",
    "clauseText": "Persyaratan tugas tertentu termasuk persyaratan kesehatan diidentifikasi dan dipakai untuk menyeleksi dan menempatkan tenaga kerja.",
    "interpretation": "Pekerjaan khusus (misal bekerja di ketinggian, ruang terbatas, operator crane, pekerjaan radiasi) harus memiliki standar kesehatan dan fisik spesifik (Job Health Requirement) sebelum personil ditempatkan.",
    "expectedEvidence": "Standar Persyaratan Kesehatan Kerja (Job Health Standard) per posisi, hasil Medical Check-Up (MCU) Awal pra-penempatan, surat kelayakan kerja (Fit to Work certificate).",
    "conditions": {
      "compliant": "Penempatan pekerja didasarkan pada pemeriksaan kesehatan kerja pra-tugas dan kriteria fisik yang terbukti sesuai dengan beban kerja tugasnya.",
      "critical": "Menempatkan pekerja dengan riwayat epilepsi/penyakit jantung parah untuk bekerja di ketinggian tanpa pelindung jatuh hingga jatuh dan tewas.",
      "major": "Menempatkan tenaga kerja pada pekerjaan berkategori bahaya kesehatan tinggi tanpa pernah melakukan pemeriksaan kesehatan awal sama sekali.",
      "minor": "Pemeriksaan kesehatan pra-penempatan dilakukan namun sertifikat 'Fit to Work' dari dokter pemeriksa terlambat diterbitkan.",
      "ofi": "Membangun sistem informasi kesehatan kerja digital (Electronic Health Matrix) yang memetakan status kebugaran seluruh karyawan terhadap profil bahaya tugas."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 79,
    "code": "6.3.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.3 Seleksi & Penempatan",
    "clauseText": "Penugasan pekerjaan harus berdasarkan kemampuan dan keterampilan serta kewenangan yang dimiliki.",
    "interpretation": "Pekerja hanya boleh ditugaskan jika memiliki Surat Izin Cepat/Lisensi K3 (SIO/SKP) dan kompetensi yang sah sesuai regulasi untuk tugas tersebut.",
    "expectedEvidence": "Matriks Kompetensi Kerja, Lisensi/Surat Izin Alat (SIO Kemnaker untuk forklift, crane, boiler, rigger), sertifikat keahlian juru las/juru ukur.",
    "conditions": {
      "compliant": "Seluruh operator alat berat, bejana tekan, kelistrikan, dan tugas khusus memiliki lisensi resmi yang sah dan ditugaskan sesuai kompetensinya.",
      "critical": "Memerintahkan pekerja yang tidak memiliki SIO dan tidak pernah berlatih untuk mengoperasikan tower crane di area publik padat.",
      "major": "Mengoperasikan peralatan berlisensi wajib (misal boiler atau forklift) menggunakan tenaga kerja tanpa lisensi resmi Kemnaker RI.",
      "minor": "Operator memiliki SIO resmi yang masih berlaku, namun fotokopi lisensi belum diperbarui di papan daftar operator ruang alat berat.",
      "ofi": "Menerapkan sistem starter mesin berbasis kartu pintar RFID (Driver Access Control) yang hanya dapat dihidupkan dengan kartu berlisensi aktif."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 80,
    "code": "6.4.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.4 Area Terbatas",
    "clauseText": "Pengusaha atau pengurus melakukan penilaian risiko lingkungan kerja untuk mengetahui daerah-daerah yang memerlukan pembatasan izin masuk.",
    "interpretation": "Perusahaan harus mengidentifikasi dan memetakan zona-zona berbahaya tinggi yang aksesnya harus dibatasi (Restricted Area / Zona Bahaya), seperti gardu trafo, tangki bahan kimia, ruang boiler, instalasi radiasi.",
    "expectedEvidence": "Peta Zonasi Daerah Berbahaya (Hazardous Area Classification / Restricted Area Map), dokumen asesmen risiko penentuan area terbatas.",
    "conditions": {
      "compliant": "Tersedia pemetaan dan penilaian risiko formal yang menetapkan area-area terbatas yang memerlukan pembatasan akses ketat.",
      "critical": "Membiarkan area bertegangan tinggi terbuka tanpa penilaian dan tanpa proteksi pembatas sehingga siapapun dapat tersengat listrik mematikan.",
      "major": "Perusahaan memiliki instalasi bahaya tinggi namun tidak pernah menetapkan zonasi area terbatas bagi perlindungan pekerja.",
      "minor": "Penilaian area terbatas telah dibuat namun denah visual zonasi di pos keamanan pabrik belum diperbarui pasca penambahan tangki baru.",
      "ofi": "Membuat denah interaktif 3D Digital Twin yang menampilkan zona bahaya dan status akses real-time di pusat kontrol keamanan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 81,
    "code": "6.4.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.4 Area Terbatas",
    "clauseText": "Terdapat pengendalian atas daerah/tempat dengan pembatasan izin masuk.",
    "interpretation": "Area terbatas harus memiliki sistem kontrol fisik (pintu terkunci, pagar pembatas, interlock, sistem akses kartu/biometrik, pos penjagaan) dan rambu larangan masuk bagi pihak tidak berwenang.",
    "expectedEvidence": "Pagar pengaman, pintu akses terkunci dengan sistem kunci gembok/elektronik, buku register tamu/pekerja yang masuk area terbatas, kartu akses khusus.",
    "conditions": {
      "compliant": "Pengendalian akses area terbatas diterapkan secara ketat dengan pengamanan fisik dan pencatatan buku izin masuk bagi personil berwenang.",
      "critical": "Pintu gardu listrik tegangan tinggi atau ruang gas beracun dibiarkan terbuka tanpa kunci dan tanpa penjaga di area lalu-lalang umum.",
      "major": "Area terbatas tidak memiliki pengamanan fisik sama sekali sehingga orang luar bebas berkeliaran di dekat peralatan berisiko tinggi.",
      "minor": "Pintu area terbatas terkunci namun buku log pencatatan keluar-masuk personil di pos sekuriti sempat terputus 1 shift pengawasan.",
      "ofi": "Menerapkan sistem Electronic Access Control berbasis pemindaian wajah (Facial Recognition) yang terintegrasi dengan validasi induksi keselamatan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 82,
    "code": "6.4.3",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.4 Area Terbatas",
    "clauseText": "Tersedianya fasilitas dan layanan di tempat kerja sesuai dengan standar dan pedoman teknis.",
    "interpretation": "Perusahaan wajib menyediakan fasilitas kesejahteraan dan higiene kerja yang higienis sesuai Permenaker 05/2018 (toilet bersih, ruang istirahat, air minum layak, ruang laktasi, kantin bersih, pencahayaan dan ventilasi memadai).",
    "expectedEvidence": "Ketersediaan toilet rasio cukup, ruang P3K, dispenser air minum layak konsumsi bersertifikat uji lab, ruang makan higienis, fasilitas loker.",
    "conditions": {
      "compliant": "Fasilitas sanitasi, air minum, dan sarana kesejahteraan pekerja tersedia memadai, bersih, higienis, dan memenuhi standar rasio peraturan perundangan.",
      "critical": "Pekerja dipekerjakan dalam lingkungan tanpa ventilasi, tanpa air minum pada suhu ekstrem panas yang memicu serangan heat stroke massal yang mengancam jiwa.",
      "major": "Perusahaan tidak menyediakan fasilitas sanitasi/toilet layak sama sekali, atau air minum terkontaminasi bakteri berbahaya.",
      "minor": "Fasilitas toilet tersedia cukup namun jadwal pembersihan berkala (cleaning service checklist) belum ditempel di pintu toilet.",
      "ofi": "Menyediakan ruang kebugaran mini (wellness corner) dan ruang laktasi berfasilitas lengkap untuk meningkatkan kenyamanan karyawan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 83,
    "code": "6.4.4",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.4 Area Terbatas",
    "clauseText": "Rambu-rambu K3 harus dipasang sesuai dengan standar dan pedoman teknis.",
    "interpretation": "Pemasangan rambu keselamatan (rambu larangan, peringatan, kewajiban APD, darurat/evakuasi) harus memenuhi standar internasional/nasional (warna, bentuk, simbol grafis, ukuran, keterbacaan).",
    "expectedEvidence": "Rambu K3 terpasang di lokasi kerja sesuai standar ISO 7010 / SNI, jalur evakuasi dengan tanda fosfor (glow in the dark), daftar inventaris rambu K3.",
    "conditions": {
      "compliant": "Rambu-rambu K3 terpasang lengkap, tepat lokasi, bersih, terbaca jelas dari jarak aman, dan sesuai standar warna dan simbol resmi.",
      "critical": "Tidak memasang tanda bahaya tegangan tinggi atau radiasi mematikan pada instalasi aktif sehingga pekerja menyentuh sumber bahaya fatal.",
      "major": "Pabrik berbahaya tinggi beroperasi tanpa ada rambu-rambu keselamatan kerja sama sekali di seluruh area operasional.",
      "minor": "Ditemukan 1 rambu jalur evakuasi di koridor yang miring atau tertutup sebagian oleh penumpukan barang sementara.",
      "ofi": "Memasang rambu K3 iluminasi LED mandiri bertenaga surya pada area outdoor dermaga atau tangki timbun."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 84,
    "code": "6.5.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Penjadwalan pemeriksaan dan pemeliharaan sarana produksi serta peralatan mencakup verifikasi alat-alat pengaman serta persyaratan yang ditetapkan oleh peraturan perundang-undangan, standar dan pedoman teknis yang relevan.",
    "interpretation": "Perusahaan wajib memiliki program Preventive Maintenance terencana yang mencakup pemeriksaan fungsi safety device (safety valve, interlock, emergency stop, level gauge) dan uji berkala regulasi.",
    "expectedEvidence": "Master Schedule Preventive Maintenance mesin dan instalasi, formulir checklist pengujian interlock dan emergency stop, jadwal riksa uji peralatan K3.",
    "conditions": {
      "compliant": "Jadwal pemeliharaan sarana produksi terencana tertib, mencakup pengujian menyeluruh seluruh perangkat proteksi keselamatan sesuai jadwal regulasi.",
      "critical": "Mematikan alarm deteksi gas dan katup pengaman tekanan (safety valve) pada tangki reaktor demi mencegah trip produksi hingga meledak.",
      "major": "Sarana produksi berisiko tinggi dioperasikan tanpa pernah ada jadwal pemeliharaan dan pengujian alat pengaman sama sekali.",
      "minor": "Jadwal pemeliharaan ada dan berjalan, namun rekaman pengujian berkala emergency stop switch terlambat 1 minggu dari jadwal.",
      "ofi": "Menerapkan sistem pemeliharaan prediktif (Predictive Maintenance) berbasis sensor getaran dan thermal imaging yang terhubung ke dashboard IoT."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 85,
    "code": "6.5.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Semua catatan yang memuat data secara rinci dari kegiatan pemeriksaan, pemeliharaan, perbaikan dan perubahan yang dilakukan atas sarana dan peralatan produksi harus disimpan dan dipelihara.",
    "interpretation": "Riwayat hidup mesin (Equipment History Card / Maintenance Log) harus disimpan lengkap memuat tanggal servis, suku cadang diganti, nama teknisi, dan catatan hasil uji.",
    "expectedEvidence": "Buku catatan riwayat perawatan mesin (Equipment History Record / Maintenance Log Sheet), work order perbaikan mesin yang terarsip rapi.",
    "conditions": {
      "compliant": "Seluruh catatan riwayat inspeksi, servis, dan perbaikan mesin tersimpan lengkap, teratur, dan dapat ditelusuri kapan saja saat audit.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada pencatatan pemeliharaan sama sekali sehingga kondisi keausan komponen kritis tidak pernah diketahui.",
      "minor": "Catatan perawatan mesin ada di sistem CMMS komputer namun teknisi belum mencetak salinan fisik kartu kendali di mesin.",
      "ofi": "Menerapkan Computerized Maintenance Management System (CMMS) dengan kode QR pada mesin untuk mengakses riwayat servis secara instan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 86,
    "code": "6.5.3",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Sarana dan peralatan produksi memiliki sertifikat yang masih berlaku sesuai dengan persyaratan peraturan perundang-undangan dan standar.",
    "interpretation": "Seluruh objek K3 yang diwajibkan uji berkala (Pesawat Angkat & Angkut, Bejana Tekan, Tangki Timbun, Pesawat Uap, Lift, Generator Listrik, Penangkal Petir, Instalasi Pemadam) wajib memiliki Surat Keterangan / Izin Pemakaian (Suket K3) yang sah dari Pengawas Ketenagakerjaan/Kemnaker yang masih berlaku.",
    "expectedEvidence": "Buku Akta Izin / Surat Keterangan Memenuhi Persyaratan K3 (Suket K3) dari Disnaker/Kemnaker untuk seluruh peralatan berizin wajib, laporan riksa uji PJK3.",
    "conditions": {
      "compliant": "Seluruh sarana dan peralatan produksi yang wajib uji memiliki Surat Keterangan K3 resmi dari dinas terkait dengan masa berlaku aktif.",
      "critical": "Mengoperasikan boiler bertekanan tinggi atau crane tua yang sudah dinyatakan afkir/retak dan izinnya ditolak pengawas, memicu bahaya ledakan katastropik.",
      "major": "Peralatan utama (forklift, bejana tekan, genset) dioperasikan tanpa pernah memiliki izin atau suket K3 sama sekali sejak pengadaan.",
      "minor": "Suket K3 telah habis masa berlaku namun proses pengujian ulang oleh PJK3 telah selesai dan draf Suket sedang menunggu pengesahan kepala dinas.",
      "ofi": "Menyusun Matriks Kepatuhan Lisensi Alat (Equipment License Tracking Matrix) dengan alarm pengingat otomatis 3 bulan sebelum masa berlaku izin habis."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 87,
    "code": "6.5.4",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Pemeriksaan, pemeliharaan, perawatan, perbaikan dan setiap perubahan harus dilakukan petugas yang kompeten dan berwenang.",
    "interpretation": "Pekerjaan servis dan modifikasi mesin tidak boleh dilakukan oleh orang sembarangan; harus oleh teknisi yang tersertifikasi (misal Teknisi Listrik K3, Teknisi Boiler, Teknisi Lift, Ahli K3 Pesawat Tenaga & Produksi).",
    "expectedEvidence": "Sertifikat kompetensi dan Lisensi Teknisi K3 (SIO Teknisi Listrik, Teknisi Elevator, Teknisi Las/Welder), kontrak servis dengan vendor tersertifikasi PJK3.",
    "conditions": {
      "compliant": "Pekerjaan pemeliharaan dan perbaikan dikerjakan oleh teknisi internal bersertifikat atau rekanan spesialis PJK3 yang memiliki kewenangan legal.",
      "critical": "Menyuruh pekerja umum tanpa keahlian listrik untuk memperbaiki panel transmisi tegangan tinggi yang sedang berarus aktif, memicu fatality seketika.",
      "major": "Perbaikan peralatan bahaya tinggi dipercayakan kepada pihak luar yang tidak berkompeten dan tidak memiliki legalitas jasa teknik keselamatan.",
      "minor": "Teknisi yang melakukan perawatan adalah mekanik berpengalaman namun dokumen sertifikasi pembekalan K3 kelistrikannya masih dalam proses penjadwalan.",
      "ofi": "Membentuk program pengembangan kompetensi berjenjang (Multi-Skilled Maintenance Certification) bagi seluruh staf departemen pemeliharaan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 88,
    "code": "6.5.5",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Apabila memungkinkan, sarana produksi yang akan diubah harus sesuai dengan persyaratan peraturan perundang-undangan yang berlaku.",
    "interpretation": "Setiap modifikasi teknis pada mesin (misal perubahan penggerak, penambahan kapasitas tangki) wajib disesuaikan dengan regulasi keselamatan terkini dan dilaporkan ke dinas ketenagakerjaan jika disyaratkan.",
    "expectedEvidence": "Gambar teknik modifikasi, kajian kepatuhan terhadap standar Permenaker, surat pemberitahuan perubahan teknis alat ke Disnaker setempat.",
    "conditions": {
      "compliant": "Modifikasi sarana produksi mematuhi seluruh kaidah standar perundangan dan telah melalui pengesahan rancang ulang dari pengawas ketenagakerjaan.",
      "critical": "Memodifikasi katup pengaman bejana tekan dengan menyumbatnya menggunakan baut mati demi menaikkan tekanan operasional melampaui batas desain.",
      "major": "Mengubah spesifikasi kapasitas beban crane secara ilegal melampaui kapasitas desain asli pabrikan tanpa uji re-sertifikasi resmi.",
      "minor": "Modifikasi minor pada penutup pelindung sabuk telah sesuai standar namun surat pemberitahuan pemutakhiran data ke Disnaker belum dikirim.",
      "ofi": "Bekerja sama dengan konsultan rekayasa keselamatan profesional dalam setiap perencanaan modifikasi peralatan produksi berskala besar."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 89,
    "code": "6.5.6",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Terdapat prosedur permintaan pemeliharaan yang mencakup ketentuan mengenai peralatan-peralatan dengan kondisi keselamatan yang kurang baik dan perlu untuk segera diperbaiki.",
    "interpretation": "Harus ada mekanisme pelaporan cepat (Maintenance Work Request / Tagging Rusak) jika operator menemukan peralatan dengan kondisi tidak aman (kondisi abnormal/anomali safety device) agar segera diprioritaskan perbaikannya.",
    "expectedEvidence": "SOP Permintaan Pemeliharaan Darurat/Kritis, formulir Work Request (WR) dengan kolom klasifikasi tingkat urgensi bahaya K3, log book tanggap darurat maintenance.",
    "conditions": {
      "compliant": "Tersedia alur pelaporan kerusakan alat keselamatan yang responsif, terintegrasi, dan memiliki target waktu penanganan cepat (SLA) untuk kondisi bahaya.",
      "critical": "Laporan rem blong forklift diabaikan selama berminggu-minggu dan unit dipaksa terus beroperasi hingga menabrak pekerja hingga tewas.",
      "major": "Tidak ada prosedur perbaikan darurat; laporan kerusakan fitur pengaman mesin diabaikan oleh bagian pemeliharaan.",
      "minor": "Sistem permintaan perbaikan berjalan via telepon/chat, namun formulir resmi work request terlambat diinput ke sistem logistik.",
      "ofi": "Membuat tombol pelaporan kerusakan safety cepat (Emergency Maintenance Alert) pada aplikasi mobile internal dengan foto langsung dari lantai kerja."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 90,
    "code": "6.5.7",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Terdapat sistem penandaan bagi peralatan yang sudah tidak aman lagi jika digunakan atau yang sudah tidak digunakan lagi.",
    "interpretation": "Alat yang rusak, tidak aman, atau dalam perbaikan harus dipasangi label/tagging peringatan tegas (misal Tag 'OUT OF SERVICE / JANGAN DIOPERASIKAN') dan dipisahkan agar tidak dinyalakan orang lain.",
    "expectedEvidence": "SOP Penandaan Alat Rusak (Out of Service Tagging Procedure), ketersediaan label fisik 'DANGER - OUT OF SERVICE' / 'RUSAK JANGAN DIPAKAI' di lapangan, area karantina alat rusak.",
    "conditions": {
      "compliant": "Setiap peralatan yang tidak aman terpasang label tanda bahaya secara konsisten, dicatat dalam daftar alat rusak, dan diisolasi dari pengoperasian.",
      "critical": "Mesin rusak dengan arus bocor fatal tidak diberi tanda apapun sehingga operator lain menyalakan sakelar dan mengalami sengatan listrik maut.",
      "major": "Alat kerja rusak dibiarkan bercampur baur dengan alat kerja layak pakai tanpa ada penandaan status keselamatan sama sekali.",
      "minor": "Tagging out of service telah dipasang pada mesin rusak, namun penulisan nama teknisi dan tanggal kerusakan pada kartu tag sempat terlewat.",
      "ofi": "Menyediakan kotak tagging khusus (Tag Station) di setiap area bengkel yang berisi label tahan air dan gembok isolasi mandiri."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 91,
    "code": "6.5.8",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Apabila diperlukan, dilakukan penerapan sistem penguncian pengoperasian (lock out system) untuk mencegah agar sarana produksi tidak dihidupkan sebelum saatnya.",
    "interpretation": "Penerapan prosedur isolasi energi berbahaya / Lockout Tagout (LOTO) wajib dijalankan saat pemeliharaan mesin, listrik, perpipaan, atau ruang terbatas guna mencegah pelepasan energi tak terduga.",
    "expectedEvidence": "SOP Lockout Tagout (LOTO), ketersediaan peralatan gembok LOTO (hasp, padlock, circuit breaker lockout, valve lockout), formulir izin isolasi energi, observasi LOTO terpasang saat teknisi bekerja.",
    "conditions": {
      "compliant": "Prosedur LOTO diterapkan secara disiplin oleh seluruh teknisi pemeliharaan, peralatan LOTO lengkap, dan verifikasi zero energy state selalu dilakukan.",
      "critical": "Teknisi masuk ke dalam mesin pencacah/conveyor untuk perbaikan tanpa memasang LOTO, lalu mesin dihidupkan oleh operator lain sehingga teknisi hancur tergiling.",
      "major": "Perusahaan tidak memiliki sistem LOTO sama sekali dan seluruh kegiatan servis mesin dijalankan dalam kondisi mesin berpotensi menyala.",
      "minor": "Gembok LOTO terpasang pada switch panel, namun tag bahaya gantung yang menjelaskan identitas teknisi terlepas akibat hembusan angin.",
      "ofi": "Membangun Stasiun LOTO Master (LOTO Shadow Board Station) terpusat dengan sistem kunci khusus (Key Interlock System) untuk area gardu listrik."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 92,
    "code": "6.5.9",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Terdapat prosedur yang dapat menjamin keselamatan dan kesehatan tenaga kerja atau orang lain yang berada di dekat sarana dan peralatan produksi pada saat proses pemeriksaan, pemeliharaan, perbaikan dan perubahan.",
    "interpretation": "Saat pemeliharaan berlangsung, area sekitar harus diproteksi (barikade, safety line, rambu peringatan, pelindung percikan las) agar orang yang melintas tidak tertimpa material atau terkena bahaya.",
    "expectedEvidence": "SOP Pengamanan Area Kerja Pemeliharaan, pemasangan barikade pita kuning-hitam / barikade fisik, rambu 'ADA PEKERJAAN PEMELIHARAAN', fire blanket saat pekerjaan panas.",
    "conditions": {
      "compliant": "Area perawatan mesin terisolasi sempurna dari lalu-lalang orang umum dengan batas barikade yang jelas dan langkah proteksi lingkungan kerja yang efektif.",
      "critical": "Pekerjaan pengelasan di atas tangki bahan bakar aktif dilakukan tanpa pengamanan area sekitar, memicu kebakaran besar yang melalap area kerja umum.",
      "major": "Pekerjaan perbaikan berat di ketinggian dilakukan di atas lorong jalan kaki pekerja tanpa memasang barikade dan jaring pengaman sama sekali.",
      "minor": "Barikade pita pengaman telah dipasang mengelilingi lokasi servis, namun tanda peringatan tertulis sempat roboh tertiup angin.",
      "ofi": "Menggunakan barikade lipat portabel berpantul cahaya tinggi (high-visibility portable folding barrier) dengan lampu peringatan kedip otomatis."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 93,
    "code": "6.5.10",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.5 Pemeliharaan Sarana Produksi",
    "clauseText": "Terdapat penanggung jawab untuk menyetujui bahwa sarana dan peralatan produksi telah aman digunakan setelah proses pemeliharaan, perawatan, perbaikan atau perubahan.",
    "interpretation": "Setelah diservis, mesin tidak boleh langsung dijalankan produksi sebelum dilakukan uji coba (trial run) dan penandatanganan serah terima kelaikan oleh pimpinan pemeliharaan dan pimpinan produksi.",
    "expectedEvidence": "Formulir Serah Terima Mesin Pasca Servis (Handover / Commissioning Sign-off Form) yang ditandatangani Supervisor Maintenance dan Supervisor Produksi.",
    "conditions": {
      "compliant": "Terdapat mekanisme verifikasi dan otorisasi formal sebelum mesin dinyatakan aman untuk dioperasikan kembali oleh bagian produksi.",
      "critical": "Mesin langsung dijalankan untuk mengejar target produksi saat pelindung putaran belum dipasang kembali, menyebabkan operator terluka parah seketika.",
      "major": "Tidak ada proses serah terima atau verifikasi keselamatan pasca servis; teknisi langsung meninggalkan mesin tanpa uji coba pengaman.",
      "minor": "Uji coba mesin pasca perbaikan telah dilakukan bersama dan aman, namun penandatanganan formulir serah terima tertunda hingga keesokan harinya.",
      "ofi": "Menerapkan sistem checklist verifikasi keselamatan digital pasca servis pada layar HMI (Human Machine Interface) mesin sebelum sistem reset dapat diaktifkan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 94,
    "code": "6.6.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.6 Pelayanan Jasa",
    "clauseText": "Apabila perusahaan dikontrak untuk menyediakan pelayanan yang tunduk pada standar dan peraturan perundang-undangan mengenai K3, maka perlu disusun prosedur untuk menjamin bahwa pelayanan memenuhi persyaratan.",
    "interpretation": "Bila perusahaan bertindak sebagai kontraktor/penyedia jasa (service provider) bagi klien, harus ada SOP yang menjamin seluruh jasa yang diberikan memenuhi standar keselamatan klien dan undang-undang.",
    "expectedEvidence": "SOP Pelaksanaan Pelayanan Jasa Berwawasan K3, Project Safety Plan untuk pekerjaan di lokasi klien, laporan kepatuhan K3 kepada pemberi kerja/klien.",
    "conditions": {
      "compliant": "Tersedia prosedur baku penyediaan jasa yang menjamin seluruh tenaga kerja yang dikirim ke klien terlatih, ber-APD lengkap, dan bekerja sesuai regulasi K3.",
      "critical": "Menyediakan layanan jasa di fasilitas berisiko klien dengan melanggar standar keselamatan mendasar hingga menyebabkan kecelakaan fatal di area klien.",
      "major": "Perusahaan penyedia jasa tidak memiliki prosedur keselamatan operasional dan membiarkan pekerjanya melanggar aturan K3 di tempat klien.",
      "minor": "SOP pelayanan jasa ada namun draf rencana keselamatan khusus proyek untuk salah satu klien kecil belum diverifikasi oleh safety manager.",
      "ofi": "Mendapatkan sertifikasi Contractor Safety Management System (CSMS) bintang tinggi dari konsorsium industri klien terkemuka."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 95,
    "code": "6.6.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.6 Pelayanan Jasa",
    "clauseText": "Apabila perusahaan diberi pelayanan melalui kontrak, dan pelayanan tunduk pada standar dan peraturan perundang-undangan K3, maka perlu disusun prosedur untuk menjamin bahwa pemberian pelayanan memenuhi persyaratan.",
    "interpretation": "Jika perusahaan menggunakan jasa subkontraktor/outsourcing (kebersihan, katering, pengamanan, renovasi), harus ada SOP pengendalian kontraktor (CSMS) untuk memastikan kepatuhan mereka.",
    "expectedEvidence": "SOP Pengelolaan Kontraktor dan Pihak Ketiga (CSMS Procedure), berkas evaluasi implementasi K3 kontraktor rutin, rekaman safety briefing kontraktor harian.",
    "conditions": {
      "compliant": "Tersedia prosedur dan sistem evaluasi aktif terhadap seluruh penyedia jasa pihak ketiga untuk menjamin keselamatan selama bekerja di tempat perusahaan.",
      "critical": "Subkontraktor diizinkan melakukan pembongkaran atap tanpa perlindungan jatuh hingga seorang pekerja subkontraktor tewas terjatuh.",
      "major": "Perusahaan membiarkan kontraktor luar bekerja di fasilitas pabrik tanpa ada pengawasan, tanpa induksi, dan tanpa prosedur keselamatan sama sekali.",
      "minor": "Evaluasi kinerja K3 kontraktor dilakukan di akhir proyek, namun checklist inspeksi harian kontraktor sempat tidak terisi selama 2 hari.",
      "ofi": "Menerapkan sistem kartu pelanggaran keselamatan (Safety Violation Demerit Card) bagi vendor/kontraktor dengan sanksi tegas hingga blacklist perusahaan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 96,
    "code": "6.7.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.7 Keadaan Darurat",
    "clauseText": "Keadaan darurat yang potensial di dalam dan/atau di luar tempat kerja telah diidentifikasi dan prosedur keadaan darurat telah didokumentasikan dan diinformasikan agar diketahui oleh seluruh orang yang ada di tempat kerja.",
    "interpretation": "Perusahaan wajib memiliki Dokumen Rencana Tanggap Darurat (Emergency Response Plan / ERP) berdasarkan identifikasi skenario bahaya (kebakaran, gempa, tsunami, huru-hara, tumpahan bahan kimia, kebocoran gas).",
    "expectedEvidence": "Dokumen Emergency Response Plan (ERP) / Prosedur Kesiapsiagaan dan Tanggap Darurat, peta evakuasi gedung, bukti sosialisasi prosedur darurat ke karyawan dan tamu.",
    "conditions": {
      "compliant": "Seluruh skenario potensi darurat telah diidentifikasi secara komprehensif, prosedur ERP terdokumentasi lengkap, dan disosialisasikan secara masif kepada seluruh personil.",
      "critical": "Pabrik bahan kimia beracun tidak memiliki rencana tanggap darurat sama sekali saat terjadi kebocoran masif ke arah pemukiman penduduk sekitar.",
      "major": "Tidak ada prosedur tanggap darurat tertulis sama sekali, pekerja tidak tahu apa yang harus dilakukan saat sirine darurat berbunyi.",
      "minor": "Prosedur ERP lengkap namun denah jalur evakuasi di koridor sayap barat gedung belum diperbarui setelah renovasi partisi ruangan.",
      "ofi": "Membuat video panduan tanggap darurat animasi yang disiarkan di layar monitor informasi dan dikirimkan ke ponsel tamu via WhatsApp saat registrasi."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 97,
    "code": "6.7.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.7 Keadaan Darurat",
    "clauseText": "Penyediaan alat/sarana dan prosedur keadaan darurat berdasarkan hasil identifikasi dan diuji serta ditinjau secara rutin oleh petugas yang berkompeten dan berwenang.",
    "interpretation": "Sarana darurat (hydrant, APAR, sprinkler, alarm, emergency shower, eye wash, rescue kit) harus disediakan sesuai hasil analisis risiko dan diuji fungsinya secara berkala.",
    "expectedEvidence": "Catatan pengujian rutin hydrant (flow test / pressure test), checklist bulanan APAR, pengujian sistem sprinkler dan alarm kebakaran otomatis oleh teknisi bersertifikat.",
    "conditions": {
      "compliant": "Sarana darurat lengkap sesuai beban bahaya dan rutin diuji kinerjanya oleh teknisi kompeten dengan hasil uji memenuhi standar regulasi.",
      "critical": "Pompa hydrant utama mati total, APAR kosong tanpa tekanan di pabrik bahan bakar, sehingga saat terjadi api kecil langsung membesar menjadi kebakaran maut.",
      "major": "Sarana penanggulangan darurat tidak pernah diperiksa atau diuji fungsinya selama bertahun-tahun.",
      "minor": "Seluruh APAR berfungsi baik dan bertekanan normal, namun terdapat 1 APAR di gudang yang kartu gantung inspeksi fisiknya hilang.",
      "ofi": "Menerapkan sistem pemantauan tekanan APAR berbasis sensor wireless IoT yang otomatis mengirimkan notifikasi alarm jika tekanan tabung turun."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 98,
    "code": "6.7.3",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.7 Keadaan Darurat",
    "clauseText": "Tenaga kerja mendapat instruksi dan pelatihan mengenai prosedur keadaan darurat yang sesuai dengan tingkat risiko.",
    "interpretation": "Seluruh pekerja tanpa terkecuali harus mengikuti pelatihan dan simulasi evakuasi darurat (Emergency Fire & Evacuation Drill) secara berkala (minimal 1 kali setahun).",
    "expectedEvidence": "Laporan Pelaksanaan Simulasi Tanggap Darurat Kebakaran/Evakuasi (Fire Drill Report), foto kegiatan, daftar hadir seluruh karyawan, evaluasi waktu evakuasi (evacuation time).",
    "conditions": {
      "compliant": "Seluruh tenaga kerja telah mendapatkan pelatihan praktis penanganan darurat dan berpartisipasi dalam simulasi latihan berkala.",
      "critical": "Pekerja di ruang bawah tanah tidak pernah dilatih evakuasi sehingga saat terjadi kebakaran mereka terjebak dan tewas lemas kehabisan oksigen.",
      "major": "Perusahaan tidak pernah menyelenggarakan simulasi atau latihan tanggap darurat sama sekali kepada pekerja.",
      "minor": "Simulasi evakuasi tahunan telah dilaksanakan namun pekerja shift malam belum seluruhnya mendapatkan giliran latihan pemadaman api.",
      "ofi": "Melakukan simulasi darurat tanpa pemberitahuan sebelumnya (unannounced drill) untuk menguji responsivitas alami seluruh tim."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 99,
    "code": "6.7.4",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.7 Keadaan Darurat",
    "clauseText": "Petugas penanganan keadaan darurat ditetapkan dan diberikan pelatihan khusus serta diinformasikan kepada seluruh orang yang ada di tempat kerja.",
    "interpretation": "Regu tanggap darurat (Floor Warden, Tim Pemadam, Tim Evakuasi, Tim Medis/First Aider) harus ditunjuk resmi, diberi pelatihan khusus bersertifikat (Kepmenaker 186/1999), dan diketahui publik.",
    "expectedEvidence": "SK Penunjukan Tim Tanggap Darurat, sertifikat pelatihan Penanggulangan Kebakaran Kelas D/C/B/A dari Kemnaker RI, daftar nama tim darurat di papan evakuasi.",
    "conditions": {
      "compliant": "Petugas tanggap darurat bersertifikasi resmi Kemnaker tersedia dalam jumlah rasio yang memadai, terlatih sigap, dan identitasnya terpampang jelas.",
      "critical": "Tidak ada seorang pun petugas pemadam terlatih pada fasilitas industri kimia berisiko tinggi saat terjadi kebakaran besar.",
      "major": "Perusahaan tidak memiliki personil terlatih khusus untuk memimpin penanganan keadaan darurat di tempat kerja.",
      "minor": "Sebagian petugas darurat telah memiliki sertifikasi resmi, namun pelatihan penyegaran tahunan internal sempat mundur dari jadwal semula.",
      "ofi": "Mengirimkan tim tanggap darurat perusahaan untuk berkompetisi dalam ajang Fire Rescue Challenge tingkat nasional guna mengasah keterampilan teknis."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 100,
    "code": "6.7.5",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.7 Keadaan Darurat",
    "clauseText": "Instruksi keadaan darurat dan hubungan keadaan darurat diperlihatkan secara jelas/menyolok dan diketahui oleh seluruh tenaga kerja perusahaan.",
    "interpretation": "Bagan alur evakuasi, denah lokasi APAR/hydrant, dan daftar nomor telepon darurat (Pemadam Kebakaran, Ambulans/RS, Polisi, Pos Sekuriti) harus terpampang jelas di lokasi strategis.",
    "expectedEvidence": "Papan informasi darurat, stiker nomor telepon darurat di dekat pesawat telepon, plang petunjuk arah titik kumpul (Assembly Point), denah 'Anda Berada Di Sini' (You Are Here).",
    "conditions": {
      "compliant": "Petunjuk darurat dan nomor kontak darurat terpasang mencolok di setiap ruangan kerja dan dipahami dengan baik oleh karyawan saat diverifikasi.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada informasi jalur evakuasi atau nomor telepon darurat sama sekali di seluruh area perkantoran maupun pabrik.",
      "minor": "Daftar nomor darurat terpasang namun nomor telepon rumah sakit rujukan terdekat baru saja berganti dan belum diperbarui pada stiker pengumuman.",
      "ofi": "Menerapkan sistem pengumuman darurat otomatis (Public Address / PA System) dengan rekaman pesan evakuasi dwibahasa terintegrasi."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 101,
    "code": "6.7.6",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.7 Keadaan Darurat",
    "clauseText": "Peralatan, dan sistem tanda bahaya keadaan darurat disediakan, diperiksa, diuji dan dipelihara secara berkala sesuai dengan peraturan perundang-undangan, standar dan pedoman teknis yang relevan.",
    "interpretation": "Sistem alarm kebakaran (manual call point, smoke detector, heat detector, master control fire alarm/MCFA) harus diuji secara berkala untuk memastikan suara sirine terdengar di seluruh sudut ruangan.",
    "expectedEvidence": "Laporan pengujian berkala sistem deteksi dan alarm kebakaran otomatis oleh instansi/PJK3 berwenang, buku log pengetesan sirine berkala.",
    "conditions": {
      "compliant": "Sistem tanda bahaya darurat lengkap, berfungsi sempurna, terdengar jelas di seluruh area, dan memiliki riwayat pengujian berkala yang sah.",
      "critical": "Sistem alarm kebakaran dimatikan permanen di hotel/pabrik sehingga saat kebakaran terjadi tidak ada peringatan dan korban jiwa berjatuhan.",
      "major": "Sistem tanda bahaya darurat rusak total dan dibiarkan berbulan-bulan tanpa perbaikan.",
      "minor": "Sistem alarm berfungsi normal namun pengujian bulanan manual break glass tertunda beberapa hari dari tanggal yang direncanakan.",
      "ofi": "Mengintegrasikan panel MCFA dengan sistem lift otomatis (lift otomatis turun ke lantai dasar saat alarm berbunyi) dan sistem pendingin udara HVAC."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 102,
    "code": "6.7.7",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.7 Keadaan Darurat",
    "clauseText": "Jenis, jumlah, penempatan dan kemudahan untuk mendapatkan alat keadaan darurat telah sesuai dengan peraturan perundang-undangan atau standar dan dinilai oleh petugas yang berkompeten dan berwenang.",
    "interpretation": "Penetapan jumlah dan lokasi APAR, Hydrant, Pintu Darurat harus mengacu pada regulasi (Permenaker 04/1980 tentang APAR, Instruksi Menaker No. 11/1997), jarak tempuh maksimal, serta bebas halangan.",
    "expectedEvidence": "Kajian kecukupan sarana pemadam api (Fire Protection Assessment), posisi APAR terpasang di dinding tinggi 1,2 m tanpa terhalang barang, pintu darurat membuka keluar.",
    "conditions": {
      "compliant": "Jumlah dan penempatan alat darurat memenuhi standar regulasi teknis, tidak terhalang oleh tumpukan benda apapun, dan mudah diakses seketika.",
      "critical": "Pintu keluar darurat (emergency exit) dirantai dan digembok mati dari luar pada pabrik padat karya yang memicu tragedi terkunci saat terjadi kebakaran.",
      "major": "Penempatan alat darurat sangat tidak memadai (hanya 1 APAR kecil untuk gedung 4 lantai) dan seluruh akses APAR terhalang tumpukan palet barang.",
      "minor": "Jumlah APAR cukup dan sesuai spesifikasi, namun ditemukan 1 APAR di gudang tertutup kardus kosong yang dapat dipindahkan segera.",
      "ofi": "Mengecat garis batas bebas halangan (safety boundary marking) warna kuning-hitam di lantai bawah setiap penempatan APAR dan kotak darurat."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 103,
    "code": "6.8.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.8 P3K di Tempat Kerja",
    "clauseText": "Perusahaan telah mengevaluasi alat P3K dan menjamin bahwa sistem P3K yang ada memenuhi peraturan perundang-undangan, standar dan pedoman teknis.",
    "interpretation": "Sesuai Permenaker No. 15/MEN/VIII/2008, perusahaan wajib menyediakan kotak P3K (Tipe A/B/C), isi kotak P3K lengkap terstandar (bebas obat oral/obat keras), ruang P3K, dan tandu evakuasi.",
    "expectedEvidence": "Formulir checklist bulanan isi kotak P3K, ketersediaan Kotak P3K sesuai tipe Permenaker 15/2008, ruang P3K dengan tempat tidur periksa dan wastafel.",
    "conditions": {
      "compliant": "Fasilitas dan kotak P3K lengkap sesuai tipe dan rasio jumlah pekerja, dipelihara teratur, dan obat-obatan kedaluwarsa diganti tepat waktu.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak menyediakan kotak P3K sama sekali di lokasi kerja terpencil atau berisiko tinggi.",
      "minor": "Kotak P3K tersedia di setiap divisi, namun pembalut kasa steril pada salah satu kotak tinggal tersisa sedikit dan belum diisi ulang.",
      "ofi": "Memasang sistem segel bernomor pada kotak P3K untuk memastikan integritas isi obat serta mempermudah monitoring inspeksi."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 104,
    "code": "6.8.2",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.8 P3K di Tempat Kerja",
    "clauseText": "Petugas P3K telah dilatih dan ditunjuk sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Perusahaan wajib menunjuk petugas P3K yang memiliki lisensi resmi dari Kemnaker RI dengan rasio kecukupan personil sesuai jumlah tenaga kerja dan tingkat bahaya.",
    "expectedEvidence": "Lisensi dan Buku Kegiatan Petugas P3K di Tempat Kerja dari Kemnaker RI, SK Penunjukan Petugas P3K dari pimpinan perusahaan, jadwal piket petugas P3K.",
    "conditions": {
      "compliant": "Petugas P3K berlisensi resmi Kemnaker aktif tersedia dalam rasio yang memenuhi Permenaker 15/2008 dan siap memberikan pertolongan pertama.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan dengan ratusan tenaga kerja tidak memiliki satu pun petugas P3K yang terlatih dan berlisensi resmi pemerintah.",
      "minor": "Petugas P3K telah bersertifikat Kemnaker namun buku catatan harian pelayanan pertolongan pertama belum terisi secara runut.",
      "ofi": "Menyediakan tas medis pertolongan pertama portabel (First Aid Trauma Bag) dan Automatic External Defibrillator (AED) di ruang kerja."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 105,
    "code": "6.9.1",
    "elementNum": 6,
    "elementName": "Elemen 6: Keamanan Bekerja Berdasarkan SMK3",
    "subElementName": "6.9 Pemulihan Keadaan Darurat",
    "clauseText": "Prosedur untuk pemulihan kondisi tenaga kerja maupun sarana dan peralatan produksi yang mengalami kerusakan telah ditetapkan dan dapat diterapkan sesegera mungkin setelah terjadinya kecelakaan dan penyakit akibat kerja.",
    "interpretation": "Perusahaan wajib memiliki Rencana Pemulihan Pasca Bencana / Keberlanjutan Usaha (Business Continuity Plan & Disaster Recovery Procedure) yang mencakup trauma healing pekerja, perbaikan struktur rusak, dan pengoperasian kembali secara aman.",
    "expectedEvidence": "SOP Pemulihan Pasca Keadaan Darurat (Disaster Recovery & Post-Incident Rehabilitation SOP), program pemulihan trauma/konseling pekerja, mekanisme investigasi integritas struktur.",
    "conditions": {
      "compliant": "Tersedia prosedur pemulihan darurat komprehensif yang mengatur kriteria aman untuk memasuki kembali area kerja (all clear signal) dan rehabilitasi tenaga kerja.",
      "critical": "Memerintahkan pekerja masuk kembali ke dalam gedung yang baru terbakar dan strukturnya retak parah tanpa kajian kelaikan struktur hingga gedung runtuh menimpa pekerja.",
      "major": "Tidak ada prosedur pemulihan pasca darurat; operasional langsung dipaksakan berjalan kembali tanpa pemeriksaan keamanan mesin yang terbakar/rusak.",
      "minor": "Prosedur pemulihan sarana produksi tersedia namun protokol pendampingan psikologis trauma pekerja pasca kecelakaan belum dituangkan tertulis.",
      "ofi": "Menyusun skenario Business Continuity Management terintegrasi dengan standar ISO 22301 untuk menjamin ketahanan organisasi menghadapi bencana."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 106,
    "code": "7.1.1",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.1 Pemeriksaan Bahaya",
    "clauseText": "Pemeriksaan/inspeksi terhadap tempat kerja dan cara kerja dilaksanakan secara teratur.",
    "interpretation": "Perusahaan wajib memiliki program inspeksi keselamatan terencana dan terjadwal (inspeksi harian, mingguan, bulanan, atau inspeksi khusus) untuk mendeteksi kondisi dan tindakan tidak aman.",
    "expectedEvidence": "Jadwal tahunan inspeksi K3 tempat kerja, formulir laporan hasil inspeksi berkala, rekaman temuan bahaya lapangan.",
    "conditions": {
      "compliant": "Inspeksi K3 tempat kerja dan cara kerja dilaksanakan secara konsisten sesuai jadwal yang telah ditetapkan oleh manajemen.",
      "critical": "Tidak pernah melakukan inspeksi pada instalasi bahaya tinggi sehingga kondisi kritis yang retak/bocor tidak terdeteksi hingga terjadi ledakan fatal.",
      "major": "Tidak ada program atau pelaksanaan inspeksi keselamatan kerja sama sekali dalam kurun waktu operasional perusahaan.",
      "minor": "Inspeksi terlaksana rutin namun pelaksanaan jadwal inspeksi bulanan sempat mundur dari tanggal yang tertera dalam jadwal.",
      "ofi": "Menerapkan sistem checklist inspeksi digital pada perangkat mobile yang langsung terhubung ke database pemantauan keselamatan korporat."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 107,
    "code": "7.1.2",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.1 Pemeriksaan Bahaya",
    "clauseText": "Pemeriksaan/inspeksi dilaksanakan oleh petugas yang berkompeten dan berwenang yang telah memperoleh pelatihan mengenai identifikasi bahaya.",
    "interpretation": "Inspektur keselamatan atau personil yang ditugaskan melakukan inspeksi harus memiliki kompetensi dan telah lulus pelatihan identifikasi bahaya dan teknik inspeksi K3.",
    "expectedEvidence": "Sertifikat pelatihan Inspeksi K3 / Hazard Identification para petugas inspeksi, SK penunjukan tim inspeksi keselamatan kerja.",
    "conditions": {
      "compliant": "Petugas inspeksi memiliki sertifikat kompetensi pelatihan identifikasi bahaya yang sah dan memahami standar teknis di area yang diperiksa.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Petugas yang ditugaskan melakukan inspeksi tidak pernah mendapatkan pelatihan apapun tentang K3 dan tidak memahami bahaya teknis operasional.",
      "minor": "Petugas inspeksi berpengalaman namun sertifikat bukti pelatihan formalnya belum diarsipkan di bagian HRD.",
      "ofi": "Menyelenggarakan sertifikasi kompetensi profesi Pengawas K3 / Safety Inspector bersertifikat BNSP bagi seluruh tim inspeksi lapangan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 108,
    "code": "7.1.3",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.1 Pemeriksaan Bahaya",
    "clauseText": "Pemeriksaan/inspeksi mencari masukan dari tenaga kerja yang melakukan tugas di tempat yang diperiksa.",
    "interpretation": "Saat inspeksi berlangsung, tim pemeriksa harus berdialog dan meminta masukan dari operator mesin atau pekerja di lokasi mengenai kendala keselamatan yang mereka alami.",
    "expectedEvidence": "Catatan wawancara/masukan pekerja dalam formulir laporan inspeksi, daftar keluhan dan saran K3 dari operator lini saat walk-through inspection.",
    "conditions": {
      "compliant": "Laporan inspeksi memuat masukan nyata dari pekerja di area yang diperiksa dan pekerja membenarkan adanya dialog keselamatan saat audit wawancara.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Inspeksi dilakukan secara sepihak dan arogan tanpa pernah mendengarkan masukan pekerja, sehingga bahaya tersembunyi yang dilaporkan pekerja diabaikan.",
      "minor": "Dialog dengan pekerja dilakukan saat inspeksi namun poin masukannya belum dicatat secara eksplisit pada lembar rangkuman temuan.",
      "ofi": "Menyediakan fitur voice-to-text pada aplikasi inspeksi agar masukan lisan operator lapangan dapat terekam instan dan akurat."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 109,
    "code": "7.1.4",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.1 Pemeriksaan Bahaya",
    "clauseText": "Daftar periksa (check list) tempat kerja telah disusun untuk digunakan pada saat pemeriksaan/inspeksi.",
    "interpretation": "Inspeksi K3 tidak boleh dilakukan secara acak atau mengira-ngira; harus menggunakan lembar daftar periksa (checklist) terstandar yang mencakup seluruh parameter keselamatan relevan.",
    "expectedEvidence": "Formulir checklist inspeksi K3 terstandar (Checklist APAR, Checklist Kebersihan/5S, Checklist Kelistrikan, Checklist Mesin, Checklist Alat Berat).",
    "conditions": {
      "compliant": "Tersedia checklist inspeksi spesifik dan terstandar untuk setiap area atau jenis peralatan yang digunakan secara konsisten oleh tim inspeksi.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak ada checklist inspeksi sama sekali; inspeksi dilakukan tanpa panduan standar sehingga bahaya kritis terlewatkan.",
      "minor": "Checklist inspeksi tersedia namun beberapa poin item pemeriksaan spesifik mesin baru belum ditambahkan ke dalam lembar periksa.",
      "ofi": "Menerapkan dynamic checklist digital yang menyesuaikan parameter pertanyaan berdasarkan jenis bahaya dan riwayat temuan masa lalu di area tersebut."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 110,
    "code": "7.1.5",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.1 Pemeriksaan Bahaya",
    "clauseText": "Laporan pemeriksaan/inspeksi berisi rekomendasi untuk tindakan perbaikan dan diajukan kepada pengurus dan P2K3 sesuai dengan kebutuhan.",
    "interpretation": "Setiap temuan inspeksi harus disertai saran tindakan korektif konkret dan dilaporkan secara resmi kepada pimpinan unit kerja, top management, dan komite P2K3.",
    "expectedEvidence": "Laporan tertulis hasil inspeksi K3 yang memuat kolom rekomendasi perbaikan, bukti penyampaian laporan ke manajemen (tanda terima / email rilis), pembahasan di rapat P2K3.",
    "conditions": {
      "compliant": "Laporan inspeksi selalu dilengkapi rekomendasi tindakan korektif yang jelas dan didistribusikan ke pimpinan serta komite P2K3 tepat waktu.",
      "critical": "Temuan inspeksi mengenai bahaya ledakan gas diabaikan dan tidak pernah dilaporkan ke pengurus sehingga berujung insiden fatal.",
      "major": "Laporan inspeksi hanya mencatat temuan tanpa memberikan rekomendasi solusi perbaikan, atau laporan disembunyikan dan tidak pernah diserahkan ke pengurus.",
      "minor": "Laporan inspeksi diserahkan ke pengurus namun ringkasan laporan belum dimasukkan ke dalam agenda pembahasan rapat bulanan P2K3.",
      "ofi": "Membuat matriks scoring tingkat risiko temuan inspeksi (Risk Rank Matrix: High/Med/Low) untuk mempermudah manajemen memprioritaskan anggaran perbaikan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 111,
    "code": "7.1.6",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.1 Pemeriksaan Bahaya",
    "clauseText": "Pengusaha atau pengurus telah menetapkan penanggung jawab untuk pelaksanaan tindakan perbaikan dari hasil laporan pemeriksaan/inspeksi.",
    "interpretation": "Setiap item rekomendasi perbaikan hasil inspeksi harus memiliki Penanggung Jawab (PIC) yang ditunjuk resmi oleh pimpinan beserta tenggat waktu penyelesaian (due date).",
    "expectedEvidence": "Lembar Corrective Action Plan (CAP) hasil inspeksi dengan kolom penunjukan PIC per item temuan, tanda tangan pimpinan unit yang bertanggung jawab.",
    "conditions": {
      "compliant": "Terdapat penunjukan resmi penanggung jawab tindakan perbaikan yang jelas dengan target waktu penyelesaian terukur untuk setiap temuan inspeksi.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Hasil inspeksi dibiarkan menggantung tanpa ada penetapan penanggung jawab, sehingga tidak ada yang merasa bertanggung jawab melakukan perbaikan.",
      "minor": "PIC telah ditunjuk secara lisan oleh manajer unit namun nama PIC belum dituliskan pada dokumen formulir laporan tindak lanjut inspeksi.",
      "ofi": "Menghubungkan tugas tindakan perbaikan temuan inspeksi ke dalam sistem task management digital PIC dengan reminder berkala."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 112,
    "code": "7.1.7",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.1 Pemeriksaan Bahaya",
    "clauseText": "Tindakan perbaikan dari hasil laporan pemeriksaan/inspeksi dipantau untuk menentukan efektivitasnya.",
    "interpretation": "Perusahaan harus melakukan verifikasi penutupan temuan (close-out verification) untuk memastikan tindakan perbaikan benar-benar telah diterapkan dan efektif mencegah bahaya berulang.",
    "expectedEvidence": "Formulir verifikasi penyelesaian tindakan perbaikan (Close-out Form with Before-After Photos), log status pemantauan temuan inspeksi, bukti tanda tangan verifikator safety.",
    "conditions": {
      "compliant": "Tersedia bukti pemantauan dan verifikasi efektivitas tindakan perbaikan di lapangan sebelum temuan inspeksi dinyatakan resmi ditutup (closed).",
      "critical": "Temuan bahaya kritis dilaporkan telah selesai diperbaiki di atas kertas, padahal di lapangan tidak diperbaiki sama sekali dan menimbulkan kecelakaan fatal.",
      "major": "Tidak pernah dilakukan pemantauan atas tindakan perbaikan sehingga temuan bahaya yang sama berulang kali ditemukan dalam setiap inspeksi.",
      "minor": "Tindakan perbaikan fisik telah selesai di lapangan namun foto dokumentasi 'after' belum diunggah ke formulir verifikasi status temuan.",
      "ofi": "Menerapkan audit efektivitas purnatindakan (Post-Implementation Review) 3 bulan setelah tindakan korektif ditutup untuk menjamin kesinambungan solusi."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 113,
    "code": "7.2.1",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.2 Lingkungan Kerja",
    "clauseText": "Pemantauan/pengukuran lingkungan kerja dilaksanakan secara teratur dan hasilnya didokumentasikan, dipelihara dan digunakan untuk penilaian dan pengendalian risiko.",
    "interpretation": "Sesuai Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja, perusahaan wajib melakukan pengukuran faktor bahaya lingkungan kerja secara teratur minimal 1 tahun sekali.",
    "expectedEvidence": "Laporan Hasil Pengujian Lingkungan Kerja dari laboratorium terakreditasi/PJK3 Lingkungan Kerja, rekaman perbandingan terhadap Nilai Ambang Batas (NAB), pembaruan HIRADC.",
    "conditions": {
      "compliant": "Pengukuran lingkungan kerja terlaksana rutin sesuai jadwal regulasi, hasilnya di bawah NAB atau ditindaklanjuti dengan pengendalian teknis jika melebihi NAB.",
      "critical": "Konsentrasi gas beracun/uap mudah meledak di ruang kerja melebihi batas bahaya langsung terhadap kehidupan dan kesehatan (IDLH) dan dibiarkan tanpa tindakan darurat.",
      "major": "Perusahaan tidak pernah melakukan pengukuran lingkungan kerja sama sekali meskipun operasionalnya menghasilkan paparan bising, debu, atau zat kimia pekat.",
      "minor": "Pengukuran lingkungan kerja telah dilakukan namun laporan resmi dari laboratorium rekanan terlambat disosialisasikan kepada pekerja di unit terkait.",
      "ofi": "Memasang sistem sensor pemantau kualitas udara dan kebisingan lingkungan kerja otomatis (Continuous Real-Time Environmental Monitoring)."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 114,
    "code": "7.2.2",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.2 Lingkungan Kerja",
    "clauseText": "Pemantauan/pengukuran lingkungan kerja meliputi faktor fisik, kimia, biologi, ergonomi dan psikologi.",
    "interpretation": "Ruang lingkup pengujian higiene industri harus mencakup 5 faktor lengkap sesuai Permenaker 05/2018: Fisika (bising, getaran, iklim kerja, pencahayaan, radiasi), Kimia (debu, uap, gas), Biologi (jamur, kuman, vektor), Ergonomi (beban kerja, postur REBA/RULA), dan Psikologi kerja (stres kerja).",
    "expectedEvidence": "Laporan pengujian 5 faktor lingkungan kerja lengkap (Laporan uji kebisingan, pencahayaan, debu, mikrobiologi udara, survei ergonomi RULA/REBA, survei psikologi kerja).",
    "conditions": {
      "compliant": "Pengukuran lingkungan kerja mencakup kelima faktor (fisik, kimia, biologi, ergonomi, psikologi) dengan metodologi pengujian yang valid sesuai standar nasional.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Pengujian lingkungan kerja hanya mengukur faktor fisik seadanya dan menolak sama sekali menguji faktor kimia mematikan atau faktor ergonomi kritis.",
      "minor": "Faktor fisik, kimia, dan biologi telah diuji lengkap, namun pengukuran faktor ergonomi atau psikologi kerja baru mencakup sebagian sampel departemen.",
      "ofi": "Membentuk program komprehensif Total Worker Health yang mengintegrasikan hasil uji higiene industri dengan program ergonomi dan kesehatan mental kerja."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 115,
    "code": "7.2.3",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.2 Lingkungan Kerja",
    "clauseText": "Pemantauan/pengukuran lingkungan kerja dilakukan oleh petugas atau pihak yang berkompeten dan berwenang dari dalam dan/atau luar perusahaan.",
    "interpretation": "Pengukuran harus dilakukan oleh personil yang memiliki sertifikat Ahli K3 Lingkungan Kerja / Higiene Industri (HIMU/HIMA/HIU) atau menggunakan jasa laboratorium PJK3 Uji Lingkungan Kerja yang memiliki SKP Kemnaker dan akreditasi KAN.",
    "expectedEvidence": "SKP PJK3 Bidang Lingkungan Kerja dari Kemnaker, sertifikat akreditasi KAN LP (Laboratorium Penguji), sertifikat kompetensi Ahli K3 Lingkungan Kerja personil penguji.",
    "conditions": {
      "compliant": "Pengujian lingkungan kerja dilakukan oleh laboratorium atau tenaga ahli yang memiliki lisensi dan legalitas penunjukan resmi yang sah dari Kemnaker RI.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Hasil pengukuran dikeluarkan oleh lembaga fiktif atau pihak yang tidak memiliki legalitas kewenangan pengujian lingkungan kerja dari pemerintah.",
      "minor": "Lembaga penguji memiliki akreditasi resmi namun salinan SKP Kemnaker yang terlampir di halaman laporan pengujian sudah mendekati masa kedaluwarsa.",
      "ofi": "Melatih personil internal untuk memiliki sertifikasi Ahli Muda K3 Lingkungan Kerja (HIMU) agar dapat melakukan pengukuran pra-uji mandiri secara berkala."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 116,
    "code": "7.3.1",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.3 Peralatan Ukur & Uji",
    "clauseText": "Terdapat prosedur yang terdokumentasi mengenai identifikasi, kalibrasi, pemeliharaan dan penyimpanan untuk alat pemeriksaan, ukur dan uji mengenai K3.",
    "interpretation": "Perusahaan harus memiliki SOP pengelolaan alat ukur K3 (Sound Level Meter, Lux Meter, Gas Detector, Multimeter, Torque Wrench, Timbangan) yang mengatur jadwal kalibrasi dan perawatannya.",
    "expectedEvidence": "SOP Pengelolaan dan Kalibrasi Alat Ukur/Uji K3, Daftar Inventaris Peralatan Ukur K3 (Masterlist of Monitoring Equipment), log perawatan alat uji.",
    "conditions": {
      "compliant": "Tersedia prosedur terdokumentasi yang komprehensif mengatur tata cara identifikasi, pemeliharaan, kalibrasi berkala, dan penyimpanan aman seluruh instrumen ukur K3.",
      "critical": "Menggunakan alat pendeteksi gas beracun (gas detector) yang rusak dan tidak pernah dikalibrasi untuk mengizinkan pekerja masuk ruang terbatas yang mematikan.",
      "major": "Tidak ada sistem kalibrasi dan pemeliharaan alat ukur keselamatan sama sekali di perusahaan.",
      "minor": "Prosedur kalibrasi ada namun interval rekalibrasi untuk alat ukur lux meter belum dicantumkan secara spesifik dalam lampiran prosedur.",
      "ofi": "Menyediakan ruang penyimpanan khusus instrumen K3 dengan kontrol suhu dan kelembapan stabil (dry cabinet) untuk menjaga keawetan sensor elektronik."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 117,
    "code": "7.3.2",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.3 Peralatan Ukur & Uji",
    "clauseText": "Alat dipelihara dan dikalibrasi oleh petugas atau pihak yang berkompeten dan berwenang dari dalam dan/atau luar perusahaan.",
    "interpretation": "Kalibrasi instrumen ukur K3 harus dilakukan oleh Laboratorium Kalibrasi Terakreditasi KAN (Komite Akreditasi Nasional) atau teknisi bersertifikasi kalibrasi.",
    "expectedEvidence": "Sertifikat Kalibrasi resmi bertanda logo KAN yang masih berlaku untuk setiap alat ukur K3, stiker label kalibrasi pada fisik instrumen (Calibration Sticker).",
    "conditions": {
      "compliant": "Seluruh alat ukur keselamatan memiliki sertifikat kalibrasi KAN yang valid dan terpasang stiker label kalibrasi yang jelas.",
      "critical": "Hasil uji gas palsu digunakan untuk pekerjaan panas di kapal tangker karena alat detector gas kedaluwarsa dan tidak terkalibrasi, memicu ledakan maut.",
      "major": "Seluruh alat ukur K3 penting (seperti gas detector atau sound level meter) tidak pernah dikalibrasi sejak dibeli bertahun-tahun yang lalu.",
      "minor": "Sertifikat kalibrasi alat masih berlaku namun stiker kalibrasi yang tertempel di bodi alat ukur telah mengelupas atau buram.",
      "ofi": "Menyusun sistem pengingat otomatis (calibration alert) terhubung kalender digital 30 hari sebelum masa berlaku kalibrasi instrumen berakhir."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 118,
    "code": "7.4.1",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.4 Pemantauan Kesehatan",
    "clauseText": "Dilakukan pemantauan kesehatan tenaga kerja yang bekerja pada tempat kerja yang mengandung potensi bahaya tinggi sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Sesuai UU 1/1970 dan Permenaker 02/1980, perusahaan wajib menyelenggarakan pemeriksaan kesehatan khusus (spirometri, audiometri, rontgen paru, biomarker darah/urin) bagi pekerja di area bahaya tinggi.",
    "expectedEvidence": "Jadwal dan rekapitulasi pelaksanaan Medical Check-Up (MCU) Khusus (Audiometri untuk area bising, Spirometri untuk area debu, uji timbal/pelarut kimia untuk lab/workshop).",
    "conditions": {
      "compliant": "Pemeriksaan kesehatan khusus diselenggarakan secara teratur sesuai profil risiko spesifik pekerjaan dan tingkat paparan bahaya.",
      "critical": "Membiarkan pekerja terpapar zat karsinogenik/radiasi berbahaya tanpa pemantauan kesehatan hingga timbul penyakit fatal massal akibat kelalaian pembiaran.",
      "major": "Pekerja di lingkungan ekstrem bising atau beracun tidak pernah diberikan pemeriksaan kesehatan khusus sama sekali oleh perusahaan.",
      "minor": "MCU Khusus telah dijalankan namun beberapa pekerja yang cuti saat jadwal pemeriksaan belum diikutsertakan dalam pemeriksaan susulan.",
      "ofi": "Membuat analisis tren kesehatan biologis (Biological Monitoring Trend Analysis) tahunan untuk memantau efektivitas perlindungan APD di area berisiko tinggi."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 119,
    "code": "7.4.2",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.4 Pemantauan Kesehatan",
    "clauseText": "Pengusaha atau pengurus telah melaksanakan identifikasi keadaan dimana pemeriksaan kesehatan tenaga kerja perlu dilakukan dan telah melaksanakan sistem untuk membantu pemeriksaan ini.",
    "interpretation": "Perusahaan harus memetakan matriks kesehatan kerja (Health Risk Assessment / HRA) yang menentukan siapa saja yang wajib diperiksa, parameter uji medis apa yang relevan, dan frekuensi pemeriksaannya.",
    "expectedEvidence": "Dokumen Health Risk Assessment (HRA) / Matriks Pemeriksaan Kesehatan Berdasarkan Pajanan Bahaya Kerja, SOP Pemeriksaan Kesehatan Tenaga Kerja.",
    "conditions": {
      "compliant": "Tersedia pemetaan bahaya kesehatan kerja yang sistematis sebagai acuan penentuan paket uji laboratorium medis bagi setiap kelompok kerja.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Pemeriksaan kesehatan dilakukan asal-asalan tanpa dasar analisis bahaya (paket seragam yang tidak menguji bahaya nyata yang dihadapi pekerja).",
      "minor": "Matriks pemeriksaan kesehatan telah disusun namun parameter uji untuk divisi logistik yang baru dibentuk belum dimasukkan ke dalam daftar HRA.",
      "ofi": "Mengintegrasikan matriks HRA dengan data Industrial Hygiene sampling untuk menentukan kelompok pekerja terpapar serupa (Similar Exposure Groups / SEGs)."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 120,
    "code": "7.4.3",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.4 Pemantauan Kesehatan",
    "clauseText": "Pemeriksaan kesehatan tenaga kerja dilakukan oleh dokter pemeriksa yang ditunjuk sesuai peraturan perundang-undangan.",
    "interpretation": "Sesuai Permenaker No. 01/MEN/1976 dan Permenaker 02/1980, pemeriksaan kesehatan kerja wajib dilakukan oleh Dokter Pemeriksa Kesehatan Tenaga Kerja yang telah memiliki SKP resmi dari Menaker RI.",
    "expectedEvidence": "Surat Keputusan Penunjukan (SKP) Dokter Pemeriksa Kesehatan Tenaga Kerja dari Kemnaker RI yang masih berlaku, sertifikat Hiperkes dokter pemeriksa.",
    "conditions": {
      "compliant": "MCU dilakukan oleh dokter pemeriksa kesehatan tenaga kerja yang sah bersertifikat Hiperkes dan memiliki SKP aktif dari Kementerian Ketenagakerjaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Pemeriksaan kesehatan dilakukan oleh pihak medis yang tidak memiliki izin penunjukan dokter pemeriksa K3 dari Kemnaker RI.",
      "minor": "Dokter pemeriksa memiliki SKP Kemnaker aktif namun salinan legalitasnya terlambat dilampirkan dalam berkas laporan hasil MCU ke manajemen.",
      "ofi": "Menjalin kemitraan jangka panjang dengan klinik kerja atau rumah sakit rujukan spesialis okupasi (Sp.Ok) untuk penanganan ergonomi dan PAK lanjutan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 121,
    "code": "7.4.4",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.4 Pemantauan Kesehatan",
    "clauseText": "Perusahaan menyediakan pelayanan kesehatan kerja sesuai peraturan perundang-undangan.",
    "interpretation": "Sesuai Permenaker No. 03/MEN/1982 tentang Pelayanan Kesehatan Kerja (PKK), perusahaan wajib menyelenggarakan pelayanan kesehatan kerja (klinik perusahaan mandiri atau kerja sama dengan fasilitas kesehatan eksternal) yang disahkan Disnaker.",
    "expectedEvidence": "Surat Pengesahan Penyelenggaraan Pelayanan Kesehatan Kerja (PKK) dari Disnaker setempat, fasilitas klinik perusahaan / MoU faskes rekanan, sertifikat Hiperkes paramedis.",
    "conditions": {
      "compliant": "Pelayanan kesehatan kerja berizin resmi dari Disnaker tersedia, memiliki fasilitas pertolongan medis memadai, dan diawaki tenaga kesehatan bersertifikat Hiperkes.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan skala besar tidak menyelenggarakan pelayanan kesehatan kerja sama sekali dan tidak memiliki fasilitas rujukan darurat bagi pekerja.",
      "minor": "Pelayanan kesehatan kerja berjalan baik namun surat perpanjangan pengesahan PKK dari dinas tenaga kerja setempat sedang dalam proses administrasi.",
      "ofi": "Menyediakan program preventif dan promotif kesehatan kerja terpadu (seperti senam peregangan berkala, konsultasi gizi kerja, dan program berhenti merokok)."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 122,
    "code": "7.4.5",
    "elementNum": 7,
    "elementName": "Elemen 7: Standar Pemantauan",
    "subElementName": "7.4 Pemantauan Kesehatan",
    "clauseText": "Catatan mengenai pemantauan kesehatan tenaga kerja dibuat sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Rekam medis tenaga kerja (medical records) harus dibuat, dipelihara kerahasiaannya, dan dilaporkan secara berkala (Laporan Pelayanan Kesehatan Kerja) kepada Disnaker setempat sesuai form regulasi.",
    "expectedEvidence": "Arsip berkas rekam medis karyawan tersimpan di ruang arsip medis terkunci, tanda terima laporan penyelenggaraan pelayanan kesehatan kerja ke Disnaker setempat.",
    "conditions": {
      "compliant": "Catatan pemantauan kesehatan terdokumentasi lengkap, terjaga kerahasiaan medisnya, dan dilaporkan secara rutin ke dinas ketenagakerjaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak membuat dan tidak menyimpan catatan kesehatan tenaga kerja, serta menolak membuat laporan wajib kesehatan kerja.",
      "minor": "Catatan kesehatan tersimpan rapi namun pelaporan tahunan pelayanan kesehatan kerja ke Disnaker setempat terlambat diserahkan.",
      "ofi": "Menerapkan Electronic Medical Record (EMR) terenkripsi khusus kesehatan kerja dengan hak akses yang hanya dapat dibuka oleh dokter perusahaan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 123,
    "code": "8.1.1",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.1 Pelaporan Bahaya",
    "clauseText": "Terdapat prosedur pelaporan bahaya yang berhubungan dengan K3 dan prosedur ini diketahui oleh tenaga kerja.",
    "interpretation": "Perusahaan harus memiliki prosedur pelaporan bahaya (Hazard Report / Kartu STOP / Kartu K3 / Safety Observation) yang mudah diakses dan dipahami seluruh karyawan.",
    "expectedEvidence": "SOP Pelaporan Kondisi dan Tindakan Tidak Aman (Hazard Identification & Reporting SOP), kartu/kotak pelaporan bahaya di lapangan, log book laporan bahaya masuk.",
    "conditions": {
      "compliant": "Tersedia prosedur pelaporan bahaya yang aktif digunakan pekerja, dipahami alurnya, dan seluruh laporan bahaya tercatat serta ditindaklanjuti.",
      "critical": "Pekerja dilarang keras melapor kondisi bahaya di bawah ancaman pemecatan, sehingga bahaya katastropik tidak tertangani dan meledak mematikan.",
      "major": "Tidak ada sistem atau prosedur pelaporan bahaya; pekerja tidak tahu harus melapor ke mana jika menemukan kondisi berbahaya.",
      "minor": "Sistem pelaporan bahaya ada dan berjalan, namun kotak formulir pelaporan bahaya di area workshop kehabisan kertas formulir kosong.",
      "ofi": "Menerapkan aplikasi pelaporan bahaya berbasis smartphone (Safety Hazard App) dengan fitur unggah foto langsung dan reward poin untuk laporan bermutu."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 124,
    "code": "8.2.1",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.2 Pelaporan Kecelakaan",
    "clauseText": "Terdapat prosedur terdokumentasi yang menjamin bahwa semua kecelakaan kerja, penyakit akibat kerja, kebakaran atau peledakan serta kejadian berbahaya lainnya di tempat kerja dicatat dan dilaporkan sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Sesuai Permenaker 03/1998, perusahaan wajib memiliki SOP yang menjamin setiap kecelakaan kerja dilaporkan kepada Disnaker setempat dan BPJS Ketenagakerjaan dalam waktu maksimal 2x24 jam.",
    "expectedEvidence": "SOP Pelaporan Insiden dan Kecelakaan Kerja, arsip formulir laporan kecelakaan kerja (Formulir Bentuk 3 KK2 A/B Depnaker), bukti lapor Disnaker dan BPJS TK.",
    "conditions": {
      "compliant": "Prosedur pelaporan kecelakaan terdokumentasi dan dijalankan patuh; seluruh insiden dicatat dan dilaporkan resmi ke instansi ketenagakerjaan tepat waktu.",
      "critical": "Kecelakaan kerja fatal (fatality) disembunyikan secara sengaja, jenazah korban diselundupkan, dan perusahaan menolak melaporkan ke pihak berwajib.",
      "major": "Perusahaan secara sadar tidak melaporkan kecelakaan kerja berat ke Dinas Tenaga Kerja untuk mempertahankan rekor nihil kecelakaan secara palsu.",
      "minor": "Kecelakaan ringan telah dicatat dan dilaporkan internal, namun tanda terima laporan tertulis ke BPJS Ketenagakerjaan terlambat 1 hari dari batas waktu.",
      "ofi": "Menerapkan sistem pelaporan kecelakaan terintegrasi otomatis ke sistem klaim digital BPJS Ketenagakerjaan dan portal internal korporat."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 125,
    "code": "8.3.1",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.3 Pemeriksaan Kecelakaan",
    "clauseText": "Tempat kerja/perusahaan mempunyai prosedur pemeriksaan dan pengkajian kecelakaan kerja dan penyakit akibat kerja.",
    "interpretation": "Harus ada SOP Penyelidikan/Investigasi Kecelakaan Kerja (Incident Investigation SOP) yang memuat metodologi analisis akar penyebab (Root Cause Analysis).",
    "expectedEvidence": "Dokumen SOP Penyelidikan dan Pengkajian Insiden K3, bagan alur investigasi kecelakaan, panduan metodologi analisis penyebab kecelakaan.",
    "conditions": {
      "compliant": "Tersedia prosedur investigasi kecelakaan kerja dan PAK yang terstruktur, baku, dan menetapkan tahapan pengumpulan bukti serta analisis akar masalah.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak memiliki prosedur investigasi kecelakaan sama sekali; setiap insiden hanya diselesaikan secara informal tanpa kajian sistemik.",
      "minor": "Prosedur investigasi ada namun belum secara tegas mencakup tata cara pengkajian khusus untuk kasus Penyakit Akibat Kerja (PAK).",
      "ofi": "Mengadopsi perangkat lunak investigasi kecelakaan berbasis metode SCAT (Systematic Cause Analysis Technique) atau Tripod Beta."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 126,
    "code": "8.3.2",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.3 Pemeriksaan Kecelakaan",
    "clauseText": "Pemeriksaan dan pengkajian kecelakaan kerja dilakukan oleh petugas atau Ahli K3 yang ditunjuk sesuai peraturan perundang-undangan atau pihak lain yang berkompeten dan berwenang.",
    "interpretation": "Investigasi kecelakaan harus dipimpin oleh Ahli K3 Umum/Spesialis bersertifikat atau tim kompeten yang ditunjuk resmi manajemen.",
    "expectedEvidence": "SK Penunjukan Tim Investigasi Insiden, sertifikat pelatihan Investigasi Insiden K3 anggota tim, tanda tangan Ahli K3 pada berkas laporan investigasi.",
    "conditions": {
      "compliant": "Penyelidikan kecelakaan dipimpin oleh Ahli K3 atau investigator bersertifikat resmi yang independen dan berwenang.",
      "critical": "Investigasi kecelakaan fatal dipimpin oleh pihak yang sengaja memanipulasi fakta untuk menutupi kelalaian struktural sistemik manajemen.",
      "major": "Investigasi kecelakaan kerja dilakukan oleh pihak yang tidak memahami K3 dan tidak pernah melibatkan Ahli K3 perusahaan.",
      "minor": "Tim investigasi telah memiliki sertifikat Ahli K3 namun berita acara penunjukan tim ad-hoc investigasi belum sempat diterbitkan untuk insiden minor.",
      "ofi": "Membentuk Tim Reaksi Cepat Investigasi (Incident Investigation Taskforce) yang siaga 24/7 dengan peralatan forensic kit keselamatan lengkap."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 127,
    "code": "8.3.3",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.3 Pemeriksaan Kecelakaan",
    "clauseText": "Laporan pemeriksaan dan pengkajian berisi tentang sebab dan akibat serta rekomendasi/saran dan jadwal waktu pelaksanaan usaha perbaikan.",
    "interpretation": "Laporan investigasi harus mendalam: menguraikan kronologi kejadian, kerugian/dampak, penyebab langsung, penyebab dasar (akar masalah), dan rekomendasi korektif bertenggat waktu.",
    "expectedEvidence": "Dokumen Laporan Lengkap Investigasi Kecelakaan Kerja (Laporan Akhir Insiden) yang memuat diagram fishbone / 5-Whys, tabel rekomendasi SMART, dan target tanggal penyelesaian.",
    "conditions": {
      "compliant": "Laporan investigasi komprehensif, membedah akar penyebab kegagalan sistem, dan menetapkan rekomendasi perbaikan dengan batas waktu realistis.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Laporan kecelakaan hanya berhenti pada menyalahkan kelalaian korban (human error semata) tanpa menginvestigasi kegagalan sistem dan tanpa rekomendasi perbaikan.",
      "minor": "Laporan investigasi lengkap namun penetapan target tanggal penyelesaian pada butir perbaikan administratif belum dicantumkan secara pasti.",
      "ofi": "Menyusun lembar pembelajaran insiden satu halaman (Safety Alert / Lessons Learned Bulletin) untuk disebarkan ke seluruh unit operasional pasca investigasi."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 128,
    "code": "8.3.4",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.3 Pemeriksaan Kecelakaan",
    "clauseText": "Penanggung jawab untuk melaksanakan tindakan perbaikan atas laporan pemeriksaan dan pengkajian telah ditetapkan.",
    "interpretation": "Setiap tindakan korektif pasca insiden wajib ditugaskan kepada pejabat/manajer lini yang berwenang mengeksekusi anggaran dan perubahan di area terkait.",
    "expectedEvidence": "Lembar Corrective & Preventive Action (CAPA) hasil investigasi dengan kolom otorisasi PIC pimpinan departemen terkait, memo penugasan direksi.",
    "conditions": {
      "compliant": "Penanggung jawab pelaksanaan perbaikan ditetapkan secara resmi dan memiliki wewenang eksekutif untuk merealisasikan tindakan korektif.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Rekomendasi investigasi kecelakaan fatal dibiarkan tanpa penunjukan PIC sehingga tindakan perbaikan tidak pernah ada yang mengeksekusi.",
      "minor": "PIC perbaikan telah ditunjuk dalam rapat manajemen namun surat tugas formal penunjukan PIC belum ditandatangani general manager.",
      "ofi": "Menghubungkan penyelesaian CAPA insiden dengan indikator penilaian kinerja manajer departemen terkait."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 129,
    "code": "8.3.5",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.3 Pemeriksaan Kecelakaan",
    "clauseText": "Tindakan perbaikan diinformasikan kepada tenaga kerja yang bekerja di tempat terjadinya kecelakaan.",
    "interpretation": "Pekerja di lokasi terjadinya kecelakaan harus diberitahu mengenai hasil investigasi dan tindakan perbaikan apa yang dilakukan agar mereka merasa aman dan tidak mengulangi kesalahan.",
    "expectedEvidence": "Notulensi safety talk / briefing khusus pasca insiden di area kejadian, daftar hadir sosialisasi tindakan perbaikan, display safety alert di papan informasi unit.",
    "conditions": {
      "compliant": "Tindakan perbaikan disosialisasikan secara terbuka dan transparan kepada seluruh tenaga kerja di area tempat terjadinya kecelakaan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Manajemen merahasiakan perbaikan pasca kecelakaan sehingga pekerja di unit tersebut tetap bekerja dalam ketakutan dan bahaya yang tidak jelas.",
      "minor": "Sosialisasi perbaikan telah disampaikan ke pekerja shift pagi namun pekerja shift malam baru menerima lembar pengumuman tanpa briefing lisan.",
      "ofi": "Melibatkan pekerja yang bersangkutan sebagai pembicara dalam safety toolbox meeting untuk berbagi pengalaman pembelajaran keselamatan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 130,
    "code": "8.3.6",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.3 Pemeriksaan Kecelakaan",
    "clauseText": "Pelaksanaan tindakan perbaikan dipantau, didokumentasikan dan diinformasikan ke seluruh tenaga kerja.",
    "interpretation": "Progres perbaikan pasca insiden harus dipantau hingga tuntas (closed), didokumentasikan buktinya, dan pembelajarannya dibagikan ke seluruh pabrik/cabang perusahaan.",
    "expectedEvidence": "Matriks Pemantauan Tindakan Perbaikan (CAPA Tracking Matrix), foto bukti perbaikan fisik, buletin keselamatan yang disebar ke seluruh divisi perusahaan.",
    "conditions": {
      "compliant": "Seluruh tindakan korektif terpantau tuntas dengan bukti fisik valid dan rangkuman pelajaran keselamatan disebarkan ke seluruh bagian perusahaan.",
      "critical": "Tindakan perbaikan pencegahan bahaya ledakan dilaporkan selesai tetapi diabaikan, berujung pada ledakan kedua yang menelan korban jiwa.",
      "major": "Tindakan perbaikan kecelakaan tidak pernah dipantau kelanjutannya dan status perbaikan dibiarkan terbengkalai tanpa batas waktu.",
      "minor": "Tindakan perbaikan telah selesai 100% dan diverifikasi, namun publikasi buletin pembelajaran ke unit cabang lain tertunda 2 pekan.",
      "ofi": "Membuat repositori digital pembelajaran insiden (Incident Knowledge Management System) yang dapat diakses oleh insinyur perancang proyek masa depan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 131,
    "code": "8.4.1",
    "elementNum": 8,
    "elementName": "Elemen 8: Pelaporan dan Perbaikan Kekurangan",
    "subElementName": "8.4 Penanganan Masalah",
    "clauseText": "Terdapat prosedur untuk menangani masalah keselamatan dan kesehatan yang timbul dan sesuai dengan peraturan perundang-undangan yang berlaku.",
    "interpretation": "Perusahaan harus memiliki prosedur penyelesaian sengketa, keluhan (grievance), atau penolakan bekerja dalam kondisi berbahaya (Stop Work Authority) sesuai koridor hukum perburuhan dan K3.",
    "expectedEvidence": "SOP Penanganan Masalah & Keluhan K3, SOP Stop Work Authority (Hak Menolak Bekerja Berbahaya), buku catatan penanganan sengketa K3, risalah bipartit K3.",
    "conditions": {
      "compliant": "Tersedia prosedur yang jelas dan adil untuk menangani setiap masalah atau konflik K3 yang timbul, menjamin hak pekerja menolak kondisi bahaya tanpa sanksi.",
      "critical": "Pekerja yang menolak bekerja karena tali pengaman putus dijatuhi sanksi hukuman atau dipaksa tetap bekerja hingga jatuh dan tewas.",
      "major": "Perusahaan tidak memiliki mekanisme penyelesaian masalah K3 dan membalas secara intimidatif terhadap pekerja yang melaporkan masalah keselamatan.",
      "minor": "Prosedur penanganan keluhan K3 tersedia namun waktu respon penanganan masalah dalam SOP belum ditetapkan secara terukur dalam satuan hari kerja.",
      "ofi": "Membentuk saluran pengaduan keselamatan kerja anonim (Whistleblowing Safety Hotline) yang dikelola langsung oleh komite etik dan komite K3 independen."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 132,
    "code": "9.1.1",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.1 Penanganan Manual & Mekanis",
    "clauseText": "Terdapat prosedur untuk mengidentifikasi potensi bahaya dan menilai risiko yang berhubungan dengan penanganan secara manual dan mekanis.",
    "interpretation": "Perusahaan harus memiliki prosedur terdokumentasi untuk mengkaji risiko penanganan material secara manual (Manual Handling/ergonomi angkat-angkut) maupun mekanis (forklift, crane, conveyor).",
    "expectedEvidence": "SOP Penanganan Material Manual dan Mekanis, formulir evaluasi ergonomi pengangkatan beban manual (NIOSH Lifting Equation / REBA / RULA), HIRADC penanganan material.",
    "conditions": {
      "compliant": "Tersedia prosedur terdokumentasi dan kajian risiko menyeluruh terhadap seluruh aktivitas pengangkatan material manual dan pemindahan mekanis.",
      "critical": "Aktivitas pengangkatan material beban berat (crane lifting) di atas pekerja dilakukan tanpa kajian risiko dan tanpa tali penuntun hingga material jatuh menimpa pekerja.",
      "major": "Tidak ada prosedur penanganan material sama sekali; pekerja dibiarkan mengangkat beban berlebih melebihi batas regulasi tanpa alat bantu.",
      "minor": "Prosedur penanganan material ada namun batasan berat maksimal pengangkatan manual untuk pekerja wanita belum dicantumkan secara eksplisit.",
      "ofi": "Menyediakan alat bantu mekanis ergonomis (seperti vacuum lifter atau scissor lift table) untuk mengeliminasi aktivitas angkat manual berulang."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 133,
    "code": "9.1.2",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.1 Penanganan Manual & Mekanis",
    "clauseText": "Identifikasi bahaya dan penilaian risiko dilaksanakan oleh petugas yang berkompeten dan berwenang.",
    "interpretation": "Kajian risiko penanganan material harus dilakukan oleh personil yang memahami biomekanika, ergonomi, dan standar alat angkat-angkut (Ahli K3 / Rigger tersertifikasi).",
    "expectedEvidence": "Sertifikat pelatihan Ergonomi / Rigging Engineer / Ahli K3 Pesawat Angkat Angkut personil penilai risiko, dokumen kajian bertandatangan tenaga ahli.",
    "conditions": {
      "compliant": "Asesmen risiko penanganan material dilakukan oleh tenaga kompeten yang memiliki sertifikasi relevan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Penilaian kelayakan pengangkatan beban berat kritis dilakukan oleh personil yang tidak memiliki pengetahuan teknis rigging sama sekali.",
      "minor": "Petugas penilai memiliki pengalaman operasional memadai namun bukti pelatihan formal ergonominya belum diperbarui.",
      "ofi": "Membentuk komite ergonomi internal yang bertugas melakukan asesmen rutin postur kerja di area penanganan material gudang."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 134,
    "code": "9.1.3",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.1 Penanganan Manual & Mekanis",
    "clauseText": "Pengusaha atau pengurus menerapkan dan meninjau cara pengendalian risiko yang berhubungan dengan penanganan secara manual atau mekanis.",
    "interpretation": "Manajemen menerapkan langkah proteksi nyata (seperti pembatasan berat angkat maksimal, rotasi kerja, pemasangan pelindung conveyor, sabuk pengaman forklift) dan mengevaluasi efektivitasnya.",
    "expectedEvidence": "Bukti penyediaan alat bantu angkat (troli, hand pallet), poster panduan posisi angkat aman, batas beban aman (Safe Working Load / SWL) tertera jelas pada alat angkat.",
    "conditions": {
      "compliant": "Pengendalian risiko manual dan mekanis diterapkan secara konsisten di lantai kerja dan ditinjau berkala untuk meminimalkan cedera punggung/musculoskeletal.",
      "critical": "Forklift beroperasi dengan rem rusak dan garpu retak membawa muatan melebihi kapasitas di lorong sempit tanpa pembatas hingga menabrak pekerja.",
      "major": "Pengendalian risiko diabaikan sama sekali; banyak kasus cedera tulang belakang (HNP) pada pekerja angkat manual tanpa tindakan perbaikan dari pengurus.",
      "minor": "Troli dan alat bantu angkat tersedia namun 1 unit roda hand pallet mengalami macet dan belum sempat diservis.",
      "ofi": "Menerapkan sistem otomasi pergudangan (Automated Guided Vehicles / AGV) untuk memindahkan material antar-stasiun kerja."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 135,
    "code": "9.1.4",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.1 Penanganan Manual & Mekanis",
    "clauseText": "Terdapat prosedur untuk penanganan bahan meliputi metode pencegahan terhadap kerusakan, tumpahan dan/atau kebocoran.",
    "interpretation": "Perusahaan harus memiliki SOP penanganan bahan kimia dan material cair/gas yang mencakup penyediaan secondary containment (bund wall/bak penampung ceceran), spill kit, dan metode pembersihan cepat.",
    "expectedEvidence": "SOP Penanganan Tumpahan dan Kebocoran Bahan (Spill Response SOP), ketersediaan Spill Kit lengkap di area penyimpanan bahan cair, bak penampung (drip tray / bunding).",
    "conditions": {
      "compliant": "Tersedia prosedur dan sarana pencegahan serta penanggulangan tumpahan bahan yang lengkap, siap pakai, dan dipahami oleh operator.",
      "critical": "Bahan kimia beracun cair bocor masif mengalir ke saluran drainase umum pemukiman tanpa ada upaya penanganan dan tanpa penahan ceceran.",
      "major": "Bahan kimia berbahaya disimpan dalam drum tanpa bak penampung (bund wall) dan tidak tersedia spill kit sama sekali di area penyimpanan.",
      "minor": "Spill kit tersedia lengkap namun serbuk penyerap (absorbent) yang terpakai pada insiden kecil kemarin belum diisi ulang secara penuh.",
      "ofi": "Menyediakan spill pallet polyethylene khusus yang memiliki kapasitas tampung mandiri 110% dari volume drum terbesar."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 136,
    "code": "9.2.1",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.2 Pengangkutan, Penyimpanan & Pembuangan",
    "clauseText": "Terdapat prosedur yang menjamin bahwa bahan disimpan dan dipindahkan dengan cara yang aman sesuai dengan peraturan perundang-undangan.",
    "interpretation": "SOP pergudangan harus mengatur penataan material: batas tinggi tumpukan, jarak bebas dari dinding dan sprinkler, pemisahan material tidak kompatibel, jalur lalu lintas forklift dan pejalan kaki.",
    "expectedEvidence": "SOP Penyimpanan dan Pemindahan Material Gudang, marka jalur jalan kaki (walkway) dan jalur forklift di lantai gudang, penataan palet rapi dan terkunci.",
    "conditions": {
      "compliant": "Material disimpan teratur sesuai standar kapasitas beban rak (racking load capacity), dipindahkan aman, dan jalur evakuasi gudang bebas halangan.",
      "critical": "Menumpuk material curah berat setinggi 8 meter tanpa pengikat di dekat meja kerja operator hingga tumpukan roboh dan mengubur pekerja.",
      "major": "Gudang material sangat berantakan, tumpukan barang miring dan menghalangi panel listrik serta peralatan pemadam kebakaran.",
      "minor": "Marka jalur pejalan kaki di lantai gudang mulai pudar sebagian dan belum dicat ulang sesuai jadwal pemeliharaan.",
      "ofi": "Menerapkan Warehouse Management System (WMS) dengan sensor pemindai ketinggian tumpukan otomatis untuk mencegah kelebihan beban pada rak susun."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 137,
    "code": "9.2.2",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.2 Pengangkutan, Penyimpanan & Pembuangan",
    "clauseText": "Terdapat prosedur yang menjelaskan persyaratan pengendalian bahan yang dapat rusak atau kadaluarsa.",
    "interpretation": "Bahan yang memiliki masa kedaluwarsa (misal resin, zat kimia mudah terdegradasi, gas medis, semen) harus dikelola dengan sistem First In First Out (FIFO) dan diinspeksi rutin sebelum membusuk/mengeras atau menjadi tidak stabil.",
    "expectedEvidence": "SOP Pengendalian Bahan Mudah Rusak / Kedaluwarsa, label tanggal kedaluwarsa pada kemasan bahan, catatan inspeksi stok berkala (Stock Card with Expiry Date).",
    "conditions": {
      "compliant": "Bahan kedaluwarsa teridentifikasi, terkontrol dengan sistem FIFO/FEFO, dan bahan yang tidak layak segera diisolasi dari penggunaan proses.",
      "critical": "Bahan kimia yang telah lewat masa kedaluwarsa menjadi sangat tidak stabil dan meledak sendiri saat dipindahkan oleh pekerja di dalam gudang.",
      "major": "Bahan kimia kedaluwarsa yang berbahaya dan beracun dibiarkan menumpuk bertahun-tahun di gudang tanpa kendali dan tanpa inventarisasi.",
      "minor": "Sistem FIFO berjalan namun beberapa kemasan bahan kimia sekunder belum ditempeli label tanggal penerimaan barang.",
      "ofi": "Menerapkan sistem peringatan kedaluwarsa otomatis (auto-expiry alert) dalam database persediaan 30 hari sebelum bahan mencapai tanggal batas pakai."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 138,
    "code": "9.2.3",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.2 Pengangkutan, Penyimpanan & Pembuangan",
    "clauseText": "Terdapat prosedur yang menjamin bahwa bahan dibuang dengan cara yang aman sesuai dengan peraturan perundang-undangan.",
    "interpretation": "Pembuangan limbah (khususnya Limbah B3) wajib memiliki SOP yang memenuhi regulasi lingkungan hidup dan keselamatan kerja (PP 22/2021), memiliki izin TPS Limbah B3, dan dikerjasamakan dengan pihak berizin.",
    "expectedEvidence": "SOP Pengelolaan dan Pembuangan Limbah B3 & Non-B3, Izin Tempat Penyimpanan Sementara (TPS) Limbah B3 yang sah, MoU dengan pengolah limbah B3 berizin KLHK, manifes limbah elektronik (Festronik).",
    "conditions": {
      "compliant": "Pembuangan limbah dilakukan secara legal, aman, tercatat dalam manifes resmi, dan disimpan di TPS Limbah B3 yang memenuhi persyaratan teknis.",
      "critical": "Membuang limbah B3 asam pekat/sianida secara ilegal ke selokan umum secara sengaja hingga meracuni masyarakat sekitar.",
      "major": "Limbah B3 dibuang sembarangan di pekarangan pabrik atau dibakar terbuka tanpa izin resmi pemerintah.",
      "minor": "TPS Limbah B3 memiliki izin lengkap namun pencatatan log book neraca limbah B3 terlambat diisi 1 pekan.",
      "ofi": "Menerapkan program 'Zero Waste to Landfill' dengan mengolah kembali limbah non-B3 menjadi produk daur ulang yang bermanfaat."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 139,
    "code": "9.3.1",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.3 Bahan Kimia Berbahaya (BKB)",
    "clauseText": "Perusahaan telah mendokumentasikan dan menerapkan prosedur mengenai penyimpanan, penanganan dan pemindahan BKB sesuai dengan persyaratan peraturan perundang-undangan, standar dan pedoman teknis yang relevan.",
    "interpretation": "Sesuai Kepmenaker No. KEP.187/MEN/1999 tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja, perusahaan wajib memiliki SOP teknis penanganan BKB, fasilitas tanggap darurat BKB (eyewash, shower), dan penetapan potensi bahaya besar/menengah.",
    "expectedEvidence": "SOP Pengelolaan Bahan Kimia Berbahaya (BKB), Dokumen Penetapan Potensi Bahaya Bahan Kimia dari Disnaker, ketersediaan eye wash dan safety shower yang berfungsi baik.",
    "conditions": {
      "compliant": "Prosedur penyimpanan, penanganan, dan pemindahan BKB terdokumentasi lengkap dan diterapkan sesuai standar teknis keselamatan kimia.",
      "critical": "Menyimpan bahan kimia reaktif yang tidak kompatibel (misal asam kuat berdampingan dengan basa kuat atau oksidator dengan bahan mudah terbakar) tanpa sekat pemisah hingga memicu kebakaran hebat.",
      "major": "Perusahaan menggunakan ribuan ton bahan kimia berbahaya tanpa prosedur penanganan keselamatan dan tanpa fasilitas darurat eye wash.",
      "minor": "Prosedur penanganan BKB ada namun pengujian debit air safety shower di area gudang kimia baru dicatat 2 minggu sekali (seharusnya mingguan).",
      "ofi": "Membuat lemari penyimpanan bahan kimia tahan api (Flammable Safety Storage Cabinet) berstandar FM/NFPA untuk seluruh laboratorium uji."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 140,
    "code": "9.3.2",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.3 Bahan Kimia Berbahaya (BKB)",
    "clauseText": "Terdapat Lembar Data Keselamatan BKB (Material Safety Data Sheets) meliputi keterangan mengenai keselamatan bahan sebagaimana diatur pada peraturan perundang-undangan dan dengan mudah dapat diperoleh.",
    "interpretation": "Lembar Data Keselamatan Bahan (LDKB / MSDS / SDS 16 Bagian GHS) berbahasa Indonesia harus tersedia di setiap lokasi penyimpanan dan pemakaian bahan kimia, serta mudah dijangkau operator.",
    "expectedEvidence": "Dokumen MSDS/LDKB 16 bagian dalam Bahasa Indonesia untuk setiap jenis bahan kimia yang digunakan, map binder LDKB di dekat rak bahan kimia.",
    "conditions": {
      "compliant": "LDKB mutakhir berbahasa Indonesia tersedia lengkap untuk seluruh bahan kimia di tempat kerja dan diletakkan di lokasi yang mudah diakses pekerja.",
      "critical": "Bekerja dengan gas mematikan tanpa ada LDKB dan tanpa informasi pertolongan pertama saat terjadi keracunan akut.",
      "major": "Tidak tersedia LDKB/MSDS sama sekali di area pemakaian bahan kimia berbahaya beracun.",
      "minor": "LDKB tersedia lengkap namun sebagian masih menggunakan bahasa asing (Bahasa Inggris) belum diterjemahkan ke Bahasa Indonesia.",
      "ofi": "Menyediakan barcode QR pada setiap jerigen/tangki kimia yang jika dipindai langsung menampilkan lembar LDKB digital di layar ponsel pekerja."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 141,
    "code": "9.3.3",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.3 Bahan Kimia Berbahaya (BKB)",
    "clauseText": "Terdapat sistem untuk mengidentifikasi dan pemberian label secara jelas pada bahan kimia berbahaya.",
    "interpretation": "Seluruh wadah bahan kimia (tangki, drum, jerigen, botol semprot sekunder) wajib diberi label bahaya standar Globally Harmonized System (GHS) yang memuat piktogram, kata sinyal, pernyataan bahaya, dan tindakan pencegahan.",
    "expectedEvidence": "Label piktogram bahaya GHS terpasang jelas pada setiap kemasan bahan kimia, identitas nama bahan pada wadah sekunder (secondary container labeling).",
    "conditions": {
      "compliant": "Seluruh wadah bahan kimia terpasang label identitas dan piktogram bahaya GHS secara permanen, jelas terbaca, dan tidak ada wadah polos tanpa nama.",
      "critical": "Bahan kimia korosif pekat dimasukkan ke dalam botol bekas air minum tanpa label sehingga terminum oleh pekerja lain dan menyebabkan kematian.",
      "major": "Bahan kimia berbahaya dalam jumlah banyak disimpan dalam wadah-wadah polos tanpa ada label identitas dan tanpa piktogram bahaya sama sekali.",
      "minor": "Sebagian besar wadah berlabel rapi, namun ditemukan 1 botol semprot pelarut di workshop yang labelnya mulai terkelupas.",
      "ofi": "Menyediakan mesin pencetak label GHS mandiri (GHS Label Printer) di bagian receiving gudang kimia untuk pelabelan instan wadah sekunder."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 142,
    "code": "9.3.4",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.3 Bahan Kimia Berbahaya (BKB)",
    "clauseText": "Rambu peringatan bahaya terpasang sesuai dengan persyaratan peraturan perundang-undangan dan/atau standar yang relevan.",
    "interpretation": "Di area penyimpanan dan penggunaan BKB harus terpasang rambu peringatan bahaya spesifik (misal Rambu Bahan Mudah Terbakar, Rambu Racun, Rambu Korosif, NFPA Diamond 704, Dilarang Merokok/Nyalakan Api).",
    "expectedEvidence": "Pemasangan rambu peringatan bahaya kimia standar NFPA 704 / GHS di pintu masuk gudang BKB, rambu larangan merokok dan larangan membawa korek api.",
    "conditions": {
      "compliant": "Rambu peringatan bahaya kimia terpasang jelas di perimeter area penyimpanan BKB, sesuai standar perundangan, dan terlihat dari jarak aman.",
      "critical": "Tidak memasang tanda bahaya gas mudah meledak di stasiun pengisian gas sehingga ada pihak yang melakukan pekerjaan panas dan memicu ledakan maut.",
      "major": "Gudang bahan kimia berbahaya tidak memiliki rambu peringatan bahaya sama sekali di pintu masuk maupun di dalam area.",
      "minor": "Rambu peringatan bahaya kimia terpasang namun plakat NFPA 704 belum mencantumkan angka peringkat bahaya reaktivitas bahan.",
      "ofi": "Memasang rambu peringatan bahaya kimia digital beriluminasi yang dapat berubah warna jika sensor gas mendeteksi peningkatan uap kimia di udara."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 143,
    "code": "9.3.5",
    "elementNum": 9,
    "elementName": "Elemen 9: Pengelolaan Material dan Perpindahannya",
    "subElementName": "9.3 Bahan Kimia Berbahaya (BKB)",
    "clauseText": "Penanganan BKB dilakukan oleh petugas yang berkompeten dan berwenang.",
    "interpretation": "Sesuai Kepmenaker 187/1999, perusahaan yang menggunakan/menyimpan BKB wajib memiliki personil Petugas K3 Kimia dan/atau Ahli K3 Kimia yang memiliki lisensi sah dari Kemnaker RI.",
    "expectedEvidence": "Lisensi dan SKP Petugas K3 Kimia / Ahli K3 Kimia dari Kemnaker RI yang masih berlaku, catatan penugasan pengawasan penanganan bahan kimia berbahaya.",
    "conditions": {
      "compliant": "Perusahaan memiliki Petugas K3 Kimia / Ahli K3 Kimia berlisensi resmi Kemnaker yang bertugas mengawasi operasional penanganan bahan kimia.",
      "critical": "Menginstruksikan pekerja tanpa pelatihan keselamatan kimia untuk mencampur bahan kimia berbahaya hingga terjadi reaksi hebat dan korban tewas.",
      "major": "Perusahaan berkategori potensi bahaya besar/menengah tidak memiliki Petugas atau Ahli K3 Kimia bersertifikat sama sekali.",
      "minor": "Petugas K3 Kimia telah memiliki sertifikat kompetensi namun SKP perpanjangan dari kementerian masih dalam proses verifikasi dinas.",
      "ofi": "Mengikutsertakan operator gudang kimia dalam pelatihan bersertifikasi internasional Hazmat First Responder Operational (FRO)."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 144,
    "code": "10.1.1",
    "elementNum": 10,
    "elementName": "Elemen 10: Pengumpulan dan Penggunaan Data",
    "subElementName": "10.1 Catatan K3",
    "clauseText": "Pengusaha atau pengurus telah mendokumentasikan dan menerapkan prosedur pelaksanaan identifikasi, pengumpulan, pengarsipan, pemeliharaan, penyimpanan dan penggantian catatan K3.",
    "interpretation": "Perusahaan harus memiliki prosedur terdokumentasi (SOP Pengendalian Rekaman K3) yang menetapkan masa simpan (retention period), cara penyimpanan aman, dan tata cara pemusnahan catatan keselamatan.",
    "expectedEvidence": "SOP Pengendalian Rekaman / Catatan K3, Daftar Induk Catatan K3 (Masterlist of Records) lengkap dengan masa retensi dokumen, ruang/folder penyimpanan teratur.",
    "conditions": {
      "compliant": "Tersedia prosedur dan sistem pengelolaan arsip rekaman K3 yang rapi, tertelusur, dan disimpan sesuai masa retensi yang ditetapkan undang-undang.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Catatan keselamatan kerja dibuang sembarangan atau hilang total sehingga perusahaan tidak memiliki bukti kepatuhan hukum apapun.",
      "minor": "Prosedur pengendalian rekaman ada namun masa retensi untuk formulir inspeksi harian belum ditentukan secara tegas dalam tabel masterlist.",
      "ofi": "Menerapkan sistem pengarsipan cloud terenkripsi otomatis dengan retensi digital yang menghapus file kedaluwarsa secara otomatis sesuai jadwal."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 145,
    "code": "10.1.2",
    "elementNum": 10,
    "elementName": "Elemen 10: Pengumpulan dan Penggunaan Data",
    "subElementName": "10.1 Catatan K3",
    "clauseText": "Peraturan perundang-undangan, standar dan pedoman teknis K3 yang relevan dipelihara pada tempat yang mudah didapat.",
    "interpretation": "Salinan peraturan perundangan K3 (UU 1/1970, PP 50/2012, Permenaker terkait) dan standar teknis (SNI, NFPA) harus dikompilasi dalam bentuk fisik atau digital dan mudah diakses oleh personil K3.",
    "expectedEvidence": "Buku kompilasi peraturan K3 / folder softcopy regulasi K3 di komputer jaringan, daftar regulasi K3 yang aktif dipelihara.",
    "conditions": {
      "compliant": "Seluruh peraturan perundangan K3 yang relevan terpelihara mutakhir dan dapat diakses dengan cepat oleh staf operasional.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak memiliki dan tidak memelihara dokumen peraturan perundang-undangan K3 apapun sebagai rujukan keselamatan.",
      "minor": "Kompilasi regulasi tersedia namun beberapa peraturan menteri terbaru belum diunduh dan dimasukkan ke dalam folder rujukan.",
      "ofi": "Menyediakan e-Library regulasi K3 pada portal intranet dengan fitur pencarian pasal instan untuk mempermudah telaah hukum."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 146,
    "code": "10.1.3",
    "elementNum": 10,
    "elementName": "Elemen 10: Pengumpulan dan Penggunaan Data",
    "subElementName": "10.1 Catatan K3",
    "clauseText": "Terdapat prosedur yang menentukan persyaratan untuk menjaga kerahasiaan catatan.",
    "interpretation": "Catatan medis (MCU), riwayat kesehatan pribadi, dan data investigasi tertentu bersifat rahasia (confidential) dan wajib dilindungi dari akses pihak yang tidak berhak.",
    "expectedEvidence": "SOP Kerahasiaan Data Medis dan Catatan K3, ruang arsip rekam medis terkunci dengan akses terbatas hanya untuk dokter/paramedis, password proteksi file digital.",
    "conditions": {
      "compliant": "Tersedia prosedur dan sistem keamanan fisik serta digital yang menjamin kerahasiaan rekam medis pekerja terjaga secara ketat.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Data riwayat penyakit pribadi pekerja dibocorkan secara terbuka di tempat kerja hingga menimbulkan diskriminasi parah.",
      "minor": "Lemari arsip rekam medis terkunci namun kunci cadangan belum disimpan dalam kotak brankas terpisah.",
      "ofi": "Menerapkan enkripsi data AES-256 pada seluruh database rekam medis digital dengan autentikasi dua faktor (2FA) bagi dokter pemeriksa."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 147,
    "code": "10.1.4",
    "elementNum": 10,
    "elementName": "Elemen 10: Pengumpulan dan Penggunaan Data",
    "subElementName": "10.1 Catatan K3",
    "clauseText": "Catatan kompensasi kecelakaan dan rehabilitasi kesehatan tenaga kerja dipelihara.",
    "interpretation": "Arsip klaim Jaminan Kecelakaan Kerja (JKK) BPJS Ketenagakerjaan, bukti pembayaran santunan, dan program pemulihan kembali bekerja (Return to Work) harus dipelihara dengan tertib.",
    "expectedEvidence": "Berkas klaim JKK BPJS Ketenagakerjaan (Formulir Tahap I dan Tahap II), bukti pembayaran kompensasi kecelakaan, catatan program rehabilitasi/kembali bekerja.",
    "conditions": {
      "compliant": "Seluruh berkas klaim santunan kecelakaan kerja dan catatan rehabilitasi pekerja dipelihara lengkap dan teratur.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak mendaftarkan pekerja ke jaminan kecelakaan kerja dan menggelapkan hak kompensasi pekerja yang cacat akibat kecelakaan kerja.",
      "minor": "Berkas klaim BPJS ada namun bukti tanda terima pembayaran santunan ke rekening pekerja belum digabungkan dalam map kasus insiden.",
      "ofi": "Menjalin kemitraan formal dengan Pusat Layanan Kecelakaan Kerja (PLKK) BPJS Ketenagakerjaan untuk mempercepat proses rehabilitasi pekerja."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 148,
    "code": "10.2.1",
    "elementNum": 10,
    "elementName": "Elemen 10: Pengumpulan dan Penggunaan Data",
    "subElementName": "10.2 Data & Laporan K3",
    "clauseText": "Data K3 yang terbaru dikumpulkan dan dianalisa.",
    "interpretation": "Perusahaan harus mengumpulkan data statistik keselamatan (Jam Kerja Selamat, Lost Time Injury, Frequency Rate, Severity Rate, Incident Rate) dan menganalisis tren kinerja keselamatannya.",
    "expectedEvidence": "Laporan Statistik K3 Bulanan/Tahunan yang memuat perhitungan Frequency Rate (FR) dan Severity Rate (SR) sesuai standar Kepmenaker 607/1989, grafik tren insiden.",
    "conditions": {
      "compliant": "Data kinerja K3 dihitung rutin setiap bulan menggunakan rumus standar nasional, dianalisis tren pemicunya, dan dilaporkan ke manajemen.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Data kecelakaan kerja dimanipulasi secara sengaja atau tidak pernah dikumpulkan dan tidak pernah dihitung statistiknya.",
      "minor": "Data FR dan SR dihitung setiap bulan namun rumus perhitungan jam kerja orang (manhours) belum memasukkan data lembur pekerja kontraktor rutin.",
      "ofi": "Menerapkan dashboard visual Business Intelligence (BI) K3 yang menampilkan grafik analisis leading dan lagging indicator secara real-time."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 149,
    "code": "10.2.2",
    "elementNum": 10,
    "elementName": "Elemen 10: Pengumpulan dan Penggunaan Data",
    "subElementName": "10.2 Data & Laporan K3",
    "clauseText": "Laporan rutin kinerja K3 dibuat dan disebarluaskan di dalam tempat kerja.",
    "interpretation": "Laporan kinerja keselamatan kerja (papan jam kerja selamat, buletin bulanan) harus dipublikasikan agar seluruh pekerja mengetahui capaian dan tantangan keselamatan bersama.",
    "expectedEvidence": "Papan Rekor Keselamatan (Safety Signboard: Jam Kerja Selamat, Hari Tanpa Kecelakaan) di pintu gerbang pabrik, buletin kinerja K3 bulanan di mading.",
    "conditions": {
      "compliant": "Informasi kinerja keselamatan kerja secara transparan dipublikasikan di tempat kerja dan diperbarui secara berkala.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Kinerja K3 dirahasiakan rapat-rapat oleh manajemen sehingga pekerja tidak mengetahui bahwa lingkungan kerjanya memiliki tren kecelakaan fatal.",
      "minor": "Papan jam kerja selamat terpajang di pintu masuk namun angka kumulatif jam kerja selamat belum dimutakhirkan pada awal bulan berjalan.",
      "ofi": "Memasang display running text LED digital di area publik perusahaan yang menampilkan hitungan jam kerja selamat secara otomatis."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 150,
    "code": "11.1.1",
    "elementNum": 11,
    "elementName": "Elemen 11: Pemeriksaan Sistem Manajemen K3",
    "subElementName": "11.1 Audit Internal SMK3",
    "clauseText": "Audit internal SMK3 yang terjadwal dilaksanakan untuk memeriksa kesesuaian kegiatan perencanaan dan untuk menentukan efektivitas kegiatan tersebut.",
    "interpretation": "Perusahaan wajib melaksanakan Audit Internal SMK3 secara terjadwal (minimal 1 tahun sekali) mencakup seluruh elemen PP 50/2012 untuk menguji kepatuhan dan efektivitas sistem.",
    "expectedEvidence": "Program dan Jadwal Audit Internal SMK3 Tahunan, Surat Tugas Audit Internal, Dokumen Rencana Audit (Audit Plan), lembar checklist audit internal terisi.",
    "conditions": {
      "compliant": "Audit Internal SMK3 diselenggarakan teratur sesuai jadwal tahunan, mencakup seluruh elemen kriteria, dan mengevaluasi efektivitas sistem secara obyektif.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak pernah menyelenggarakan audit internal SMK3 sama sekali dalam periode siklus sertifikasi yang sedang berjalan.",
      "minor": "Audit internal telah dilaksanakan namun jadwal pelaksanaannya mundur 1 bulan dari jadwal tahunan yang direncanakan.",
      "ofi": "Menerapkan program audit silang (cross-audit) antarcabang perusahaan untuk meningkatkan independensi dan berbagi praktik terbaik keselamatan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 151,
    "code": "11.1.2",
    "elementNum": 11,
    "elementName": "Elemen 11: Pemeriksaan Sistem Manajemen K3",
    "subElementName": "11.1 Audit Internal SMK3",
    "clauseText": "Audit internal SMK3 dilakukan oleh petugas yang berkompeten dan berwenang.",
    "interpretation": "Auditor internal SMK3 harus independen dari area yang diaudit dan memiliki sertifikat kompetensi pelatihan Auditor Internal SMK3 PP 50/2012 atau Auditor ISO 45001.",
    "expectedEvidence": "Sertifikat Pelatihan Auditor Internal SMK3 PP 50/2012 para auditor, SK Penunjukan Tim Auditor Internal dari Direksi, bukti independensi (auditor tidak mengaudit departemennya sendiri).",
    "conditions": {
      "compliant": "Tim auditor internal telah memiliki sertifikasi kompetensi auditor SMK3 resmi dan memegang prinsip independensi obyektif saat mengaudit.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Audit internal dilakukan oleh personil yang tidak memiliki pelatihan audit sama sekali atau mengaudit departemennya sendiri secara tidak independen.",
      "minor": "Auditor memiliki sertifikat pelatihan ISO 45001 namun pembekalan khusus mengenai klausul 166 kriteria PP 50/2012 baru diselenggarakan secara internal.",
      "ofi": "Mendaftarkan auditor internal senior ke jenjang sertifikasi Auditor Eksternal SMK3 Kemnaker RI untuk meningkatkan kedalaman audit."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 152,
    "code": "11.1.3",
    "elementNum": 11,
    "elementName": "Elemen 11: Pemeriksaan Sistem Manajemen K3",
    "subElementName": "11.1 Audit Internal SMK3",
    "clauseText": "Laporan audit didistribusikan kepada pengusaha atau pengurus dan petugas lain yang berkepentingan dan dipantau untuk menjamin dilakukannya tindakan perbaikan.",
    "interpretation": "Laporan hasil audit internal (Laporan Temuan Ketidaksesuaian / CAR) harus diserahkan kepada Direksi, dibahas dalam Rapat Tinjauan Manajemen, dan dipantau hingga seluruh tindakan perbaikan selesai (closed).",
    "expectedEvidence": "Dokumen Laporan Akhir Audit Internal SMK3, lembar Corrective Action Request (CAR), bukti distribusi laporan ke Direksi/Pengurus, log verifikasi penutupan temuan.",
    "conditions": {
      "compliant": "Laporan audit didistribusikan resmi kepada pengurus dan seluruh temuan ketidaksesuaian dipantau perbaikannya hingga diverifikasi tuntas.",
      "critical": "Temuan audit internal mengenai bahaya ledakan boiler diabaikan total tanpa tindakan perbaikan hingga beberapa bulan kemudian boiler meledak fatal.",
      "major": "Laporan audit internal tidak pernah diserahkan ke pengurus dan seluruh temuan ketidaksesuaian dibiarkan tanpa ada tindakan perbaikan apapun.",
      "minor": "Tindakan perbaikan temuan audit telah selesai di lapangan namun laporan status penutupan temuan belum ditandatangani oleh Lead Auditor.",
      "ofi": "Membuat dashboard pemantauan temuan audit terpusat berbasis web yang memberikan peringatan eskalasi jika tindakan korektif melewati batas waktu."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 153,
    "code": "12.1.1",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.1 Strategi Pelatihan",
    "clauseText": "Analisis kebutuhan pelatihan K3 sesuai persyaratan peraturan perundang-undangan telah dilakukan.",
    "interpretation": "Perusahaan wajib menyusun Analisis Kebutuhan Pelatihan K3 (Training Needs Analysis / TNA K3) yang memetakan kebutuhan pelatihan wajib regulasi dan pengendalian bahaya kerja.",
    "expectedEvidence": "Dokumen Training Needs Analysis (TNA) K3 tahunan, matriks pelatihan K3 per jabatan, daftar regulasi pelatihan wajib yang diacu.",
    "conditions": {
      "compliant": "Tersedia TNA K3 yang komprehensif, mengidentifikasi seluruh kebutuhan pelatihan berbasis risiko pekerjaan dan regulasi pemerintah.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Tidak pernah dilakukan analisis kebutuhan pelatihan K3 sama sekali; pelatihan dilakukan acak tanpa dasar analisis risiko.",
      "minor": "TNA K3 telah disusun namun kebutuhan pelatihan untuk karyawan kontrak baru belum dimasukkan ke dalam matriks tahunan.",
      "ofi": "Menerapkan sistem pemetaan kompetensi K3 berbasis digital yang otomatis memunculkan gap kompetensi saat terjadi mutasi atau promosi karyawan."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 154,
    "code": "12.1.2",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.1 Strategi Pelatihan",
    "clauseText": "Rencana pelatihan K3 bagi semua tingkatan telah disusun.",
    "interpretation": "Berdasarkan TNA, disusun Rencana Pelatihan K3 Tahunan (Annual Safety Training Matrix) yang mencakup level direksi, manajer, supervisor, operator, dan staf pendukung.",
    "expectedEvidence": "Jadwal Master Program Pelatihan K3 Tahunan, alokasi anggaran pelatihan K3 yang disetujui direksi, silabus rencana pelatihan per tingkatan.",
    "conditions": {
      "compliant": "Rencana pelatihan K3 tahunan tersedia lengkap, terstruktur mencakup seluruh tingkatan hierarki organisasi, dan memiliki kepastian anggaran.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan tidak memiliki rencana pelatihan K3 tahunan sama sekali.",
      "minor": "Rencana pelatihan K3 ada namun tanggal pelaksanaan beberapa topik pelatihan belum dijadwalkan secara definitif.",
      "ofi": "Menyusun kurikulum berjenjang Safety Leadership Development Program bagi calon-calon pemimpin masa depan di perusahaan."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 155,
    "code": "12.1.3",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.1 Strategi Pelatihan",
    "clauseText": "Jenis pelatihan K3 yang dilakukan harus disesuaikan dengan kebutuhan untuk pengendalian potensi bahaya.",
    "interpretation": "Topik pelatihan yang diberikan harus selaras dengan profil bahaya nyata di lapangan (misal pelatihan confined space untuk area tangki, pelatihan radiasi untuk NDT, pelatihan B3 untuk gudang kimia).",
    "expectedEvidence": "Korelasi antara hasil HIRADC dengan modul pelatihan K3, silabus materi training yang mencakup SOP kerja aman di area bahaya tinggi.",
    "conditions": {
      "compliant": "Materi dan jenis pelatihan K3 terbukti relevan secara langsung dengan pengendalian risiko bahaya tinggi yang ada di tempat kerja.",
      "critical": "Pekerja ditugaskan melakukan pekerjaan bawah air / penyelaman tanpa pernah diberikan pelatihan penyelamatan dan keselamatan menyelam.",
      "major": "Pelatihan K3 yang diselenggarakan hanya bersifat seremonial umum dan tidak pernah menyentuh bahaya teknis kritis yang sering memicu kecelakaan.",
      "minor": "Materi pelatihan telah sesuai dengan bahaya teknis namun studi kasus insiden internal belum disertakan dalam modul presentasi.",
      "ofi": "Menerapkan simulasi pelatihan berbasis Virtual Reality (VR Safety Simulation) untuk pelatihan pekerjaan berisiko tinggi seperti bekerja di ketinggian."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 156,
    "code": "12.1.4",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.1 Strategi Pelatihan",
    "clauseText": "Pelatihan dilakukan oleh orang atau badan yang berkompeten dan berwenang sesuai peraturan perundang-undangan.",
    "interpretation": "Pelatihan sertifikasi wajib lisensi (Ahli K3, Operator Crane, Petugas Damkar) harus diselenggarakan oleh Perusahaan Jasa K3 (PJK3) Bidang Pembinaan yang memiliki SKP resmi Kemnaker RI dan instruktur berlisensi.",
    "expectedEvidence": "SKP PJK3 Bidang Pembinaan K3 dari Kemnaker RI, sertifikat lisensi instruktur pembina K3, sertifikat kelulusan peserta berlogo garuda/Kemnaker.",
    "conditions": {
      "compliant": "Pelatihan berlisensi diselenggarakan oleh lembaga PJK3 yang terdaftar resmi di Kemnaker dengan instruktur yang berkualifikasi legal.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan menggunakan jasa lembaga pelatihan bodong / tidak berizin yang mengeluarkan sertifikat palsu tanpa pelatihan nyata.",
      "minor": "Lembaga PJK3 memiliki izin sah namun salinan surat keputusan penunjukan PJK3 belum diarsipkan di berkas pelatihan HRD.",
      "ofi": "Menjalin kerja sama korporat dengan Balai K3 Kemnaker RI untuk penyelenggaraan program pelatihan sertifikasi vokasi berkala."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 157,
    "code": "12.1.5",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.1 Strategi Pelatihan",
    "clauseText": "Terdapat fasilitas dan sumber daya memadai untuk pelaksanaan pelatihan yang efektif.",
    "interpretation": "Perusahaan harus menyediakan ruang kelas pelatihan, alat peraga praktik (manekin CPR, APAR peraga, scaffolding uji coba, harness simulasi), proyektor, dan anggaran yang cukup.",
    "expectedEvidence": "Ruang training memadai, ketersediaan sarana praktik lapangan (fire ground, tangga simulasi), alat peraga safety, anggaran operasional training.",
    "conditions": {
      "compliant": "Fasilitas dan sarana pelatihan K3 tersedia memadai, nyaman, dan mendukung praktik simulasi keselamatan secara efektif.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Pelatihan K3 dilakukan seadanya di lorong sempit tanpa alat peraga praktik keselamatan sehingga peserta tidak memahami cara pemakaian alat penyelamat.",
      "minor": "Ruang pelatihan tersedia namun alat peraga manekin CPR sedang dalam perbaikan sehingga praktik menggunakan simulator alternatif.",
      "ofi": "Membangun Safety Training Center mandiri (Safety Dojo / Dojang) yang dilengkapi simulator bahaya mekanik, listrik, dan ketinggian."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 158,
    "code": "12.1.6",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.1 Strategi Pelatihan",
    "clauseText": "Pengusaha atau pengurus mendokumentasikan dan menyimpan catatan seluruh pelatihan.",
    "interpretation": "Seluruh berkas pelatihan (daftar hadir, materi presentasi, foto kegiatan, soal pre-test & post-test, evaluasi efektivitas, salinan sertifikat) harus disimpan tertib dalam rekam jejak pelatihan karyawan.",
    "expectedEvidence": "Berkas arsip pelatihan per kegiatan (daftar hadir, pre/post-test, materi), database riwayat pelatihan individu di HRIS/Sistem Informasi Karyawan.",
    "conditions": {
      "compliant": "Dokumentasi seluruh kegiatan pelatihan K3 tersimpan lengkap, sistematis, dan mudah diverifikasi riwayat partisipasi individunya.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Perusahaan mengklaim telah melatih pekerja namun tidak memiliki satu pun catatan, daftar hadir, atau bukti dokumentasi pelatihan yang dapat ditunjukkan.",
      "minor": "Daftar hadir dan foto pelatihan ada lengkap namun lembar evaluasi reaksi pelatihan (feedback form) peserta belum dirangkum.",
      "ofi": "Menerapkan Learning Management System (LMS) digital terpadu yang menyimpan rekaman sertifikat dan masa berlaku pelatihan karyawan secara otomatis."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 159,
    "code": "12.1.7",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.1 Strategi Pelatihan",
    "clauseText": "Program pelatihan ditinjau secara teratur untuk menjamin agar tetap relevan dan efektif.",
    "interpretation": "Evaluasi efektivitas pelatihan (Kirkpatrick Level 1 s/d Level 3: reaksi, pembelajaran, dan perilaku kerja di lapangan) harus dilakukan secara berkala guna memperbarui materi pelatihan.",
    "expectedEvidence": "Formulir Evaluasi Efektivitas Pelatihan K3 (3 bulan pasca training di lapangan), laporan evaluasi program pelatihan tahunan, revisi kurikulum training.",
    "conditions": {
      "compliant": "Program pelatihan ditinjau efektivitasnya secara berkala dengan memantau perubahan perilaku kerja aman dan tren penurunan insiden di lapangan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Program pelatihan yang sama diulang bertahun-tahun tanpa pernah dievaluasi meskipun kecelakaan akibat ketidakpahaman kerja terus meningkat.",
      "minor": "Evaluasi hasil tes pengetahuan (post-test) ada, namun evaluasi perubahan perilaku kerja aman pascatraining oleh atasan langsung belum lengkap.",
      "ofi": "Menerapkan pengukuran Return on Training Investment (ROTI) untuk menghitung efektivitas penurunan biaya kecelakaan pasca program pelatihan."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 160,
    "code": "12.2.1",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.2 Pelatihan Manajemen & Penyelia",
    "clauseText": "Anggota manajemen eksekutif dan pengurus berperan serta dalam pelatihan yang mencakup penjelasan tentang kewajiban hukum dan prinsip-prinsip serta pelaksanaan K3.",
    "interpretation": "Direksi dan pimpinan puncak perusahaan wajib mengikuti pelatihan Safety Leadership / Eksekutif K3 agar memahami tanggung jawab pidana/hukum ketenagakerjaan dan prinsip tata kelola SMK3.",
    "expectedEvidence": "Sertifikat Pelatihan Executive Safety Leadership / Pemahaman K3 bagi Manajemen Puncak, daftar hadir Direksi dalam pelatihan K3 manajemen.",
    "conditions": {
      "compliant": "Jajaran direksi dan manajemen eksekutif terbukti telah mengikuti pelatihan tanggung jawab hukum K3 dan kepemimpinan keselamatan.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Manajemen eksekutif menolak mengikuti pembekalan K3 dan tidak memahami sama sekali tanggung jawab hukum keselamatan kerja yang diembannya.",
      "minor": "Direktur operasional telah mengikuti pelatihan K3 eksekutif namun direktur keuangan berhalangan dan dijadwalkan pada sesi berikutnya.",
      "ofi": "Mengadakan executive coaching berkala mengenai tren regulasi K3 global dan ESG (Environmental, Social, Governance) bersama pakar keselamatan industri."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 161,
    "code": "12.2.2",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.2 Pelatihan Manajemen & Penyelia",
    "clauseText": "Manajer dan pengawas/penyelia menerima pelatihan yang sesuai dengan peran dan tanggung jawab mereka.",
    "interpretation": "Para manajer dan supervisor harus dilatih materi K3 terapan: teknik inspeksi, Job Safety Analysis (JSA), investigasi kecelakaan, komunikasi keselamatan, dan penegakan disiplin K3.",
    "expectedEvidence": "Sertifikat pelatihan K3 bagi Supervisor (Safety for Supervisor / Pengawas Operasional), modul pelatihan peran supervisor dalam SMK3, daftar hadir manajer.",
    "conditions": {
      "compliant": "Seluruh manajer dan supervisor telah menyelesaikan pelatihan K3 yang relevan dengan peran kepemimpinan keselamatan di unit kerjanya.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Pengawas lapangan tidak pernah diberikan pelatihan keselamatan kerja sama sekali sehingga tidak mampu membimbing bawahannya bekerja aman.",
      "minor": "Sebagian besar supervisor telah terlatih, namun 2 orang supervisor baru yang dipromosikan belum sempat diikutsertakan dalam pelatihan pengawas K3.",
      "ofi": "Menyelenggarakan program sertifikasi Pengawas Keselamatan Pertambangan/Industri (POP/Pengawas K3 Pratama BNSP) bagi seluruh lini supervisor."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 162,
    "code": "12.3.1",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.3 Pelatihan Tenaga Kerja",
    "clauseText": "Pelatihan diberikan kepada semua tenaga kerja termasuk tenaga kerja baru dan yang dipindahkan agar mereka dapat melaksanakan tugasnya secara aman.",
    "interpretation": "Setiap karyawan baru (Safety Induction) dan karyawan yang mutasi ke departemen baru (Job Orientation) wajib mendapatkan pelatihan keselamatan kerja sebelum mulai bekerja mandiri.",
    "expectedEvidence": "Formulir Checklist Induksi K3 Karyawan Baru, materi safety induction, catatan orientasi keselamatan mutasi jabatan, daftar hadir induksi K3.",
    "conditions": {
      "compliant": "Seluruh tenaga kerja baru dan karyawan mutasi telah menjalani induksi K3 dan orientasi bahaya kerja spesifik sebelum diizinkan bertugas.",
      "critical": "Mempekerjakan tenaga kerja baru di stasiun kerja berbahaya (mesin press/pemotong) tanpa induksi dan tanpa pengenalan bahaya hingga pekerja kehilangan tangan.",
      "major": "Perusahaan langsung menempatkan karyawan baru ke lantai pabrik tanpa pernah memberikan pembekalan induksi keselamatan kerja sama sekali.",
      "minor": "Karyawan baru telah diinduksi K3 secara lisan namun lembar formulir komitmen pemahaman induksi belum ditandatangani pekerja.",
      "ofi": "Menerapkan modul safety induction interaktif berbasis digital learning/e-learning dengan kuis otomatis yang wajib lulus sebelum pembuatan ID Card kerja."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 163,
    "code": "12.3.2",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.3 Pelatihan Tenaga Kerja",
    "clauseText": "Pelatihan diberikan kepada tenaga kerja apabila di tempat kerjanya terjadi perubahan sarana produksi atau proses.",
    "interpretation": "Jika ada mesin baru, modifikasi alur proses, atau bahan kimia baru (Management of Change), operator terkait wajib dilatih ulang tentang bahaya baru dan SOP revisi.",
    "expectedEvidence": "Daftar hadir pelatihan operasional mesin baru, rekaman sosialisasi SOP revisi pasca modifikasi proses, evaluasi kompetensi operator mesin baru.",
    "conditions": {
      "compliant": "Tenaga kerja mendapatkan pelatihan penyegaran teknis secara memadai setiap kali terjadi pembaruan sarana produksi atau proses kerja.",
      "critical": "Mesin produksi baru berkecepatan tinggi dioperasikan oleh pekerja tanpa pelatihan pengoperasian aman hingga memicu kecelakaan fatal.",
      "major": "Perubahan proses kerja kimiawi diterapkan tanpa pernah melatih operator tentang bahaya baru yang timbul dari perubahan tersebut.",
      "minor": "Pelatihan perubahan mesin telah diberikan secara informal oleh teknisi vendor namun modul pelatihan tertulis belum didokumentasikan di folder K3.",
      "ofi": "Menyusun video tutorial mikro (micro-learning video) berdurasi 3 menit mengenai aspek keselamatan setiap mesin baru yang dapat diakses di ponsel pekerja."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 164,
    "code": "12.3.3",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.3 Pelatihan Tenaga Kerja",
    "clauseText": "Pengusaha atau pengurus memberikan pelatihan penyegaran kepada semua tenaga kerja.",
    "interpretation": "Perusahaan wajib menyelenggarakan pelatihan penyegaran K3 (Refresher Training / Tool Box Meeting / Safety Campaign) secara periodik untuk mencegah kejenuhan dan penurunan disiplin keselamatan.",
    "expectedEvidence": "Jadwal dan absensi Safety Talk / Toolbox Meeting mingguan, rekaman pelatihan penyegaran K3 tahunan (Annual HSE Refresher Training), foto kegiatan.",
    "conditions": {
      "compliant": "Pelatihan penyegaran K3 diselenggarakan secara berkesinambungan dan mencakup seluruh tenaga kerja lama secara merata.",
      "critical": "Tidak berlaku langsung secara mandiri.",
      "major": "Pekerja lama tidak pernah mendapatkan pelatihan penyegaran K3 selama lebih dari 5 tahun sehingga budaya keselamatan kerja memudar total.",
      "minor": "Refresher training berjalan rutin lewat safety talk namun pencatatan topik materi mingguan belum diarsipkan secara tertib.",
      "ofi": "Menyelenggarakan 'Bulan K3 Nasional' dengan beragam lomba cerdas cermat K3 dan simulasi keselamatan berhadiah untuk menyegarkan antusiasme pekerja."
    },
    "tiers": {
      "awal": false,
      "transisi": false,
      "lanjutan": true
    }
  },
  {
    "no": 165,
    "code": "12.4.1",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.4 Pelatihan Pengunjung & Kontraktor",
    "clauseText": "Terdapat prosedur yang menetapkan persyaratan untuk memberikan taklimat (briefing) kepada pengunjung dan mitra kerja guna menjamin K3.",
    "interpretation": "Setiap tamu, pengemudi ekspedisi, visitor, dan pekerja kontraktor yang memasuki tempat kerja wajib mendapatkan taklimat/induksi keselamatan (Safety Induction for Visitor & Contractor) mengenai aturan area, APD wajib, dan prosedur evakuasi darurat.",
    "expectedEvidence": "SOP Induksi K3 Tamu dan Kontraktor, video safety induction tamu di lobi pos sekuriti, kartu visitor safety pass, buku tamu bertanda tangan pemahaman safety induction.",
    "conditions": {
      "compliant": "Prosedur taklimat K3 dijalankan ketat; tidak ada tamu atau kontraktor yang diizinkan masuk area operasional tanpa melalui safety briefing dan pemakaian APD standar.",
      "critical": "Tamu penting diajak berkeliling ke area reaktor kimia berbahaya tanpa helm dan tanpa taklimat darurat, lalu terjadi semburan gas beracun yang melukai tamu.",
      "major": "Kontraktor dan tamu dibiarkan berkeliaran bebas di dalam pabrik berisiko tinggi tanpa pernah diberikan safety briefing sama sekali.",
      "minor": "Taklimat K3 diberikan lisan oleh resepsionis namun kartu komitmen pemahaman aturan keselamatan tamu belum ditandatangani.",
      "ofi": "Menerapkan Kiosk Registrasi Tamu Mandiri (Visitor Self-Induction Kiosk) berbasis layar sentuh dengan video 2 menit dan kuis kepatuhan APD."
    },
    "tiers": {
      "awal": false,
      "transisi": true,
      "lanjutan": true
    }
  },
  {
    "no": 166,
    "code": "12.5.1",
    "elementNum": 12,
    "elementName": "Elemen 12: Pengembangan Keterampilan dan Kemampuan",
    "subElementName": "12.5 Pelatihan Keahlian Khusus",
    "clauseText": "Perusahaan mempunyai sistem untuk menjamin kepatuhan terhadap persyaratan lisensi atau kualifikasi sesuai dengan peraturan perundang-undangan untuk melaksanakan tugas khusus, melaksanakan pekerjaan atau mengoperasikan peralatan.",
    "interpretation": "Perusahaan harus memiliki sistem pemantauan matriks lisensi (License Compliance & Tracking Matrix) yang memantau validitas SIO/SKP seluruh personil khusus (Operator Forklift, Crane, Boiler, Welder, Scaffolder, Rigger, Petugas Ruang Terbatas, Ahli K3 Kimia/Listrik/Kebakaran) dan menjamin re-sertifikasi sebelum kedaluwarsa.",
    "expectedEvidence": "Matriks Lisensi K3 Personil Khusus (SIO/SKP Monitoring Database), arsip sertifikat dan lisensi Kemnaker seluruh operator khusus, jadwal perpanjangan lisensi berkala.",
    "conditions": {
      "compliant": "Tersedia sistem manajemen lisensi yang menjamin 100% personil tugas khusus memiliki lisensi dan kualifikasi sah yang aktif sesuai ketentuan peraturan perundang-undangan.",
      "critical": "Memerintahkan pengoperasian pesawat uap (boiler) kapasitas besar oleh operator yang sama sekali tidak memiliki SIO dan tidak pernah dilatih, memicu ledakan katastropik boiler.",
      "major": "Mayoritas operator alat berat dan teknisi berbahaya beroperasi dengan lisensi (SIO) yang telah mati bertahun-tahun tanpa ada sistem perpanjangan.",
      "minor": "Sistem pemantauan lisensi ada dan seluruh operator berlisensi sah, namun ada 1 berkas perpanjangan SIO yang sedang diajukan ke dinas ketenagakerjaan dan belum keluar kartu fisiknya.",
      "ofi": "Mengintegrasikan database lisensi SIO operator dengan sistem Enterprise Resource Planning (ERP) perusahaan yang otomatis memblokir penugasan kerja pada work order jika lisensi personil kedaluwarsa."
    },
    "tiers": {
      "awal": true,
      "transisi": true,
      "lanjutan": true
    }
  }
];

