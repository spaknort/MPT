import { ExampleTypes } from "../../../../../shared/lib/enums/ExampleTypes"
import { random } from "../../../../../shared/lib/helpers/random"
import { IFRACTION } from "../../../../../shared/lib/interfaces/examples/IFRACTION"

const generateDenominator = (numenator: number, index: number): number => {
    let denominators: Array<number> = []
    for (let i = 0; i <= numenator; i++) if (numenator % i === 0) denominators.push(i)
    return denominators[ random(0, denominators.length - 1) ]
}

export const generateFraction = (index: number): IFRACTION => {
    let
        numenator = random(0, 100),
        denominator = generateDenominator(numenator, index),
        fraction: IFRACTION = {
            type: ExampleTypes.FRACTION,
            numenator: [{
                type: ExampleTypes.INT,
                value: numenator,
                index: index + 1
            }],
            denominator: [{
                type: ExampleTypes.INT,
                value: denominator,
                index: index + 2
            }],
            index
        }
        
    index += 3
    return fraction
}