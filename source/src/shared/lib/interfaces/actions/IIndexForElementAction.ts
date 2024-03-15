import { IndexForElementAction } from "../../enums/actions/IndexForElementAction";

export default interface IIndexForElementAction {
    type: IndexForElementAction,
    value?: number
}