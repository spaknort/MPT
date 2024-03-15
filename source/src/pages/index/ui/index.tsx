import React, { useEffect } from 'react'
import { Header } from '../../../widgets/header'
import { Numpad } from '../../../widgets/numpad'
import { MainExample } from '../../../entites/main-example'
import { useDispatch, useSelector } from 'react-redux'
import InfoAboveExample from '../../../shared/ui/info-above-example'
import UrlCopied from '../../../shared/ui/url-copied'
import { LocalRoutes } from '../../../shared/config'
import { FocusElementAction } from '../../../shared/lib/enums/actions/FocusElementAction'
import './index.css'

export const IndexPage: React.FC = () => {
    const 
        dispatch = useDispatch(),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        isTrue = useSelector((state: any) => state.InfoAboveExampleReducer.value),
        isShow = useSelector((state: any) => state.URLElementReducer.isShow)

    useEffect(() => {
        dispatch({ type: FocusElementAction.CHANGE_FOCUS_HTML_ELEMENT, element: null })
    }, [])

    return (
        <div className={'index index_' + theme}>
            <Header />
            <div className='info-container'>
                <InfoAboveExample isTrue={isTrue} />
                <MainExample page={LocalRoutes.index} />
            </div>
            <UrlCopied isVisible={isShow} />
            <Numpad page={LocalRoutes.index} />
        </div>
    )
}
