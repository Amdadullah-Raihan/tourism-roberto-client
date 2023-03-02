import React from 'react'
import contact from '../../images/shiny-night-city.jpg'

function ContactSection() {
    return (
        <div className='min-h-[300px] container mx-auto flex items-center  relative' style={{ backgroundImage: `url(${contact})`  }} >

            <div className='absolute bg-opacity-60 h-full w-full bg-black z-1'></div>
            <div className='md:flex justify-between items-center mx-16 container z-10 relative'>
                
                <div className='text-white text-start md:mb-0 mb-12'>
                    <h1 className='text-4xl'>Contact us now!</h1>
                    <p className='text-xl'>Contact (+12) 345-678-9999 to book directly or for advice
                    </p>
                </div>
                <div>
                    <button className="btn bg-teal-500 border-none w-48 rounded-none">
                        Contact Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactSection