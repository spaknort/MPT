import { ExampleTypes } from "../../../../../shared/lib/enums/ExampleTypes"
import { random } from "../../../../../shared/lib/helpers/random"
import { ISIGN } from "../../../../../shared/lib/interfaces/examples/ISIGN"

export const generateSign = (index: number): ISIGN => {
    const 
        signs = ['*', '/', '+', '-'],
        sign: ISIGN = {
            type: ExampleTypes.SIGN,
            value: signs[ random(0, signs.length - 1) ],
            index
        }
    
    return sign
}