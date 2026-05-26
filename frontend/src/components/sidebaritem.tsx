import type { ReactElement } from "react"


interface SidebarItemtype{
    icon: ReactElement,
    text: string
}


export const SidebarItem = ({
    icon,
    text
}: SidebarItemtype) => {
    return <div className="flex gap-4 py-2 px-2 my-2 hover:bg-secondary-bg hover:text-violet-200 text-primary-text text-lg font-medium items-center cursor-pointer rounded-lg transition-transform duration-300">
        <div>
            {icon}
        </div>
        <div>
            {text}
        </div>
    </div>
}