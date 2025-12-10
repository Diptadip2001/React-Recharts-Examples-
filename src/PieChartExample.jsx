import './App.css'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

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

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#00C49F", "#FF8042", "#8884D8", "#82CA9D"];

function PieChartExample() {
    return (
        <>
            <h1 className="chart">Pie Chart</h1>
            <div style={{ width: "100vw", height: "100vh", maxWidth: "100%" }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="student"   // choose which value to visualize (student or fees)
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={150}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default PieChartExample;