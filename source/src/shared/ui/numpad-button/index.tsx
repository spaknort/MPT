import React, { useRef } from "react"
import { NumpadColor } from "../../lib/enums/NumpadColor"
import { useSelector } from "react-redux"
import './index.css'

interface INumpadButtonProps {
    value?: string,
    className?: string,
    color?: NumpadColor,
    children?: React.ReactNode,
    isDisabled?: boolean
    onClick?: () => void
}

const NumpadButton: React.FC<INumpadButtonProps> = ({ value, onClick, className, color, children, isDisabled }) => {
    const numpadButtonRef = useRef<HTMLButtonElement | null>(null)
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    let
        colour = "",
        clsName = "",
        data: any = value
    
    if (color == NumpadColor.GREEN) colour = "numpad__button_green_"
    if (color == NumpadColor.RED) colour = "numpad__button_red_"
    if (color == NumpadColor.DEFAULT || color === undefined) colour = "numpad__button_default_"

    if (className !== undefined) clsName = className
    if(value === undefined) data = children

    return (
        <button disabled={isDisabled} ref={numpadButtonRef} onClick={onClick} className={colour + theme + " numpad__button " + clsName }>{ data }</button>
    )
}

export default NumpadButton