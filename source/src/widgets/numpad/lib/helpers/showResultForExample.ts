import { Dispatch } from "react"
import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"
import { MainExampleAction } from "../../../../shared/lib/enums/actions/MainExampleAction"
import { IINT } from "../../../../shared/lib/interfaces/examples/IINT"
import calculateExample from "./calculate"
import checkingForEqualSign from "./checkingForEqualSign"
import checkingForResult from "./checkingForResult"
import getUserAnswer from "./getUserAnswer"
import { IndexForElementAction } from "../../../../shared/lib/enums/actions/IndexForElementAction"
import { AnyAction } from "redux"
import { LocalRoutes } from "../../../../shared/config"

export function showResultForExample (
    exampleData: Array<any>,
    indexForElement: number,
    page: LocalRoutes,
    dispatch: Dispatch<AnyAction>
): boolean {
    const 
        result = calculateExample(exampleData),
        isEquals = checkingForEqualSign(exampleData),
        isUserAnswer = checkingForResult(exampleData)

    const resultElement: IINT = {
        type: ExampleTypes.INT,
        value: result,
        index: indexForElement + 1
    }
    dispatch({ type: IndexForElementAction.INDEX_INCREMENT })

    console.log(result, isEquals, isUserAnswer)

    if (!isEquals && !isUserAnswer) {  
        if (page === LocalRoutes.index) {
            dispatch({ type: MainExampleAction.INSERT_RESULT_IN_EXAMPLE, data: resultElement })
            return true
        }

        return false
    }

    if (isEquals && !isUserAnswer) {
        if(page === LocalRoutes.index) {
            dispatch({ type: MainExampleAction.INSERT_RESULT_IN_EXAMPLE, data: resultElement })
            return true
        }

        return false
    }
    
    if (isUserAnswer) {
        console.log(isEquals, isUserAnswer)
        if (getUserAnswer(exampleData) === result) return true
        else return false
    }

    return false
}