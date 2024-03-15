import { SwitchCheckboxAction } from "../shared/lib/enums/SwitchCheckbox";
import { SwitchCheckboxChangeAction } from "../shared/lib/enums/SwitchCheckboxChangeAction";
import { ISettingsDefaultState } from "../shared/lib/interfaces/states/ISettingsDefaultState";

const SettingsDefaultState: ISettingsDefaultState = {
    isSound: JSON.parse(String(localStorage.getItem('isSound')))?.isSound,
    isNotification: JSON.parse(String(localStorage.getItem('isNotification')))?.isNotification,
}

interface SettingsStateAction {
    type: SwitchCheckboxChangeAction,
    isSound: boolean,
    isNotification: boolean
}

export const SettingsReducer = (state = SettingsDefaultState, action: SettingsStateAction) => {
    switch(action.type) {
        case SwitchCheckboxChangeAction.CHANGE:
            localStorage.setItem('isSound', JSON.stringify({isSound: action.isSound}))
            localStorage.setItem('isNotification', JSON.stringify({isNotification: action.isNotification}))
            return {...state, isSound: action.isSound, isNotification: action.isNotification}
        default: return state
    }
}