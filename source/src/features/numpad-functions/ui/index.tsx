import React, { useEffect, useState } from "react"
import NumpadButton from "@/shared/ui/numpad-button"
import { ExampleTypes } from "@/shared/lib/enums/ExampleTypes"
import { useDispatch, useSelector } from "react-redux"
import { MainExampleAction } from "@/shared/lib/enums/actions/MainExampleAction"
import { NumpadColor } from "@/shared/lib/enums/NumpadColor"
import { IFRACTION } from "@/shared/lib/interfaces/examples/IFRACTION"
import SVGSelector from "./svg-selector"
import { SVGIconsID } from "@/shared/lib/enums/SVGIconsID"
import { ILOGARITHM } from "@/shared/lib/interfaces/examples/ILOGARITHM"
import { IPARENTHESIS } from "@/shared/lib/interfaces/examples/IPARENTHESIS"
import { IMODULE } from "@/shared/lib/interfaces/examples/IMODULE"
import { lastSymbolIsSign } from "../lib/helpers/lastSymbolIsSign"
import { stateIsEmpty } from "../lib/helpers/stateIsEmpty"
import { LocalRoutes } from "@/shared/config"
import './index.css'
import { processingUserResponse } from "@/widgets/numpad/lib/helpers/processingUserResponse"
import { lastSymbolIsParenthesis } from "../lib/helpers/lastSymbolIsParenthesis"
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector"
import { getStateWithOutCursor } from "@/shared/lib/helpers/getStateWithOutCursor"
import { addElement } from "../lib/helpers/addElement"

interface NumpadFunctionsProps {
    isVisible: boolean,
    page: LocalRoutes,
    getElementForInsertData: (exampleData: Array<any>, focusElement: HTMLElement) => Array<any>
}

interface INumpadButtonsData {
    onClick: Function,
    type?: ExampleTypes | string,
    color?: NumpadColor,
    className?: string,
    value?: string,
    isDisabled?: boolean,
    children?: HTMLOrSVGElement | React.ReactNode
}

