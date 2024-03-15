import React, { ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../../widgets/header'
import { LevelCard } from '../../../entites/level-card'
import './index.css'

export const LevelsPage: React.FC = () => {
    const 
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        [levelsState, setLevelsState] = useState<Array<ReactNode>>(),
        levelsArr: Array<ReactNode> = []

    useEffect(() => {
        const levelsData = localStorage.getItem('levels')
        if (levelsData !== null) {
            const levels: object = JSON.parse(levelsData)
            for (const [levelName, levelParams] of Object.entries(levels)) {
                console.log(levelName, levelParams)
                if (levelName === 'trigger') break
                levelsArr.push(
                    <LevelCard
                        key={levelParams.index}
                        onClick={() => {
                            localStorage.setItem('currentLevel', JSON.stringify({[levelName]: levelParams}))
                            window.location.href = 'level'
                        }}
                        title={levelParams.title}
                        isActive={levelParams.isActive}
                        price={levelParams.price}
                        solvedCount={levelParams.solvedCount}
                        unsolvedCount={levelParams.unSolvedCount}
                    />
                )
            }

            setLevelsState(levelsArr)
        }
    }, [])

    return (
        <div className={'levels levels_' + theme}>
            <Header />
            <div className="levels__block">
                <div className="container">
                    <div className="levels__inner">{levelsState}</div>
                </div>
            </div>
        </div>
    )
}
