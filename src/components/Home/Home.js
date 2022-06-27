import React from 'react';
import './Home.css';
const Home = () => {
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
        </div>
    );
};

export default Home;