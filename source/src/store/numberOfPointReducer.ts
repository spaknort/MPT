import { INumberOfPointAction } from '../shared/lib/interfaces/actions/INumberOfPointAction';
import { NumberOfPointAction } from '../shared/lib/enums/actions/NumberOfPointAction';
import { INumberOfPointStateDefault } from '../shared/lib/interfaces/states/INumberOfPointStateDefault';

const NumberOfPointStateDefault: INumberOfPointStateDefault = {
    value: Number(localStorage.getItem('NumberOfPointState'))
}

export const NumberOfPointReducer = (state = NumberOfPointStateDefault, action: INumberOfPointAction) => {
    switch (action.type) {
        case NumberOfPointAction.INCREASE_THE_NUMBER_OF_COINS:
            localStorage.setItem('NumberOfPointState', String(Number(state.value) + action.value))
            return {...state, value: Number(state.value) + Number(action.value)}
        case NumberOfPointAction.REDUCE_THE_NUMBER_OF_COINS:
            const 
                value  = state.value - action.value,
                result = String((value < 0) ? 0: value)
            
            localStorage.setItem('NumberOfPointState', result)
            return {...state, value: result}
        default:  return state
    }
}