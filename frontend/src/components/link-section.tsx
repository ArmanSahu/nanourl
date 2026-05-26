import { useRef } from "react"
import { Button } from "./button";
import { LinkField } from "./linkfield";



export const LinkSection = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return <div className="px-7 flex flex-col py-3">
        <form className="w-full max-w-5xl mx-auto flex gap-4 justify-center ">
            <input ref={inputRef} className="px-5 py-3 flex-1 rounded-lg outline-none border-2 bg-white/90 placeholder:text-black/50 text-black" placeholder="Paste your link" />
            <Button size="md" text="Generate Link" variant="primary" />
        </form>
        <div className="bg-secondary-card mt-10 p-5 rounded-lg flex flex-col items-start gap-5">
            <h2 className="font-semibold text-lg ">
                Your Links
            </h2>
            <div className="grid grid-cols-[3fr_2fr_1fr_1fr] bg-primary-card p-4 rounded-md w-full">
               <div>
                    Original Link
               </div>
               <div className="pl-5">
                    Short Link
               </div>
               <div>
                    Clicks
               </div>
               <div>
                    Created At
               </div>
            </div>
            <div className="flex flex-col w-full divide-y divide-secondary-button/40">
                <LinkField originalLink="google.com/v" shortLink="jkdbvjkdb" clicks={24} created="kdnkv" />
            </div>
        </div>
    </div>
}