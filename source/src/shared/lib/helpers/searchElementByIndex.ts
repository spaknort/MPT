import { ExampleTypes } from "../enums/ExampleTypes"
import { IDECIMAL_LOGARITHM } from "../interfaces/examples/IDECIMAL-LOGARITHM"
import { IDEGREE } from "../interfaces/examples/IDEGREE"
import { IFRACTION } from "../interfaces/examples/IFRACTION"
import { IINT } from "../interfaces/examples/IINT"
import { ILOGARITHM } from "../interfaces/examples/ILOGARITHM"
import { INATURAL_LOGARITHM } from "../interfaces/examples/INATURAL-LOGARITHM"
import { ISIGN } from "../interfaces/examples/ISIGN"
import { ISQRT } from "../interfaces/examples/ISQRT"
import { ITRIGONOMETRIC } from "../interfaces/examples/ITRIGONOMETRIC"

export const searchElementByIndex = (
    state: Array<IINT | ISIGN | IDECIMAL_LOGARITHM | IDEGREE | ISQRT | ITRIGONOMETRIC | IFRACTION | ILOGARITHM | INATURAL_LOGARITHM | IDECIMAL_LOGARITHM>,
    index: number
): IINT | ISIGN | IDEGREE | ISQRT | ITRIGONOMETRIC | IFRACTION | ILOGARITHM | INATURAL_LOGARITHM | IDECIMAL_LOGARITHM | null => {
    for (let i = 0; i <= state.length - 1; i++) {
        if (state[i].index === index) return state[i]

        if (state[i].type === ExampleTypes.SQRT || state[i].type === ExampleTypes.DEGREE) {
            const 
                elem = state[i] as ISQRT | IDEGREE,
                result = searchElementByIndex(elem.base, index) || searchElementByIndex(elem.exponent, index)

            if (result !== null) return result
        }

        if (state[i].type === ExampleTypes.FRACTION) {
            const 
                elem = state[i] as IFRACTION,
                result = searchElementByIndex(elem.numenator, index) || searchElementByIndex(elem.denominator, index)

            if (result !== null) return result
        }

        if (state[i].type === ExampleTypes.LOG) {
            const
                elem = state[i] as ILOGARITHM,
                result = searchElementByIndex(elem.base, index) || searchElementByIndex(elem.value, index)

            if (result !== null) return result
        }

        if (state[i].type === ExampleTypes.LN) {
            const
                elem = state[i] as INATURAL_LOGARITHM,
                result = searchElementByIndex(elem.value, index)

            if (result !== null) return result
        }

        if (state[i].type === ExampleTypes.LG) {
            const
                elem = state[i] as IDECIMAL_LOGARITHM,
                result = searchElementByIndex(elem.value, index)

            if (result !== null) return result
        }

        if (
            state[i].type === ExampleTypes.SIN ||
            state[i].type === ExampleTypes.COS ||
            state[i].type === ExampleTypes.TAN ||
            state[i].type === ExampleTypes.CTG ||
            state[i].type === ExampleTypes.ARCSIN ||
            state[i].type === ExampleTypes.ARCCOS
        ) {
            const 
                elem = state[i] as ITRIGONOMETRIC,
                result = searchElementByIndex(elem.value, index)

            if (result !== null) return result
        }
    }

    return null
}