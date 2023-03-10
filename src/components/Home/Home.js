import React from 'react';
import useTitle from '../../hooks/useTitle';
import AboutSection from './AboutSection';
import CheckingSection from './CheckingSection';
import OfferingsSection from './OfferingsSection';
import HeroSection from './HeroSection';
import TestimonialsSection from './TestimonialsSection';
import { RoomsSections } from './RoomsSections';


const Home = () => {

    useTitle("Roberto- Home")
    
    return (
        <div className=''>
            <HeroSection/>
            <CheckingSection/>
            <AboutSection/>
       
            <RoomsSections/>
            <TestimonialsSection/>
            <OfferingsSection />
          
        </div>
    );
};

export default Home;