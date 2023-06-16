"use client";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import { languages } from "./constants";
import { useContext } from "react";
import { LanguageContext } from "@/utils/LanguageContext";
import Contact from "./Contact";

export default function Home() {
  const { language: lang }: { language: keyof typeof languages } =
    useContext(LanguageContext);
  return (
    <>
      <Header language={languages[lang].headerNavigation} />
      <Hero language={languages[lang].hero} />
      <Services language={languages[lang].servicesCards} />
      <About language={languages[lang].aboutMe} />
      <Contact language={languages[lang].contact} />
    </>
  );
}
