import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import FillExampleWithData from "../../lib/helpers/FillExampleWithData"
import { FocusElementAction } from "../../lib/enums/actions/FocusElementAction"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import './index.css'
import { setFocusElement } from "../../lib/helpers/setFocusElement"

interface LogarithmProps {
    base: Array<any>,
    value: Array<any>,
    index: number,
    color?: string
}

const Logarithm: React.FC<LogarithmProps> = ({ base, value, index }) => {
    const
        dispatch = useDispatch(),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        baseRef = useRef<HTMLDivElement | null>(null),
        valueRef = useRef<HTMLDivElement | null>(null)

    useEffect (() => {
        const
            baseElem = baseRef.current,
            valueElem = valueRef.current

        if (!baseElem) return
        if (!valueElem) return

        baseElem.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.BASE, index))
        valueElem.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.VALUE, index))
        
    }, [exampleData])

    return (
        <div data-index={index} className="logarithm">
            <p className={"logarithm__name logarithm__name_" + theme}>log</p>
            <div data-parrent-index={index} data-place={ExamplePlaces.BASE} ref={baseRef} className={"logarithm__base logarithm__base_" + theme}>{ <FillExampleWithData data={base} /> }</div>
            <div data-parrent-index={index} data-place={ExamplePlaces.VALUE} ref={valueRef} className={"logarithm__value logarithm__value_" + theme}>{ <FillExampleWithData data={value} /> }</div>
        </div>
    )
}

export default Logarithm