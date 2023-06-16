"use client";

import { LanguageContext } from "@/utils/LanguageContext";
import { useState } from "react";

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
    <html lang="en">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <body>{children}</body>
      </LanguageContext.Provider>
    </html>
  );
}
