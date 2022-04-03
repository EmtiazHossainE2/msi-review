import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SalaryChart = () => {
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
        <LineChart width={500} height={500} data={data}>
            <Line type="monotone" dataKey={'revenue'}></Line>
            <Line dataKey={'investment'}></Line>
            <YAxis></YAxis>
            <XAxis dataKey={'month'}></XAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
    );
};

export default SalaryChart;