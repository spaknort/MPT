import React, { useEffect, useRef } from "react"
import FillExampleWithData from "../../lib/helpers/FillExampleWithData"
import { useDispatch, useSelector } from "react-redux"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import { setFocusElement } from "../../lib/helpers/setFocusElement"
import './index.css'

interface DecimalLogarithmProps {
    value: Array<any>,
    index: number,
    color?: string
}

const DecimalLogarithm: React.FC<DecimalLogarithmProps> = ({ value, index }) => {
    const
        dispatch = useDispatch(),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        exampleData = useSelector((state: any) => state.MainExampleReducer.theme),
        valueRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const valueElem = valueRef.current
        if (!valueElem) return

        valueElem.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.VALUE, index))
    }, [exampleData])

    return (
        <div data-index={index} className="decimal-logarithm">
            <div data-parrent-index={index} className={"decimal-logarithm__name decimal-logarithm__name_" + theme}>lg</div>
            <div data-parrent-index={index} ref={valueRef} data-place={ExamplePlaces.VALUE} className={"decimal-logarithm__value decimal-logarithm__value_" + theme}><FillExampleWithData data={value} /></div>
        </div>
    )
}

export default DecimalLogarithm