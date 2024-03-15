import { ExampleTypes } from "../../../../../shared/lib/enums/ExampleTypes";
import { random } from "../../../../../shared/lib/helpers/random";
import { IINT } from "../../../../../shared/lib/interfaces/examples/IINT";

export const generateInt = (index: number): IINT => {
    const int: IINT = {
        type: ExampleTypes.INT,
        value: random(1, 100),
        index
    }

    return int
}