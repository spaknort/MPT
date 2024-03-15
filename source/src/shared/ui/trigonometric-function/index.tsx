import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import INT from "../int"
import { FocusElementAction } from "../../lib/enums/actions/FocusElementAction"
import { ExampleTypes } from "../../lib/enums/ExampleTypes"
import SIGN from "../sign"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import './index.css'
import { setFocusElement } from "../../lib/helpers/setFocusElement"

interface TrigonometricFunctionProps {
    name: string,
    value: Array<any>,
    index: number
}

const TrigonometricFunction: React.FC<TrigonometricFunctionProps> = ({ name, value, index }) => {
    const 
        dispatch = useDispatch(),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        valueRef = useRef<HTMLDivElement | null>(null),
        [valueState, setValueState] = useState<Array<any>>([])

    let valueArr: Array<any> = []

    useEffect(() => {
        const valueElem = valueRef.current
        if (!valueElem) return

        valueElem.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.VALUE, index))
        
        valueArr = []
        value.forEach((item: any) => {
            if (item.type === ExampleTypes.INT) valueArr.push(<INT key={item.index} value={item.value} index={item.index} />)
            if (item.type === ExampleTypes.SIGN || item.type === ExampleTypes.PARENTHESIS) valueArr.push(<SIGN key={item.index} value={item.value} index={item.index} />)
        })
        
        setValueState(valueArr)
    }, [exampleData])

    return (
        <div data-index={index} className="trigonometric-function">
            <p className={"trigonometric-function__name trigonometric-function__name_" + theme}>{ name.toLowerCase() }</p>
            <div ref={valueRef} data-place={ExamplePlaces.VALUE} data-parrent-index={index} className={"trigonometric-function__value trigonometric-function__value_" + theme + " trigonometric-function__value_" + name.toLowerCase()}>
                {valueState}
            </div>
        </div>
    )
}

export default TrigonometricFunction