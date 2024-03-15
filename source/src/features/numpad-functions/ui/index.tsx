import React, { Dispatch, useEffect, useState } from "react"
import NumpadButton from "../../../shared/ui/numpad-button"
import { ExampleTypes } from "../../../shared/lib/enums/ExampleTypes"
import { useDispatch, useSelector } from "react-redux"
import { MainExampleAction } from "../../../shared/lib/enums/actions/MainExampleAction"
import { NumpadColor } from "../../../shared/lib/enums/NumpadColor"
import { IndexForElementAction } from "../../../shared/lib/enums/actions/IndexForElementAction"
import { IFRACTION } from "../../../shared/lib/interfaces/examples/IFRACTION"
import SVGSelector from "./svg-selector"
import { SVGIconsID } from "../../../shared/lib/enums/SVGIconsID"
import { ILOGARITHM } from "../../../shared/lib/interfaces/examples/ILOGARITHM"
import { IPARENTHESIS } from "../../../shared/lib/interfaces/examples/IPARENTHESIS"
import { IMODULE } from "../../../shared/lib/interfaces/examples/IMODULE"
import { lastSymbolIsSign } from "../lib/helpers/lastSymbolIsSign"
import { stateIsEmpty } from "../lib/helpers/stateIsEmpty"
import { LocalRoutes } from "../../../shared/config"
import './index.css'
import { processingUserResponse } from "../../../widgets/numpad/lib/helpers/processingUserResponse"
import { lastSymbolIsParenthesis } from "../lib/helpers/lastSymbolIsParenthesis"

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
        focusElement = useSelector((state: any) => state.FocusElementReducer.element) as HTMLElement,
        indexForElement = useSelector((state: any) => state.IndexForElementReducer.value),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
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
    
    let itemCount = 200

    useEffect(() => {
        const data = getElementForInsertData(exampleData, focusElement)

        // if (!stateIsEmpty(data)) {
        //     setFunctionState(false);
        //     (!lastSymbolIsSign(data) && !lastSymbolIsParenthesis(data)) ? setFunctionState(true): setFunctionState(false)
        // }
        // else setFunctionState(false)
    }, [exampleData, focusElement])

    function addElement (item: any) {
        if (focusElement !== null) {
            dispatch({
                type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE_BY_INDEX,
                data: item,
                indexOfElementInserted: Number(indexForElementInserted),
                placeOfElementInserted: placeForElementInserted
            })
        }

        else dispatch({ type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE, data: item })
        
        dispatch({ type: IndexForElementAction.INDEX_INCREMENT })
    }

    function addSQRTOrDegree (
        type: ExampleTypes,
        exponent = [],
        base = []
    ) {
        const element = {
            type,
            exponent,
            base,
            index: indexForElement
        }

        addElement(element)
    }

    function addTrigonometricFunction (type: ExampleTypes, value = []) {
        const trigonometricFunction = {
            type,
            value,
            index: indexForElement
        }

        addElement(trigonometricFunction)
    }

    function addFraction (
        type: ExampleTypes,
        numenator = [],
        denominator = []
    ) {
        const fraction: IFRACTION = {
            type,
            numenator,
            denominator,
            index: indexForElement
        }

        addElement(fraction)
    }

    function addLogarithm (type: ExampleTypes, base = [], value = []) {
        const logarithm: ILOGARITHM = {
            type,
            base,
            value,
            index: indexForElement
        }

        addElement(logarithm)
    }

    function addNaturalLogarithm (type: ExampleTypes, value = []) {
        const ln = {
            type,
            value,
            index: indexForElement
        }

        addElement(ln)
    }

    function addDecimicalLogarithm (type: ExampleTypes, value = []) {
        const lg = {
            type,
            value,
            index: indexForElement
        }

        addElement(lg)
    }

    function addParenthesis (type: ExampleTypes, value: string) {
        const parenthesis: IPARENTHESIS = {
            type,
            value,
            index: indexForElement
        }

        addElement(parenthesis)
    }

    function addModule (type: ExampleTypes, value = []) {
        const module: IMODULE = {
            type,
            value,
            index: indexForElement
        }

        addElement(module)
    }

    function addOpenParenthesis(type: ExampleTypes) { addParenthesis(type, '(') }
    function addCloseParenthesis(type: ExampleTypes) { addParenthesis(type, ')') }
    function deleteElementInExample () { dispatch({ type: MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE }) }
    function deleteExample () { dispatch({ type: MainExampleAction.DELETE_EXAMPLE }) }

    return (
        <div className={"numpad__functions numpad__functions_" + ((!isVisible) ? 'visible': 'hidden')}>
            {
                numpadButtonsData.map(item => {
                    itemCount++
                    if (item.value !== 'OK') {
                        if (item.children !== undefined) return <NumpadButton key={itemCount} isDisabled={item.isDisabled} onClick={() => item.onClick(item.type)} >{ item.children as React.ReactNode }</NumpadButton>
                        else return <NumpadButton key={itemCount} isDisabled={item.isDisabled} onClick={() => item.onClick(item.type)} value={item.value} color={item.color} />
                    }
                    else {
                        return <NumpadButton 
                            onClick={() => processingUserResponse(exampleData, indexForElement, page, dispatch)}
                            isDisabled={item.isDisabled} value={item.value} color={item.color} key={itemCount}
                        />
                    }
                })
            }
        </div>
    )
}

export default NumpadFunctions