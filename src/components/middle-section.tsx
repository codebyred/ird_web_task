"use client"

import type { Dua } from "@/lib/types";

import { useCategory } from "@/store/category"
import React from "react";
import MiddleHeader from "./middle-header";
import DuaCard from "./DuaCard";

export default function MiddleSection() {

    const categories = useCategory();

    return (
        <div className="col-span-5 sm:col-span-3 flex flex-col sm:border-l-2 sm:border-r-2 sm:border-gray-200">
            <MiddleHeader/>
            {
                categories && categories.subcategories.length > 0 &&

                categories.subcategories.map((subCategory, index)=>(
                    <section key={index} id={`${subCategory.subcatId}`}>
                        <div className="py-2 px-8 bg-[#EEF6EB] text-sm">
                            <span className="text-primary mr-2 font-medium">Section:</span>
                            <span>{subCategory.subcatNameEn}</span>
                        </div>
                        <div className="px-[1rem] sm:px-[3.125rem] py-0">
                            {
                                subCategory.duas.length > 0 &&
                                subCategory.duas.map((dua, index)=>(
                                    <React.Fragment key={index}>
                                        <DuaCard {...dua}/>
                                    </React.Fragment>
                                ))
                            }
                             
                        </div>
                    </section>
                ))

            }

        </div>
    )
}












