import { ExampleTypes } from "../enums/ExampleTypes"
import { ICursor } from "../interfaces/examples/ICursor"
import { IDECIMAL_LOGARITHM } from "../interfaces/examples/IDECIMAL-LOGARITHM"
import { IDEGREE } from "../interfaces/examples/IDEGREE"
import { IFRACTION } from "../interfaces/examples/IFRACTION"
import { ILOGARITHM } from "../interfaces/examples/ILOGARITHM"
import { INATURAL_LOGARITHM } from "../interfaces/examples/INATURAL-LOGARITHM"
import { ISQRT } from "../interfaces/examples/ISQRT"
import { ITRIGONOMETRIC } from "../interfaces/examples/ITRIGONOMETRIC"

export const deleteCursor = (state: Array<any>): Array<any> | null => {
    for (let i = 0; i <= state.length - 1; i++) {
        if (state[i].type === ExampleTypes.CURSOR) {
            state.splice(i, 1)
            return state
        }

        if (state[i].type === ExampleTypes.SQRT || state[i].type === ExampleTypes.DEGREE) {
            const elem = state[i] as ISQRT | IDEGREE
            deleteCursor(elem.base)
            deleteCursor(elem.exponent)
        }

        if (state[i].type === ExampleTypes.FRACTION) {
            const elem = state[i] as IFRACTION
            deleteCursor(elem.numenator)
            deleteCursor(elem.denominator)
        }

        if (state[i].type === ExampleTypes.LOG) {
            const elem = state[i] as ILOGARITHM
            deleteCursor(elem.base)
            deleteCursor(elem.value)
        }

        if (state[i].type === ExampleTypes.LN) deleteCursor((state[i] as INATURAL_LOGARITHM).value)
        if (state[i].type === ExampleTypes.LG) deleteCursor((state[i] as IDECIMAL_LOGARITHM).value)

        if (
            state[i].type === ExampleTypes.SIN ||
            state[i].type === ExampleTypes.COS ||
            state[i].type === ExampleTypes.TAN ||
            state[i].type === ExampleTypes.CTG ||
            state[i].type === ExampleTypes.ARCSIN ||
            state[i].type === ExampleTypes.ARCCOS
        ) deleteCursor((state[i] as ITRIGONOMETRIC).value)
    }

    return null
}