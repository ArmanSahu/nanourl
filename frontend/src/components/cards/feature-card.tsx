import type { ReactElement } from "react"

interface FeatureType{
    mainText: string,
    subText: string,
    startIcon: ReactElement,
    iconType: "fast" | "analytics" | "secure"
}

const iconColors = {
    fast: "bg-brand-end text-violet-300",
    analytics: "bg-green-950 text-green-300",
    secure: "bg-brand-end text-blue-500"
}

export const FeatureCard = ({
    startIcon,
    mainText,
    subText,
    iconType
}:FeatureType) => {
    return <div className={` bg-primary-card w-fit px-2 py-5 rounded-xl flex `}>
        <div className="text-center flex flex-col items-center gap-2">
            <div className={`w-fit mx-auto p-2 rounded-3xl ${iconColors[iconType]}`}>
                {startIcon}
            </div>
            <div className="font-semibold text-lg text-primary-text" >
                {mainText}
            </div>
            <div className="max-w-60 font-normal text-sm text-secondary-text/70">
                {subText}
            </div>
        </div>
    </div>
}