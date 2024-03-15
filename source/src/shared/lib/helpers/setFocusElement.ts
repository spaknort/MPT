import { ExamplePlaces } from "../enums/ExamplePlaces"
import { FocusElementAction } from "../enums/actions/FocusElementAction"
import { MainExampleAction } from "../enums/actions/MainExampleAction"

const parceTarget = (target: HTMLElement): HTMLElement => {
    const div = document.createElement('div')

    if (target.parentElement !== null && target.parentElement.parentElement !== null) {
        if (target.tagName === 'P') return target.parentElement.parentElement
        if (target.tagName === 'SPAN') return target.parentElement
        if (target.tagName === 'DIV') return target
    }

    return div
}

export const setFocusElement = (e: MouseEvent, dispatch: Function, place: ExamplePlaces, index: number) => {
    const target = parceTarget(e.target as HTMLElement)
    dispatch({type: FocusElementAction.CHANGE_FOCUS_HTML_ELEMENT, element: target})
    e.stopImmediatePropagation()

    const
        clickedElement = e.target as HTMLDivElement,
        clickedElementIndex = (clickedElement.getAttribute('data-index') === null) ? null: Number(clickedElement.getAttribute('data-index'))
        
    dispatch({ 
        type: MainExampleAction.INSERT_CURSOR_IN_EXAMPLE_BY_PLACE,
        placeOfElementInserted: place,
        indexOfElementInserted: index,
        indexOfNeighboringElement: clickedElementIndex
    })
}