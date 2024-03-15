import React from "react"
import { useDispatch } from "react-redux"
import { URLElementAction } from "../../lib/enums/actions/URLElementAction"
import './index.css'

interface TextCopiedProps {
    isVisible: boolean,
    value?: string
}

const UrlCopied: React.FC<TextCopiedProps> = ({ isVisible, value }) => {
    const dispatch = useDispatch()
    
    return (
        <div className={"text-copied_ani text-copied text-copied_" + isVisible}>
            {value || String(localStorage.getItem('exampleUrl'))}
            <button onClick={() => {
                window.navigator.clipboard.writeText( String(localStorage.getItem('exampleUrl')) )
                dispatch({ type: URLElementAction.CHANGE_URL_ELEMENT_STATE, isShow: false })
            }} className="text-copied__btn">copy</button>
        </div>
    )
}

export default UrlCopied