// useCategoryStore.ts
import { create } from 'zustand';


type BarStore = {
    open: boolean,
    setOpen: (open: boolean) => void
}

const useBarStore = create<BarStore>((set) => ({
    open: false,
    setOpen: (open)=> set({
        open
    })
}));

export const useBar = () => useBarStore((state)=> state.open);
export const useSetBar = () => useBarStore((state)=> state.setOpen)