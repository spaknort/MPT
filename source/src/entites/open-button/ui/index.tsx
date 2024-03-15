import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../../shared/ui/button'
import { LocalRoutes } from '../../../shared/config'

interface OpenButtonProps {
    link: LocalRoutes,
    isBorder: boolean,
    value: string
}

export const OpenButton: React.FC<OpenButtonProps> = ({ link, isBorder, value }) => {
    return (
        <NavLink to={link}>
            <Button isBorder={isBorder} value={value} />
        </NavLink>
    )
}