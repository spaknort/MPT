import { ExampleTypes } from "@/shared/lib/enums/ExampleTypes"
import { MainExampleAction } from "@/shared/lib/enums/actions/MainExampleAction"
import { Dispatch, UnknownAction } from "redux"

export function deleteElementInExample (
    type: ExampleTypes,
    value: string,
    indexForElement: number,
    focusElement: HTMLElement,
    dispatch: Dispatch<UnknownAction>
) {
    if (focusElement !== null) {
        const
            indexForElementInserted = focusElement.getAttribute('data-parrent-index'),
            placeForElementInserted = focusElement.getAttribute('data-place')

        dispatch({
            type: MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE_BY_INDEX,
            indexOfElementInserted: Number(indexForElementInserted),
            placeOfElementInserted: placeForElementInserted
        })
    }
    else dispatch({ type: MainExampleAction.DELETE_ELEMENT_IN_EXAMPLE })
}