import { useState } from "react"
import { ArrowTrendingUp } from "../icons/ArrowTrendingUp-Icon"
import { LinkIcon } from "../icons/Link-Icon"
import { ActionField } from "./actionField"
import { ReviewCard } from "./cards/review-card"
import { CTA } from "./cta"
import { Feature } from "./feature"
import { Spotlight } from "./spotlight"
import { Wrapper } from "./wrapper"


export const Hero = () => {
    return <div className="min-h-screen bg-primary-bg">
        <Wrapper>
            <div className="flex flex-col justify-center items-center gap-15 text-primary-text py-15">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <Spotlight icon={<LinkIcon size="lg" />} direction="left" />
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-fit bg-brand-start text-indigo-400 font-semibold text-sm px-5 py-1.5 rounded-3xl">
                            <p>Fast. Simple. Secure</p>
                        </div>
                        <div className="text-center text-6xl font-bold leading-16">
                            <p>Shorten Links,</p>
                            <div>
                                <span className="bg-linear-to-r from-[#4F46E5] to-[#B895F2] text-transparent bg-clip-text">Share </span>
                                <span>Anywhere.</span>
                            </div>
                        </div>
                        <div className="max-w-lg text-center text-secondary-text/80 leading-tight">
                            <p>
                                NanoUrl is a moden url shortner that helps you create 
                                short, sharablelinks and track their performance in real time
                            </p>
                        </div>
                        <div className="pt-4">
                            <ActionField />

                        </div>
                    </div>
                     <div>
                        <Spotlight icon={<ArrowTrendingUp size="lg"  />} text="1,248" direction="right" />
                    </div>
                </div>
                <ReviewCard />
                <div className="flex flex-col gap-5 items-center">
                    <p className="w-fit p-2 bg-brand-start text-indigo-400 font-semibold text-sm px-5 py-1.5 rounded-3xl">
                        Why LinkyFy
                    </p>
                    <h3 className="font-semibold text-2xl text-primary-text">
                        Everything you need in a URL Shortner
                    </h3>
                    <Feature />
                    <CTA />
                </div>
            </div>
        </Wrapper>
    </div>
}