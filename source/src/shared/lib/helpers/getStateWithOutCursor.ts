import { ExampleTypes } from "@/shared/lib/enums/ExampleTypes"

export const getStateWithOutCursor = (state: Array<any>) => {
    if (state.length > 1) return state.filter(item => item.type !== ExampleTypes.CURSOR)
    return []
}