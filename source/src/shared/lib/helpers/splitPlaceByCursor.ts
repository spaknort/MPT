import { ExampleTypes } from "../enums/ExampleTypes"

export const splitPlaceByCursor = (place: Array<any>): Array<Array<any>> => {
    let
        leftPartPlace: Array<any> = [],
        rightPathPlace: Array<any> = [],
        placeFlag = false

    place?.forEach(item => {
        if (item.type === ExampleTypes.CURSOR) placeFlag = true
        if (!placeFlag) leftPartPlace.push(item)
        else rightPathPlace.push(item)
    })

    return [leftPartPlace, rightPathPlace]
}