import { Input } from "@/components/ui/input"
import PrayerIcon from "./icons/prayer"
import { db } from "@/db/drizzle"
import { category } from "@/db/schema"
import React from "react";

export default async function CategoryBar() {


    const categories = await db.select().from(category);


    return (
        <div className="sm:block sm:col-span-1 hidden ">
            <div className="mb-[0.625rem] sm:pt-[1.5rem] sm:px-[1.5rem]">
                <Input className="rounded-full" placeholder="Search by dua categories" />
            </div>
            <div className="">
                <ul>
                    {
                        categories.map((category, index)=>(
                            <React.Fragment key={index}>
                                <Category
                                    catNameEn={category.catNameEn!}
                                    noOfSubCat={category.noOfSubcat!}
                                    noOfDua={category.noOfDua!}
                                />
                            </React.Fragment>
                        ))
                    }                 
                </ul>
            </div>
        </div>
    )
}

type CategoryProps = {
    catNameEn: string,
    noOfSubCat: number,
    noOfDua: number
}

function Category(props: CategoryProps) {
    return (
        <li  className="flex items-center gap-2 py-[0.875rem] px-[0.625rem] text-nowrap">
            <PrayerIcon />
            <div>
                <h3 className="font-medium text-sm">{props.catNameEn}</h3>
                <sub className="text-subtitle font-medium">{props.noOfSubCat} Subcats | {props.noOfDua} duas</sub>
            </div>
        </li>
    )
}

