import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import img from '../../images/room.avif'
import oldMan from '../../images/oldman.webp'
import signature from '../../images/signature.png.webp'

const AboutUs = () => {
    useTitle("About Us -Roberto")
    return (
        <div className=''>
            <div className='bg-cover h-[250px] relative' style={{ backgroundImage: `url(${img})` }}>
                <div className='absolute bg-black h-full w-full opacity-60'></div>

                <div className='relative flex justify-center items-center h-full text-white flex-col leading-10'>
                    <h1 className='text-4xl'>About Us</h1>
                    <h1 className='text-lg font-semibold'><Link to='/'>Home</Link> <i class="fa-solid fa-chevron-right text-sm"></i> About </h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto my-20'>
                <div className='p-6'>
                    <img src={oldMan} alt="" className='w-full rounded-lg' />
                </div>
                <div className='text-start md:px-12 p-6 '>
                    <p className='text-teal-500 mb-4 font-bold'>TESTIMONIALS</p>
                    <h className='text-3xl font-semibold mb-4'>20 Years Of Experience</h>
                    <div className='my-6 text-gray-500'>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p> <br />

                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste. Lorem Ipsum available.</p>
                    </div>
                    <img src={signature} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;