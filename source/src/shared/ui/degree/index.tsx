import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import FillExampleWithData from "../../lib/helpers/FillExampleWithData"
import { setFocusElement } from "../../lib/helpers/setFocusElement"
import './index.css'

interface DegreeProps {
    exponent: Array<any>,
    base: Array<any>,
    index: number,
    color?: string
}

const Degree: React.FC<DegreeProps> = ({ exponent, base, index }) => {
    const
        dispatch = useDispatch(),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        baseRef = useRef<HTMLDivElement | null>(null),
        exponentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const
            baseElement = baseRef.current,
            exponentElement = exponentRef.current

        if (!baseElement) return
        if (!exponentElement) return

        baseElement.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.BASE, index))
        exponentElement.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.EXPONENT, index))
    }, [exampleData])

    return (
        <div data-index={index} className="degree">
            <div ref={exponentRef} data-place={ExamplePlaces.EXPONENT} data-parrent-index={index} className={"degree__exponent degree__exponent_" + theme}><FillExampleWithData data={exponent} /></div>
            <div ref={baseRef} data-place={ExamplePlaces.BASE} data-parrent-index={index} className={"degree__base degree__base_" + theme}><FillExampleWithData data={base} /></div>
        </div>
    )
}

export default Degree