import React from "react"
import { useSelector } from 'react-redux'
import './index.css'

interface NumberOfPointsProps {
    value?: string
}

export const NumberOfPoints: React.FC<NumberOfPointsProps> = ({ value }) => {
    const 
        data  = useSelector((state: any) => state.NumberOfPointReducer.value),
        theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <div className="number-of-points">
            <span className={ "number-of-points__count number-of-points__count_" + theme }>{ (value === undefined) ? Number(data): Number(value) }</span>
            <img src="https://drive.google.com/uc?export=view&id=13-0PiDCZfzMfklRV3qVuLrafX9djz8B7" alt="Coin" className="number-of-points__coin" />
        </div>
    )
}