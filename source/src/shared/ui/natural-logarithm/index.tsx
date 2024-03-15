import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import FillExampleWithData from "../../lib/helpers/FillExampleWithData"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import { FocusElementAction } from "../../lib/enums/actions/FocusElementAction"
import './index.css'
import { setFocusElement } from "../../lib/helpers/setFocusElement"
import { StringLiteral } from "typescript"

interface NaturalLogarithmProps {
    value: Array<any>,
    index: number,
    color?: string
}

const NaturalLogarithm: React.FC<NaturalLogarithmProps> = ({ value, index }) => {
    const
        dispatch = useDispatch(),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        valueRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const valueElem = valueRef.current
        if (!valueElem) return

        valueElem.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.VALUE, index))

    }, [exampleData])

    return (
        <div data-tabIndex={index} className="natural-logarithm">
            <div data-parrent-index={index} className={"natural-logarithm__name natural-logarithm__name_" + theme}>ln</div>
            <div data-parrent-index={index} ref={valueRef} data-place={ExamplePlaces.VALUE} className={"natural-logarithm__value natural-logarithm__value_" + theme}><FillExampleWithData data={value} /></div>
        </div>
    )
}

export default NaturalLogarithm