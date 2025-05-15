// useCategoryStore.ts
import { create } from 'zustand';
import type { CategoryWithSubcategories } from "@/lib/types";

interface CategoryStore {
  category: CategoryWithSubcategories | null;
  setCategory: (category: CategoryWithSubcategories) => void;
  clearCategory: () => void;
}

const useCategoryStore = create<CategoryStore>((set) => ({
  category: null,
  setCategory: (category) => set({ category }),
  clearCategory: () => set({ category: null }),
}));


export const useCategory = () => useCategoryStore((state)=> state.category)
export const useSetCategory = () => useCategoryStore((state)=> state.setCategory)
export const useClearCategory = () => useCategoryStore((state)=> state.clearCategory)