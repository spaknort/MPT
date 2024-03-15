import React from "react"
import { ISocialMediaDefaultState } from "../shared/lib/interfaces/states/ISocialMediaDefaultState"
import { ISocialMediaStateAction } from "../shared/lib/interfaces/actions/ISocialMediaStateAction"
import { SocialMediaAction } from "../shared/lib/enums/actions/SocialMediaAction"

const SocialMediaDefaultState: ISocialMediaDefaultState = {
    isHiden: false
}

export const SocialMediaReducer = (state = SocialMediaDefaultState, action: ISocialMediaStateAction) => {
    switch (action.type) {
        case SocialMediaAction.SHOW:
            return {...state, isHiden: true}
        case SocialMediaAction.HIDE:
            return {...state, isHiden: false}
        default: return state
    }
}