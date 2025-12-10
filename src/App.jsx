import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CartesianGrid, Line, LineChart, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import LineChartExample from "./LineChartExample.jsx";
import BarChartExample from "./BarChartExample.jsx";
import PieChartExample from "./PieChartExample.jsx";
import ComposedChartExample from "./ComposedChart.jsx";
import RadarChartExample from "./RadarChartExample.jsx";
import RadialBarChartExample from "./RadialBarChartExample.jsx";
import AreaChartExample from "./AreaChartExample.jsx";
import ScatterChartExample from "./ScatterChartExample.jsx";
const data = [
    {
        name: "Python",
        student: 13,
        fees: 10
    },
    {
        name: "JavaScript",
        student: 20,
        fees: 15
    },
    {
        name: "Java",
        student: 18,
        fees: 12
    },
    {
        name: "C++",
        student: 25,
        fees: 14
    },
    {
        name: "C#",
        student: 16,
        fees: 11
    },
    {
        name: "Ruby",
        student: 10,
        fees: 9
    },
    {
        name: "PHP",
        student: 22,
        fees: 13
    },
    {
        name: "Go",
        student: 8,
        fees: 10
    },
    {
        name: "Swift",
        student: 12,
        fees: 12
    },
    {
        name: "Kotlin",
        student: 15,
        fees: 11
    }
];
function App() {
    return (
        <>
            <LineChartExample/>
            <BarChartExample/>
            <PieChartExample/>
            <ComposedChartExample/>
            <RadarChartExample/>
            <RadialBarChartExample/>
            <AreaChartExample/>
            <ScatterChartExample/>
        </>
    );
}

export default App
