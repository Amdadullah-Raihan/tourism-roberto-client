import React from 'react'
import p1 from '../../images/partners/p1.png.webp'
import p2 from '../../images/partners/p2.png.webp'
import p3 from '../../images/partners/p3.png.webp'
import p4 from '../../images/partners/p4.png.webp'
import p5 from '../../images/partners/p5.png.webp'


function Partners() {
  return ( 
    <div className='grid grid-cols-5 mx-auto container py-12 items-center '>
        <img className='w-8 md:w-16 mx-auto' src={p1} alt="" />
        <img className='w-8 md:w-16 mx-auto' src={p2} alt="" />
        <img className='w-8 md:w-16 mx-auto' src={p3} alt="" />
        <img className='w-8 md:w-16 mx-auto' src={p4} alt="" />
        <img className='w-8 md:w-16 mx-auto' src={p5} alt="" />
    </div>
  )
}

export default Partners