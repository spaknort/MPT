import React, { ReactNode, useEffect, useState } from 'react'
import { Header } from '../../../widgets/header'
import { NumberOfPoints } from '../../../entites/number-of-points'
import { useSelector } from 'react-redux'
import Button from '../../../shared/ui/button'
import FillExampleWithData from '../../../shared/lib/helpers/FillExampleWithData'
import './index.css'

export const LevelPage: React.FC = () => {
    const
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        [levelNameState, setLevelNameState] = useState<string>(''),
        [solvedCountState, setSolvedCountState] = useState<string>(''),
        [unSolvedCountState, setUnSolvedCountState] = useState<string>(''),
        [priceForSolvedExampleState, setPriceForSolvedExampleState] = useState<string>(''),
        [priceForUnSolvedExampleState, setPriceForUnSolvedExampleState] = useState<string>(''),
        [examplesState, setExamplesState] = useState<Array<ReactNode>>([]),
        examplesArr: Array<ReactNode> = []

    useEffect(() => {
        const currentLevelData = localStorage.getItem('currentLevel')

        if (currentLevelData !== null) {
            const currentLevel: object = JSON.parse(currentLevelData)
            for (const [levelName, levelData] of Object.entries(currentLevel)) {
                console.log(levelName, levelData)
                const examples: Array<any> = levelData.examples

                examples.forEach(exampleData => {
                    examplesArr.push(<FillExampleWithData data={exampleData.example} wrapper={true} status={exampleData.status} />)
                })

                setLevelNameState(levelData.title)
                setSolvedCountState(levelData.solvedCount)
                setUnSolvedCountState(levelData.unSolvedCount)
                setPriceForSolvedExampleState(levelData.priceForSolvedExample)
                setPriceForUnSolvedExampleState(levelData.priceForUnSolvedExample)
                setExamplesState(examplesArr)
            }
        }
    }, [])

    return (
        <div className={"level-page level-page_" + theme}>
            <Header />
            <div className="container">
                <div className="level-page__inner">
                    <h3 className={"level-page__title level-page__title_" + theme}>{levelNameState}</h3>
                    <div className={"level-page__examples level-page__examples_" + theme}>
                        <div className="mini-example mini-example_solved"></div>
                        {examplesState}
                    </div>
                    <div className="level-page__example-info">
                        <p className='level-page__solved-count'>{solvedCountState} верных</p>
                        <p className='level-page__unsolved-count'>{unSolvedCountState} неверных</p>
                    </div>
                    <div className="level-page__prices">
                        <div className={"level-page__price level-page_price_" + theme}>
                            <NumberOfPoints value={priceForUnSolvedExampleState} />
                            - не правельный ответ
                        </div>
                        <div className={"level-page__price level-page_price_" + theme}>
                            <NumberOfPoints value={priceForSolvedExampleState} />
                            - правельный ответ
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
                        <Button onClick={() => window.location.href = '/solve?localExample=true'} value='Начать' isBorder={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
