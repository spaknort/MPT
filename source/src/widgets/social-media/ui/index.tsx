import React from 'react'
import {
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    ViberShareButton,
    ViberIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { SocialMediaAction } from '../../../shared/lib/enums/actions/SocialMediaAction'

export const SocialMedia = () => {
    const dispatch = useDispatch()
    const data = useSelector((state: any) => { return state.SocialMediaReducer.isHiden })

    return (
        <div onClick={() => { dispatch({type: SocialMediaAction.HIDE}) }} className={ (data) ? 'social-media' : 'hide' }>
            <div className="container">
                <div className="social-media__inner">
                    <TelegramShareButton url="https://t.me/R_4an">
                        <TelegramIcon size={34} round={true} />
                    </TelegramShareButton>
                    <TwitterShareButton url="">
                        <TwitterIcon size={34} round={true} />
                    </TwitterShareButton>
                    <ViberShareButton url="">
                        <ViberIcon size={34} round={true} />
                    </ViberShareButton>
                    <WhatsappShareButton url="">
                        <WhatsappIcon size={34} round={true} />
                    </WhatsappShareButton>
                </div>
            </div>
        </div>
    )
}