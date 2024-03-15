import { TrigerForLocalExampleAction } from "../shared/lib/enums/actions/TrigerForLocalExampleAction"
import { ITrigerForLocalExampleAction } from "../shared/lib/interfaces/actions/ITrigerForLocalExampleAction"

interface ITrigerForLocalExampleDefaultState {
    data: Array<any>
}

const TrigerForLocalExampleDefaultState = {
    data: []
}

export const TrigerForLocalExampleReducer = (state: ITrigerForLocalExampleDefaultState = TrigerForLocalExampleDefaultState, action: ITrigerForLocalExampleAction) => {
    switch (action.type) {
        case TrigerForLocalExampleAction.TRIGER_FOR_EXAMPLE:
            return {...state, data: []}
        default: return state
    }
}