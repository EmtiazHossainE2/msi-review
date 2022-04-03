import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';

const MyRadarChart = () => {
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
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis />
                <Tooltip />
                <Legend />
                <Radar name="investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="revenue" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default MyRadarChart;