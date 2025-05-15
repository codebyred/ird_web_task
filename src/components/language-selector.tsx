"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "En", flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/0864bacceaa6c1d0e44fc9695d8c8c36cf12c87d" },
  { code: "ar", name: "Ar", flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/0864bacceaa6c1d0e44fc9695d8c8c36cf12c87d" },
  { code: "fr", name: "Fr", flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/0864bacceaa6c1d0e44fc9695d8c8c36cf12c87d" },
];

type LanguageSelectorProps = {
  className?: string
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({className}: LanguageSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const arrowIcon = `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[14px]">
    <path d="M11.6408 5.22083L7.83742 9.02417C7.38826 9.47333 6.65326 9.47333 6.20409 9.02417L2.40076 5.22083" stroke="#7C827D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <div className={cn("relative", className)}>
      <button
        className="flex gap-2 justify-center items-center p-2.5 bg-neutral-200 bg-opacity-60 rounded-[30px] w-[92px]"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.name} flag`}
          className="w-[24.545px] h-[18px] rounded-[5px] border-[1px] border-[#FBFFFB]"
        />
        <span className="text-sm text-zinc-800">{selectedLanguage.name}</span>
        <div dangerouslySetInnerHTML={{ __html: arrowIcon }} />
      </button>

      {isOpen && (
        <ul
          className="absolute top-full mt-1 w-[92px] bg-white rounded-md shadow-lg z-10"
          role="listbox"
        >
          {languages.map((language) => (
            <li
              key={language.code}
              className={`flex items-center gap-2 p-2 hover:bg-neutral-100 cursor-pointer ${
                selectedLanguage.code === language.code ? "bg-neutral-200" : ""
              }`}
              role="option"
              aria-selected={selectedLanguage.code === language.code}
              onClick={() => selectLanguage(language)}
            >
              <img
                src={language.flag}
                alt={`${language.name} flag`}
                className="w-[24.545px] h-[18px] rounded-[5px] border-[1px] border-[#FBFFFB]"
              />
              <span className="text-sm text-zinc-800">{language.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
