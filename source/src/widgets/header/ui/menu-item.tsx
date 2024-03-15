import React, { ReactNode } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import './menu-item.css'

interface MenuItemProps {
    svg: ReactNode,
    to: string,
    value: string
}

const MenuItem: React.FC<MenuItemProps> = ({ svg, to, value }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <Link to={to}>
            <div className={"menu__item menu__item_" + theme}>
                <div className={"menu__item-inner menu__item-inner_" + theme}>
                    {svg}
                    <p>{value}</p>
                </div>
            </div>
        </Link>
    )
}

export default MenuItem