import { ExampleTypes } from "../../enums/ExampleTypes"
import { IDEGREE } from "./IDEGREE"
import { IINT } from "./IINT"
import { ILOGARITHM } from "./ILOGARITHM"
import { ISIGN } from "./ISIGN"
import { ISQRT } from "./ISQRT"
import { ITRIGONOMETRIC } from "./ITRIGONOMETRIC"

export interface IFRACTION {
    type: ExampleTypes,
    numenator: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM>,
    denominator: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM>,
    index: number
}