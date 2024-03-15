import { ExamplePlaces } from "../../../../shared/lib/enums/ExamplePlaces"
import { searchElementByIndex } from "../../../../shared/lib/helpers/searchElementByIndex"

export const getElementForInsertData = (exampleData: Array<any>, focusElement: HTMLElement): Array<any> => {
    let data: Array<any> = exampleData
    if (focusElement !== null) {
        const
            indexForElementInserted = focusElement.getAttribute('data-parrent-index'),
            placeForElementInserted = focusElement.getAttribute('data-place'),
            element: any = searchElementByIndex(exampleData, Number(indexForElementInserted))

        if (placeForElementInserted === ExamplePlaces.BASE) data = element.base
        if (placeForElementInserted === ExamplePlaces.EXPONENT) data = element.exponent
        if (placeForElementInserted === ExamplePlaces.DENOMINATOR) data = element.denominator
        if (placeForElementInserted === ExamplePlaces.NUMENATOR) data = element.numenator
        if (placeForElementInserted === ExamplePlaces.VALUE) data = element.value
    }

    return data
}