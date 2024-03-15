import React from "react"
import { ExampleTypes } from "../enums/ExampleTypes"
import INT from "../../ui/int"
import SIGN from "../../ui/sign"
import SQRT from "../../ui/sqrt"
import Degree from "../../ui/degree"
import Fraction from "../../ui/fraction"
import TrigonometricFunction from "../../ui/trigonometric-function"
import NaturalLogarithm from "../../ui/natural-logarithm"
import DecimalLogarithm from "../../ui/decimal-logarithm"
import Module from "../../ui/module"
import Logarithm from "../../ui/logarithm"
import Parenthesis from "../../ui/parenthesis"
import Cursor from "../../ui/cursor"
import { useDispatch } from "react-redux"
import { MainExampleAction } from "../enums/actions/MainExampleAction"

interface FillExampleWithDataProps {
    data: Array<any>,
    wrapper?: boolean,
    status?: boolean
}

const FillExampleWithData: React.FC<FillExampleWithDataProps> = ({ data, wrapper, status }) => {
    const
        dispatch = useDispatch(),
        array: Array<React.ReactNode> = []
    
    let color: any = undefined
    if (status) color = '#85DA97'
    if (status === false) color = '#E09F9F'

    data.forEach((item: any) => {
        if (item.type === ExampleTypes.INT) array.push(<INT key={item.index} value={item.value} color={color} index={item.index} />)
        if (item.type === ExampleTypes.SIGN) array.push(<SIGN key={item.index} value={item.value} color={color} index={item.index} />) 
        if (item.type === ExampleTypes.EQUALS) array.push(<SIGN key={item.index} value={item.value} color={color} index={item.index} />) 
        if (item.type === ExampleTypes.CURSOR) array.push(<Cursor key={item.index} index={item.index} />) 
        if (item.type === ExampleTypes.PARENTHESIS) array.push(<Parenthesis key={item.index} value={item.value} color={color} />) 
        if (item.type === ExampleTypes.SQRT) array.push(<SQRT key={item.index} base={item.base} exponent={item.exponent} color={color} index={item.index} />)
        if (item.type === ExampleTypes.DEGREE) array.push(<Degree key={item.index} base={item.base} exponent={item.exponent} color={color} index={item.index} />)
        if (item.type === ExampleTypes.FRACTION) array.push(<Fraction key={item.index} numenator={item.numenator} denominator={item.denominator} color={color} index={item.index} />)
        if (item.type === ExampleTypes.LOG) array.push(<Logarithm key={item.index} base={item.base} value={item.value} color={color} index={item.index} />)
        if (item.type === ExampleTypes.LN) array.push(<NaturalLogarithm key={item.index} value={item.value} color={color} index={item.index} />)
        if (item.type === ExampleTypes.LG) array.push(<DecimalLogarithm key={item.index} value={item.value} color={color} index={item.index} />)
        if (item.type === ExampleTypes.MODULE) array.push(<Module key={item.index} value={item.value} color={color} index={item.index} />)
        if (item.type === ExampleTypes.SIN ||
            item.type === ExampleTypes.COS ||
            item.type === ExampleTypes.TAN ||
            item.type === ExampleTypes.CTG ||
            item.type === ExampleTypes.ARCSIN ||
            item.type === ExampleTypes.ARCCOS ||
            item.type === ExampleTypes.ARCTG ||
            item.type === ExampleTypes.ARCCTG
        ) array.push(<TrigonometricFunction key={item.index} name={item.type} value={item.value} index={item.index} />)
    })

    return (
        (!wrapper) ?
            <span style={{ display: 'flex', alignItems: 'center' }}>{array}</span>:
            <span onClick={() => {
                dispatch({ type: MainExampleAction.INSERT_CURSOR_IN_END_OF_EXAMPLE })
            }} style={{ display: 'flex', alignItems: 'center' }}>{array}</span>
    )
}

export default FillExampleWithData