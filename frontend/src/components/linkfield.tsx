import { ClipboardIcon } from "../icons/Clipboard";



export const LinkField = ({originalLink,shortLink,clicks,created}:{
    originalLink: string;
    shortLink: string;
    clicks: number;
    created: string
}) => {
    return <div className="grid grid-cols-[3fr_2fr_1fr_1fr] py-4 border-b w-full">
    <div
        className="truncate"
        title={originalLink}
    >
        {originalLink}
    </div>

    <div className="pl-5 flex gap-10">
        <div className="truncate">
            {shortLink}
        </div>
        <div className="cursor-pointer">
         <ClipboardIcon size="md" />
        </div>
    </div>

    <div>
        {clicks}
    </div>

    <div>
        {created}
    </div>
</div>
}