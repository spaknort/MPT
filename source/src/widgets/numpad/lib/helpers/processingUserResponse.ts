import { Dispatch } from "react"
import { InfoAboveResultAction } from "../../../../shared/lib/enums/actions/InfoAboveResultAction"
import { showResultForExample } from "./showResultForExample"
import { AnyAction } from "redux"
import { LocalRoutes } from "../../../../shared/config"
import { URLElementAction } from "../../../../shared/lib/enums/actions/URLElementAction"
import sendExample from "../api/sendExample"
import { NumberOfPointAction } from "../../../../shared/lib/enums/actions/NumberOfPointAction"
import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"
import { LevelAction } from "../../../../shared/lib/enums/actions/LevelAction"
import { TrigerForLocalExampleAction } from "../../../../shared/lib/enums/actions/TrigerForLocalExampleAction"
import { deleteCursor } from "../../../../shared/lib/helpers/deleteCursor"

const getCurrentLevel = (): string => {
    const currentLevelData = localStorage.getItem('currentLevel')
    if (currentLevelData !== null) {
        const currentLevel = JSON.parse(currentLevelData)
        for (const [levelName, levelData] of Object.entries(currentLevel)) return levelName
    }

    return ''
}

export const processingUserResponse = (
    exampleData: Array<any>,
    indexForElement: number,
    page: LocalRoutes,
    dispatch: Dispatch<AnyAction>
) => {
    if (showResultForExample( exampleData, indexForElement, page, dispatch )) {
        if (page === LocalRoutes.index) {
            dispatch({ type: InfoAboveResultAction.SET_VALUE_FOR_INFO_ABOVE_RESULT, value: null })
            const example: Array<any> = []
            exampleData.forEach(elem => (elem.type !== ExampleTypes.CURSOR) ? example.push(elem): '')
            console.log(page, ' - page1')

            sendExample(example).then((result: any) => {
                localStorage.setItem('exampleUrl', result.url)
                localStorage.setItem('examples', '')
                dispatch({ type: URLElementAction.CHANGE_URL_ELEMENT_STATE, isShow: true })
            }).catch((err: ErrorCallback) => {
                console.log(err)
                // Вывести ошибку "нет соединение с сервером"
            })
        }
        if (page === LocalRoutes.solve) {
            const exampleWithOutCursor = deleteCursor(exampleData)
            
            dispatch({ type: LevelAction.ADD_EXAMPLE_TO_LEVEL_BY_NAME, levelName: getCurrentLevel(), example: exampleWithOutCursor, statusForExample: true })
            dispatch({ type: LevelAction.INCRASE_SOLVED_COUNT_BY_NAME, levelName: getCurrentLevel() })
            dispatch({ type: InfoAboveResultAction.SET_VALUE_FOR_INFO_ABOVE_RESULT, value: true })
            dispatch({ type: TrigerForLocalExampleAction.TRIGER_FOR_EXAMPLE })
            dispatch({ type: NumberOfPointAction.INCREASE_THE_NUMBER_OF_COINS, value: 2 }) // Увеличить колличество монет
        }
    }
    else {
        if (page === LocalRoutes.index) {
            dispatch({ type: InfoAboveResultAction.SET_VALUE_FOR_INFO_ABOVE_RESULT, value: false })
        }
        if (page === LocalRoutes.solve) {
            const exampleWithOutCursor = deleteCursor(exampleData)
            
            dispatch({ type: LevelAction.ADD_EXAMPLE_TO_LEVEL_BY_NAME, levelName: getCurrentLevel(), example: exampleWithOutCursor, statusForExample: false })
            dispatch({ type: LevelAction.INCRASE_UNSOLVED_COUNT_BY_NAME, levelName: getCurrentLevel() })
            dispatch({ type: TrigerForLocalExampleAction.TRIGER_FOR_EXAMPLE })
            dispatch({ type: InfoAboveResultAction.SET_VALUE_FOR_INFO_ABOVE_RESULT, value: false })
            dispatch({ type: NumberOfPointAction.REDUCE_THE_NUMBER_OF_COINS, value: 2 }) // Уменьшить колличество монет
        }
    }
}