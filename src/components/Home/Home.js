import React from 'react';
import AboutSection from './AboutSection';
import CheckingSection from './CheckingSection';
import HeroSection from './HeroSection';


const Home = () => {
    return (
        <div className=''>
            <HeroSection/>
            <CheckingSection/>
            <AboutSection/>
        </div>
    );
};

export default Home;