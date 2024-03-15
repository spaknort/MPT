import Button from "../../../shared/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { SwitchCheckboxChangeAction } from "../../../shared/lib/enums/SwitchCheckboxChangeAction"
import { SwitchCheckbox } from "../../../entites/switch-checkbox"
import './index.css'

export const SettingsWidget = () => {
    const dispatch = useDispatch()
    let isSoundStore = useSelector((state: any) => state.SettingsReducer.isSound)
    let isNotificationStore = useSelector((state: any) => state.SettingsReducer.isNotification)
    let [isSound, setSound] = useState<boolean>(isSoundStore)
    let [isNotification, setNotification] = useState<boolean>(isNotificationStore)

    let saveSettingsData = () => {
        dispatch({ type: SwitchCheckboxChangeAction.CHANGE, isSound: isSound, isNotification: isNotification })
    }

    return (
        <div className="settings-widget">
            <div className="container">
                <div className="settings-widget__inner">
                    <SwitchCheckbox onClick={() => setSound(!isSound)} type={isSound} value="Звуки" />
                    <SwitchCheckbox onClick={() => setNotification(!isNotification)} type={isNotification} value="Уведомления" />
                    <div className="settings-widget__buttons">
                        <Button onClick={() => saveSettingsData()} isBorder={true} value="Сохранить" />
                    </div>
                </div>
            </div>
        </div>
    )
}