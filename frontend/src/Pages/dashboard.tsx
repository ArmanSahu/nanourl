import { LinkSection } from "../components/link-section"
import { Sidebar } from "../components/sidebar"
import { Topbar } from "../components/topbar-dashboard"


export const Dashboard = () => {
    return <div className="grid grid-cols-[260px_1fr] grid-rows-[120px_1fr] h-screen bg-primary-bg text-primary-text">
        <Sidebar />
        <Topbar />
        <LinkSection />
    </div>
}