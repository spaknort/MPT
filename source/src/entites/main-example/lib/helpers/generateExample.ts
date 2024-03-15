import { Levels } from "../../../../shared/lib/enums/Levels"
import { generateFractionExample } from "./generateFractionExample"
import { generateIntExample } from "./generateIntExample"
import { generateLogarithmExample } from "./generateLogarithExample"
import { generateSQRTExample } from "./generateSQRTExample"
import { generateLogarithm } from "./once/generateLogarithm"

export const generateExample = (): Array<any> => {
    let
        currentLevelData = localStorage.getItem('currentLevel')

    if (currentLevelData !== null) {
        const currentLevel = JSON.parse(currentLevelData)
        for (const [levelName, levelData] of Object.entries(currentLevel)) {
            switch(levelName.toUpperCase()) {
                case Levels.INT: return generateIntExample()
                case Levels.SQRT: return generateSQRTExample()
                case Levels.FRACTION: return generateFractionExample()
                case Levels.LOGARITHM: return generateLogarithmExample()
                default: return []
            }
        }
    }

    return []
}