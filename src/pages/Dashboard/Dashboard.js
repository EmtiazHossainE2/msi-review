import React from 'react';
import MyAreaChart from '../../components/MyAreaChart/MyAreaChart';
import MyBarChart from '../../components/MyBarChart/MyBarChart';
import MyRadarChart from '../../components/MyRadarChart/MyRadarChart';
import SalaryChart from '../../components/SalaryChart/SalaryChart';

const Dashboard = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-6  mb-5">
                    <SalaryChart></SalaryChart>
                </div>
                <div className="col-lg-6 ">
                    <MyBarChart></MyBarChart>
                </div>
                <div className="col-lg-6 ">
                    <MyAreaChart></MyAreaChart>
                </div>
                <div className="col-lg-6 ">
                    <MyRadarChart></MyRadarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;