import React from "react"
import './index.css'

interface SwitchProps {
    type?: boolean,
    onClick?: () => void
}

const Switch: React.FC<SwitchProps> = ({ type, onClick }) => {
    return (
        <label className="switch">
            <input onClick={onClick} readOnly checked={ type } type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch