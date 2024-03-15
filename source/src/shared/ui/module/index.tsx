import React, { useEffect, useRef } from "react"
import FillExampleWithData from "../../lib/helpers/FillExampleWithData"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import { useDispatch, useSelector } from "react-redux"
import { setFocusElement } from "../../lib/helpers/setFocusElement"
import './index.css'

interface ModuleProps {
    value: Array<any>,
    index: number,
    color?: string
}

const Module: React.FC<ModuleProps> = ({ value, index }) => {
    const
        dispatch = useDispatch(),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        valueRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const valueElem = valueRef.current
        if (!valueElem) return
        
        valueElem.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.VALUE, index))
    }, [exampleData])

    return (
        <div data-index={index} className="module">
            <div data-parrent-index={index} className={"module__line module__line_" + theme}></div>
            <div data-parrent-index={index} data-place={ExamplePlaces.VALUE} ref={valueRef} className={"module__value module__value_" + theme}><FillExampleWithData data={value} /></div>
            <div data-parrent-index={index} className={"module__line module__line_" + theme}></div>
        </div>
    )
}

export default Module