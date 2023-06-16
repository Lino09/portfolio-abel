import { createContext } from "react";

interface LanguageContextType {
  language: "EN" | "ES";
  setLanguage: (language: "EN" | "ES") => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
});
