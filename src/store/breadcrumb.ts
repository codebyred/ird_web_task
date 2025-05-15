import { create } from 'zustand';

type Breadcrumb = {
    category: string | null
    subCategory: string | null
}

type BreadcrumbStore = {
    breadcrumb: Breadcrumb | null,
    setBreadcrumb: (breadcrumb: Breadcrumb) => void;
    clearBreadcrumb: () => void;
}

const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
  breadcrumb: null,
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
  clearBreadcrumb: () => set({ breadcrumb:null }),
}));

export const useBreadcrumb = () => useBreadcrumbStore((state) => state.breadcrumb);
export const useSetBreadcrumb = () => useBreadcrumbStore((state) => state.setBreadcrumb);
export const useClearBreadcrumb = () => useBreadcrumbStore((state) => state.clearBreadcrumb)
