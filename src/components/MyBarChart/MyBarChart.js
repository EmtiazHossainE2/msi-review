import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 240,
            "revenue": 1040
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 420,
            "revenue": 2450
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 720,
            "revenue": 6701
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 4040
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 5090
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 6100
        },
        {
            "month": "Sep",
            "investment": 500000,
            "sell": 430,
            "revenue": 5300
        }
    ]
    return (
        <BarChart
            width={600}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" minPointSize={5}>
                <LabelList dataKey="sell" />
            </Bar>
            <Bar dataKey="sell" fill="#82ca9d" minPointSize={10} />
        </BarChart>
    );
};

export default MyBarChart;