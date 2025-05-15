"use client"

import PrayerIcon from "./icons/prayer"
import { useState } from "react"
import { getCategoryWithSubcategoriesAndDuas } from "@/actions"
import React from "react"
import type { Category } from "@/lib/types"
import { useCategory, useSetCategory, useClearCategory } from "@/store/category"
import SubCategory from "./sub-category"

import { useSetBreadcrumb } from "@/store/breadcrumb";

export default function CategoryItem(props: Category) {

    const category = useCategory();
    const setCategory = useSetCategory();
    const clearCategory = useClearCategory();
    const setBreadcrumb = useSetBreadcrumb();

    const [showSubCategory, toggleShowSubCategory] = useState<boolean>(false);

    async function handleSectionClick() {

        setBreadcrumb({category: props.catNameEn!, subCategory: null})

        const nextValue = !showSubCategory;

        toggleShowSubCategory(nextValue);

        if (nextValue) {
            clearCategory();
            const currCategory = await getCategoryWithSubcategoriesAndDuas(props.catId!);
            if (currCategory) {
                setCategory(currCategory);
            } else {
                console.error("Failed to fetch category data.");
            }
        }
    }

    return (
        <>
            <li
                className="flex items-center gap-2 overflow-x-hidden py-[0.875rem]"
                onClick={() => handleSectionClick()}
            >

                <div className="">
                    <PrayerIcon />
                </div>

                <div className="text-nowrap overflow-x-hidden ">
                    <h3 className="font-medium text-sm">{props.catNameEn}</h3>
                    <sub className="text-subtitle font-medium">{props.noOfSubcat!} Subcats | {props.noOfDua} duas</sub>
                </div>
            </li>
            {
                showSubCategory &&
                <ul className="border-l-2 border-dashed border-primary">
                    {
                        category && category.catId === props.catId
                        && category.subcategories.length > 0 &&
                        category.subcategories.map((subCategory) => (
                            <React.Fragment key={subCategory.id}>
                                <SubCategory {...subCategory} />
                            </React.Fragment>

                        ))
                    }
                </ul>
            }
        </>
    )
}

