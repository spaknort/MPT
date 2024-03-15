import React, { useState } from "react"
import './index.css'
import Title from "../../../shared/ui/title"
import { TitleType } from "../../../shared/lib/enums/TitleType"
import Text from "../../../shared/ui/text"
import { NavLink } from "react-router-dom"
import TextCopied from "../../../shared/ui/url-copied"
import { useSelector } from "react-redux"

export const HelpProject = () => {
    const [textShow, setTextShow] = useState(false)
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    let showText = () => {
        setTextShow(true)
        setTimeout(() => {
            setTextShow(false)
        }, 2000)
    }

    return (
        <div className={"help-project help-project_" + theme}>
            <div className="container">
                <div className="help-project__inner">
                    <div className="help-project__container">
                        <Title type={TitleType.DEFAULT} value="Помощь проекту" />
                        <Text value="Ты можешь помочь нам, переведи деньги на сбер счет, перейди на Patreon и стань членом команды или поделись ссылкой." />
                    </div>
                    <div className="help-project__container">
                        <Title type={TitleType.DEFAULT} value="Сбер счет" />
                        <Text onClick={() => { navigator.clipboard.writeText('40817 8105 0916 6269997'); showText() }} value="40817 8105 0916 6269997" />
                    </div>
                    <div className="help-project__container">
                        <Title type={TitleType.DEFAULT} value="Поделитесь ссылкой" />
                        <Text onClick={() => { navigator.clipboard.writeText('https://play.google.com/store/apps/details?id=sportproger.mathsimulatorsolutionexamples&hl=ru&gl=US'); showText() }} value="https://play.google.com/store/apps/details?id=sportproger.mathsimulatorsolutionexamples&hl=ru&gl=US" />
                    </div>
                    {/* <TextCopied className={ (textShow) ? 'text-copied text-copied_ani': 'text-copied' } /> */}
                </div>
            </div>
        </div>
    )
}