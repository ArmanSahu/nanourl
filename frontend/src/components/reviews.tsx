import type { ReactElement } from "react"

interface ReviewType{
    startIcon: ReactElement,
    mainText: string,
    subText: string,
    iconType: "link" | "clicks" | "users" | "globe"
} 

const iconColors = {
    link: "text-primary-button",
    clicks: "text-green-400",
    users: "text-primary-button",
    globe: "text-purple-300"
}

export const Reviews = ({
    startIcon,
    mainText,
    subText,
    iconType
}:ReviewType) => {
    return <div className="flex items-center gap-3 px-20 py-2 ">
        <div className={`${iconColors[iconType]} rounded-lg px-2 py-2 bg-brand-end `}>
            {startIcon}
        </div>
        <div>
            <p className="text-primary-text font-semibold text-2xl">{mainText}</p>
            <p className="text-secondary-text/70 font-normal text-sm ">{subText}</p>
        </div>
    </div>
}