import React, { useEffect } from 'react'
import { Welcome } from '../../../widgets/welcome'
import { LevelsCards } from '../../../shared/lib/enums/LevelsCards'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { LevelAction } from '../../../shared/lib/enums/actions/LevelAction'

export const StartPage: React.FC = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch({ type: LevelAction.SET_DEFAULT_STATE_IN_LOCAL_STORAGE })
    }, [])

    return (
        <div className="start">
            <Welcome />
        </div>
    )
}
