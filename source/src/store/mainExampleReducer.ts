import { ExamplePlaces } from "../shared/lib/enums/ExamplePlaces"
import { ExampleTypes } from "../shared/lib/enums/ExampleTypes"
import { MainExampleAction } from "../shared/lib/enums/actions/MainExampleAction"
import { IDEGREE } from "../shared/lib/interfaces/examples/IDEGREE"
import { IFRACTION } from "../shared/lib/interfaces/examples/IFRACTION"
import { IMainExampleAction } from "../shared/lib/interfaces/actions/IMainExampleAction"
import { ISQRT } from "../shared/lib/interfaces/examples/ISQRT"
import { ITRIGONOMETRIC } from "../shared/lib/interfaces/examples/ITRIGONOMETRIC"
import { ILOGARITHM } from "../shared/lib/interfaces/examples/ILOGARITHM"
import { INATURAL_LOGARITHM } from "../shared/lib/interfaces/examples/INATURAL-LOGARITHM"
import { IDECIMAL_LOGARITHM } from "../shared/lib/interfaces/examples/IDECIMAL-LOGARITHM"
import { IMODULE } from "../shared/lib/interfaces/examples/IMODULE"
import { searchElementByIndex } from "../shared/lib/helpers/searchElementByIndex"
import { deleteCursor } from "../shared/lib/helpers/deleteCursor"
import { searchCursorPlace } from "../shared/lib/helpers/searchCursorPlace"
import { splitPlaceByCursor } from "../shared/lib/helpers/splitPlaceByCursor"

const INDEX_FOR_CURSOR = 550

enum DELETE_OR_INSERT {
    DELETE = 'DELETE',
    INSERT = 'INSERT'
}

interface IMainExampleDefaultState {
    data: Array<any>
}

const MainExampleDefaultState: IMainExampleDefaultState = {
    data: [
        {
            type: ExampleTypes.CURSOR,
            index: INDEX_FOR_CURSOR
        }
    ]
}

