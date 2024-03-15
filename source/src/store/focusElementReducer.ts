import { FocusElementAction } from "../shared/lib/enums/actions/FocusElementAction"
import { IFocusElementAction } from "../shared/lib/interfaces/actions/IFocusElementAction"

interface IFocusElementStateDefault {
    element: any,
    elementInJS: any
}

const focusElementStateDefault: IFocusElementStateDefault = {
    element: null,
    elementInJS: null,
}

export const FocusElementReducer = (state = focusElementStateDefault, action: IFocusElementAction) => {
    switch(action.type) {
        case FocusElementAction.CHANGE_FOCUS_HTML_ELEMENT:
            return {...state, element: action.element}
        case FocusElementAction.CHANGE_FOCUS_ELEMENT:
            return {...state, elementInJs: action.elementInJS}
        default: return state
    }
}