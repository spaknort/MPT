import React from "react"
import { useSelector } from "react-redux"
import './index.css'

interface MenuButtonProps {
    onClick: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme) as string

    return (
        <div onClick={() => onClick()} className="menu-button">
            <div className={"menu-button__line menu-button__line_" + theme}></div>
            <div className={"menu-button__line menu-button__line_" + theme}></div>
            <div className={"menu-button__line menu-button__line_" + theme}></div>
        </div>
    )
}

export default MenuButton