import type { ReactElement } from "react"
import type { ButtonSize } from "../types/button-Size-Type"
import type { ButtonVariant } from "../types/button-Variant-types"

interface ButtonType{
    text: string
    size: ButtonSize,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    variant: ButtonVariant,
    onClick?: () => void;
}

const variantStyle = {
    primary: "bg-primary-button text-primary-text hover:bg-primary-hover",
    secondary: "bg-secondary-button text-primary-text hover:bg-secondary-hover"
}

const sizeStyle = {
    sm: "px-5 py-2 rounded-md text-sm",
    md: "px-7 py-2 rounded-lg text-base",
    lg: "px-7 py-3 rounded-xl text-xl"
}

const defaultStyle = "cursor-pointer hover:-translate-y-0.5 transition-transform duration-400 active:translate-y-0 flex items-center gap-2 ";


export const Button = ({
    text,
    size,
    variant,
    endIcon,
    onClick
}:ButtonType) => {
    return <button onClick={onClick} className={`${variantStyle[variant]} ${sizeStyle[size]} ${defaultStyle} `}>
        {text}
        {endIcon && endIcon}
    </button>
}