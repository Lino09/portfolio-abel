import Image from "next/image";
import { useState } from "react";

import LanguageSelector from "./LanguageSelector";

const MobileMenu = ({ language }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`w-8 h-1 bg-bit-sky mt-1.5 transform transition-transform ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          } `}
        ></div>
        <div
          className={`w-8 h-1 bg-bit-sky mt-1.5 transform transition-all duration-500 ${
            isOpen ? "w-0" : ""
          } `}
        ></div>
        <div
          className={`w-8 h-1 bg-bit-sky mt-1.5 transform transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          } `}
        ></div>
      </button>
      {isOpen && (
        <nav className="flex gap-4 items-center flex-col absolute right-8 bg-gray-50 border-2 border-black p-4">
          <ul className="flex flex-col items-center gap-4">
            {language.map(({ name, href }: { name: string; href: string }) => {
              const isActive = false;
              //TODO: Add active logic
              return (
                <li
                  key={name}
                  className={`hover:underline ${
                    isActive ? "text-bit-blue" : "text-bit-purple"
                  }`}
                >
                  <a className="p-1 cursor-pointer" href={href}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <LanguageSelector />
        </nav>
      )}
    </div>
  );
};

const Header = ({ language }: any) => {
  return (
    <header className="p-2 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={48} height={74} />
        <span className="text-bit-purple">Abel Herrera</span>
      </div>
      <nav className="gap-8 items-center hidden md:flex">
        <ul className="flex items-center gap-8">
          {language.map(({ name, href }: { name: string; href: string }) => {
            const isActive = false;
            //TODO: Add active logic
            return (
              <li
                key={name}
                className={`hover:underline ${
                  isActive ? "text-bit-blue" : "text-bit-purple"
                }`}
              >
                <a className="p-1 cursor-pointer" href={href}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <LanguageSelector />
      </nav>
      <div className="block md:hidden">
        <MobileMenu language={language} />
      </div>
    </header>
  );
};

export default Header;
