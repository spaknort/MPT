import { createStore, combineReducers } from 'redux';
import { NumberOfPointReducer } from './numberOfPointReducer'
import { SocialMediaReducer } from './socialMediaReducer'
import { SettingsReducer } from './settingsReducer';
import { ThemeReducer } from './themeReducer'
import { MainExampleReducer } from './mainExampleReducer'
import { IndexForElementReducer } from './indexForElementReducer'
import { FocusElementReducer } from './focusElementReducer'
import { InfoAboveExampleReducer } from './infoAboveResultReducer'
import { URLElementReducer } from './urlElementReducer'
import { LevelsReducer } from './levelsReducer';
import { TrigerForLocalExampleReducer } from './trigerForLocalExampleReducer'

const rootReducer = combineReducers({
    NumberOfPointReducer,
    SocialMediaReducer,
    SettingsReducer,
    ThemeReducer,
    MainExampleReducer,
    FocusElementReducer,
    IndexForElementReducer,
    InfoAboveExampleReducer,
    URLElementReducer,
    LevelsReducer,
    TrigerForLocalExampleReducer
})

export const store = createStore(rootReducer)