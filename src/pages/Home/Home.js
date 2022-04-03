import React from 'react';
import './Home.css'
import banner from '../../images/banner.jpg'
const Home = () => {
    return (
        <div className='container'>
            <div className="row container my-5">
                <div className="col-lg-6">
                    <h3>2022 Best Gaming Laptop Review</h3>
                    <h5>MSI Stealth 15M is a real-world gaming laptop with strong performance and respectable battery life.</h5>
                    <p>In terms of performance, I can confidently say that the MSI Stealth review will be the best gaming laptop in the market. It has really shown that MSI engineers are innovating and keeping up with the gaming industry's pace. Nevertheless, the issues raised at the time of launch are not really related to the MSI Stealth's design or its specs. MSI brought new color options for the MSI Stealth review that we haven't seen yet. Carbon Gray (A11UEK-009) and Emerald Green (A11UEK-009), and these are striking enough. This review unit looks like the Gray Stealth we reviewed two years ago and we couldn't be happier. We think it looks modern and sleek as well.</p>
                    <button className='btn btn-warning mb-4'>See More Details</button>
                </div>
                <div className="col-lg-6">
                    <div className='text-center'>
                        <img className='w-75 rounded' src={banner} alt="MSI Stealth" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;