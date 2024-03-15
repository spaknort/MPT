import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'

interface ArrowProps {
    onClick?: () => void
}

const Arrow: React.FC<ArrowProps> = ({ onClick }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <svg onClick={onClick} className='arrow' viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={ "arrow__path" + " arrow__path_" + theme } d="M2 8L1.27586 7.31034L0.619048 8L1.27586 8.68966L2 8ZM22 9C22.5523 9 23 8.55228 23 8C23 7.44772 22.5523 7 22 7V9ZM7.94253 0.310345L1.27586 7.31034L2.72414 8.68966L9.3908 1.68966L7.94253 0.310345ZM1.27586 8.68966L7.94253 15.6897L9.3908 14.3103L2.72414 7.31034L1.27586 8.68966ZM2 9H22V7H2V9Z"/>
        </svg>
    )
}

export default Arrow