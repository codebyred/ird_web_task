"use client"

import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from "react";
import CategoryItem from "./category-item";
import type { Category } from "@/lib/types";
import { getAllCategories } from "@/actions/index"

export default function CategoryBar() {
    const [allCategories, setAllCategories] = useState<Category[]>([])
    const [filteredCategories, setFilteredCategories] = useState<Category[]>([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getAllCategories()
            setAllCategories(categories)
            setFilteredCategories(categories)
        }

        fetchCategories()
    }, [])

    // 🔥 Add this effect to update filtered list when search changes
    useEffect(() => {
        const filtered = allCategories.filter(category =>
            category.catNameEn?.toLowerCase().includes(search.toLowerCase())
        )
        setFilteredCategories(filtered)
    }, [search, allCategories])

    return (
        <div className="sm:block sm:col-span-1 hidden sm:pt-[1.5rem] sm:px-[1.5rem]">
            <div className="mb-[0.625rem]">
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
                        <CategoryItem {...category} />
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}
