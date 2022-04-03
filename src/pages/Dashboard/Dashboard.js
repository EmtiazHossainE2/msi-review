import React from 'react';
import SalaryChart from '../../components/SalaryChart/SalaryChart';

const Dashboard = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-6">
                    <SalaryChart></SalaryChart>
                </div>
                <div className="col-lg-6">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;