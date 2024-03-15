import React from "react"
import { ProgressLineType } from "../../lib/enums/ProgressLineType"
import './index.css'

const HEIGHT = 100

interface ProgressLineProps {
    type: ProgressLineType,
    max: number,
    min: number,
    value: number
}

const ProgressLine: React.FC<ProgressLineProps> = ({ type, max, value, min }) => {
    return (
        <div style={{
            height: HEIGHT
        }} className={"progress-line " + ((type === ProgressLineType.HORIZONTAL) ? 'progress-line_horizontal': 'progress-line_vertical')}>
            <div style={{
                height: ((HEIGHT / Math.abs(max + min)) * value) || 0
            }} className="progress-line__value"></div>
        </div>
    )
}

export default ProgressLine