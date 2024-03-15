import React from "react"
import './index.css'
import { useDispatch, useSelector } from "react-redux"
import { SocialMediaAction } from "../../../shared/lib/enums/actions/SocialMediaAction"

export const Shared: React.FC = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <svg onClick={() => { dispatch({type: SocialMediaAction.SHOW}) }} className="shared" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={"shared__path shared__path_" + theme}  clipRule="evenodd" d="M15 12.7229C14.24 12.7229 13.56 12.994 13.04 13.4187L5.91 9.66867C5.96 9.46084 6 9.25301 6 9.03614C6 8.81928 5.96 8.61145 5.91 8.40361L12.96 4.68976C13.5 5.14157 14.21 5.42169 15 5.42169C16.66 5.42169 18 4.21084 18 2.71084C18 1.21084 16.66 0 15 0C13.34 0 12 1.21084 12 2.71084C12 2.92771 12.04 3.13554 12.09 3.34337L5.04 7.05723C4.5 6.60542 3.79 6.3253 3 6.3253C1.34 6.3253 0 7.53614 0 9.03614C0 10.5361 1.34 11.747 3 11.747C3.79 11.747 4.5 11.4669 5.04 11.0151L12.16 14.7741C12.11 14.9639 12.08 15.1627 12.08 15.3614C12.08 16.8163 13.39 18 15 18C16.61 18 17.92 16.8163 17.92 15.3614C17.92 13.9066 16.61 12.7229 15 12.7229Z"/>
        </svg>
    )
}