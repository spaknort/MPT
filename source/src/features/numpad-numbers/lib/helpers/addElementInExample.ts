import { ExampleTypes } from "@/shared/lib/enums/ExampleTypes"
import { SoundTypes } from "@/shared/lib/enums/SoundTypes"
import { IndexForElementAction } from "@/shared/lib/enums/actions/IndexForElementAction"
import { MainExampleAction } from "@/shared/lib/enums/actions/MainExampleAction"
import { checkSoundState } from "@/shared/lib/helpers/checkSoundState"
import { playSound } from "@/shared/lib/helpers/playSound"
import { Dispatch, UnknownAction } from "redux"

export function addElementInExample (
    type: ExampleTypes,
    value: string,
    indexForElement: number,
    focusElement: HTMLElement,
    dispatch: Dispatch<UnknownAction>
) {
    const element = {
        type,
        value: (type === ExampleTypes.INT) ? Number(value): value,
        index: indexForElement
    }

    if (focusElement !== null) {
        const
            indexForElementInserted = focusElement.getAttribute('data-parrent-index'),
            placeForElementInserted = focusElement.getAttribute('data-place')

        dispatch({
            type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE_BY_INDEX,
            data: element,
            indexOfElementInserted: Number(indexForElementInserted),
            placeOfElementInserted: placeForElementInserted
        })
    }
    else dispatch({ type: MainExampleAction.INSERT_ELEMENT_IN_EXAMPLE, data: element })

    
    if (checkSoundState()) playSound(SoundTypes.DEFAULT)
    dispatch({ type: IndexForElementAction.INDEX_INCREMENT })
}