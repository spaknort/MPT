import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import FillExampleWithData from "../../lib/helpers/FillExampleWithData"
import './index.css'
import { setFocusElement } from "../../lib/helpers/setFocusElement"

interface FractionProps {
    numenator: Array<any>,
    denominator: Array<any>,
    index: number,
    color?: string
}

const Fraction: React.FC<FractionProps> = ({ numenator, denominator, index }) => {
    const
        dispatch = useDispatch(),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        numenatorRef = useRef<HTMLDivElement | null>(null),
        denominatorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const
            numenatorElem = numenatorRef.current,
            denominatorElem = denominatorRef.current

        if (!numenatorElem) return
        if (!denominatorElem) return

        numenatorElem.addEventListener('click', (e: MouseEvent) =>  setFocusElement(e, dispatch, ExamplePlaces.NUMENATOR, index))
        denominatorElem.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.DENOMINATOR, index))
    }, [exampleData])

    return (
        <div data-index={index} className="fraction">
            <div ref={numenatorRef} data-place={ExamplePlaces.NUMENATOR} data-parrent-index={index} className={"fraction__numenator fraction__numenator_" + theme}><FillExampleWithData data={numenator} /></div>
            <div data-parrent-index={index} className={"fraction__line fraction__line_" + theme}></div>
            <div ref={denominatorRef} data-place={ExamplePlaces.DENOMINATOR} data-parrent-index={index} className={"fraction__denominator fraction__denominator_" + theme}><FillExampleWithData data={denominator} /></div>
        </div>
    )
}

export default Fraction