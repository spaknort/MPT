import React from "react"
import Text from "../../../shared/ui/text"
import { NumberOfPoints } from "../../../entites/number-of-points"
import { Themes } from "../../../shared/lib/enums/Themes"
import './index.css'

interface ThemeProps {
    theme: Themes,
    value: string,
    price: number,
    onClick: () => void
}

export const Theme: React.FC<ThemeProps> = ({ theme, value, price, onClick }) => {
    return (
        <div onClick={onClick} className="theme">
            <div className={ "theme__block_" + theme}></div>
            <Text value={ value } />
            <NumberOfPoints value={ String(price) } />
        </div>
    )
}