import React, { useEffect, useState } from "react"
import NumpadButton from "../../../shared/ui/numpad-button"
import { ExampleTypes } from "../../../shared/lib/enums/ExampleTypes"
import { NumpadColor } from "../../../shared/lib/enums/NumpadColor"
import { useDispatch, useSelector } from "react-redux"
import { MainExampleAction } from "../../../shared/lib/enums/actions/MainExampleAction"
import { IndexForElementAction } from "../../../shared/lib/enums/actions/IndexForElementAction"
import { LocalRoutes } from "../../../shared/config"
import { processingUserResponse } from "../../../widgets/numpad/lib/helpers/processingUserResponse"
import './index.css'
import { sendOrderDataInServer } from "../lib/api/sendOrderDataInServer"

interface NumpadNumbersProps {
    isVisible: boolean,
    page: LocalRoutes,
    getElementForInsertData: (exampleData: Array<any>, focusElement: HTMLElement) => Array<any>
}

interface INumpadButtonsData {
    onClick: Function,
    type?: ExampleTypes | string,
    color?: NumpadColor,
    className?: string,
    isDisabled?: boolean,
    value: string
}

export const NumpadNumbers: React.FC<NumpadNumbersProps> = ({ isVisible, page, getElementForInsertData }) => {
    const
        dispatch = useDispatch(),
        focusElement = useSelector((state: any) => state.FocusElementReducer.element) as HTMLElement,
        indexForElement = useSelector((state: any) => state.IndexForElementReducer.value),
        exampleData: Array<any> = useSelector((state: any) => state.MainExampleReducer.data),
        [divMulPlusPointState, setDivMulPlusPointState] = useState<boolean>(false),
        [minusState, setMinusState] = useState<boolean>(false),
        [zeroState, setZeroState] = useState<boolean>(false),
        [equalsState, setEqualsState] = useState<boolean>(false),
        [digitalState, setDigitalState] = useState<boolean>(false),
        numpadButtonsData: Array<INumpadButtonsData> = [
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '7'},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '8'},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '9'},
            {onClick: addElementInExample, type: ExampleTypes.SIGN, isDisabled: divMulPlusPointState, value: '*'},
            {onClick: addElementInExample, type: ExampleTypes.EQUALS, isDisabled: equalsState, value: '='},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '4'},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '5'},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '6'},
            {onClick: addElementInExample, type: ExampleTypes.SIGN, isDisabled: divMulPlusPointState, value: '/'},
            {onClick: deleteExample, color: NumpadColor.RED, value: 'AC'},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '1'},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '2'},
            {onClick: addElementInExample, type: ExampleTypes.INT, isDisabled: digitalState, value: '3'},
            {onClick: addElementInExample, type: ExampleTypes.SIGN, isDisabled: divMulPlusPointState, value: '+'},
            {onClick: deleteElementInExample, color: NumpadColor.RED, value: 'C'},
            {onClick: addElementInExample, type: ExampleTypes.INT, className: 'zero', isDisabled: zeroState, value: '0'},
            {onClick: addElementInExample, type: ExampleTypes.SIGN, isDisabled: divMulPlusPointState, value: '.'},
            {onClick: sendOrderDataInServer, type: ExampleTypes.SIGN, isDisabled: minusState, value: '-'},
            {onClick: () => {}, color: NumpadColor.GREEN, value: 'OK'},
        ]
    
    let itemCount = 100

    useEffect(() => {
        // const data = getElementForInsertData(exampleData, focusElement)
        
        // if (!stateIsEmpty(data)) {
        //     setDigitalState(false);
        //     (!lastSymbolIsSign(data) && !lastSymbolIsInt(data) && !lastSymbolIsParenthesis(data) && !lastSymbolIsCursor(data)) ? setDigitalState(true): setDigitalState(false)
        // }
        // else setDigitalState(false);

        // (stateIsEmpty(data) || lastSymbolIsSign(data)) ? setDivMulPlusPointState(true): setDivMulPlusPointState(false);
        // (!stateIsEmpty(data) && lastSymbolIsSign(data)) ? setMinusState(true): setMinusState(false);
        // (stateIsEmpty(data)) ? setZeroState(true): setZeroState(false);
       
        // (data.length < 3 || !stateHaveSign(data) || lastSymbolIsSign(data)) ? setEqualsState(true): setEqualsState(false)
    }, [exampleData, focusElement])

    function addElementInExample (type: ExampleTypes, value: string) {
        const element = {
            type,
            value: (type === ExampleTypes.INT) ? Number(value): value,
            index: indexForElement
        }

        if (focusElement !== null) {
            const
                indexForElementInserted = focusElement.getAttribute('data-parrent-index'),
                placeForElementInserted = focusElement.getAttribute('data-place')

            dispatch({
                type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE_BY_INDEX,
                data: element,
                indexOfElementInserted: Number(indexForElementInserted),
                placeOfElementInserted: placeForElementInserted
            })
        }
        else dispatch({ type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE, data: element })

        dispatch({ type: IndexForElementAction.INDEX_INCREMENT })
    }

    function deleteElementInExample () {
        if (focusElement !== null) {
            const
                indexForElementInserted = focusElement.getAttribute('data-parrent-index'),
                placeForElementInserted = focusElement.getAttribute('data-place')

            dispatch({
                type: MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE_BY_INDEX,
                indexOfElementInserted: Number(indexForElementInserted),
                placeOfElementInserted: placeForElementInserted
            })
        }
        else dispatch({ type: MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE })
    }

    function deleteExample () { dispatch({ type: MainExampleAction.DELETE_EXAMPLE }) }

    return (
        <div className={"numpad__numbers numpad__numbers_" + ((isVisible) ? 'visible': 'hidden')}>
            {
                numpadButtonsData.map(item => {
                    itemCount++
                    if (item.value !== 'OK') return <NumpadButton key={itemCount} isDisabled={item.isDisabled} onClick={() => item.onClick(item.type, item.value)} color={item.color} className={item.className} value={item.value} />
                    else {
                        return <NumpadButton 
                            onClick={() => processingUserResponse(exampleData, indexForElement, page, dispatch)}
                            key={itemCount} isDisabled={item.isDisabled} color={item.color} className={item.className} value={item.value}
                        />
                    }
                })
            }
        </div>
    )
}