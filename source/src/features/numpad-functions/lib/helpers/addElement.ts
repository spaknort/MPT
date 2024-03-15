import { IndexForElementAction } from "@/shared/lib/enums/actions/IndexForElementAction"
import { MainExampleAction } from "@/shared/lib/enums/actions/MainExampleAction"
import { Dispatch, UnknownAction } from "redux"

export function addElement (
    item: any,
    focusElement: HTMLElement,
    indexForElementInserted: string,
    placeForElementInserted: string,
    dispatch: Dispatch<UnknownAction>
) {
    if (focusElement !== null) {
        dispatch({
            type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE_BY_INDEX,
            data: item,
            indexOfElementInserted: Number(indexForElementInserted),
            placeOfElementInserted: placeForElementInserted
        })
    }

    else dispatch({ type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE, data: item })
    
    dispatch({ type: IndexForElementAction.INDEX_INCREMENT })
}