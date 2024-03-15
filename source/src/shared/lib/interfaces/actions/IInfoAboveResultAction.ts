import { InfoAboveResultAction } from "../../enums/actions/InfoAboveResultAction";

export interface IInfoAboveResultAction {
    type: InfoAboveResultAction,
    value: boolean | null
}