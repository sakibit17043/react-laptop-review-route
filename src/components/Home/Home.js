import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { useNavigate } from "react-router-dom";

import './Home.css';
const Home = () => {
    const [reviews,setReviews] = useReviews();
    let navigate = useNavigate()
    const showReview =()=>{
            const path = `/reviews`;
            navigate(path);

    }
    const newReviews = reviews.filter(review => review.id<4);
   
    return (
        <div>
            <div className='main'>
                <div>

            <h1>Time To Be Smart</h1>
            <p>A smartwatch is a portable device that's designed to be worn on a wrist. Like smartphones, they use touchscreens, offer apps, and often record your heart rate and other vital signs.</p>
                </div>
                <div>

            <img src={process.env.PUBLIC_URL+"images/Mibro-Lite-Smart-Watch.jpg" }/>
                </div>
            

            </div>
            <div className="review">
                <h2>Customer Review(3)</h2>
             <div className="reviews">
                {
                    newReviews.map(review=><ReviewDetails
                    key={review.id}
                    review={review}

                    ></ReviewDetails>)
                }
             </div>
            <button onClick={showReview} className='review-btn'>See All Reviews</button>
            
            </div>
        </div>
    );
};

export default Home;