import React from 'react';
import './ReviewDetails.css';


const ReviewDetails = (props) => {
    const {name,discription,ratings} = props.review;
    return (
        <div className='review-details'>
           <h1> Name:{name}</h1>
           <p><small>Discription:{discription}</small></p>
           <h3>Ratings:{ratings}</h3>
        </div>
    );
};

export default ReviewDetails;