import React, { useEffect, useState } from 'react';
import offeringImg from '../../images/photos_files/15.jpg'
import offeringImg2 from '../../images/photos_files/14.jpg'

function OfferingsSection() {


    return (
        <div className="carousel carousel-end mx-auto mb-16">
            <div className="carousel-item relative">
                <img src={offeringImg} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Racing Bike</h2>
                    </div>
                </div>
            </div>
            <div className="carousel-item relative">
                <img src={offeringImg2} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Pool & Party</h2>
                    </div>
                </div>
            </div>
            <div className="carousel-item relative">
                <img src={offeringImg} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Spa Relaxation</h2>
                    </div>
                </div>
            </div>
            <div className="carousel-item relative">
                <img src={offeringImg2} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Resturant & Bar</h2>
                    </div>
                </div>
            </div>
            <div className="carousel-item relative">
                <img src={offeringImg} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Racing Bike</h2>
                    </div>
                </div>
            </div>
            <div className="carousel-item relative">
                <img src={offeringImg2} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Pool & Party</h2>
                    </div>
                </div>
            </div>
            <div className="carousel-item relative">
                <img src={offeringImg} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Spa Relaxation</h2>
                    </div>
                </div>
            </div>
            <div className="carousel-item relative">
                <img src={offeringImg2} alt="Pizza" />
                <div className='absolute h-20 w-full  bottom-0 flex items-center'>
                    <div className="absolute h-full bg-black w-full opacity-70"></div>
                    <div className='z-10 text-white px-8 text-start'>
                        <p className=''>Entertainment</p>
                        <h2 className='text-xl'>Resturant & Bar</h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default OfferingsSection;
