import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='text-center my-3'>Customer Review   - {reviews.length}</h2>
            <div className="row">
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;