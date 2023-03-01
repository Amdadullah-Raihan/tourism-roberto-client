import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateMarkUp from '../../hooks/CreateMarkUp';

const SingleRoom = () => {

    const { id } = useParams();
    const [room, setRoom] = useState([])
    // console.log(room);

    // getting an individual room by id
    useEffect(() => {
        fetch(`http://localhost:5000/rooms/${id}`)
            .then(res => res.json())
            .then(room => {
                console.log(room);
                setRoom(room)
            })
    }, [])

    return (
        <div className='md:p-16'>
            <div>
                <img src={room.imgUrl} alt="" className='w-[70%] mx-auto' />
            </div>
            <div className='w-[60%] grid grid-cols-2 md:grid-cols-4 mx-auto my-16 items-center' >
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
                className='text-start leading-8 w-[70%] text-gray-500'
            >

            </div>
        </div>
    );
};

export default SingleRoom;