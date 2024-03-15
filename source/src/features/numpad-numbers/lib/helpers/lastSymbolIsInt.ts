import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const lastSymbolIsInt = (state: Array<any>): boolean => {
    const lastSybol = state[state.length - 1].type
    return (lastSybol === ExampleTypes.INT) ? true: false
}