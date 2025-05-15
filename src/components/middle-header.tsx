"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import HomeIcon from "@/components/icons/home"
import { useBreadcrumb } from "@/store/breadcrumb"

export default function MiddleHeader() {

    const breadcrumb = useBreadcrumb();

    return (
        <div className="pl-8 py-[.1rem] bg-primary-20 text-sm">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="flex items-center gap-2">
                            <HomeIcon />
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {
                        breadcrumb && breadcrumb.category && 
                        <>
                        <BreadcrumbItem>
                            <BreadcrumbLink>{breadcrumb.category}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        </>
                    }
                    
                    {
                        breadcrumb && breadcrumb.subCategory && 
                        <BreadcrumbItem>
                            <BreadcrumbLink>{breadcrumb.subCategory}</BreadcrumbLink>
                        </BreadcrumbItem>
                    }
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}