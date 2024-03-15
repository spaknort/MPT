import { ExampleTypes } from "../../enums/ExampleTypes";
import { IDEGREE } from "./IDEGREE"
import { IFRACTION } from "./IFRACTION";
import { IINT } from "./IINT"
import { ISIGN } from "./ISIGN"
import { ISQRT } from "./ISQRT"
import { ITRIGONOMETRIC } from "./ITRIGONOMETRIC"

export interface ILOGARITHM {
    type: ExampleTypes,
    base: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM>,
    value: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM>,
    index: number
}