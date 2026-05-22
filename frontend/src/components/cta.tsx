import { RightArrow } from "../icons/RightArrow"
import { Button } from "./button"


export const CTA = () => {
    return <div className="flex w-fit gap-16 p-5 bg-linear-to-b from-brand-start to-brand-end rounded-lg items-center">
        <div>
            <p className="text-primary-text text-xl font-semibold" >Ready to shorten your first Link?</p>
            <p className="text-secondary-text/60 text-sm font-normal">Join thousand of users who trust NanoUrl for their link</p>
        </div>
        <div>
            <Button size="md" text="Get Started Free" variant="primary" endIcon={<RightArrow />} />
        </div>
    </div>
}