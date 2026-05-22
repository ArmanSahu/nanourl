import type { ReactElement } from "react"



export const Wrapper = ({children}:{
    children: ReactElement
}) => {
    return <div className="max-w-7xl px-4 mx-auto">{children}</div>
}