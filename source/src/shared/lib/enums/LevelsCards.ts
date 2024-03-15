import { ILEVEL } from "../interfaces/examples/ILEVEL";
import { LevelsRu } from "./LevelsRu";
import { Levels } from "./Levels";

export class LevelsCards {
    public int: ILEVEL = {
        id: 0,
        name: LevelsRu.INT,
        type: Levels.INT,
        isActive: true,
        price: 0,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public fraction: ILEVEL = {
        id: 1,
        name: LevelsRu.FRACTION,
        type: Levels.FRACTION,
        isActive: false,
        price: 100,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public degree: ILEVEL = {
        id: 2,
        name: LevelsRu.DEGREE,
        type: Levels.DEGREE,
        isActive: false,
        price: 200,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public sqrt: ILEVEL = {
        id: 3,
        name: LevelsRu.SQRT,
        type: Levels.SQRT,
        isActive: false,
        price: 300,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public module: ILEVEL = {
        id: 4,
        name: LevelsRu.MODULE,
        type: Levels.MODULE,
        isActive: false,
        price: 400,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public logarithm: ILEVEL = {
        id: 5,
        name: LevelsRu.LOGARITHM,
        type: Levels.LOGARITHM,
        isActive: false,
        price: 500,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public decimimalLogarithm: ILEVEL = {
        id: 6,
        name: LevelsRu.DECIMIMAL_LOGARITHM,
        type: Levels.DECIMIMAL_LOGARITHM,
        isActive: false,
        price: 600,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public naturalLogarithm: ILEVEL = {
        id: 7,
        name: LevelsRu.NATURAL_LOGARITHM,
        type: Levels.NATURAL_LOGARITHM,
        isActive: false,
        price: 700,
        solvedCount: 0,
        unsolvedCount: 0
    }

    public trigonometric: ILEVEL = {
        id: 8,
        name: LevelsRu.TRIGONOMETRIC,
        type: Levels.TRIGONOMETRIC,
        isActive: false,
        price: 800,
        solvedCount: 0,
        unsolvedCount: 0
    }
}