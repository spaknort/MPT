import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes";
import { IDEGREE } from "../../../../shared/lib/interfaces/examples/IDEGREE";
import { IFRACTION } from "../../../../shared/lib/interfaces/examples/IFRACTION";
import { IINT } from "../../../../shared/lib/interfaces/examples/IINT";
import { ILOGARITHM } from "../../../../shared/lib/interfaces/examples/ILOGARITHM";
import { ISIGN } from "../../../../shared/lib/interfaces/examples/ISIGN";
import { ISQRT } from "../../../../shared/lib/interfaces/examples/ISQRT";
import { ITRIGONOMETRIC } from "../../../../shared/lib/interfaces/examples/ITRIGONOMETRIC";
import calculateExample from "./calculate";

const getUserAnswer = (example: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM>): number => {
    let
        exampleAfterEquals: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM> = [],
        flag = false

    example.forEach(item => {
        if (flag === true) exampleAfterEquals.push(item)
        if (item.type === ExampleTypes.EQUALS) flag = true
    })

    return calculateExample(exampleAfterEquals)
}

export default getUserAnswer