import { ArrowTrendingUp } from "../../icons/ArrowTrendingUp-Icon"
import { GlobeIcon } from "../../icons/Globe-Icon"
import { LinkIcon } from "../../icons/Link-Icon"
import { UsersIcon } from "../../icons/Users-Icons"
import { Reviews } from "../reviews"


export const ReviewCard = () => {
    return <div className="flex items-center max-w-fit  py-4 bg-primary-card justify-center divide-x divide-secondary-bg/50 rounded-xl">
        <Reviews startIcon={<LinkIcon size="md" />} mainText="120K+" subText="Links Created" iconType="link"/>
        <Reviews startIcon={<ArrowTrendingUp size="md" />} mainText="2.5M+" subText="Total Clicks" iconType="clicks"/>
        <Reviews startIcon={<UsersIcon />} mainText="15K+" subText="Happy Users" iconType="users"/>
        <Reviews startIcon={<GlobeIcon />} mainText="190+" subText="Countries" iconType="globe"/>
    </div>
}