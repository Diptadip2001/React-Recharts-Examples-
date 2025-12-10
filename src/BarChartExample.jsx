import { CartesianGrid, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

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

export default function BarChartExample() {
    return (
        <>
            <h1 className="chart">Bar Chart</h1>
            <div style={{ width: "100vw", height: "100vh", maxWidth: "100%" }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={"preserveEnd"} tickFormatter={(value) => value + " Prog"} />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: "green" }} />
                        <Legend />
                        <Bar dataKey="student" fill="red" />
                        <Bar dataKey="fees" fill="blue" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}
