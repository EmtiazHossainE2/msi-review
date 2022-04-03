
import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyAreaChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 2401,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 4203,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 7206,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 5290,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 6010,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 6700,
            "revenue": 61000
        },
        {
            "month": "Sep",
            "investment": 500000,
            "sell": 4300,
            "revenue": 53000
        }
    ]
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Legend />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyAreaChart;