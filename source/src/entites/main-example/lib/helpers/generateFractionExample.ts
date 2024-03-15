import { random } from "../../../../shared/lib/helpers/random"
import { generateEquals } from "./once/generateEquals"
import { generateFraction } from "./once/generateFraction"
import { generateSign } from "./once/generateSign"

export const generateFractionExample = (maxOperandCount: number = 3): Array<any> => {
    let
        example: Array<any> = [],
        index = 0,
        operandCount = random(1, maxOperandCount)

    for (let i = 0; i <= operandCount - 1; i++) {
        example.push(generateFraction(index))
        example.push(generateSign(index))
    }

    example.pop()
    example.push(generateEquals(index))

    return example
}