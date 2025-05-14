import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function MiddleSection() {
    return (
        <div className="col-span-5 sm:col-span-3 flex flex-col sm:border-l-2 sm:border-r-2 sm:border-gray-200">
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
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="py-2 px-8 bg-[#EEF6EB] text-sm">
                <span className="text-primary mr-2 font-medium">Section:</span>
                <span>The Servent is dependent on his lord</span>
            </div>
            <div className="px-[1rem] sm:px-[3.125rem] py-0">
                <DuaCard />
                <DuaCard />
            </div>
        </div>
    )
}


function DuaCard() {
    return (
        <div className="mb-[1.875rem] border-b-1 border-primary ">
            <div className="py-[1.875rem] mb-[3.125rem]">
                <h3 className="mb-[1.875rem] flex items-center gap-2 text-primary font-medium">
                    <ArabicIcon />
                    1. The servant is dependent on his lord
                </h3>
                <div className="mb-[1.5rem]">
                    <p className="text-right mb-[1.875rem]">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</p>
                    <p className="italic text-subtitle" >Iyyaaka na'budu wa lyyaaka nasta'een</p>
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

function ArabicIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
                <path d="M12.6961 1.45646C13.3917 0.67945 14.6083 0.679449 15.3039 1.45646L17.4037 3.8021C17.7582 4.1981 18.2735 4.41153 18.8042 4.38219L21.9477 4.20841C22.9889 4.15084 23.8492 5.01105 23.7916 6.05234L23.6178 9.19581C23.5885 9.72649 23.8019 10.2418 24.1979 10.5963L26.5435 12.6961C27.3206 13.3917 27.3206 14.6083 26.5435 15.3039L24.1979 17.4037C23.8019 17.7582 23.5885 18.2735 23.6178 18.8042L23.7916 21.9477C23.8492 22.9889 22.9889 23.8492 21.9477 23.7916L18.8042 23.6178C18.2735 23.5885 17.7582 23.8019 17.4037 24.1979L15.3039 26.5435C14.6083 27.3206 13.3917 27.3206 12.6961 26.5435L10.5963 24.1979C10.2418 23.8019 9.72649 23.5885 9.19581 23.6178L6.05234 23.7916C5.01105 23.8492 4.15084 22.9889 4.20841 21.9477L4.38219 18.8042C4.41153 18.2735 4.1981 17.7582 3.8021 17.4037L1.45646 15.3039C0.67945 14.6083 0.679449 13.3917 1.45646 12.6961L3.8021 10.5963C4.1981 10.2418 4.41153 9.72649 4.38219 9.19581L4.20841 6.05234C4.15084 5.01105 5.01105 4.15084 6.05234 4.20841L9.19581 4.38219C9.72649 4.41153 10.2418 4.1981 10.5963 3.8021L12.6961 1.45646Z" stroke="#417360" strokeWidth="1.75" />
                <path d="M13.3476 6.94503C13.6954 6.55652 14.3036 6.55652 14.6514 6.94503L15.923 8.36544C16.1003 8.56344 16.3579 8.67016 16.6233 8.65549L18.5268 8.55025C19.0474 8.52147 19.4776 8.95157 19.4488 9.47222L19.3435 11.3758C19.3289 11.6411 19.4356 11.8987 19.6336 12.076L21.054 13.3476C21.4425 13.6954 21.4425 14.3036 21.054 14.6514L19.6336 15.923C19.4356 16.1003 19.3289 16.3579 19.3435 16.6233L19.4488 18.5268C19.4776 19.0474 19.0474 19.4776 18.5268 19.4488L16.6233 19.3435C16.3579 19.3289 16.1003 19.4356 15.923 19.6336L14.6514 21.054C14.3036 21.4425 13.6954 21.4425 13.3476 21.054L12.076 19.6336C11.8987 19.4356 11.6411 19.3289 11.3758 19.3435L9.47222 19.4488C8.95157 19.4776 8.52147 19.0474 8.55025 18.5268L8.65549 16.6233C8.67016 16.3579 8.56344 16.1003 8.36544 15.923L6.94503 14.6514C6.55652 14.3036 6.55652 13.6954 6.94503 13.3476L8.36544 12.076C8.56344 11.8987 8.67016 11.6411 8.65549 11.3758L8.55025 9.47222C8.52147 8.95157 8.95157 8.52147 9.47222 8.55025L11.3758 8.65549C11.6411 8.67016 11.8987 8.56344 12.076 8.36544L13.3476 6.94503Z" stroke="#417360" strokeWidth="1.45833" />
                <path d="M13.7429 12.0811C13.8617 11.8924 14.1367 11.8924 14.2554 12.0811C14.3422 12.2191 14.5227 12.2636 14.6637 12.1818C14.8565 12.0698 15.1 12.1977 15.1174 12.4199C15.1302 12.5824 15.2693 12.7057 15.4321 12.6987C15.6549 12.6892 15.8111 12.9156 15.7233 13.1205C15.659 13.2703 15.7249 13.4441 15.8724 13.5136C16.074 13.6087 16.1072 13.8818 15.9341 14.0224C15.8076 14.1252 15.7852 14.3097 15.8835 14.4397C16.0178 14.6177 15.9203 14.8748 15.7017 14.9189C15.5419 14.9512 15.4364 15.1041 15.4629 15.2649C15.4992 15.4849 15.2933 15.6673 15.0793 15.6048C14.9228 15.5591 14.7583 15.6454 14.707 15.8002C14.6369 16.0118 14.3698 16.0776 14.2094 15.9228C14.0921 15.8096 13.9063 15.8096 13.789 15.9228C13.6285 16.0776 13.3615 16.0118 13.2914 15.8002C13.2401 15.6454 13.0755 15.5591 12.9191 15.6048C12.7051 15.6673 12.4992 15.4849 12.5355 15.2649C12.562 15.1041 12.4564 14.9512 12.2967 14.9189C12.0781 14.8748 11.9806 14.6177 12.1149 14.4397C12.2131 14.3097 12.1907 14.1252 12.0642 14.0224C11.8912 13.8818 11.9244 13.6087 12.126 13.5136C12.2734 13.4441 12.3393 13.2703 12.2751 13.1205C12.1872 12.9156 12.3435 12.6892 12.5662 12.6987C12.7291 12.7057 12.8682 12.5824 12.8809 12.4199C12.8984 12.1977 13.1419 12.0698 13.3347 12.1818C13.4757 12.2636 13.6561 12.2191 13.7429 12.0811Z" fill="#417360" />
            </g>
        </svg>

    )
}

function HomeIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M7.55252 2.11501L2.35502 6.2775C1.77002 6.7425 1.39502 7.725 1.52252 8.46L2.52002 14.43C2.70002 15.495 3.72001 16.3575 4.80001 16.3575H13.2C14.2725 16.3575 15.3 15.4875 15.48 14.43L16.4775 8.46C16.5975 7.725 16.2225 6.7425 15.645 6.2775L10.4475 2.12249C9.64501 1.47749 8.34752 1.47751 7.55252 2.11501Z" fill="#417360" />
            <path d="M9 11.625C10.0355 11.625 10.875 10.7855 10.875 9.75C10.875 8.71447 10.0355 7.875 9 7.875C7.96447 7.875 7.125 8.71447 7.125 9.75C7.125 10.7855 7.96447 11.625 9 11.625Z" fill="#417360" />
        </svg>

    )
}

function BulbIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0001 14.575L17.1084 16.125C16.9084 16.4667 17.0751 16.75 17.4667 16.75H18.5251C18.9251 16.75 19.0834 17.0333 18.8834 17.375L18.0001 18.925" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.9167 23.0333V22.0667C13 20.9083 11.425 18.65 11.425 16.25C11.425 12.125 15.2167 8.89167 19.5 9.825C21.3834 10.2417 23.0334 11.4917 23.8917 13.2167C25.6334 16.7167 23.8 20.4333 21.1084 22.0583V23.025C21.1084 23.2667 21.2 23.825 20.3084 23.825H15.7167C14.8 23.8333 14.9167 23.475 14.9167 23.0333Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0834 26.3333C16.9917 25.7916 19.0084 25.7916 20.9167 26.3333" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function BookmarkIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0833 16.875H15.9166" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.0167 9.66669H13.9834C12.2084 9.66669 10.7667 11.1167 10.7667 12.8834V24.625C10.7667 26.125 11.8417 26.7584 13.1584 26.0334L17.2251 23.775C17.6584 23.5334 18.3584 23.5334 18.7834 23.775L22.8501 26.0334C24.1667 26.7667 25.2417 26.1334 25.2417 24.625V12.8834C25.2334 11.1167 23.7917 9.66669 22.0167 9.66669Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function PlayIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.3334 18V15.0333C11.3334 11.35 13.9417 9.84168 17.1334 11.6833L19.7084 13.1667L22.2834 14.65C25.475 16.4917 25.475 19.5083 22.2834 21.35L19.7084 22.8333L17.1334 24.3167C13.9417 26.1583 11.3334 24.65 11.3334 20.9667V18Z"
                stroke="#709484"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

function DeleteIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6666 9.66669V12.1667" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.3334 9.66669V12.1667" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.9166 15.575H25.0833" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.5 15.0834V22.1667C25.5 24.6667 24.25 26.3334 21.3333 26.3334H14.6667C11.75 26.3334 10.5 24.6667 10.5 22.1667V15.0834C10.5 12.5834 11.75 10.9167 14.6667 10.9167H21.3333C24.25 10.9167 25.5 12.5834 25.5 15.0834Z" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.079 19.4167H21.0864" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.079 21.9167H21.0864" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9962 19.4167H18.0037" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9962 21.9167H18.0037" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.912 19.4167H14.9195" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.912 21.9167H14.9195" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function MenuIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18.8333C18.4602 18.8333 18.8333 18.4602 18.8333 18C18.8333 17.5397 18.4602 17.1666 18 17.1666C17.5397 17.1666 17.1666 17.5397 17.1666 18C17.1666 18.4602 17.5397 18.8333 18 18.8333Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 13C18.4602 13 18.8333 12.6269 18.8333 12.1666C18.8333 11.7064 18.4602 11.3333 18 11.3333C17.5397 11.3333 17.1666 11.7064 17.1666 12.1666C17.1666 12.6269 17.5397 13 18 13Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 24.6666C18.4602 24.6666 18.8333 24.2935 18.8333 23.8333C18.8333 23.3731 18.4602 23 18 23C17.5397 23 17.1666 23.3731 17.1666 23.8333C17.1666 24.2935 17.5397 24.6666 18 24.6666Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}