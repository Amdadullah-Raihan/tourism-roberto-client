import React from 'react'
import img1 from '../../images/photos_files/15.jpg'
import img2 from '../../images/photos_files/14.jpg'

const OfferingsSection = () => {
  return (
      <div className='w-full mx-auto mb-16'>
        <div className="carousel w-full">
          <div className="carousel-item">
              <img src={img1} alt="Burger" className='w-full' />
          </div>
          <div className="carousel-item">
              <img src={img2} alt="Burger" className='w-full' />
          </div>
          <div className="carousel-item">
              <img src={img1} alt="Burger" className='w-full' />
          </div>
          <div className="carousel-item">
              <img src={img2} alt="Burger" className='w-full' />
          </div>
          <div className="carousel-item">
              <img src={img1} alt="Burger" className='w-full' />
          </div>
          <div className="carousel-item">
              <img src={img2} alt="Burger" className='w-full' />
          </div>
          <div className="carousel-item">
              <img src={img1} alt="Burger" className='w-full' />
          </div>
         
      </div>
      </div>
  )
}

export default OfferingsSection