"use client"

import { cn } from "@/lib/utils";
import { useBar, useSetBar } from "@/store/bar";
import { RxCross1 } from "react-icons/rx";

type CloseBtnProps = {
    className: string
}

export default function CloseBtn({className}:CloseBtnProps) {

    const bar = useBar();
    const setBar = useSetBar();


    function handleClick() {
        setBar(false)
    }

    return (
        <div className={cn("w-full py-2 mb-2",className)}>
            <RxCross1 onClick={() => handleClick() }/>
        </div>
    )
}