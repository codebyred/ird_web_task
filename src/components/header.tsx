"use client";

import React from "react";
import IconButton from "@/components/icon-button";
import LanguageSelector from "@/components//language-selector";
import SupportButton from "@/components//support-button";


interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-[1.5rem] py-[0.625rem] w-full border bg-background border-neutral-200 max-md:px-4 max-sm:px-3">
      <BrandLogo />
      <nav className="flex gap-4 items-center max-sm:gap-3">
        
        <div className="hidden sm:flex sm:gap-2">
          <SearchIcon />
          <ColorSwatchIcon />
        </div>
        <LanguageSelector />
        <SupportButton className="max-sm:hidden" />
      </nav>
    </header>
  );
};

const BrandLogo: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-start">
      <h1 className="text-zinc-800">
        <span className="text-lg font-bold text-zinc-800 mr-1">Dua</span>
        <span className="text-lg text-primary">&amp;</span>
        <span className="text-lg font-bold text-zinc-800 ml-1">Ruqyah</span>

      </h1>
      <span className="text-xs font-medium text-primary-100 -mt-1">Hisnul Muslim</span>
    </div>
  );
};


export default Header;

function SearchIcon() {
  return (
    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.248047 19C0.248047 8.50659 8.75464 0 19.248 0C29.7415 0 38.248 8.50659 38.248 19C38.248 29.4934 29.7415 38 19.248 38C8.75464 38 0.248047 29.4934 0.248047 19Z" fill="#E1EBE1" fillOpacity="0.6" />
      <path opacity="0.4" d="M18.873 25.75C22.8081 25.75 25.998 22.56 25.998 18.625C25.998 14.69 22.8081 11.5 18.873 11.5C14.938 11.5 11.748 14.69 11.748 18.625C11.748 22.56 14.938 25.75 18.873 25.75Z" fill="#417360" />
      <path d="M26.2231 26.5C26.0881 26.5 25.9531 26.4475 25.8556 26.35L24.4606 24.955C24.2581 24.7525 24.2581 24.4225 24.4606 24.2125C24.6631 24.01 24.9931 24.01 25.2031 24.2125L26.5981 25.6075C26.8006 25.81 26.8006 26.14 26.5981 26.35C26.4931 26.4475 26.3581 26.5 26.2231 26.5Z" fill="#417360" />
    </svg>

  )
}


function ColorSwatchIcon() {
  return (
    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.248047 19C0.248047 8.50659 8.75464 0 19.248 0C29.7415 0 38.248 8.50659 38.248 19C38.248 29.4934 29.7415 38 19.248 38C8.75464 38 0.248047 29.4934 0.248047 19Z" fill="#E1EBE1" fillOpacity="0.6" />
      <path opacity="0.4" d="M26.748 22.375V24.625C26.748 25.75 25.998 26.5 24.873 26.5H14.748C15.0555 26.5 15.3705 26.455 15.663 26.3575C15.7455 26.3275 15.828 26.2975 15.9105 26.26C16.173 26.155 16.4281 26.005 16.6531 25.81C16.7206 25.7575 16.7956 25.69 16.8631 25.6225L16.893 25.5925L21.993 20.5H24.873C25.998 20.5 26.748 21.25 26.748 22.375Z" fill="#417360" />
      <path opacity="0.6" d="M21.1079 14.1262C21.3837 14.1262 21.6803 14.2283 21.9624 14.4661L22.0815 14.5764L23.6724 16.1663C23.9889 16.4829 24.1216 16.825 24.1216 17.1399C24.1216 17.4156 24.0204 17.7124 23.7827 17.9944L23.6724 18.1136L21.6401 20.1458L18.2476 23.5325C18.2477 23.5218 18.2485 23.511 18.2485 23.5003V16.4622L20.1343 14.5764C20.451 14.2598 20.7929 14.1263 21.1079 14.1262Z" fill="#417360" stroke="#417360" />
      <path d="M15.873 11.5H13.623C12.498 11.5 11.748 12.25 11.748 13.375V23.5C11.748 23.7025 11.7705 23.905 11.808 24.1C11.8305 24.1975 11.853 24.295 11.883 24.3925C11.9205 24.505 11.958 24.6175 12.003 24.7225C12.0105 24.73 12.0106 24.7375 12.0106 24.7375C12.0181 24.7375 12.0181 24.7375 12.0106 24.745C12.1156 24.955 12.2355 25.1575 12.378 25.345C12.4605 25.4425 12.5431 25.5325 12.6256 25.6225C12.7081 25.7125 12.798 25.7875 12.8955 25.8625L12.9031 25.87C13.0906 26.0125 13.293 26.1325 13.503 26.2375C13.5105 26.23 13.5106 26.23 13.5106 26.2375C13.6231 26.29 13.7355 26.3275 13.8555 26.365C13.953 26.395 14.0506 26.4175 14.1481 26.44C14.3431 26.4775 14.5455 26.5 14.748 26.5C15.0555 26.5 15.3705 26.455 15.663 26.3575C15.7455 26.3275 15.828 26.2975 15.9105 26.26C16.173 26.155 16.4281 26.005 16.6531 25.81C16.7206 25.7575 16.7956 25.69 16.8631 25.6225L16.893 25.5925C17.418 25.0525 17.748 24.31 17.748 23.5V13.375C17.748 12.25 16.998 11.5 15.873 11.5ZM14.748 24.625C14.1255 24.625 13.623 24.1225 13.623 23.5C13.623 22.8775 14.1255 22.375 14.748 22.375C15.3705 22.375 15.873 22.8775 15.873 23.5C15.873 24.1225 15.3705 24.625 14.748 24.625Z" fill="#417360" />
    </svg>

  )
}


