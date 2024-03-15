import { ExampleTypes } from "../../enums/ExampleTypes";
import { IINT } from "./IINT";
import { ISIGN } from "./ISIGN";

export interface ITRIGONOMETRIC {
    type: ExampleTypes,
    value: Array<IINT | ISIGN>,
    index: number
}