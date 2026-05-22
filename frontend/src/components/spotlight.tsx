import type { ReactElement } from "react"

interface SpotlightType{
    icon: ReactElement,
    direction: "right" | "left",
    text?: string
}

const RotateStyle = {
    left: "-rotate-12",
    right: "rotate-12"
}

export const Spotlight = ({icon,direction,text}:SpotlightType) => {
    return <div className={`bg-linear-to-b from-[#1A2748] flex flex-col items-center justify-center gap to-primary-bg w-fit p-8 rounded-2xl text-primary-button ${RotateStyle[direction]}`}>
        {text && <div className="font-semibold text-2xl ">
            <div className="text-xs text-secondary-text/70">
                clicks
            </div>  
            <div className="text-secondary-text">
                {text}
            </div>   
        </div>}
        {icon}
    </div>
}