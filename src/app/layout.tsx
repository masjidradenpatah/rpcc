import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import {  Inter, Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

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
  description: "Raden Patah Creative Canvas 2025 adalah webinar desain grafis yang diselenggarakan oleh Digital Creative Masjid Raden Patah UB.  Kegiatan ini bertujuan memberikan ruang belajar bagi masyarakat umum untuk mengembangkan skill desain yang menarik dan profesional. ",
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
