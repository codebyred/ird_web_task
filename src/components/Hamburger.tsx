"use client"

import { cn } from "@/lib/utils";
import { useBar, useSetBar } from "@/store/bar";
import { GiHamburgerMenu } from "react-icons/gi";

type HamburgerProps = {
    className?: string
}

export default function Hamburger({className}: HamburgerProps) {

        const bar = useBar();
        const setBar = useSetBar();
    
    
        function handleClick() {
            setBar(true)
        }
    
    return (
        <GiHamburgerMenu className={cn(className)} onClick={() => handleClick()}/>
    )
}