import React from "react"
import './index.css'
import { useSelector } from "react-redux"

interface TextProps {
    value: string,
    onClick?: () => void
}

const Text: React.FC<TextProps> = ({ value, onClick }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)
    
    return (
        <p onClick={onClick} className={"text text_" + theme}>{ value }</p>
    )
}

export default Text