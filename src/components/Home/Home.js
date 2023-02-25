import React from 'react';
import useTitle from '../../hooks/useTitle';
import AboutSection from './AboutSection';
import CheckingSection from './CheckingSection';
import HeroSection from './HeroSection';
import RoomSection from './RoomSection';
import TestimonialsSection from './TestimonialsSection';


const Home = () => {

    useTitle("Roberto- Home")
    
    return (
        <div className=''>
            <HeroSection/>
            <CheckingSection/>
            <AboutSection/>
            <RoomSection/>
            <TestimonialsSection/>
        </div>
    );
};

export default Home;