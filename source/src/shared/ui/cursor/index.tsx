import React from "react"
import './index.css'
import { useSelector } from "react-redux"

interface CursorProps {
    index: number
}

const Cursor: React.FC<CursorProps> = ({ index }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <div data-index={index} className={"cursor cursor_" + theme}></div>
    )
}

export default Cursor