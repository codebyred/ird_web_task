import { Dua } from "@/lib/types";
import ArabicIcon from "./icons/arabic";
import BookmarkIcon from "./icons/bookmark";
import BulbIcon from "./icons/bubble";
import DeleteIcon from "./icons/delete";
import MenuIcon from "./icons/menu";
import PlayIcon from "./icons/play";

export default function DuaCard(props: Dua) {
    return (
        <div className="mb-[1.875rem] border-b-1 border-primary ">
            <div className="py-[1.875rem] mb-[3.125rem]">
                <h3 className="mb-[1.875rem] flex items-center gap-2 text-primary font-medium">
                    <ArabicIcon />
                    {props.duaNameEn}
                </h3>
                <div className="mb-[1.5rem]">
                    <p className="text-right mb-[1.875rem]">{props.duaArabic}</p>
                    <p className="italic text-subtitle" >{props.transliterationEn}</p>
                </div>

                <div>
                    <h3 className="font-bold mb-[0.5rem]">Translation</h3>
                    <p>All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center mb-[1.875rem]">
                <div className="text-sm w-[72.3%] mb-[2.5rem] sm:mb-0">
                    <p className="text-subtitle ">Reference</p>
                    <p >Surah Al-Fatir 35:35</p>
                </div>
                <div className="flex items-center justify-between sm:gap-2">
                    <BulbIcon />
                    <BookmarkIcon />
                    <PlayIcon />
                    <DeleteIcon />
                    <MenuIcon/>
                </div>
            </div>
        </div>
    )
}