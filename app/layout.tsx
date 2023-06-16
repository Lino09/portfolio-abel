"use client";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import { LanguageContext } from "@/utils/LanguageContext";
import { Dispatch, SetStateAction, useState } from "react";

const bit = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Abel Herrera | Web Developer",
  description:
    "Web, React, Javascript, Frontend, Node, Developer, Code Instructor",
};

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
