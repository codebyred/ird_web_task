"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import PrayerIcon from "./icons/prayer"
import { useState } from "react"
import { getSubCategoriesByCatId } from "@/actions/subCategory"


type CategoryProps = {
    catId: number
    catNameEn: string,
    noOfSubCat: number,
    noOfDua: number
}



export default function Category(props: CategoryProps) {

    const [subCategories, setSubCategories] = useState<any[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    async function handleClick() {
        if (!isLoaded) {
            const result = await getSubCategoriesByCatId(props.catId)

            if(result){
                setSubCategories(result)
                setIsLoaded(true)
            }

        }
    }


    return (
        <li className="">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger 
                        className="flex items-center overflow-x-hidden"
                        onClick={()=> handleClick()}
                    >

                        <div className="">
                            <PrayerIcon />
                        </div>

                        <div className="text-nowrap overflow-x-hidden ">
                            <h3 className="font-medium text-sm">{props.catNameEn}</h3>
                            <sub className="text-subtitle font-medium">{props.noOfSubCat} Subcats | {props.noOfDua} duas</sub>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="border-l-2 border-dashed border-primary">
                            {
                                subCategories.map((subCategory) => (
                                    <div 
                                        className="flex flex-row items-center"
                                        key={subCategory.id}>
                                        <div className="border-b-2 border-primary w-2 px-1">

                                        </div>
                                        <li 
                                            className="py-1 px-2"
                                        
                                        >
                                            {subCategory.subcatNameEn}
                                        </li>
                                    </div>

                                ))
                            }

                        </ul>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </li>
    )
}

function SubCategory() {
    return (
        <li>

        </li>
    )
}