import { ExamplePlaces } from "../../enums/ExamplePlaces";
import { ExampleTypes } from "../../enums/ExampleTypes";
import { MainExampleAction } from "../../enums/actions/MainExampleAction";

export interface IMainExampleAction {
    type: MainExampleAction,
    data: {
        type: ExampleTypes,
        value?: string,
        base: Array<any>,
        exponent: Array<any>,
        index: number,
    },
    example: Array<any>,
    indexOfElementInserted: number,
    indexOfNeighboringElement: number,
    placeOfElementInserted: ExamplePlaces
}