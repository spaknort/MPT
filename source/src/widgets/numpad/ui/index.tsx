import React, { useState } from "react"
import Arrow from "../../../shared/ui/arrow"
import NumpadNumbers from "../../../features/numpad-numbers"
import NumpadFunctions from "../../../features/numpad-functions"
import { LocalRoutes } from "../../../shared/config"
import './index.css'
import { getElementForInsertData } from "../lib/helpers/getElementForInsertData"

interface NumpadProps {
    page: LocalRoutes
}

export const Numpad: React.FC<NumpadProps> = ({ page }) => {
    const [numpadState, setNumpadState] = useState<boolean>(true)

    return (
        <div className="numpad">
            <div className="container">
                <div className="numpad__inner">
                    <Arrow onClick={() => setNumpadState(!numpadState)} />
                    <NumpadNumbers page={page} getElementForInsertData={getElementForInsertData} isVisible={numpadState} />
                    <NumpadFunctions page={page} getElementForInsertData={getElementForInsertData} isVisible={numpadState} />
                </div>
            </div>
        </div>
    )
}
