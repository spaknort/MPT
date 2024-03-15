import React, { useState } from "react"
import { BackArrow } from "../../../entites/back-arrow"
import { NumberOfPoints } from "../../../entites/number-of-points"
import { Shared } from "../../../features/shared"
import { useSelector } from "react-redux"
import MenuButton from "../../../shared/ui/menu-button"
import './index.css'
import Cross from "../../../shared/ui/cross"
import Menu from "./menu"
import { LocalRoutes } from "../../../shared/config"

export const Header: React.FC = () => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)
    const [menuDisplay, setMenuDisplay] = useState<boolean>(false)
    const url = new URL(window.location.href)
    
    return (
        <header className={"header" + " header_" + theme}>
            <div className="container">
                <div className="header__inner">
                    {
                        (url.pathname === LocalRoutes.index || url.pathname === LocalRoutes.solve) ?
                            (!menuDisplay) ? <MenuButton onClick={() => setMenuDisplay(true)} />: <Cross onClick={() => setMenuDisplay(false)} />:
                        <BackArrow />
                    }
                    <Menu isVisible={menuDisplay}/>
                    <NumberOfPoints />
                    <Shared />
                </div>
            </div>
        </header>
    )
}