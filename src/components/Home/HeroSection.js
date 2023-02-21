import React from 'react';
import heroImg from '../../images/heroImg (2).jpg'




const HeroSection = () => {

    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url('${heroImg}')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-[#1CC3B2] border-none rounded-none">Get Started  <i class="fa-solid fa-arrow-right ml-2"></i></button>
                </div>
            </div>
        </div>
        
    );
};

export default HeroSection;