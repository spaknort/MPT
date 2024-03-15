import { ExampleTypes } from "../../enums/ExampleTypes";

export interface ICursor {
    type: ExampleTypes.CURSOR,
    index: number
}