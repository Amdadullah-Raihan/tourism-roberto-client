import React from 'react'
import img from '../../images/about 3.jpg'
import img2 from '../../images/carousel items_files/14.jpg'
import img3 from '../../images/carousel items_files/13.jpg'
import img4 from '../../images/carousel items_files/11.jpg'
import img5 from '../../images/carousel items_files/15.jpg'
import img6 from '../../images/carousel items_files/10.jpg'


function OfferingsSection() {
  return (
      <div className="carousel  w-full  mx-auto mb-16">
          <div className="carousel-item relative">
              <img src={img} alt="Burger" />
              <div className='absolute w-full flex flex-col items-center justify-center bottom-0   h-[100px] z-0'>
                  <div className='absolute h-full w-full bg-black opacity-50'></div>
                 <div className='relative z-10'>
                      <p className="font-semibol relative text-white">Entertainment</p>
                      <h4 className='text-white text-2xl'>Racing Bike</h4>
                 </div>
              </div>
          </div>
         <div className="carousel-item relative">
              <img src={img2} alt="Burger" />
              <div className='absolute w-full flex flex-col items-center justify-center bottom-0   h-[100px] z-0'>
                  <div className='absolute h-full w-full bg-black opacity-50'></div>
                  <div className='relative z-10'>
                      <p className="font-semibol relative text-white">Entertainment</p>
                      <h4 className='text-white text-2xl'>Racing Bike</h4>
                  </div>
              </div>
          </div>
         <div className="carousel-item relative">
              <img src={img3} alt="Burger" />
              <div className='absolute w-full flex flex-col items-center justify-center bottom-0   h-[100px] z-0'>
                  <div className='absolute h-full w-full bg-black opacity-50'></div>
                  <div className='relative z-10'>
                      <p className="font-semibol relative text-white">Entertainment</p>
                      <h4 className='text-white text-2xl'>Racing Bike</h4>
                  </div>
              </div>
          </div>
         <div className="carousel-item relative">
              <img src={img4} alt="Burger" />
              <div className='absolute w-full flex flex-col items-center justify-center bottom-0   h-[100px] z-0'>
                  <div className='absolute h-full w-full bg-black opacity-50'></div>
                  <div className='relative z-10'>
                      <p className="font-semibol relative text-white">Entertainment</p>
                      <h4 className='text-white text-2xl'>Racing Bike</h4>
                  </div>
              </div>
          </div>
         <div className="carousel-item relative">
              <img src={img5} alt="Burger" />
              <div className='absolute w-full flex flex-col items-center justify-center bottom-0   h-[100px] z-0'>
                  <div className='absolute h-full w-full bg-black opacity-50'></div>
                  <div className='relative z-10'>
                      <p className="font-semibol relative text-white">Entertainment</p>
                      <h4 className='text-white text-2xl'>Racing Bike</h4>
                  </div>
              </div>
          </div>
         <div className="carousel-item relative">
              <img src={img6} alt="Burger" />
              <div className='absolute w-full flex flex-col items-center justify-center bottom-0   h-[100px] z-0'>
                  <div className='absolute h-full w-full bg-black opacity-50'></div>
                  <div className='relative z-10'>
                      <p className="font-semibol relative text-white">Entertainment</p>
                      <h4 className='text-white text-2xl'>Racing Bike</h4>
                  </div>
              </div>
          </div>
          <div className="carousel-item relative">
              <img src={img3} alt="Burger" />
              <div className='absolute w-full flex flex-col items-center justify-center bottom-0   h-[100px] z-0'>
                  <div className='absolute h-full w-full bg-black opacity-50'></div>
                  <div className='relative z-10'>
                      <p className="font-semibol relative text-white">Entertainment</p>
                      <h4 className='text-white text-2xl'>Racing Bike</h4>
                  </div>
              </div>
          </div>
         
      </div>
  )
}

export default OfferingsSection