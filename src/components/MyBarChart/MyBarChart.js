import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyBarChart = () => {
    const [data] = useChart()
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