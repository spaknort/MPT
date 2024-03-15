import { IndexForElementAction } from "../shared/lib/enums/actions/IndexForElementAction"
import IIndexForElementAction from "../shared/lib/interfaces/actions/IIndexForElementAction"

interface IIndexForElementDefaultState {
    value: number
}

const indexForElementDefaultState: IIndexForElementDefaultState = {
    value: 0
}

export const IndexForElementReducer = (state: IIndexForElementDefaultState = indexForElementDefaultState, action: IIndexForElementAction) => {
    switch (action.type) {
        case IndexForElementAction.INDEX_INCREMENT:
            return {...state, value: state.value + 1}
        case IndexForElementAction.SET_INDEX:
            return {...state, value: action.value}
        default: return {...state}
    }
}