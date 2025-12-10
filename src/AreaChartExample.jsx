import React from "react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
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

export default function AreaChartExample() {
    return (
        <>
            <h1 className="chart">Area Chart</h1>
        <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="student" stroke="red" fill="pink" />
                    <Area type="monotone" dataKey="fees" stroke="blue" fill="lightblue" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
            </>
    );
}