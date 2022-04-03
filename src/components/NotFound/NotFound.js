import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/error'
const NotFound = () => {
    return (
        <div className='text-center'>
            <Link to='/'><img src={errorImg} alt="" /> </Link>
        </div>
    );
};

export default NotFound;