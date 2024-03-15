import React from "react"
import { useSelector } from "react-redux"
import './index.css'

interface SIGNProps {
    value: string,
    index: number,
    color?: string
}

const SIGN: React.FC<SIGNProps> = ({ value, index, color }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <p style={{color}} data-index={index} className={"sign sign_" + theme}>{ value }</p>
    )
}

export default SIGN