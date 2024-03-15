import { InfoAboveResultAction } from "../shared/lib/enums/actions/InfoAboveResultAction"
import { IInfoAboveResultAction } from "../shared/lib/interfaces/actions/IInfoAboveResultAction"

interface IInfoAboveResultDefaultState {
    value: boolean | null
}

const InfoAboveResultDefaultState: IInfoAboveResultDefaultState = {
    value: null
}

export const InfoAboveExampleReducer = (
    state: IInfoAboveResultDefaultState = InfoAboveResultDefaultState,
    action: IInfoAboveResultAction
) => {
    switch(action.type) {
        case InfoAboveResultAction.SET_VALUE_FOR_INFO_ABOVE_RESULT:
            return {...state, value: action.value}
        default: return state
    }
}