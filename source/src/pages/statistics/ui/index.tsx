import React from 'react'
import { Header } from '../../../widgets/header'
import { useSelector } from 'react-redux'
import { Diagram } from '../../../widgets/diagram'

export const StatisticsPage: React.FC = () => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <div className={'index index_' + theme}>
            <Header />
            <Diagram />
        </div>
    )
}
