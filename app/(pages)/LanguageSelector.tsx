import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/utils/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleCheckbox = () => {
    if (language === "EN") setLanguage("ES");
    else setLanguage("EN");
  };

  return (
    <label
      htmlFor="language"
      className="border-bit-purple border-2 rounded-full w-20 h-10 block relative cursor-pointer"
    >
      <input
        onChange={handleCheckbox}
        checked={language === "EN"}
        id="language"
        type="checkbox"
        className=" cursor-pointer appearance-none border bg-bit-purple w-full h-full rounded-full"
      />
      <div
        className={`absolute top-[3px] transform transition-transform flex justify-center items-center 
        ${language === "EN" ? "translate-x-11" : "translate-x-0.5"}`}
      >
        <Image
          src="/circleIcon.svg"
          width={30}
          height={30}
          alt="language selector"
        />
        <span className="absolute text-[10px] select-none">{language}</span>
      </div>
    </label>
  );
};
export default LanguageSelector;
