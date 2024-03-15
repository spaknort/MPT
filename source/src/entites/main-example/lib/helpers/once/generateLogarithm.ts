import { ExampleTypes } from "../../../../../shared/lib/enums/ExampleTypes"
import { random } from "../../../../../shared/lib/helpers/random"
import { ILOGARITHM } from "../../../../../shared/lib/interfaces/examples/ILOGARITHM"

export const generateLogarithm = (index: number): ILOGARITHM => {
    let
        base = random(1, 20),
        exponent = random(1, 6),
        logarithmicNumber = Math.pow(base, exponent),
        logarithm: ILOGARITHM = {
            type: ExampleTypes.LOG,
            base: [
                {
                    type: ExampleTypes.INT,
                    value: base,
                    index: index + 1
                }
            ],
            value: [
                {
                    type: ExampleTypes.INT,
                    value: logarithmicNumber,
                    index: index + 2
                }
            ],
            index
        }

    console.log(base, exponent, logarithmicNumber)
    return logarithm
}