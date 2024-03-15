import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const lastSymbolIsSign = (state: Array<any>): boolean => {
    const lastSybol = state[state.length - 1].type
    return (lastSybol === ExampleTypes.SIGN || lastSybol === ExampleTypes.EQUALS) ? true: false
}