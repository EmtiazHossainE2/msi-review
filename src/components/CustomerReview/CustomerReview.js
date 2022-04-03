import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReview = () => {
    const [reviews] = useReview()
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