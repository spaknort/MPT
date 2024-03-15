import { ExamplePlaces } from "../../../../shared/lib/enums/ExamplePlaces"
import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const stateHaveSign = (state: Array<any>): boolean => {
    let result = false
    state.forEach(item => (item.type === ExampleTypes.SIGN) ? result = true: '')

    return result
}