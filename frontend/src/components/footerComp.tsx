import type { ReactElement } from "react";

interface footerComp{
    heading: string;
    startIcon?: ReactElement;
    children: ReactElement;
}

export const FooterComp = ({heading,startIcon,children}:footerComp) => {
    return <div className="max-w-3xs flex flex-col gap-4 ">
        <div className="flex items-center gap-2">
            {startIcon && <div className="bg-primary-button p-2 rounded-md">{startIcon}</div> }
            <div className="text-lg font-semibold">{heading}</div>
        </div>
        <div className="text-sm text-secondary-text/80">
            {children}
        </div>
    </div>
} 