import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const { name, img, ratings, description } = props.review
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="cart p-3 m-3 cart-container text-center">
                <img className='w-25  m-auto  rounded-circle p-1 ' src={img} alt="" />
                <h4 className='py-2'>{name.slice(0, 15)}</h4>
                <h5>Ratings : {ratings}</h5>
                <p className='py-2'>{description.slice(0, 370) + "..."}</p>
            </div>

        </div>
    );
};

export default SingleReview;