import { ThemeAction } from "../shared/lib/enums/actions/ThemeAction"
import { Themes } from "../shared/lib/enums/Themes"
import { IThemeStateAction } from "../shared/lib/interfaces/actions/IThemeStateAction"

interface IThemeDefaultState {
    theme: string
}

const ThemeDefaultState: IThemeDefaultState = {
    theme: localStorage.getItem('theme') || Themes.DEFAULT
}

export const ThemeReducer = (state = ThemeDefaultState, action: IThemeStateAction) => {
    switch (action.type) {
        case ThemeAction.CHANGE_THEME:
            localStorage.setItem('theme', action.theme)
            return {...state, theme: action.theme}
        default: return state
    }
}