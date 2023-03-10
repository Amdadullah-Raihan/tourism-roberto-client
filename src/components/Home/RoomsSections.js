import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const RoomsSections = () => {
    const [rooms, setRooms] = useState([])
    const [currentIdx, setCurrentIdx] = useState(0)

    console.log(currentIdx);
    //getting all rooms
    useEffect(() => {
        fetch('https://tourism-roberto-server.vercel.app/rooms')
            .then(res => res.json())
            .then(rooms => {
                console.log(rooms);
                setRooms(rooms)
            })
    }, [])

    const slides = rooms.map(room => rooms[currentIdx]?.imgUrl)
    //handle prevSlide 
    const handlePrevSlide = () => {
        if (currentIdx === 0) {
            setCurrentIdx(slides.length - 1)
        }
        else {
            setCurrentIdx(currentIdx - 1)
        }
    }
    //handle prevSlide 
    const handleNextSlide = () => {
        if (currentIdx === slides.length - 1) {
            setCurrentIdx(0)
        }
        else {
            setCurrentIdx(currentIdx + 1)
        }
    }

    // changing slid automatically after sometime
    useEffect(() => {
        const intervalId = setInterval(() => {

            if (currentIdx > rooms.length - 2) {
                setCurrentIdx(0)
            }
            else {
                setCurrentIdx(currentIdx + 1)
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIdx]);




    return (
        <div className='w-full h-full mt-16 container mx-auto relative duration-1000 ease-in max-h-[1000px]'>
            {/* slide */}
            <div className=' w-full min-h-[500px]  grid grid-cols-1 md:grid-cols-2 relative z-0'>
                {/* slide's left img */}
                <div className=' transition-all duration-1000 ease-in-out min-h-[300px] w-full bg-cover h-full' style={{ backgroundImage: `url(${slides[currentIdx]})` }}>

                </div>
                {/* slide's right content */}

                <div className=' bg-[#0E2737] text-white  min-h-[330px] text-start font-semibold p-16 leading-10'>
                    <h1 className='text-4xl mb-4 '>{rooms[currentIdx]?.title}</h1>
                    <h1 className='text-2xl mb-4'>
                        <span className='text-4xl text-teal-500'>${rooms[currentIdx]?.pricePerDay}</span>
                        <span className='text-sm'> /Day</span>
                    </h1>
                    <p className='duration-1000 transition-all ease-in'><i className="fa-solid fa-check text-sm"></i> Size : {rooms[currentIdx]?.roomSize} </p>
                    <p className='duration-1000 transition-all ease-in'><i className="fa-solid fa-check text-sm"></i> Bed : Max Person {rooms[currentIdx]?.capacity} </p>
                    <p className='duration-1000 transition-all ease-in'> <i className="fa-solid fa-check text-sm"></i> Bed : {rooms[currentIdx]?.bedType} </p>
                    <p className='duration-1000 transition-all ease-in'><i className="fa-solid fa-check text-sm"></i> Services : {rooms[currentIdx]?.roomServices} </p>
                    <Link to={`rooms/${rooms[currentIdx]?._id}`} className='bg-teal-500 btn mt-4 border-none rounded-none px-8'> Veiw Details <i className='fa fa-arrow-right ml-2 text-sm'></i></Link>

                </div>
            </div>
            {/* prev and next btns */}
            <div className="absolute right-0 left-0  bottom-0 z-10 flex justify-center">
                <div className=''>
                    <button className="btn w-32 bg-[#f] rounded-none border-none " onClick={handlePrevSlide} ><i className="fa-solid fa-angle-left mr-2"></i> prev</button>
                </div>
                <div className=''>
                    <button className="btn w-32 bg-[#1CC3B2] rounded-none border-none " onClick={handleNextSlide}>next <i className="fa-solid fa-chevron-right ml-2"></i></button>
                </div>
            </div>

        </div>
    )
}
