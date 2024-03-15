import { ExampleTypes } from "../../enums/ExampleTypes";
import { IDEGREE } from "./IDEGREE";
import { IFRACTION } from "./IFRACTION";
import { IINT } from "./IINT";
import { ILOGARITHM } from "./ILOGARITHM";
import { ISIGN } from "./ISIGN";
import { ISQRT } from "./ISQRT";
import { ITRIGONOMETRIC } from "./ITRIGONOMETRIC";

export interface INATURAL_LOGARITHM {
    type: ExampleTypes,
    value: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM | INATURAL_LOGARITHM>,
    index: number
}