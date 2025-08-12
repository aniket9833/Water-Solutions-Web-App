import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AquaTech Solutions - Advanced Water & Wastewater Treatment",
  description:
    "Leading provider of water treatment, sewage treatment plants (STP), and industrial water solutions with 5+ years of experience.",
  keywords:
    "water treatment, sewage treatment plant, STP, ETP, WTP, reverse osmosis, industrial water solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
