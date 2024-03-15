import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"
import { random } from "../../../../shared/lib/helpers/random"

export const generateSQRTExample = (): Array<any> => {
    const
        operandsCount = random(1, 3),
        signs = ['-', '+', '*', '/'],
        example = []

    let index = 0
    
    for (let i = 0; i < operandsCount - 1; i++) {
        const
            number1 = random(1, 10),
            number2 = random(1, 5)

        console.log(number1, number2, Math.pow(number1, number2))

        example.push({
            type: ExampleTypes.SQRT,
            base: [{
                type: ExampleTypes.INT,
                value: Math.pow(number1, number2),
                index
            }],
            exponent: [{
                type: ExampleTypes.INT,
                value: number2,
                index: index + 1
            }],
            index: index + 2
        })
        example.push({
            type: ExampleTypes.SIGN,
            value: signs[random(0, signs.length - 1)],
            index: index + 3
        })
        index += 3
    }

    const
        number1 = random(1, 10),
        number2 = random(1, 5)

    example.push({
        type: ExampleTypes.SQRT,
        base: [{
            type: ExampleTypes.INT,
            value: Math.pow(number1, number2),
            index
        }],
        exponent: [{
            type: ExampleTypes.INT,
            value: number2,
            index: index + 2
        }],
        index: index+ 3
    })

    return example
}