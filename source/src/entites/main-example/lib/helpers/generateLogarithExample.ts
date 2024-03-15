import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"
import { random } from "../../../../shared/lib/helpers/random"
import { generateEquals } from "./once/generateEquals"
import { generateLogarithm } from "./once/generateLogarithm"
import { generateSign } from "./once/generateSign"

export const generateLogarithmExample = (maxOperandCount: number = 3): Array<any> => {
    let
        index = 0,
        operandCount = random(1, maxOperandCount),
        example = []

    console.log(operandCount, ' - operandCount')

    for (let i = 0; i <= operandCount - 1; i++) {
        example.push(generateLogarithm(index))
        index += 3
        example.push(generateSign(index))
        index += 1
    }

    example.pop()
    example.push(generateEquals(index))

    return example
}