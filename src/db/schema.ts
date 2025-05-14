import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const category = sqliteTable('category', {
  id: integer('id').primaryKey(),
  catId: integer('cat_id'),
  catNameBn: text('cat_name_bn'),
  catNameEn: text('cat_name_en'),
  noOfSubcat: integer('no_of_subcat'),
  noOfDua: integer('no_of_dua'),
  catIcon: text('cat_icon'),
});

export const subCategory = sqliteTable('sub_category', {
    id: integer('id').primaryKey(),
    catId: integer('cat_id'),
    subcatId: integer('subcat_id'),
    subcatNameBn: text('subcat_name_bn'),
    subcatNameEn: text('subcat_name_en'),
    noOfDua: integer('no_of_dua'),
});

export const dua = sqliteTable('dua', {
    id: integer('id').primaryKey(),
    catId: integer('cat_id'),
    subcatId: integer('subcat_id'),
    duaId: integer('dua_id'),
    duaNameBn: text('dua_name_bn'),
    duaNameEn: text('dua_name_en'),
    topBn: text('top_bn'),
    topEn: text('top_en'),
    duaArabic: text('dua_arabic'),
    duaIndopak: text('dua_indopak'),
    cleanArabic: text('clean_arabic'),
    transliterationBn: text('transliteration_bn'),
    transliterationEn: text('transliteration_en'),
    translationBn: text('translation_bn'),
    translationEn: text('translation_en'),
    bottomBn: text('bottom_bn'),
    bottomEn: text('bottom_en'),
    refferenceBn: text('refference_bn'),
    refferenceEn: text('refference_en'),
    audio: text('audio'),
  });
  
  