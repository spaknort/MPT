import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IINT } from "../../lib/interfaces/examples/IINT"
import { ISIGN } from "../../lib/interfaces/examples/ISIGN"
import { ISQRT } from "../../lib/interfaces/examples/ISQRT"
import { ExamplePlaces } from "../../lib/enums/ExamplePlaces"
import { ITRIGONOMETRIC } from "../../lib/interfaces/examples/ITRIGONOMETRIC"
import { IFRACTION } from "../../lib/interfaces/examples/IFRACTION"
import { IDEGREE } from "../../lib/interfaces/examples/IDEGREE"
import FillExampleWithData from "../../lib/helpers/FillExampleWithData"
import { setFocusElement } from "../../lib/helpers/setFocusElement"
import './index.css'

interface SQRTProps {
    exponent: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION>,
    base: Array<IINT | ISIGN | ISQRT | ITRIGONOMETRIC | IDEGREE | IFRACTION>,
    index: number,
    color: string
}

const SQRT: React.FC<SQRTProps> = ({ exponent, base, index, color }) => {
    const
        dispatch = useDispatch(),
        theme = useSelector((state: any) => state.ThemeReducer.theme),
        exampleData = useSelector((state: any) => state.MainExampleReducer.data),
        canvasRef = useRef<HTMLCanvasElement | null>(null),
        baseRef = useRef<HTMLDivElement | null>(null),
        exponentRef = useRef<HTMLDivElement | null>(null),
        [width, setWidth] = useState<number>(80)
    
    useEffect(() => {
        const
            canvas          = canvasRef.current,
            baseElement     = baseRef.current,
            exponentElement = exponentRef.current

        if (!canvas) return
        if (!baseElement) return
        if (!exponentElement) return

        if (baseElement.clientWidth < 35) setWidth(70) 
        else setWidth(baseElement.clientWidth + 35)

        canvas.width = width
        canvas.height = (baseElement.clientHeight > 45) ? baseElement.clientHeight + 10: 50

        baseElement.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.BASE, index))
        exponentElement.addEventListener('click', (e: MouseEvent) => setFocusElement(e, dispatch, ExamplePlaces.EXPONENT, index))

        const ctx = canvas.getContext('2d')
        ctx!.lineWidth = 1.5
        if (color === undefined) ctx!.fillStyle = (theme === 'dark') ? '#1F323D': '#fafafa'
        else ctx!.fillStyle = color

        ctx?.fillRect(0, 0, 100, 100)
        drawSQRT(canvas)
        drawLine(canvas)

        function drawSQRT (canvas: HTMLCanvasElement) {
            ctx!.strokeStyle = (theme === 'dark') ? '#fafafa': '#1F323D'
            ctx!.lineWidth = 1.5

            ctx?.beginPath()
            ctx?.moveTo(2, canvas.height * 0.55) // 4% canvas.height / 100 * 40 | canvas.height * 0.4
            ctx?.lineTo(12, canvas.height * 0.55)
            ctx?.stroke()
    
            ctx?.beginPath()
            ctx?.moveTo(12, canvas.height * 0.55)
            ctx?.lineTo(14, canvas.height)
            ctx?.stroke()
    
            ctx?.beginPath()
            ctx?.moveTo(14, canvas.height)
            ctx?.lineTo(21, 2)
            ctx?.stroke()
    
            ctx?.beginPath()
            ctx?.moveTo(21, 2)
            ctx?.lineTo(width, 2)
            ctx?.stroke()
        }

        function drawLine (canvas: HTMLCanvasElement) {
            ctx!.strokeStyle = (theme === 'dark') ? '#fafafa': '#1F323D'
            ctx?.beginPath()
            ctx?.moveTo(canvas.width * 0.30, 2)
            ctx?.lineTo(canvas.width * 0.30 + width + 10, 2)
            ctx?.stroke()

            // setWidth(sqrtWidth)
            canvas.width = width
            ctx!.fillStyle = (theme === 'dark') ? '#1F323D': '#fafafa'
            ctx?.fillRect(0, 0, canvas.width, canvas.height)
            ctx?.fill()
            drawSQRT(canvas)
        }
    }, [exampleData, width])

    return (
        <div data-index={index} className="sqrt" style={{width: width}}>
            <canvas className="sqrt__canv" ref={canvasRef} id="sqrt-canv"></canvas>
            <div
                ref={exponentRef}
                data-parrent-index={index}
                data-place={ExamplePlaces.EXPONENT}
                style={{color}}
                className={"sqrt__exponent sqrt__exponent_" + theme}
            >
            <FillExampleWithData data={exponent} /></div>
            <div
                data-parrent-index={index}
                data-place={ExamplePlaces.BASE}
                ref={baseRef}
                style={{color}}
                className={"sqrt__base sqrt__base_" + theme}
            >
            <FillExampleWithData data={base} /></div>
        </div>
    )
}

export default SQRT