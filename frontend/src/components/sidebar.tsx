import { HomeIcon } from "../icons/Home"
import { LinkIcon } from "../icons/Link-Icon"
import { PowerIcon } from "../icons/power"
import { SidebarItem } from "./sidebaritem"



export const Sidebar = () => {
    return <div className="col-span-1 row-span-2 border-r border-secondary-button/40 p-5 bg-[#050d19]">
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="flex gap-4 items-center">
                    <div className="bg-primary-button p-2 rounded-lg">
                    <LinkIcon size="md" />
                    </div>
                    <h1 className="font-semibold text-2xl">Linkyfy</h1>
                </div>
                <div className="mt-15">
                    <SidebarItem icon={<HomeIcon size="md" />} text="Dashboard" />
                    <SidebarItem icon={<LinkIcon size="md" />} text="Links" />
                </div>
            </div>
            <div className="flex justify-between py-2 px-2 hover:bg-secondary-bg hover:text-violet-200 text-primary-text text-lg font-medium items-center cursor-pointer rounded-lg transition-transform duration-300">
               <div className="text-lg font-medium">
                    Logout
               </div>
               <div>
                    <PowerIcon size="md" />
               </div>
            </div>
        </div>
    </div>
}