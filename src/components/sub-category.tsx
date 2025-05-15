"use client"

import type { SubCategoryWithDuas } from "@/lib/types";
import { useState } from "react";
import CurvePointer from "./icons/curve-pointer";
import { useBreadcrumb, useSetBreadcrumb } from "@/store/breadcrumb";


export default function SubCategory(props: SubCategoryWithDuas) {

    const [showDua, toggleShowDua] = useState<boolean>(false);

    const breadcrumb = useBreadcrumb();

    const setBreadcrumb = useSetBreadcrumb();

    function handleClick() {
        toggleShowDua((prev) => !prev)
        setBreadcrumb({ category: breadcrumb?.category!, subCategory: props.subcatNameEn })
    }

    return (
        <>
            <li
                className="flex flex-row items-center mb-[0.625rem]"
                onClick={() => handleClick()}
            >
                <h4 className="flex items-center">
                    <div className="border-b-2 border-dotted border-primary w-2 px-2"></div>
                    <span className="px-2">{props.subcatNameEn}</span>
                </h4>
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
                                        <a href={`#${dua.duaId}`}>
                                            <span className="mr-2">{dua.id}.</span>
                                            {dua.duaNameEn?.split("#") ?? ""}
                                        </a>
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