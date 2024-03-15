import { Levels } from "../shared/lib/enums/Levels";
import { LevelsRu } from "../shared/lib/enums/LevelsRu";
import { LevelAction } from "../shared/lib/enums/actions/LevelAction";
import { ILevelAction } from "../shared/lib/interfaces/actions/ILevelAction";

let
    levelsData = localStorage.getItem('levels'),
    levels = null

if (levelsData !== null && levelsData !== '') levels = JSON.parse(levelsData)

interface IExampleForLevel {
    example: Array<any>,
    status: boolean
}

interface ILevel {
    name: Levels,
    title: LevelsRu,
    examples: Array<IExampleForLevel>
    price: number,
    solvedCount: number,
    unSolvedCount: number,
    priceForSolvedExample: number,
    priceForUnSolvedExample: number,
    index: number
}

interface ILevelsDefaultState {
    int: ILevel,
    fraction: ILevel,
    degree: ILevel,
    sqrt: ILevel,
    module: ILevel,
    logarithm: ILevel,
    decimalLogarithm: ILevel,
    naturalLogarithm: ILevel,
    trigonometric: ILevel,
    trigger: []
}

const LevelsDefaultState: ILevelsDefaultState = {
    int: {
        name: Levels.INT,
        title: LevelsRu.INT,
        examples: [],
        price: 0,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 1,
        priceForUnSolvedExample: -2,
        index: 0
    },
    fraction: {
        name: Levels.FRACTION,
        title: LevelsRu.FRACTION,
        examples: [],
        price: 100,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 2,
        priceForUnSolvedExample: -3,
        index: 1
    },
    degree: {
        name: Levels.DEGREE,
        title: LevelsRu.DEGREE,
        examples: [],
        price: 200,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 3,
        priceForUnSolvedExample: -4,
        index: 2
    },
    sqrt: {
        name: Levels.SQRT,
        title: LevelsRu.SQRT,
        examples: [],
        price: 300,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 4,
        priceForUnSolvedExample: -5,
        index: 3
    },
    module: {
        name: Levels.MODULE,
        title: LevelsRu.MODULE,
        examples: [],
        price: 400,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 5,
        priceForUnSolvedExample: -6,
        index: 4
    },
    logarithm: {
        name: Levels.LOGARITHM,
        title: LevelsRu.LOGARITHM,
        examples: [],
        price: 500,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 6,
        priceForUnSolvedExample: -7,
        index: 5
    },
    decimalLogarithm: {
        name: Levels.LOGARITHM,
        title: LevelsRu.DECIMIMAL_LOGARITHM,
        examples: [],
        price: 600,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 7,
        priceForUnSolvedExample: -8,
        index: 6
    },
    naturalLogarithm: {
        name: Levels.NATURAL_LOGARITHM,
        title: LevelsRu.NATURAL_LOGARITHM,
        examples: [],
        price: 700,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 8,
        priceForUnSolvedExample: -9,
        index: 7
    },
    trigonometric: {
        name: Levels.TRIGONOMETRIC,
        title: LevelsRu.TRIGONOMETRIC,
        examples: [],
        price: 800,
        solvedCount: 0,
        unSolvedCount: 0,
        priceForSolvedExample: 9,
        priceForUnSolvedExample: -10,
        index: 8
    },
    trigger: []
} || levels

export const LevelsReducer = (state: ILevelsDefaultState = LevelsDefaultState, action: ILevelAction) => {

    const searchInStateLevelByName = (name: string): object => {
        for (const [levelName, level] of Object.entries(state)) if (levelName === name) return level
        return {}
    }

    const level = searchInStateLevelByName(action.levelName) as ILevel
    
    switch (action.type) {
        case LevelAction.ADD_EXAMPLE_TO_LEVEL_BY_NAME:
            level.examples.push({example: action.example, status: action.statusForExample})
            localStorage.setItem('levels', JSON.stringify(state))
            return {...state, ...state.trigger}
        case LevelAction.INCRASE_SOLVED_COUNT_BY_NAME:
            level.solvedCount += 1
            localStorage.setItem('levels', JSON.stringify(state))
            return {...state, ...state.trigger}
        case LevelAction.INCRASE_UNSOLVED_COUNT_BY_NAME:
            level.unSolvedCount += 1
            localStorage.setItem('levels', JSON.stringify(state))
            return {...state, ...state.trigger}
        case LevelAction.SET_DEFAULT_STATE_IN_LOCAL_STORAGE:
            localStorage.setItem('levels', JSON.stringify(state))
            return {...state, ...state.trigger}
        case LevelAction.CLEAR_ALL: 
            return {...state, ...state.trigger}
        default: return state
    }

}