import React from "react";
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
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

export default function ScatterChartExample() {
    return (
        <>
            <h1 className="chart">Scatter Chart</h1>
        <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer>
                <ScatterChart>
                    <CartesianGrid />
                    <XAxis type="category" dataKey="name" />
                    <YAxis type="number" dataKey="student" />
                    <Tooltip />
                    <Legend />
                    <Scatter name="Students" data={data} fill="red" />
                    <Scatter name="Fees" data={data} fill="blue" dataKey="fees" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
            </>
    );
}
