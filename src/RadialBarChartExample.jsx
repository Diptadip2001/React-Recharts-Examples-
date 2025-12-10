import React from "react";
import {
    RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
    { name: "Python", student: 13, fill: "#8884d8" },
    { name: "JavaScript", student: 20, fill: "#83a6ed" },
    { name: "Java", student: 18, fill: "#8dd1e1" },
    { name: "C++", student: 25, fill: "#82ca9d" },
    { name: "C#", student: 16, fill: "#a4de6c" },
    { name: "Ruby", student: 10, fill: "#d0ed57" },
    { name: "PHP", student: 22, fill: "#ffc658" },
    { name: "Go", student: 8, fill: "#ff8042" },
    { name: "Swift", student: 12, fill: "#ffbb28" },
    { name: "Kotlin", student: 15, fill: "#00C49F" }
];

export default function RadialBarChartExample() {
    return (
        <>
            <h1 className="chart">RadialBar Chart</h1>
        <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer>
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="20%"
                    outerRadius="90%"
                    barSize={15}
                    data={data}
                >
                    <RadialBar
                        minAngle={15}
                        label={{ position: "insideStart", fill: "#fff" }}
                        background
                        clockWise
                        dataKey="student"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                    <Tooltip />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
            </>
    );
}