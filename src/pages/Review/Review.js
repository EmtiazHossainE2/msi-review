import React from 'react';
import SingleReview from '../../components/SingleReview/SingleReview';
import useReview from '../../hooks/useReview';

const Review = () => {
    const [reviews] = useReview()
    return (
        <div className='container my-5'>
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

export default Review;