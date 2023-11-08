import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hs-container'>
            <div className='hs-content'>
                <div>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands pocast episodes</h1>
                </div>
                <div className='hs-img-frame'>
                    <img className='hs-img' src='./vibrating-headphone.png' alt='headphone'/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;