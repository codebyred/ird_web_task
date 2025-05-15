import { Input } from "@/components/ui/input"
import { db } from "@/db/drizzle"
import { category } from "@/db/schema"
import React from "react";
import Category from "./category";



export default async function CategoryBar() {


    const categories = await db.select().from(category);

    return (
        <div className="sm:block sm:col-span-1 hidden sm:pt-[1.5rem] sm:px-[1.5rem]">
            <div className="mb-[0.625rem] ">
                <Input className="rounded-full" placeholder="Search by dua categories" />
            </div>
            <div className="">
                <ul>
                    {
                        categories.map((category, index) => (
                            <React.Fragment key={index}>
                                <Category
                                    catId={category.catId!}
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


