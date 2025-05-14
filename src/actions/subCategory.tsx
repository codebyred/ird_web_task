"use server"
import { eq } from 'drizzle-orm';
import { subCategory } from "@/db/schema"
import { db } from "@/db/drizzle"

export async function  getSubCategoriesByCatId(catId: number) {
    try{
        const subCategories = await db.select().from(subCategory).where(eq(subCategory.catId, catId));
        return subCategories
    }catch(err: unknown) {
        return null
    }
    
}