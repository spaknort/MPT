import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FocusElementAction } from "../../../shared/lib/enums/actions/FocusElementAction"
import FillExampleWithData from "../../../shared/lib/helpers/FillExampleWithData"
import { LocalRoutes } from "../../../shared/config"
import { getExampleById } from "../lib/api/getExampleById"
import { MainExampleAction } from "../../../shared/lib/enums/actions/MainExampleAction"
import { IndexForElementAction } from "../../../shared/lib/enums/actions/IndexForElementAction"
import { generateExample } from "../lib/helpers/generateExample"
import './index.css'

interface MainExampleProps {
    page: LocalRoutes
}

export const MainExample: React.FC<MainExampleProps> = ({ page }) => {
    let
        dispatch = useDispatch(),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        focusElement = useSelector((state: any) => state.FocusElementReducer.element) as HTMLElement,
        trigerStore = useSelector((state: any) => state.TrigerForLocalExampleReducer.data),
        [exampleState, setExampleState] = useState(),
        [wrapperState, setWrapperState] = useState<boolean>(false),
        mainExampleRef = useRef<HTMLDivElement | null>(null),
        url = new URL(window.location.href)

    useEffect(() => {
        if (page === LocalRoutes.solve && url.searchParams.get('id') !== null) {
            getExampleById(Number(url.searchParams.get('id'))).then((example: Array<any>) => {
                dispatch({ type: MainExampleAction.DELETE_EXAMPLE })
                dispatch({ type: MainExampleAction.ADD_EXAMPLE, example: example })
                dispatch({ type: IndexForElementAction.SET_INDEX, value: example[example.length - 1].index + 2 })
            })
        }

        if (page === LocalRoutes.solve && url.searchParams.get('localExample') === 'true') {
            const example = generateExample()
            setWrapperState(true)
            
            dispatch({ type: MainExampleAction.DELETE_EXAMPLE })
            dispatch({ type: MainExampleAction.ADD_EXAMPLE, example: example })
            dispatch({ type: IndexForElementAction.SET_INDEX, value: example[example.length - 1].index + 2 })
            dispatch({ type: MainExampleAction.INSERT_CURSOR_IN_END_OF_EXAMPLE })
        }
    }, [exampleState, trigerStore])

    useEffect(() => {
        const mainExampleElem = mainExampleRef.current
        if (!mainExampleElem) return

        mainExampleElem.addEventListener('click', (e: MouseEvent) => {
            const
                clickedElement = e.target as HTMLDivElement,
                clickedElementIndex = Number(clickedElement.getAttribute('data-index'))

            if (focusElement === null) {
                dispatch({ type: MainExampleAction.INSERT_CURSOR_IN_EXAMPLE_BY_INDEX, indexOfElementInserted: clickedElementIndex })
            }
        })
    }, [])

    return (
        <div className="main-example">
            <div className="container">
                <div className="main-example__inner">
                    <div onClick={() => { 
                        dispatch({ type: FocusElementAction.CHANGE_FOCUS_HTML_ELEMENT, element: null })
                        dispatch({ type: MainExampleAction.INSERT_CURSOR_IN_START_OF_EXAMPLE })
                    }} className="main-exmple__block"></div>
                    <div ref={mainExampleRef} className="main-example__exm"><FillExampleWithData wrapper={wrapperState} data={exampleData} /></div>
                    <div onClick={() => { 
                        dispatch({type: FocusElementAction.CHANGE_FOCUS_HTML_ELEMENT, element: null})
                        dispatch({ type: MainExampleAction.INSERT_CURSOR_IN_END_OF_EXAMPLE })
                    }} className="main-exmple__block"></div>
                </div>
            </div>
        </div>
    )
}