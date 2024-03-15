import React from 'react'
import { Header } from '@/widgets/header'
import { SettingsWidget } from '@/widgets/settings-widget'
import './index.css'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector'

export const SettingsPage = () => {
    const theme = useTypedSelector(state => state.ThemeReducer.theme)

    return (
        <div className={'settings_container settings_container_' + theme}>
            <Header />
            <SettingsWidget />
        </div>
    )
}
