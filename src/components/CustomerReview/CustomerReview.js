import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReview = () => {
    const [reviews] = useReview()
    const homeReview = reviews.slice(0, 3);
    return (
        <div>
            <h2 className='text-center my-3'>Customer Review   - {homeReview.length}</h2>
            <div className="row">
                {
                    homeReview.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;