import { ExampleTypes } from "../../enums/ExampleTypes";
import { IINT } from "./IINT";
import { ISIGN } from "./ISIGN";
import { ISQRT } from "./ISQRT";

export interface IDEGREE {
    type: ExampleTypes,
    base: Array<IINT | ISIGN | ISQRT | IDEGREE>,
    exponent: Array<IINT | ISIGN | ISQRT | IDEGREE>,
    index: number
}