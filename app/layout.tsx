"use client"
import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import { LanguageContext } from "@/utils/LanguageContext";
import { useState } from "react";

const bit = Press_Start_2P({ subsets: ["latin"], weight: "400" });

interface LanguageContextType {
  language: "EN" | "ES";
  setLanguage: (language: "EN" | "ES") => void;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] =
    useState<LanguageContextType["language"]>("EN");
  return (
    <html lang="en" className="scroll-smooth cursor-fancy">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <body className={`${bit.className} text-sm`}>{children}</body>
      </LanguageContext.Provider>
    </html>
  );
}
