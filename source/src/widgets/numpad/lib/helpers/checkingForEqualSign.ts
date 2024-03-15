import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes";
import { IDEGREE } from "../../../../shared/lib/interfaces/examples/IDEGREE";
import { IFRACTION } from "../../../../shared/lib/interfaces/examples/IFRACTION";
import { IINT } from "../../../../shared/lib/interfaces/examples/IINT";
import { ILOGARITHM } from "../../../../shared/lib/interfaces/examples/ILOGARITHM";
import { ISIGN } from "../../../../shared/lib/interfaces/examples/ISIGN";
import { ISQRT } from "../../../../shared/lib/interfaces/examples/ISQRT";
import { ITRIGONOMETRIC } from "../../../../shared/lib/interfaces/examples/ITRIGONOMETRIC";

const checkingForEqualSign = (example: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION | ILOGARITHM>): boolean => {
    let result = false
    example.forEach(item => (item.type === ExampleTypes.EQUALS) ? result = true: 0)

    return result
}

export default checkingForEqualSign