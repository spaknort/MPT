import React from "react"
import './index.css'
import { TitleType } from "../../lib/enums/TitleType"
import { useSelector } from "react-redux"


interface TitleProps {
    type: TitleType,
    value: string
}

const Title: React.FC<TitleProps> = ({ type, value }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <h2 className={ ((type === TitleType.BIG) ? 'title': 'title_def') + " title_" + theme }>{value}</h2>
    )
}

export default Title