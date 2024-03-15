import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"
import { random } from "../../../../shared/lib/helpers/random"
import { IINT } from "../../../../shared/lib/interfaces/examples/IINT"
import { ISIGN } from "../../../../shared/lib/interfaces/examples/ISIGN"
import { generateEquals } from "./once/generateEquals"
import { generateInt } from "./once/generateInt"
import { generateSign } from "./once/generateSign"

export const generateIntExample = (maxOperandCount: number = 5): Array<any> => {
    let
        example: Array<any> = [],
        index = 0,
        operandCount = random(2, maxOperandCount)

    for (let i = 0; i <= operandCount - 1; i++) {
        example.push(generateInt(index))
        index += 1
        example.push(generateSign(index))
        index += 1
    }
    
    example.pop()
    example.push(generateEquals(index))

    return example
}  