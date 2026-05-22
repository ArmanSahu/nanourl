import { LinkIcon } from "../icons/Link-Icon"
import { FooterComp } from "./footerComp"
import { Wrapper } from "./wrapper"


const footerStyle = "flex gap-3 flex-col"

export const Footer = () => {
    return <div className="bg-primary-bg mt-5 py-10 border-t border-secondary-bg/50 drop-shadow-sm drop-shadow-secondary-bg">
        <Wrapper>
            <div className="text-primary-text flex justify-between">
                <FooterComp heading="Linkyfy" startIcon={<LinkIcon size="sm" />}>
                    <p>
                        The modern url shortner for 
                        faster sharing and smarter
                        analytics
                    </p>
                </FooterComp>
                <FooterComp heading="Product">
                    <div className={`${footerStyle}`}>
                        <p>
                            Dashboard
                        </p>
                        <p>
                            Features
                        </p>
                        <p>
                            Pricing
                        </p>
                        <p>
                            API
                        </p>
                    </div>    
                </FooterComp>
                 <FooterComp heading="Company" >
                     <div className={`${footerStyle}`}>
                        <p>
                            About 
                        </p>
                        <p>
                            Blog
                        </p>
                        <p>
                            Careers
                        </p>
                        <p>
                            Contact
                        </p>
                    </div>    
                </FooterComp>
                 <FooterComp heading="Legal">
                   <div className={`${footerStyle}`}>
                        <p>
                            Privacy Policy
                        </p>
                        <p>
                            Terms of Service
                        </p>
                        <p>
                            Cookie Policy
                        </p>
                    </div>    
                </FooterComp>
            </div>
        </Wrapper>
    </div>
}