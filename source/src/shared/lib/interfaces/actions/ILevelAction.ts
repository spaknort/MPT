import { Levels } from "../../enums/Levels";
import { LevelAction } from "../../enums/actions/LevelAction";

export interface ILevelAction {
    type: LevelAction,
    levelName: Levels,
    example: Array<any>,
    statusForExample: boolean,
    price: number
}