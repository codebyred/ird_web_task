"use client";

import React from "react";
import LanguageSelector from "@/components//language-selector";
import SupportButton from "@/components//support-button";
import SearchIcon from "./icons/search";
import ColorSwatchIcon from "./icons/color-swatch";
import BrandLogo from "./icons/brand";
import Hamburger from "./Hamburger";


type HeaderProps = {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-[1.5rem] py-[0.625rem] w-full border bg-background border-neutral-200 max-md:px-4 max-sm:px-3">
      <div className="flex items-center gap-2">
        <Hamburger className="sm:hidden block"/>
        <BrandLogo />

      </div>

      <nav className="flex gap-4 items-center max-sm:gap-3">
        <div className="hidden sm:flex sm:gap-2">
          <SearchIcon />
          <ColorSwatchIcon />
        </div>
        <LanguageSelector className="hidden sm:block" />
        <SupportButton className="max-sm:hidden" />
      </nav>
    </header>
  );
};


export default Header;







