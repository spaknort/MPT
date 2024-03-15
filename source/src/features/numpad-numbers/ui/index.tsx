import React, { useEffect, useState } from "react"
import NumpadButton from "@/shared/ui/numpad-button"
import { ExampleTypes } from "@/shared/lib/enums/ExampleTypes"
import { NumpadColor } from "@/shared/lib/enums/NumpadColor"
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { MainExampleAction } from "@/shared/lib/enums/actions/MainExampleAction"
import { LocalRoutes } from "@/shared/config"
import { processingUserResponse } from "@/widgets/numpad/lib/helpers/processingUserResponse"
import './index.css'
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector"
import { stateIsEmpty } from "../lib/helpers/stateIsEmpty"
import { lastSymbolIsSign } from "../lib/helpers/lastSymbolIsSign"
import { lastSymbolIsInt } from "../lib/helpers/lastSymbolIsInt"
import { lastSymbolIsParenthesis } from "../lib/helpers/lastSymbolIsParenthesis"
import { lastSymbolIsCursor } from "../lib/helpers/lastSymbolIsCursor"
import { stateHaveSign } from "../lib/helpers/stateHaveSign"
import { addElementInExample } from "../lib/helpers/addElementInExample"
import { Dispatch, UnknownAction } from "redux"
import { deleteElementInExample } from "../lib/helpers/deleteElementInExample"
import { getStateWithOutCursor } from "@/shared/lib/helpers/getStateWithOutCursor"
import { RootType } from "@/store"

interface NumpadNumbersProps {
    isVisible: boolean,
    page: LocalRoutes,
    getElementForInsertData: (exampleData: Array<any>, focusElement: HTMLElement) => Array<any>
}

interface INumpadButtonsData {
    onClick: (
        type?: ExampleTypes,
        value?: string,
        indexForElement?: number,
        focusElement?: HTMLElement,
        dispatch?: Dispatch<UnknownAction>
    ) => void,
    type?: ExampleTypes,
    color?: NumpadColor,
    className?: string,
    isDisabled?: boolean,
    value: string
}

export const NumpadNumbers: React.FC<NumpadNumbersProps> = ({ isVisible, page, getElementForInsertData }) => {
    const
        dispatch = useDispatch(),
        focusElement = useTypedSelector(state => state.FocusElementReducer.element) as HTMLElement,
        indexForElement = useTypedSelector(state => state.IndexForElementReducer.value),
        exampleData: Array<any> = useTypedSelector(state => state.MainExampleReducer.data),
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
            {onClick: addElementInExample, type: ExampleTypes.SIGN, isDisabled: minusState, value: '-'},
            {onClick: () => {}, color: NumpadColor.GREEN, value: 'OK'},
        ]
    
    useEffect(() => {
        const data = getStateWithOutCursor(getElementForInsertData(exampleData, focusElement))

        if (!stateIsEmpty(data)) {
            setDigitalState(false);
            (!lastSymbolIsSign(data) && !lastSymbolIsInt(data) && !lastSymbolIsParenthesis(data) && !lastSymbolIsCursor(data)) ? setDigitalState(true): setDigitalState(false)
        }
        else setDigitalState(false);

        (stateIsEmpty(data) || lastSymbolIsSign(data)) ? setDivMulPlusPointState(true): setDivMulPlusPointState(false);
        (!stateIsEmpty(data) && lastSymbolIsSign(data)) ? setMinusState(true): setMinusState(false);
        (stateIsEmpty(data)) ? setZeroState(true): setZeroState(false);
       
        (data.length < 3 || !stateHaveSign(data) || lastSymbolIsSign(data)) ? setEqualsState(true): setEqualsState(false)
    }, [exampleData, focusElement])

    function deleteExample () { dispatch({ type: MainExampleAction.DELETE_EXAMPLE }) }

    return (
        <div className={"numpad__numbers numpad__numbers_" + ((isVisible) ? 'visible': 'hidden')}>
            {
                numpadButtonsData.map((item, index) => {
                    if (item.value !== 'OK') {
                        return <NumpadButton
                            key={index} isDisabled={item.isDisabled}
                            color={item.color} className={item.className} value={item.value}
                            onClick={() => item.onClick( item.type, item.value, indexForElement, focusElement, dispatch )}
                        />
                    }
                    else {
                        return <NumpadButton 
                            onClick={() => processingUserResponse(exampleData, indexForElement, page, dispatch)}
                            key={index} isDisabled={item.isDisabled} color={item.color} className={item.className} value={item.value}
                        />
                    }
                })
            }
        </div>
    )
}