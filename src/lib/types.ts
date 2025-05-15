export type Category = {
    id: number;
    catId: number | null;
    catNameBn: string | null;
    catNameEn: string | null;
    noOfSubcat: number | null;
    noOfDua: number | null;
    catIcon: string | null;
}

export type SubCategory = {
    id: number;
    catId: number | null;
    subcatId: number | null;
    subcatNameBn: string | null;
    subcatNameEn: string | null;
    noOfDua: number | null;

}

export type Dua = {
    id: number;
    catId: number | null;
    subcatId: number | null;
    duaId: number | null;
    duaNameBn: string | null;
    duaNameEn: string | null;
    topBn: string | null;
    topEn: string | null;
    duaArabic: string | null;
    duaIndopak: string | null;
    cleanArabic: string | null;
    transliterationBn: string | null;
    transliterationEn: string | null;
    translationBn: string | null;
    translationEn: string | null;
    bottomBn: string | null;
    bottomEn: string | null;
    refferenceBn: string | null;
    refferenceEn: string | null;
    audio: string | null;
};


  
export interface SubCategoryWithDuas {
    id: number | null;
    catId: number | null;
    subcatId: number | null;
    subcatNameBn: string | null;
    subcatNameEn: string | null;
    noOfDua: number | null;
    duas: Dua[];
}

export interface CategoryWithSubcategories {
    id: number | null;
    catId: number| null;
    catNameBn: string | null;
    catNameEn: string | null;
    noOfSubcat: number| null;
    noOfDua: number| null;
    catIcon: string | null;
    subcategories: SubCategoryWithDuas[];
}
  