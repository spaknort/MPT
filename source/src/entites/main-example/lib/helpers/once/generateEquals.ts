import { ExampleTypes } from "../../../../../shared/lib/enums/ExampleTypes";
import { ISIGN } from "../../../../../shared/lib/interfaces/examples/ISIGN";

export const generateEquals = (index: number): ISIGN => {
    const equals: ISIGN = {
        type: ExampleTypes.EQUALS,
        value: '=',
        index: index + 1
    }

    return equals
}