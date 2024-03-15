import { ExampleTypes } from "../../enums/ExampleTypes";
import { IDEGREE } from "./IDEGREE";
import { IINT } from "./IINT";
import { ISIGN } from "./ISIGN";

export interface ISQRT {
    type: ExampleTypes,
    exponent: Array<IINT | ISIGN | ISQRT | IDEGREE>,
    base: Array<IINT | ISIGN | ISQRT | IDEGREE>,
    index: number
}