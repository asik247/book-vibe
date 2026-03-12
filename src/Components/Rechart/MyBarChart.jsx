import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = ({ student }) => {

    const chartData = [
        {
            subject: 'Physics',
            total: student.subjects.Physics.total
        },
        {
            subject: 'Chemistry',
            total: student.subjects.Chemistry.total
        },
        {
            subject: 'Math',
            total: student.subjects.Math.total
        },
        {
            subject: 'Biology',
            total: student.subjects.Biology?.total || 0
        },
        {
            subject: 'English',
            total: student.subjects.English?.total || 0
        },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen ">

            <div className="bg-white p-8 rounded-2xl shadow-xl">

                <h2 className="text-2xl font-bold text-center mb-6">
                    {student.name} Result Chart
                </h2>

                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#4F46E5" />
                </BarChart>

            </div>

        </div>
    );
};

export default MyBarChart;