import React from 'react';
import Rating from '../Rating/Rating';
import './SingleReview.css'
const SingleReview = (props) => {
    const { name, img, ratings, description } = props.review
    return (
        <div className='col-lg-4 col-md-6 p-2'>
            <div className="cart p-3 m-3 cart-container text-center">
                <img className='w-25  m-auto  rounded-circle p-1 ' src={img} alt="" />
                <h4 className='py-2'>{name.slice(0, 15)}</h4>
                <div className="rating">
                    <Rating ratings={ratings} ></Rating>
                </div>
                <p className='py-2'>{description.slice(0, 370) + "..."}</p>
            </div>

        </div>
    );
};

export default SingleReview;