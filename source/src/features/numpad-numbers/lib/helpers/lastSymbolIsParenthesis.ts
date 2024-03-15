import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const lastSymbolIsParenthesis = (state: Array<any>): boolean => {
    const lastSybol = state[state.length - 1].type
    return (lastSybol === ExampleTypes.PARENTHESIS) ? true: false
}