export const MainExampleReducer = (state = MainExampleDefaultState, action: IMainExampleAction) => {
    const 
        clickedElement = searchElementByIndex(state.data, action.indexOfElementInserted),
        neighboringElement = searchElementByIndex(state.data, action.indexOfNeighboringElement)

    const InsertCursorInExampleByIndex = (localState: Array<any>, clickedElement: any): Array<Array<any>> => {
        deleteCursor(state.data)

        const
            newState = deleteCursor(localState) || localState,
            clickedElementIndexInState = newState.indexOf(clickedElement, 0),
            leftPartState: Array<any>  = newState.slice(0, clickedElementIndexInState + 1),
            rightPartState: Array<any> = newState.slice(clickedElementIndexInState + 1, newState.length)

        return [leftPartState, rightPartState]
    }

    const PreparationExampleForInsertOrDeleteElement = (states: Array<any>, operationType: DELETE_OR_INSERT): Array<any> => {
        let 
            cursorPlace = searchCursorPlace(states),
            [leftPartPlace, rightPartPlace] = splitPlaceByCursor(cursorPlace)

        if (operationType === DELETE_OR_INSERT.INSERT) rightPartPlace.unshift(action.data)
        else leftPartPlace.pop()
        return leftPartPlace.concat(rightPartPlace)
    }

    const PreparationCursorForInserted = (elementPlace: any, fakeParam?: any): Array<any> => {
        const [leftPartStateForPlace, rightPartStateForPlace] = InsertCursorInExampleByIndex(elementPlace, neighboringElement)
        return leftPartStateForPlace.concat([{type: ExampleTypes.CURSOR, index: INDEX_FOR_CURSOR}]).concat(rightPartStateForPlace)
    }

    const ChekingTypeElement = (func: Function, param1?: any) => {
        if (clickedElement?.type === ExampleTypes.SQRT || clickedElement?.type === ExampleTypes.DEGREE) {
            let element = clickedElement as ISQRT | IDEGREE
            if (action.placeOfElementInserted === ExamplePlaces.BASE) element.base         = func(element.base, param1)
            if (action.placeOfElementInserted === ExamplePlaces.EXPONENT) element.exponent = func(element.exponent, param1)
        }

        if (clickedElement?.type === ExampleTypes.FRACTION) {
            const element = clickedElement as IFRACTION
            if (action.placeOfElementInserted === ExamplePlaces.NUMENATOR) element.numenator     = func(element.numenator, param1)
            if (action.placeOfElementInserted === ExamplePlaces.DENOMINATOR) element.denominator = func(element.denominator, param1)
        }

        if (clickedElement?.type === ExampleTypes.LOG) {
            const element = clickedElement as ILOGARITHM
            if (action.placeOfElementInserted === ExamplePlaces.BASE) element.base   = func(element.base, param1)
            if (action.placeOfElementInserted === ExamplePlaces.VALUE) element.value = func(element.value, param1)
        }

        if (clickedElement?.type === ExampleTypes.LN) {
            const element = clickedElement as INATURAL_LOGARITHM
            if (action.placeOfElementInserted === ExamplePlaces.VALUE) element.value = func(element.value, param1)
        }

        if (clickedElement?.type === ExampleTypes.LG) {
            const element = clickedElement as IDECIMAL_LOGARITHM
            if (action.placeOfElementInserted === ExamplePlaces.VALUE) element.value = func(element.value, param1)
        }

        if (clickedElement?.type === ExampleTypes.MODULE) {
            const element = clickedElement as IMODULE
            if (action.placeOfElementInserted === ExamplePlaces.VALUE) element.value = func(element.value, param1)
        }

        if (clickedElement?.type === ExampleTypes.SIN || clickedElement?.type === ExampleTypes.COS || clickedElement?.type === ExampleTypes.TAN || clickedElement?.type === ExampleTypes.CTG || clickedElement?.type === ExampleTypes.ARCSIN || clickedElement?.type === ExampleTypes.ARCCOS || clickedElement?.type === ExampleTypes.ARCTG || clickedElement?.type === ExampleTypes.ARCCTG)
        {
            let element = clickedElement as ITRIGONOMETRIC
            if (action.data.type === ExampleTypes.INT) element.value.push({type: ExampleTypes.INT, value: Number(action.data.value), index: action.data.index})
            if (action.data.type === ExampleTypes.SIGN && (action.data.value === '-' || action.data.value === '+')) element.value.push({type: ExampleTypes.SIGN, value: String(action.data.value), index: action.data.index})
        }
    }

    switch (action.type) {
        case MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE_BY_INDEX:
            ChekingTypeElement(PreparationExampleForInsertOrDeleteElement, DELETE_OR_INSERT.INSERT)
            return {...state, data: [...state.data]}
        case MainExampleAction.INSERT_RESULT_IN_EXAMPLE:
            const equalsElement = {type: ExampleTypes.EQUALS, value: '=', index: action.data.index - 1}
            if(state.data[state.data.length - 1].type !== ExampleTypes.EQUALS &&
               state.data[state.data.length - 2].type !== ExampleTypes.EQUALS
            ) state.data.push(equalsElement)
            return {...state, data: [...state.data, action.data]}
        case MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE:
            state.data = PreparationExampleForInsertOrDeleteElement(state.data, DELETE_OR_INSERT.INSERT)
            return {...state, data: [...state.data]}
        case MainExampleAction.INSERT_CURSOR_IN_EXAMPLE_BY_INDEX:
            const [leftPartState, rightPartState] = InsertCursorInExampleByIndex(state.data, clickedElement)
            state.data = leftPartState.concat([{type: ExampleTypes.CURSOR, index: INDEX_FOR_CURSOR}]).concat(rightPartState)
            return {...state, data: [...state.data]}
        case MainExampleAction.INSERT_CURSOR_IN_EXAMPLE_BY_PLACE:
            ChekingTypeElement(PreparationCursorForInserted)
            return {...state, data: [...state.data]}
        case MainExampleAction.INSERT_CURSOR_IN_START_OF_EXAMPLE:
            deleteCursor(state.data)
            state.data.unshift({type: ExampleTypes.CURSOR, index: INDEX_FOR_CURSOR})
            return {...state, data: [...state.data]}
        case MainExampleAction.INSERT_CURSOR_IN_END_OF_EXAMPLE:
            deleteCursor(state.data)
            state.data.push({type: ExampleTypes.CURSOR, index: INDEX_FOR_CURSOR})
            return {...state, data: [...state.data]}
        case MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE:
            state.data = PreparationExampleForInsertOrDeleteElement(state.data, DELETE_OR_INSERT.DELETE)
            return {...state, data: [...state.data]}
        case MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE_BY_INDEX:
            ChekingTypeElement(PreparationExampleForInsertOrDeleteElement, DELETE_OR_INSERT.DELETE)
            return {...state, data: [...state.data]}
        case MainExampleAction.DELETE_EXAMPLE:
            state.data = [{type: ExampleTypes.CURSOR, index: INDEX_FOR_CURSOR}]
            return {...state, data: [...state.data]}
        case MainExampleAction.ADD_EXAMPLE:
            return {...state, data: [...state.data, ...action.example]}
        default: return state
    }
}