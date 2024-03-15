import { ThemeAction } from "../../enums/actions/ThemeAction";
import { Themes } from "../../enums/Themes";

export interface IThemeStateAction {
    type: ThemeAction,
    theme: Themes
}