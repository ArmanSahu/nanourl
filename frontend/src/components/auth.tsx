import { LinkIcon } from "../icons/Link-Icon"
import type { AuthType } from "../types/auth-type"
import { ActionField } from "./actionField"
import { AuthCard } from "./cards/auth-card"
import { Wrapper } from "./wrapper"


export const Auth = ({type}:AuthType) => {
    return <div className="bg-primary-bg text-primary-text ">
        <Wrapper> 
            <div className="h-screen grid grid-cols-[2fr_1fr] grid-rows-[100px_1fr]">
                <div className="col-span-2 flex items-center gap-2 ">
                    <div className="bg-primary-button p-2 rounded-lg">
                        <LinkIcon size="md" />
                    </div>
                    <div className="text-2xl font-bold">
                        NanoUrl
                    </div>
                </div>
                <div className="py-10 pl-15">
                    <div className=" text-5xl font-bold max-w-md leading-14 flex flex-col gap-2 ">
                        <p>Shorten</p>
                        <p>Links</p>
                        <div>
                            <span className="bg-linear-to-r from-[#4F46E5] to-[#B895F2] text-transparent bg-clip-text">Share </span>
                            <span>Anywhere.</span>
                        </div>
                        <p className="text-base font-normal text-secondary-text pt-2 max-w-sm">
                            Create short links in seconds, track clicks in real-time and grow your audience
                        </p>
                    </div>
                    <div className="py-7">
                        <ActionField />
                    </div>
                </div>
                <div className="py-10">
                    <AuthCard type={type} />  
                </div>
            </div>
    </Wrapper>
    </div>
}