"use client"

import PrayerIcon from "./icons/prayer"
import { useState } from "react"
import { getCategoryWithSubcategoriesAndDuas } from "@/actions"
import React from "react"
import type { Category, SubCategoryWithDuas, Dua } from "@/lib/types"

import { useCategory, useSetCategory, useClearCategory } from "@/store"
import CurvePointer from "./icons/curve-pointer"


export default function Category(props: Category) {

    const category = useCategory();
    const setCategory = useSetCategory();
    const clearCategory = useClearCategory();
    const [showSubCategory, toggleShowSubCategory] = useState<boolean>(false);

    async function handleSectionClick() {

        const nextValue = !showSubCategory;
        toggleShowSubCategory(nextValue);

        if (nextValue) {
            clearCategory();
            const currCategory = await getCategoryWithSubcategoriesAndDuas(props.catId);
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
                    <sub className="text-subtitle font-medium">{props.noOfSubCat} Subcats | {props.noOfDua} duas</sub>
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


function SubCategory(props: SubCategoryWithDuas) {

    const [showDua, toggleShowDua] = useState<boolean>(false);

    function handleClick() {
        toggleShowDua((prev) => !prev)
    }

    return (
        <>
            <li
                className="flex flex-row items-center"
                onClick={() => handleClick()}
            >
                <a href={`#${props.subcatId}`}>
                    <h4 className="flex items-center">
                        <div className="border-b-2 border-dotted border-primary w-2 px-2"></div>
                        <span className="px-2">{props.subcatNameEn}</span>
                    </h4>
                </a>
            </li>
            <div>
                {
                    showDua &&
                    <ul>
                        {
                            props.duas.map((dua, index) => (
                                dua.duaNameEn &&
                                <li className="ml-4 py-1 flex items-center" key={index}>
                                    <div className="px-1">
                                        <CurvePointer />
                                    </div>
                                    <div>
                                        <span className="mr-2">{dua.id}.</span>
                                        {dua.duaNameEn?.split("#") ?? ""}
                                    </div>

                                </li>
                            ))
                        }

                    </ul>
                }
            </div>
        </>
    )
}