import React from "react"
import './index.css'
import { useSelector } from "react-redux"

interface INTProps {
    value: number,
    index: number,
    color?: string
}

const INT: React.FC<INTProps> = ({ value, index, color }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <p style={{color}} data-index={index} className={"int int_" + theme}>{ value }</p>
    )
}

export default INT