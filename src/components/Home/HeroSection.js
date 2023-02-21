import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../images/heroImg (2).jpg'




const HeroSection = () => {

    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url('${heroImg}')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h4 className='uppercase font-semibold text-lg'>hotel & resort</h4>
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Roberto</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/rooms'>
                        <button className="btn bg-transparent border-[#1CC3B2] border-[2px] rounded-none">Discover Now  <i class="fa-solid fa-arrow-right ml-2"></i></button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;