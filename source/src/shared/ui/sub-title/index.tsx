import React from 'react'
import './index.css'

interface SubTitleProps {
    value: string
}

const SubTitle: React.FC<SubTitleProps> = ({ value }) => {
    return (
        <p className='sub-title'>{value}</p>
    )
}

export default SubTitle