import React from 'react';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews,setReviews] = useReviews()
    return (
        <div>
            <h1>This is Review page:{reviews.length}</h1>
        </div>
    );
};

export default Reviews;