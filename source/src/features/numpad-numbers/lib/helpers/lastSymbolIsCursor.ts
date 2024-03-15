import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const lastSymbolIsCursor = (state: Array<any>): boolean => {
    const lastSybol = state[state.length - 1].type
    return (lastSybol === ExampleTypes.CURSOR) ? true: false
}