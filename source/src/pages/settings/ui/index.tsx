import React from 'react'
import { Header } from '../../../widgets/header'
import { SettingsWidget } from '../../../widgets/settings-widget'
import './index.css'
import { useSelector } from 'react-redux'

export const SettingsPage = () => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <div className={'settings_container settings_container_' + theme}>
            <Header />
            <SettingsWidget />
        </div>
    )
}
