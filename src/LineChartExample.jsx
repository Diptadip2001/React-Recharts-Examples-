import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import { useState } from 'react'
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
export default function LineChartExample() {
    return (
        <>
            <h1 className="chart">Line Chart</h1>
            <div style={{ width: "100vw", height:"100vh",maxWidth:"100%"}}>
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={"preserveEnd"} tickFormatter={(value)=>value+"Prog"}/>
                        <YAxis />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "bisque",
                                color: "#000",
                                fontWeight: "bold"
                            }}


                        />
                        {/*<Legend/>*/}
                        <Line type={"monotone"} dataKey="student" stroke="red" activeDot={{r:8}} />
                        <Line type={"monotone"} dataKey="fees" stroke="blue" activeDot={{r:8}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
