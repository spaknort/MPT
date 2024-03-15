import React from "react"
import Switch from "../../../shared/ui/switch"
import './index.css'
import { useSelector } from "react-redux"

interface SwitchCheckboxProps {
    value: string,
    type?: boolean,
    onClick: () => void
}

export const SwitchCheckbox: React.FC<SwitchCheckboxProps> = ({ value, type, onClick }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <div  className="switch-checkbox">
            <p className={"switch-checkbox__title switch-checkbox__title_" + theme}>{ value }</p>
            <Switch onClick={() => onClick()} type={type} />
        </div>
    )
}