"use server"
import { eq } from 'drizzle-orm';
import { category, dua, subCategory } from "@/db/schema"
import { db } from "@/db/drizzle"


export async function getCategoryWithSubcategoriesAndDuas(categoryId: number) {
  // 1. Get the category
  const cat = await db
    .select()
    .from(category)
    .where(eq(category.catId, categoryId))
    .then(res => res[0]); // assuming catId is unique

  if (!cat) return null;

  // 2. Get subcategories of that category
  const subcategories = await db
    .select()
    .from(subCategory)
    .where(eq(subCategory.catId, categoryId));

  // 3. For each subcategory, get the duas
  const subcategoriesWithDuas = await Promise.all(
    subcategories.map(async (subcat) => {
      const duas = await db
        .select()
        .from(dua)
        .where(eq(dua.subcatId, subcat.subcatId!));

      return {
        ...subcat,
        duas,
      };
    })
  );

  // 4. Combine and return
  return {
    ...cat,
    subcategories: subcategoriesWithDuas,
  };
}
