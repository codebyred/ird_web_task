"use client"

import CloseBtn from "./close-btn"
import { Input } from "./ui/input"
import React from "react"
import CategoryItem from "./category-item"
import { cn } from "@/lib/utils"
import { useBar } from "@/store/bar"


type MenuProps = {
    categories: {
    id: number;
    catId: number | null;
    catNameBn: string | null;
    catNameEn: string | null;
    noOfSubcat: number | null;
    noOfDua: number | null;
    catIcon: string | null;
}[]
}

export default function Menu({categories}: MenuProps) {

    const bar = useBar();

        return (
        <div className={cn("sm:-left-[100%] fixed top-0 w-[80%] max-w-xs h-screen bg-white rounded-xl shadow-lg p-4 overflow-y-auto z-50 transition", {
            'left-0': bar,
            '-left-[100%]': !bar
        })}>
            <CloseBtn className={"flex items-center justify-end "}/>
            <div className="mb-4">
                <Input className="rounded-full" placeholder="Search by dua categories" />
            </div>
            <ul>
                {categories.map((category, index) => (
                    <React.Fragment key={index}>
                        <CategoryItem
                            catId={category.catId!}
                            catNameEn={category.catNameEn!}
                            noOfSubCat={category.noOfSubcat!}
                            noOfDua={category.noOfDua!}
                        />
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}