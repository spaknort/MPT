import { FocusElementAction } from "../../enums/actions/FocusElementAction";

export interface IFocusElementAction {
    type: FocusElementAction,
    element: any,
    elementInJS: any
}