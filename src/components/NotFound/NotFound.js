import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h2>This page is not available </h2>
            <h4>404</h4>
            <Link to='/'><button className='btn btn-primary mt-4'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;