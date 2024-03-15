import Button from "../../../shared/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { SwitchCheckboxChangeAction } from "../../../shared/lib/enums/SwitchCheckboxChangeAction"
import { SwitchCheckbox } from "../../../entites/switch-checkbox"
import './index.css'
import { checkNotificationWorker } from "../lib/checkNotificationWorker"
import { useNavigate } from "react-router-dom";

export const SettingsWidget = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isSoundStore = useSelector((state: any) => state.SettingsReducer.isSound)
    const isNotificationStore = useSelector((state: any) => state.SettingsReducer.isNotification)
    const [isSound, setSound] = useState<boolean>(isSoundStore)
    const [isNotification, setNotification] = useState<boolean>(isNotificationStore)

    const saveSettingsData = () => {
        dispatch({ type: SwitchCheckboxChangeAction.CHANGE, isSound: isSound, isNotification: isNotification })
        navigate('/index')
    }

    function notification () {
        if (checkNotificationWorker()) {
            Notification.requestPermission().then(resolve => {
                if (resolve == 'granted') {
                    setNotification(!isNotification)
                }
            })

        }
        else {
            alert('Извените ваш браузер не потдерживает функцию отправки уведомлений')
        }
    }

    return (
        <div className="settings-widget">
            <div className="container">
                <div className="settings-widget__inner">
                    <SwitchCheckbox onClick={() => setSound(!isSound)} type={isSound} value="Звуки" />
                    <SwitchCheckbox onClick={notification} type={isNotification} value="Уведомления" />
                    <div className="settings-widget__buttons">
                        <Button onClick={() => saveSettingsData()} isBorder={true} value="Сохранить" />
                    </div>
                </div>
            </div>
        </div>
    )
}