"use client"

import React, { useState } from "react"
import CloseBtn from "./close-btn"
import { Input } from "./ui/input"
import CategoryItem from "./category-item"
import { cn } from "@/lib/utils"
import { useBar } from "@/store/bar"
import { motion } from "framer-motion"

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

export default function Menu({ categories }: MenuProps) {
    const bar = useBar()
    const [search, setSearch] = useState("")

    const filteredCategories = categories.filter((category) => {
        const name = category.catNameEn?.toLowerCase() || ""
        return name.includes(search.toLowerCase())
    })

    return (
        <motion.div
            className={cn("sm:-left-[100%] fixed top-0 w-[80%] max-w-xs h-screen bg-white rounded-xl shadow-lg p-4 overflow-y-auto z-50")}
            initial={{ x: "-100%" }}
            animate={{ x: bar ? "0%" : "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
        >
            <CloseBtn className={"flex items-center justify-end"} />
            <div className="mb-4">
                <Input
                    className="rounded-full"
                    placeholder="Search by dua categories"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ul>
                {filteredCategories.map((category, index) => (
                    <React.Fragment key={index}>
                        <CategoryItem
                            {
                                ...category
                            }
                        />
                    </React.Fragment>
                ))}
            </ul>
        </motion.div>
    )
}
