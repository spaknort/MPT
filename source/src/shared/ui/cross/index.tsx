import React from "react"
import { useSelector } from "react-redux"
import './index.css'

interface CrossProps {
    onClick: () => void
}

const Cross: React.FC<CrossProps> = ({ onClick }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme) as string

    return (
        <div onClick={() => onClick()} className="cross">
            <div className={"cross__line cross__line_" + theme}></div>
            <div className={"cross__line cross__line_" + theme}></div>
        </div>
    )
}

export default Cross