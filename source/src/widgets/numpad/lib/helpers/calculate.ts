import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes";
import { IDECIMAL_LOGARITHM } from "../../../../shared/lib/interfaces/examples/IDECIMAL-LOGARITHM";
import { IDEGREE } from "../../../../shared/lib/interfaces/examples/IDEGREE";
import { IFRACTION } from "../../../../shared/lib/interfaces/examples/IFRACTION";
import { IINT } from "../../../../shared/lib/interfaces/examples/IINT";
import { ILOGARITHM } from "../../../../shared/lib/interfaces/examples/ILOGARITHM";
import { IMODULE } from "../../../../shared/lib/interfaces/examples/IMODULE";
import { INATURAL_LOGARITHM } from "../../../../shared/lib/interfaces/examples/INATURAL-LOGARITHM";
import { IPARENTHESIS } from "../../../../shared/lib/interfaces/examples/IPARENTHESIS";
import { ISIGN } from "../../../../shared/lib/interfaces/examples/ISIGN";
import { ISQRT } from "../../../../shared/lib/interfaces/examples/ISQRT";
import { ITRIGONOMETRIC } from "../../../../shared/lib/interfaces/examples/ITRIGONOMETRIC";

const calculateExample = (example: Array<IINT | ISIGN | IDEGREE | ISQRT | ITRIGONOMETRIC | IFRACTION | ILOGARITHM | INATURAL_LOGARITHM>): number => {
    let result: Array<string> = []

    for (let i = 0; i <= example.length - 1; i++) {
        const item = example[i]

        if (item.type === ExampleTypes.EQUALS) break
        if (item.type === ExampleTypes.CURSOR) continue
        
        if (item.type === ExampleTypes.INT || item.type === ExampleTypes.SIGN || item.type === ExampleTypes.PARENTHESIS) {
            const elem = item as (IINT | ISIGN | IPARENTHESIS)
            result.push(String(elem.value))
        }

        if (item.type === ExampleTypes.SQRT) {
            const elem = item as ISQRT
            result.push(String( Math.pow(calculateExample(elem.base), 1 / calculateExample(elem.exponent))  ))
        }

        if (item.type === ExampleTypes.DEGREE) {
            const elem = item as IDEGREE
            result.push(String( Math.pow(calculateExample(elem.base), calculateExample(elem.exponent)) ))
        }

        if (item.type === ExampleTypes.FRACTION) {
            const elem = item as IFRACTION
            result.push(String( calculateExample(elem.numenator) / calculateExample(elem.denominator) ))
        }

        if (item.type === ExampleTypes.LOG) {
            const elem = item as ILOGARITHM
            result.push(String( Math.log(calculateExample(elem.value)) / Math.log(calculateExample(elem.base)) ))
        }

        if (item.type === ExampleTypes.LN) {
            const elem = item as INATURAL_LOGARITHM
            result.push(String( Math.log(calculateExample(elem.value)) ))
        }

        if (item.type === ExampleTypes.LG) {
            const elem = item as IDECIMAL_LOGARITHM
            result.push(String( Math.log10(calculateExample(elem.value)) ))
        }

        if (item.type === ExampleTypes.MODULE) {
            const elem = item as IMODULE
            result.push(String( Math.abs(calculateExample(elem.value)) ))
        }

        if (item?.type === ExampleTypes.SIN) { let elem = item as ITRIGONOMETRIC; result.push(String( Math.sin( calculateExample(elem.value) * Math.PI / 180 ) )) }
        if (item?.type === ExampleTypes.COS) { let elem = item as ITRIGONOMETRIC; result.push(String( Math.cos( calculateExample(elem.value) * Math.PI / 180 ) )) }
        if (item?.type === ExampleTypes.TAN) { let elem = item as ITRIGONOMETRIC; result.push(String( Math.tan( calculateExample(elem.value) * Math.PI / 180 ) )) }
        if (item?.type === ExampleTypes.CTG) { let elem = item as ITRIGONOMETRIC; result.push(String( 1 / Math.tan( calculateExample(elem.value) * Math.PI / 180 ) )) }
        if (item?.type === ExampleTypes.ARCSIN) { let elem = item as ITRIGONOMETRIC; result.push(String( Math.asin( calculateExample(elem.value) ) )) }
        if (item?.type === ExampleTypes.ARCCOS) { let elem = item as ITRIGONOMETRIC; result.push(String( Math.acos( calculateExample(elem.value) ) )) }
        if (item?.type === ExampleTypes.ARCTG) { let elem = item as ITRIGONOMETRIC; result.push(String( Math.atan( calculateExample(elem.value) ) )) }
        if (item?.type === ExampleTypes.ARCCTG) { let elem = item as ITRIGONOMETRIC; result.push(String( Math.PI / 2 - Math.atan( calculateExample(elem.value) ) )) }
    }

    let 
        res = result.join(''),
        sendResult = ''

    if (res.indexOf('.') === -1 && String(eval(res)).indexOf('.') === -1) sendResult = res
    else sendResult = String( Number(eval(res)).toFixed(2) )

    return eval(sendResult)
}

export default calculateExample