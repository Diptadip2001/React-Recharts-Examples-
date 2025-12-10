import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
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

export default function ComposedChartExample() {
    return (
        <>
        <h1 className="chart">Composed Chart</h1>
        <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer>
                <ComposedChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Bar for student values */}
                    <Bar dataKey="student" barSize={20} fill="red" />
                    {/* Line for fees values */}
                    <Line type="monotone" dataKey="fees" stroke="blue" />
                    {/* Area overlay for student values */}
                    <Area type="monotone" dataKey="student" fill="lightpink" stroke="none" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
        </>
    );
}
