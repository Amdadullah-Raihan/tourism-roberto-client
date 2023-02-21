import React from 'react';
import signatureImg from '../../images/signature.png.webp'
import img1 from '../../images/about.jpg'
import img2 from '../../images/aobut 2.jpg'
import img3 from '../../images/about 3.jpg'
import transportion from '../../images/icon-1.png (1).webp'
import reiseservice from '../../images/icon-2.png.webp'
import spaRelaxtion from '../../images/icon-3.png.webp'
import restaurant from '../../images/icon-4.png.webp'
import bar from '../../images/icon-1.png (1).webp'

const AboutSection = () => {
    return (
        <div className=' my-24 text-start container mx-auto px-6'>
            <div className=''>
                <h4 className='uppercase text-[#1CC3B2] font-semibold'>about us</h4>
                <h1 className='text-4xl capitalize font-semibold  md:w-[40vw] mb-10'>welcome to roberto hotel luxury</h1>
                <p className='mb-10'>With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination.</p>
                <p className='mb-10'>Manager: <span className='text-[#1cc3b2]'>Michen Taylor</span></p>
                <img src={signatureImg} alt="" />
            </div>
            <div className="grid mt-20 grid-cols-2 md:gap-4 gap-2 md:container mx-auto">
                <div className='grid  md:gap-y-4 gap-y-2'>
                    <img className='rounded-lg w-full' src={img1} alt="" />
                    <img className='rounded-lg w-full' src={img2} alt="" />
                </div>
                <div>
                    <img className='rounded-lg h-full w-full' src={img3} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 mt-20 md:gap-4 gap-2 xl:container'>
                <div className='pt-8 shadow-lg text-center leading-10'>
                    <img className='mx-auto' src={transportion} alt="" />
                    <h5>Transportion</h5>
                </div>
               
               
                <div className='pt-6 shadow-lg text-center leading-10'>
                    <img className='mx-auto' src={spaRelaxtion} alt="" />
                    <h5>Reiseservice</h5>
                </div>
               
                <div className='pt-6 shadow-lg text-center leading-10'>
                    <img className='mx-auto' src={restaurant} alt="" />
                    <h5>Spa Relaxation</h5>
                </div>
                <div className='pt-6 shadow-lg text-center leading-10'>
                    <img className='mx-auto' src={reiseservice} alt="" />
                    <h5>Restaurant</h5>
                </div>
               
                <div className='pt-6 shadow-lg text-center leading-10'>
                    <img className='mx-auto' src={transportion} alt="" />
                    <h5>Transportion</h5>
                </div>
               
               
            </div>
        </div>
    );
};

export default AboutSection;