import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Header } from "../../../widgets/header"
import InfoAboveExample from "../../../shared/ui/info-above-example"
import { MainExample } from "../../../entites/main-example"
import { Numpad } from "../../../widgets/numpad"
import './index.css'
import { LocalRoutes } from "../../../shared/config"
import { FocusElementAction } from "../../../shared/lib/enums/actions/FocusElementAction"

export const SolvePage: React.FC = () => {
    const
        dispatch = useDispatch(),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        isTrue = useSelector((state: any) => state.InfoAboveExampleReducer.value),
        [exampleState, setExampleState] = useState()

    useEffect(() => {
        dispatch({ type: FocusElementAction.CHANGE_FOCUS_HTML_ELEMENT, element: null })
    }, [exampleState])

    return (
        <div className={'index index_' + theme}>
            <Header />
            <div className='info-container'>
                <InfoAboveExample isTrue={isTrue} />
                <MainExample page={LocalRoutes.solve} />
            </div>
            <Numpad page={LocalRoutes.solve} />
        </div>
    )
}