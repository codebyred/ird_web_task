import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { Slider } from "@/components/ui/slider"

export default function SettingsBar() {
    return (
        <div className="hidden sm:col-span-1 sm:px-[1.5rem] sm:bg-[primary-20] sm:flex sm:flex-col">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center">
                        <div className="flex gap-2 items-center">
                            <FontIcon />
                            Font Settings
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className="mt-2 mb-2">
                        <div className="flex flex-col">
                            <h3 className="mb-2">Arabic Font Size</h3>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                    </AccordionContent>
                    <AccordionContent className="mt-2">
                        <div className="flex flex-col">
                            <h3 className="mb-2">Translation Font Size</h3>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                    </AccordionContent>
                    <AccordionContent className="mt-2">
                        <div className="flex flex-col">
                            <h3 className="mb-2">Arabic Script & Font Face</h3>
                            <div className="bg-shade-2 rounded-lg">

                            
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Uthma"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Amiri</SelectItem>
                                    <SelectItem value="dark">Cairo</SelectItem>
                                    <SelectItem value="system">Tajawal</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center">
                        <div className="flex gap-2 items-center">
                            <SettingsIcon />
                            View Settings
                        </div>

                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center">
                        <div className="flex gap-2 items-center">
                            <AppearanceIcon/>
                            Appearance settings
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

function FontIcon() {
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="32" height="32" rx="16" fill="#FBFFFB" />
            <rect x="1" y="1" width="32" height="32" rx="16" stroke="#E1EBE1" strokeWidth="2" />
            <path d="M9.49255 12.4475V11.315C9.49255 10.55 10.1151 9.9275 10.8801 9.9275H20.5701C21.3351 9.9275 21.9576 10.55 21.9576 11.315V12.4475" stroke="#417360" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.725 21.575V10.49" stroke="#417360" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.175 21.575H17.36" stroke="#417360" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <g opacity="0.4">
                <path d="M18.2598 15.7549H23.5173C24.0648 15.7549 24.5073 16.1974 24.5073 16.7449V17.3449" stroke="#417360" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.0601 24.0726V16.1526" stroke="#417360" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.4546 24.0723H21.6646" stroke="#417360" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>

    )
}

function SettingsIcon() {
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="32" height="32" rx="16" fill="#FBFFFB" />
            <rect x="1" y="1" width="32" height="32" rx="16" stroke="#E1EBE1" strokeWidth="2" />
            <path opacity="0.4" d="M20.8249 9.5H17.6749C15.0874 9.5 14.0374 10.5275 14.0074 13.0625H16.3249C19.4749 13.0625 20.9374 14.525 20.9374 17.675V19.9925C23.4724 19.9625 24.4999 18.9125 24.4999 16.325V13.175C24.4999 10.55 23.4499 9.5 20.8249 9.5Z" fill="#709484" />
            <path d="M16.325 14H13.175C10.55 14 9.5 15.05 9.5 17.675V20.825C9.5 23.45 10.55 24.5 13.175 24.5H16.325C18.95 24.5 20 23.45 20 20.825V17.675C20 15.05 18.95 14 16.325 14ZM17.2175 18.2375L14.435 21.02C14.33 21.125 14.195 21.1775 14.0525 21.1775C13.91 21.1775 13.775 21.125 13.67 21.02L12.275 19.625C12.065 19.415 12.065 19.0775 12.275 18.8675C12.485 18.6575 12.8225 18.6575 13.0325 18.8675L14.045 19.88L16.4525 17.4725C16.6625 17.2625 17 17.2625 17.21 17.4725C17.42 17.6825 17.4275 18.0275 17.2175 18.2375Z" fill="#709484" />
        </svg>

    )
}

function AppearanceIcon() {
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="32" height="32" rx="16" fill="#FBFFFB" />
            <rect x="1" y="1" width="32" height="32" rx="16" stroke="#E1EBE1" strokeWidth="2" />
            <path
                opacity="0.4"
                d="M24.5 20.375V22.625C24.5 23.75 23.75 24.5 22.625 24.5H12.5C12.8075 24.5 13.1225 24.455 13.415 24.3575C13.4975 24.3275 13.58 24.2975 13.6625 24.26C13.925 24.155 14.18 24.005 14.405 23.81C14.4725 23.7575 14.5475 23.69 14.615 23.6225L14.645 23.5925L19.745 18.5H22.625C23.75 18.5 24.5 19.25 24.5 20.375Z"
                fill="#709484"
            />
            <path
                opacity="0.6"
                d="M21.7775 16.4675L19.745 18.5L14.645 23.5925C15.17 23.0525 15.5 22.31 15.5 21.5V14.255L17.5325 12.2225C18.3275 11.4275 19.3925 11.4275 20.1875 12.2225L21.7775 13.8125C22.5725 14.6075 22.5725 15.6725 21.7775 16.4675Z"
                fill="#709484"
            />
            <path
                d="M13.625 9.5H11.375C10.25 9.5 9.5 10.25 9.5 11.375V21.5C9.5 21.7025 9.52249 21.905 9.55999 22.1C9.58249 22.1975 9.60499 22.295 9.63499 22.3925C9.67249 22.505 9.71 22.6175 9.755 22.7225C9.7625 22.73 9.7625 22.7375 9.7625 22.7375C9.77 22.7375 9.77 22.7375 9.7625 22.745C9.8675 22.955 9.9875 23.1575 10.13 23.345C10.2125 23.4425 10.295 23.5325 10.3775 23.6225C10.46 23.7125 10.55 23.7875 10.6475 23.8625L10.655 23.87C10.8425 24.0125 11.045 24.1325 11.255 24.2375C11.2625 24.23 11.2625 24.23 11.2625 24.2375C11.375 24.29 11.4875 24.3275 11.6075 24.365C11.705 24.395 11.8025 24.4175 11.9 24.44C12.095 24.4775 12.2975 24.5 12.5 24.5C12.8075 24.5 13.1225 24.455 13.415 24.3575C13.4975 24.3275 13.58 24.2975 13.6625 24.26C13.925 24.155 14.18 24.005 14.405 23.81C14.4725 23.7575 14.5475 23.69 14.615 23.6225L14.645 23.5925C15.17 23.0525 15.5 22.31 15.5 21.5V11.375C15.5 10.25 14.75 9.5 13.625 9.5ZM12.5 22.625C11.8775 22.625 11.375 22.1225 11.375 21.5C11.375 20.8775 11.8775 20.375 12.5 20.375C13.1225 20.375 13.625 20.8775 13.625 21.5C13.625 22.1225 13.1225 22.625 12.5 22.625Z"
                fill="#709484"
            />
        </svg>

    )
}