export const NumpadFunctions: React.FC<NumpadFunctionsProps> = ({ isVisible, page, getElementForInsertData }) => {
    const
        dispatch = useDispatch(),
        focusElement = useTypedSelector(state => state.FocusElementReducer.element) as HTMLElement,
        indexForElement = useTypedSelector(state => state.IndexForElementReducer.value),
        exampleData = useTypedSelector(state => state.MainExampleReducer.data),
        indexForElementInserted = focusElement?.getAttribute('data-parrent-index'),
        placeForElementInserted = focusElement?.getAttribute('data-place'),
        [functionState, setFunctionState] = useState<boolean>(false),
        numpadButtonsData: Array<INumpadButtonsData> = [
            {onClick: addTrigonometricFunction, type: ExampleTypes.SIN, isDisabled: functionState, value: 'sin'},
            {onClick: addTrigonometricFunction, type: ExampleTypes.COS, isDisabled: functionState, value: 'cos'},
            {onClick: addTrigonometricFunction, type: ExampleTypes.TAN, isDisabled: functionState, value: 'tg'},
            {onClick: addTrigonometricFunction, type: ExampleTypes.ARCSIN, isDisabled: functionState, value: 'arcsin'},
            {onClick: addTrigonometricFunction, type: ExampleTypes.CTG, isDisabled: functionState, value: 'ctg'},
            {onClick: addSQRTOrDegree, type: ExampleTypes.DEGREE, isDisabled: functionState, children: <SVGSelector id={SVGIconsID.DEGREE} />},
            {onClick: addFraction, type: ExampleTypes.FRACTION, isDisabled: functionState, children: <SVGSelector id={SVGIconsID.FRACTION} />},
            {onClick: addLogarithm, type: ExampleTypes.LOG, isDisabled: functionState, children: <SVGSelector id={SVGIconsID.LOG} />},
            {onClick: addTrigonometricFunction, type: ExampleTypes.ARCCOS, isDisabled: functionState, value: 'arccos'},
            {onClick: deleteExample, color: NumpadColor.RED, value: 'AC'},
            {onClick: addOpenParenthesis, type: ExampleTypes.PARENTHESIS, value: '('},
            {onClick: addCloseParenthesis, type: ExampleTypes.PARENTHESIS, value: ')'},
            {onClick: addModule, type: ExampleTypes.MODULE, isDisabled: functionState, children: <SVGSelector id={SVGIconsID.MODULE} />},
            {onClick: addTrigonometricFunction, type: ExampleTypes.ARCTG, isDisabled: functionState, value: 'arctg'},
            {onClick: deleteElementInExample, color: NumpadColor.RED, value: 'C'},
            {onClick: addSQRTOrDegree, type: ExampleTypes.SQRT, isDisabled: functionState, value: 'sqrt'},
            {onClick: addDecimicalLogarithm, type: ExampleTypes.LG, isDisabled: functionState, children: <SVGSelector id={SVGIconsID.LG} />},
            {onClick: addNaturalLogarithm, type: ExampleTypes.LN, isDisabled: functionState, children: <SVGSelector id={SVGIconsID.LN} />},
            {onClick: addTrigonometricFunction, type: ExampleTypes.ARCCTG, isDisabled: functionState, value: 'arcctg' },
            {onClick: () => {}, color: NumpadColor.GREEN, value: 'OK'}
        ]
    
    useEffect(() => {
        const data = getStateWithOutCursor(getElementForInsertData(exampleData, focusElement))

        if (!stateIsEmpty(data)) {
            setFunctionState(false);
            (!lastSymbolIsSign(data) && !lastSymbolIsParenthesis(data)) ? setFunctionState(true): setFunctionState(false)
        }
        else setFunctionState(false)
    }, [exampleData, focusElement])

    function addSQRTOrDegree (type: ExampleTypes, exponent = [], base = []) {
        const element = { type, exponent, base, index: indexForElement }
        addElement(element, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addTrigonometricFunction (type: ExampleTypes, value = []) {
        const trigonometricFunction = { type, value, index: indexForElement }
        addElement(trigonometricFunction, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addFraction (type: ExampleTypes, numenator = [], denominator = []) {
        const fraction: IFRACTION = { type, numenator, denominator, index: indexForElement }
        addElement(fraction, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addLogarithm (type: ExampleTypes, base = [], value = []) {
        const logarithm: ILOGARITHM = { type, base, value, index: indexForElement }
        addElement(logarithm, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addNaturalLogarithm (type: ExampleTypes, value = []) {
        const ln = { type, value, index: indexForElement }
        addElement(ln, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addDecimicalLogarithm (type: ExampleTypes, value = []) {
        const lg = { type, value, index: indexForElement }
        addElement(lg, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addParenthesis (type: ExampleTypes, value: string) {
        const parenthesis: IPARENTHESIS = { type, value, index: indexForElement }
        addElement(parenthesis, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addModule (type: ExampleTypes, value = []) {
        const module: IMODULE = { type, value, index: indexForElement }
        addElement(module, focusElement, indexForElementInserted, placeForElementInserted, dispatch)
    }

    function addOpenParenthesis(type: ExampleTypes) { addParenthesis(type, '(') }
    function addCloseParenthesis(type: ExampleTypes) { addParenthesis(type, ')') }
    function deleteElementInExample () { dispatch({ type: MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE }) }
    function deleteExample () { dispatch({ type: MainExampleAction.DELETE_EXAMPLE }) }

    return (
        <div className={"numpad__functions numpad__functions_" + ((!isVisible) ? 'visible': 'hidden')}>
            {
                numpadButtonsData.map((item, index) => {
                    if (item.value !== 'OK') {
                        if (item.children !== undefined) return <NumpadButton key={index} isDisabled={item.isDisabled} onClick={() => item.onClick(item.type)} >{ item.children as React.ReactNode }</NumpadButton>
                        else return <NumpadButton key={index} isDisabled={item.isDisabled} onClick={() => item.onClick(item.type)} value={item.value} color={item.color} />
                    }
                    else {
                        return <NumpadButton 
                            onClick={() => processingUserResponse(exampleData, indexForElement, page, dispatch)}
                            isDisabled={item.isDisabled} value={item.value} color={item.color} key={index}
                        />
                    }
                })
            }
        </div>
    )
}

export default NumpadFunctions