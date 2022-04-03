import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const { name, img, ratings, description } = props.review
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="cart p-3 m-3 cart-container text-center">
                <img className='w-25  m-auto  rounded-circle p-1 ' src={img} alt="" />
                <h4>{name.slice(0, 15)}</h4>
                <h5>Ratings : {ratings}</h5>
                <p>{description.slice(0, 370) + "..."}</p>
                {/* <p>{description.length > 50 ? description.slice(0, 50) + "..." : description} </p> */}
            </div>

        </div>
    );
};

export default SingleReview;