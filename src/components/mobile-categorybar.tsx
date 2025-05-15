import { db } from "@/db/drizzle"
import { category } from "@/db/schema"
import React from "react";
import Menu from "./menu";

export default async function MobileCategoryBar() {

    const categories = await db.select().from(category);

    return (
        <Menu categories={categories} />
    )
}
