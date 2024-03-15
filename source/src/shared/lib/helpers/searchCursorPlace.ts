import { ExampleTypes } from "../enums/ExampleTypes"
import { IDECIMAL_LOGARITHM } from "../interfaces/examples/IDECIMAL-LOGARITHM"
import { IDEGREE } from "../interfaces/examples/IDEGREE"
import { IFRACTION } from "../interfaces/examples/IFRACTION"
import { ILOGARITHM } from "../interfaces/examples/ILOGARITHM"
import { INATURAL_LOGARITHM } from "../interfaces/examples/INATURAL-LOGARITHM"
import { ISQRT } from "../interfaces/examples/ISQRT"
import { ITRIGONOMETRIC } from "../interfaces/examples/ITRIGONOMETRIC"

export const searchCursorPlace = (state: Array<any>): Array<any> => {
    for (let i = 0; i <= state.length - 1; i++) {
        if (state[i].type === ExampleTypes.CURSOR) return state

        if (state[i].type === ExampleTypes.SQRT || state[i].type === ExampleTypes.DEGREE) {
            const 
                elem = state[i] as ISQRT | IDEGREE,
                result = searchCursorPlace(elem.base) || searchCursorPlace(elem.exponent)
            
            if (result[0] !== undefined) return result
        }

        if (state[i].type === ExampleTypes.FRACTION) {
            const 
                elem = state[i] as IFRACTION,
                result = searchCursorPlace(elem.numenator) || searchCursorPlace(elem.denominator)

            if (result[0] !== undefined) return result
        }

        if (state[i].type === ExampleTypes.LOG) {
            const
                elem = state[i] as ILOGARITHM,
                result = searchCursorPlace(elem.base) || searchCursorPlace(elem.value)

            if (result[0] !== undefined) return result
        }

        if (state[i].type === ExampleTypes.LN) {
            const result = searchCursorPlace((state[i] as INATURAL_LOGARITHM).value)
            if (result[0] !== undefined) return result
        }

        if (state[i].type === ExampleTypes.LG) {
            const result = searchCursorPlace((state[i] as IDECIMAL_LOGARITHM).value)
            if (result[0] !== undefined) return result
        }

        if (state[i].type === ExampleTypes.SIN || state[i].type === ExampleTypes.COS || state[i].type === ExampleTypes.TAN || state[i].type === ExampleTypes.CTG || state[i].type === ExampleTypes.ARCSIN || state[i].type === ExampleTypes.ARCCOS)
        {
            const result = searchCursorPlace((state[i] as ITRIGONOMETRIC).value)
            if (result[0] !== undefined) return result
        }
    }

    return []
}