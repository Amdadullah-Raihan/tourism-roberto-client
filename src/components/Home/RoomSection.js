import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import room1 from '../../images/rooms_files/13.jpg'

const RoomSection = () => {
    const [rooms, setRooms] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(rooms => {
                console.log(rooms);
                setRooms(rooms)
            })
    }, [])


    return (
        <div className=' container my-20 h-ful mx-auto'>
            <div className="carousel w-full  mx-auto">

                {
                    rooms?.map((room, i) =>
                        
                        <div key={room._id} id={`slide${i}`} className="carousel-item relative w-full">

                            <div className='w-full grid md:grid-cols-2 grid-cols-1 min-h-[500px]'>
                                <div className='w-full'>
                                    <img src={room1} className="w-full h-full" alt='' />
                                </div>
                                <div className=' bg-[#0E2737] text-white  min-h-[330px] text-start font-semibold p-16 leading-10'>
                                    <h1 className='text-4xl mb-4'>{room.title}</h1>
                                    <h1 className='text-2xl mb-4'>
                                        <span className='text-4xl text-teal-500'>${room.pricePerDay}</span>
                                        <span className='text-sm'> /Day</span>
                                    </h1>
                                    <p><i className="fa-solid fa-check text-sm"></i> Size : {room.roomSize} </p>
                                    <p><i className="fa-solid fa-check text-sm"></i> Bed : Max Person {room.capacity} </p>
                                    <p><i className="fa-solid fa-check text-sm"></i> Bed : {room.bedType} </p>
                                    <p><i className="fa-solid fa-check text-sm"></i> Services : {room.roomServices} </p>
                                    <Link to={`rooms/${room._id}`} className='bg-teal-500 btn mt-4 border-none rounded-none px-8'> Veiw Details <i className='fa fa-arrow-right ml-2 text-sm'></i></Link>

                                </div>

                            </div>

                            <div className="absolute right-0 left-0  bottom-0">
                                <a href={`#slide${i-1}`} className="btn w-32 bg-[#f] rounded-none border-none ">❮ Previous</a>
                                <a href={`#slide${i+1}`} className="btn w-32 bg-[#1CC3B2] rounded-none border-none ">Next ❯</a>
                            </div>
                        </div>


                    )
                }


            </div>
        </div>
    );
};

export default RoomSection;