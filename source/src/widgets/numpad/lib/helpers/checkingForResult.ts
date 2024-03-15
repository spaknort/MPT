import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes";
import { IDEGREE } from "../../../../shared/lib/interfaces/examples/IDEGREE";
import { IFRACTION } from "../../../../shared/lib/interfaces/examples/IFRACTION";
import { IINT } from "../../../../shared/lib/interfaces/examples/IINT";
import { ILOGARITHM } from "../../../../shared/lib/interfaces/examples/ILOGARITHM";
import { ISIGN } from "../../../../shared/lib/interfaces/examples/ISIGN";
import { ISQRT } from "../../../../shared/lib/interfaces/examples/ISQRT";
import { ITRIGONOMETRIC } from "../../../../shared/lib/interfaces/examples/ITRIGONOMETRIC";
import checkingForEqualSign from "./checkingForEqualSign";

const checkingForResult = (example: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM>): boolean => {
    if (checkingForEqualSign(example) && example[example.length - 1].type !== ExampleTypes.EQUALS || example[example.length - 1].type !== ExampleTypes.CURSOR) return true
    return false
}

export default checkingForResult