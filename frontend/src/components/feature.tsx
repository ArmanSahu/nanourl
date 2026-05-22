import { FastIcon } from "../icons/Fast-Icon"
import { FeatureCard } from "./cards/feature-card"


export const Feature = () => {
    return <div className="flex w-fit p-2 gap-3">
        <FeatureCard startIcon={<FastIcon />} iconType="fast" mainText="Lightening Fast" subText="Shorten your links in seconds. Simple, quick and efficient." />
        <FeatureCard startIcon={<FastIcon />} iconType="analytics" mainText="Powerful Analysis" subText="Tracks clicks, locations, devices, and more with detailed insights." />
        <FeatureCard startIcon={<FastIcon />} iconType="secure" mainText="Secure and Reliable" subText="Your links are protected with enterprise grade security." />
    </div>
}