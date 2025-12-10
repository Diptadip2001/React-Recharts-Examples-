import React from "react";
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer, Tooltip, Legend
} from "recharts";

const data = [
    { name: "Python", student: 13, fees: 10 },
    { name: "JavaScript", student: 20, fees: 15 },
    { name: "Java", student: 18, fees: 12 },
    { name: "C++", student: 25, fees: 14 },
    { name: "C#", student: 16, fees: 11 },
    { name: "Ruby", student: 10, fees: 9 },
    { name: "PHP", student: 22, fees: 13 },
    { name: "Go", student: 8, fees: 10 },
    { name: "Swift", student: 12, fees: 12 },
    { name: "Kotlin", student: 15, fees: 11 }
];

export default function RadarChartExample() {
    return (

        <>
            <h1 className="chart">Radar Chart</h1>
        <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer>
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Legend />
                    <Radar name="Students" dataKey="student" stroke="red" fill="red" fillOpacity={0.6} />
                    <Radar name="Fees" dataKey="fees" stroke="blue" fill="blue" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
            </>
    );
}