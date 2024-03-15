import React from 'react'
import './index.css'

interface ButtonProps {
    isBorder: boolean,
    value: string,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ isBorder, value, onClick }) => {
    return (
        <button onClick={onClick} className={ (!isBorder) ? 'button': 'button button_border' }>{ value }</button>
    )
}

export default Button