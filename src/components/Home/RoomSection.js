import React from 'react';
import room1 from '../../images/rooms_files/13.jpg'

const RoomSection = () => {
    return (
        <div className='xl:container my-20 h-ful mx-auto'>
            <div className="carousel w-full container mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                   
                   <div className='w-full grid grid-cols-2 md:gird-cols-2 min-h-[500px]'>
                       <div className='w-full'>
                            <img src={room1} className="w-full h-full" />
                       </div>
                        <div className=' bg-[#0E2737] text-white flex flex-col items-center	justify-center leading-10'>
                          <h1 className='text-4xl'>Rooms 1</h1>
                          <h1 className='text-2xl'>$Price <span className='text-sm'>/Day</span> </h1>
                          <p>size: </p>
                          <p>size: </p>
                          <p>size: </p>
                          <p>size: </p>
                       </div>

                   </div>

                    <div className="absolute right-0 left-0 bottom-0">
                        <a href="#slide4" className="btn w-32 bg-[#f] rounded-none border-none ">❮ Previous</a>
                        <a href="#slide2" className="btn w-32 bg-[#1CC3B2] rounded-none border-none ">Next ❯</a>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default RoomSection;