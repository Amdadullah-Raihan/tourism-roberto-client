import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateMarkUp from '../../hooks/CreateMarkUp';
import icon1 from '../../images/icons/icon1.png.webp'
import icon2 from '../../images/icons/icon2.png.webp'
import icon3 from '../../images/icons/icon3.png.webp'
import icon4 from '../../images/icons/icon4.png.webp'
import icon5 from '../../images/icons/icon5.png.webp'
import icon6 from '../../images/icons/icon6.png.webp'

const SingleRoom = () => {

    const { id } = useParams();
    const [room, setRoom] = useState([])
    // console.log(room);

    // getting an individual room by id
    useEffect(() => {
        fetch(`https://tourism-roberto-server.vercel.app/rooms/${id}`)
            .then(res => res.json())
            .then(room => {
                console.log(room);
                setRoom(room)
            })
    }, [])

    return (
        <div className='md:p-16'>
            <div>
                <img src={room.imgUrl} alt="" className='md:w-[70%] ' />
            </div>
            <div className='md:w-[60%] grid grid-cols-2 md:grid-cols-4  md:my-16 items-center' >
                <div className='border h-32 flex flex-col items-center justify-center px-4 font-bold  text-lg'>
                    <p className='text-gray-500'>
                        Size:
                    </p> {room.roomSize}
                </div>
                <div className='border h-32 flex flex-col items-center justify-center px-4 font-bold text-lg'>
                    <p className='text-gray-500'>
                        Capacity:
                    </p>
                    Max person {room.capacity}
                </div>
                <div className='border h-32 flex flex-col items-center justify-center px-4 font-bold text-lg'>
                    <p className='text-gray-500'>
                        Bed:
                    </p>
                    {room.bedType}
                </div>
                <div className='border h-32 flex flex-col items-center justify-center px-4 font-bold text-lg'>
                    <p className='text-gray-500'>
                        Services:
                    </p>
                    {room.roomServices}
                </div>
            </div>
            <div
                dangerouslySetInnerHTML={CreateMarkUp(room.content)}
                className='text-start leading-8 md:w-[70%] text-gray-500 md:p-0 p-6'
            >

            </div>
            <div className='text-start px-6'>
                <h2 className='text-2xl font-bold my-8'>Room Services </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 md:w-[60%] gap-y-6 ">

                    <div>
                        <p className='flex gap-2'> <img src={icon1} className='w-12' alt="" /> Air Conditioning</p>
                    </div>
                    <div>
                        <p className='flex gap-2'> <img src={icon2} className='w-10' alt="" /> Free Drinks</p>
                    </div>
                    <div>
                        <p className='flex gap-2'> <img src={icon3} className='w-10' alt="" /> Restuarant Quality</p>
                    </div>
                    <div>
                        <p className='flex gap-2'> <img src={icon4} className='w-10' alt="" /> Cable TV </p>
                    </div>
                    <div>
                        <p className='flex gap-2'> <img src={icon5} className='w-10' alt="" /> Unlimited Wifi</p>
                    </div>
                    <div>
                        <p className='flex gap-2'> <img src={icon6} className='w-10' alt="" /> Services 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;