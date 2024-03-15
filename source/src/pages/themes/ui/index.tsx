import React from 'react'
import { Header } from '../../../widgets/header'
import { Theme } from '../../../features/theme'
import { Themes } from '../../../shared/lib/enums/Themes'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeAction } from '../../../shared/lib/enums/actions/ThemeAction'

export const ThemesPage = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: any) => state.ThemeReducer.theme)
    return (
        <div className={'themes-container themes-container_' + theme}>
            <Header />
            <div className="container">
                <div className="themes__inner">
                    <Theme onClick={() => { dispatch({type: ThemeAction.CHANGE_THEME, theme: Themes.DEFAULT}) }} theme={Themes.DEFAULT} value='Стандартная' price={0} />
                    <Theme onClick={() => { dispatch({type: ThemeAction.CHANGE_THEME, theme: Themes.DARK}) }} theme={Themes.DARK} value='Темная' price={500} />
                    <Theme onClick={() => { dispatch({type: ThemeAction.CHANGE_THEME, theme: Themes.PINK}) }} theme={Themes.PINK} value='Розовая' price={1000} />
                </div>
            </div>
        </div>
    )
}
