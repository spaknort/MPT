import { URLElementAction } from "../shared/lib/enums/actions/URLElementAction"
import { IURLElementAction } from "../shared/lib/interfaces/actions/IURLElementAction"

interface IURLElementStateDefault {
    isShow: boolean
}

const focusElementStateDefault: IURLElementStateDefault = {
    isShow: false
}

export const URLElementReducer = (state = focusElementStateDefault, action: IURLElementAction) => {
    switch(action.type) {
        case URLElementAction.CHANGE_URL_ELEMENT_STATE:
            console.log(action.isShow, ' - isShow')
            return {...state, isShow: action.isShow}
        default: return state
    }
}