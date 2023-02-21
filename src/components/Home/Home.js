import React from 'react';
import AboutSection from './AboutSection';
import CheckingSection from './CheckingSection';
import HeroSection from './HeroSection';
import RoomSection from './RoomSection';


const Home = () => {
    return (
        <div className=''>
            <HeroSection/>
            <CheckingSection/>
            <AboutSection/>
            <RoomSection/>
        </div>
    );
};

export default Home;