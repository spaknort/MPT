import React, { useEffect } from "react"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"
import './index.css'

export const Diagram: React.FC = () => {
    useEffect(() => {
        const root = am5.Root.new('diagram')
        root.setThemes([am5themes_Animated.new(root)])

        const chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: 'panX',
            wheelY: 'zoomX'
        }))

        const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {behavior: 'zoomX'}))
        cursor.lineY.set('visible', false)

        const date = new Date()
        date.setHours(0, 0, 0, 0)
        let value = 100

        const generateData = () => {
            value = Math.round((Math.random() * 10 - 5) + value)
            am5.time.add(date, 'day', 5)
            return {date: date.getTime(), value: value}
        }

        const generateDatas = (count: number) => {
            const data = []
            for (let i = 0; i < count; ++i) data.push(generateData())
            return data
        }

        const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            maxDeviation: 0,
            baseInterval: {timeUnit: 'day', count: 1},
            renderer: am5xy.AxisRendererX.new(root, {minGridDistance: 60}),
            tooltip: am5.Tooltip.new(root, {})
        }))

        const yAxis  = chart.yAxes.push(am5xy.ValueAxis.new(root, {renderer: am5xy.AxisRendererY.new(root, {})}))
        const series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: 'Series',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            valueXField: 'date',
            tooltip: am5.Tooltip.new(root, {labelText: '{valueY}'})
        }))

        series.columns.template.setAll({ strokeOpacity: 0 })
        chart.set('scrollbarX', am5.Scrollbar.new(root, {orientation: 'horizontal'}))

        const data = generateDatas(20)
        series.data.setAll(data)

        // series.appear(1000)
        // chart.appear(1000, 100)
    }, [])
    
    return (
        <div className="chartdiv" id="diagram"></div>
    )
}