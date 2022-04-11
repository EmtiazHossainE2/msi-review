import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const SalaryChart = () => {
    const [data] = useChart();
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