import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMK3 Gap Analysis Workstation (PP No. 50 Tahun 2012)",
  description: "Workstation Asesmen Kepatuhan & Audit SMK3 PP 50/2012 untuk Auditor Industri. 12 Elemen, 40 Sub-Elemen, 166 Kriteria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full print:h-auto print:overflow-visible">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full print:h-auto overflow-hidden print:overflow-visible bg-[var(--canvas)] print:bg-white text-[var(--ink-900)] antialiased select-auto">
        {children}
      </body>
    </html>
  );
}
