import React from 'react';
import MyBarChart from '../../components/MyBarChart/MyBarChart';
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
            </div>
        </div>
    );
};

export default Dashboard;