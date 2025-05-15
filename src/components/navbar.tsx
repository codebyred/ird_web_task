"use client";
import React, { useState } from "react";
import IconButton from "@/components/icon-button";
import { Logo } from "./logo";
import Hamburger from "./Hamburger";

// SVG icons as constants
const ICONS = {
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path opacity="0.4" d="M20.95 14.55L18.28 17.22L17.22 18.28L14.55 20.95C13.15 22.35 10.85 22.35 9.45002 20.95L6.78001 18.28L5.72001 17.22L3.05 14.55C1.65 13.15 1.65 10.85 3.05 9.45002L5.72001 6.78001L6.78001 5.72001L9.45002 3.05C10.85 1.65 13.15 1.65 14.55 3.05L17.22 5.72001L18.28 6.78001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.55Z" fill="#417360"></path> <path d="M13.06 12L18.28 17.22L17.22 18.28L12 13.06L6.78 18.28L5.72 17.22L10.94 12L5.72 6.78L6.78 5.72L12 10.94L17.22 5.72L18.28 6.78L13.06 12Z" fill="#417360"></path> </svg>`,

  category: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,

  lamp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M12 7.89001L10.93 9.75001C10.69 10.16 10.89 10.5 11.36 10.5H12.63C13.11 10.5 13.3 10.84 13.06 11.25L12 13.11" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.3 18.04V16.88C6 15.49 4.11 12.78 4.11 9.89999C4.11 4.94999 8.66 1.06999 13.8 2.18999C16.06 2.68999 18.04 4.18999 19.07 6.25999C21.16 10.46 18.96 14.92 15.73 16.87V18.03C15.73 18.32 15.84 18.99 14.77 18.99H9.26C8.16 19 8.3 18.57 8.3 18.04Z" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,

  archive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M14.5 10.65H9.5" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86V19.95C3.32 21.75 4.61 22.51 6.19 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,

  hospital: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M2 22H22" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.06 15H9.92999C9.41999 15 8.99001 15.42 8.99001 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V11" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.5 8.5H14.5" stroke="#709484" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,

  book: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 5.48999V20.49" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 8.48999H5.5" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.5 11.49H5.5" stroke="#709484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`
};

// Menu items with labels for accessibility
const MENU_ITEMS = [
  { icon: ICONS.close, label: "Close", id: "close" },
  { icon: ICONS.category, label: "Categories", id: "category" },
  { icon: ICONS.lamp, label: "Ideas", id: "lamp" },
  { icon: ICONS.archive, label: "Bookmarks", id: "archive" },
  { icon: ICONS.hospital, label: "Health", id: "hospital" },
  { icon: ICONS.book, label: "Books", id: "book" }
];

export default function Navbar() {


  return (
    <nav className="sm:w-[4.25rem] sm:py-2 sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-screen hidden bg-shade-2 sm:fixed sm:top-0 sm:left-0" aria-label="Main navigation">   
      <div>
        <Logo />
      </div>
      <div className="flex flex-col items-center gap-3">
        {MENU_ITEMS.map((item) => (
          <IconButton
            key={item.id}
            icon={item.icon}
            className={"bg-primary-20 bg-opacity-100"}
          />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <TrophyIcon />
        <MenuIcon/>
      </div>

    </nav>
  );
};

function TrophyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.15 24.5V26.6" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.15 30H25.15V29C25.15 27.9 24.25 27 23.15 27H17.15C16.05 27 15.15 27.9 15.15 29V30V30Z" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M14.15 30H26.15" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 24C16.13 24 13 20.87 13 17V14C13 11.79 14.79 10 17 10H23C25.21 10 27 11.79 27 14V17C27 20.87 23.87 24 20 24Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.47 19.65C12.72 19.41 12.06 18.97 11.54 18.45C10.64 17.45 10.04 16.25 10.04 14.85C10.04 13.45 11.14 12.35 12.54 12.35H13.19C12.99 12.81 12.89 13.32 12.89 13.85V16.85C12.89 17.85 13.1 18.79 13.47 19.65Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.53 19.65C27.28 19.41 27.94 18.97 28.46 18.45C29.36 17.45 29.96 16.25 29.96 14.85C29.96 13.45 28.86 12.35 27.46 12.35H26.81C27.01 12.81 27.11 13.32 27.11 13.85V16.85C27.11 17.85 26.9 18.79 26.53 19.65Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

function MenuIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 15H29" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 20H29" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 25H29" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" />
    </svg>

  )
}


