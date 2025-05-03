import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import {  Inter, Big_Shoulders_Display } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bigShouldersDisplay = Big_Shoulders_Display({
  variable: "--font-big-shoulder",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raden Patah Creative Canvas",
  description: "Raden Patah Creative Canvas 2025 adalah webinar desain" +
      " grafis yang diadakan oleh Digital Creative MRP" +
      " UB. RPCC kali ini memiliki tema webinar yang menarik yaitu bagaimana caranya untuk upgrade portofolio desain agar" +
      " menjadi lebih menarik. Para peserta juga mendapatkan sertifikat" +
      " webinar.",
  keywords: ["webinar", "webinar desain grafis", "apa itu webinar", "sertifikat webinar", "contoh desain grafis", "aplikasi desain grafis", "tema webinar menarik"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bigShouldersDisplay.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
