import React from "react"
import { useSelector } from "react-redux"
import ProgressLine from "../../../shared/ui/progress-line"
import { ProgressLineType } from "../../../shared/lib/enums/ProgressLineType"
import './index.css'

interface LevelCardProps {
    onClick?: () => void,
    title: string,
    isActive: boolean,
    price: number,
    solvedCount: number,
    unsolvedCount: number
}

export const LevelCard: React.FC<LevelCardProps> = ({ onClick, title, isActive, price, solvedCount, unsolvedCount }) => {
    const theme = useSelector((state: any) => state.ThemeReducer.theme)

    return (
        <div onClick={onClick} className={"level-cart level-cart_" + theme + " " + ((isActive) ? "level-cart_active": '')}>
            <div className="level-cart__text">
                <p className="level-cart__price">Цена: <span className={"level-cart__span_" + theme}>{price}</span></p>
                <p className="level-cart__solved-count">Решено: <span className={"level-cart__span_" + theme}>{solvedCount}</span> из {solvedCount + unsolvedCount}</p>
                <h3 className="level-cart__title">{title}</h3>
            </div>
            <ProgressLine type={ProgressLineType.VERTICAL} value={solvedCount} max={solvedCount + unsolvedCount} min={0} />
        </div>
    )
}