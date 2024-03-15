import React from 'react'
import Title from '../../../shared/ui/title'
import SubTitle from '../../../shared/ui/sub-title'
import { TitleType } from '../../../shared/lib/enums/TitleType'
import { OpenButton } from '../../../entites/open-button'
import { LocalRoutes } from '../../../shared/config'
import './index.css'

export const Welcome = () => {
    return (
        <div className="container">
            <div className="start__inner">
                <Title type={TitleType.BIG} value='Welcome' />
                <SubTitle value='С помошью нашего приложения ты сможешь в несколько раз улучьшить свои навыки в вычислениях.' />
                <div className="start__buttons">
                    <OpenButton link={LocalRoutes.index} isBorder={true} value='Решать' />
                    <OpenButton link={LocalRoutes.index} isBorder={true} value='Создать' />
                </div>
            </div>
        </div>
    )
}