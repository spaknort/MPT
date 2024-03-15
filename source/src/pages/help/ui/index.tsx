import React from 'react'
import { Header } from '../../../widgets/header'
import { HelpProject } from '../../../widgets/help-project'
import './index.css'

export const HelpPage = () => {
    return (
        <div className='help'>
            <Header />
            <HelpProject />
        </div>
    )
}
