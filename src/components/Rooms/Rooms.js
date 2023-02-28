import React, { useEffect, useState } from 'react';
import CreateMarkUp from '../../hooks/CreateMarkUp';
import useCreateMarkUp from '../../hooks/CreateMarkUp';

import useTitle from '../../hooks/useTitle';



const Rooms = () => {
    useTitle("Rooms- Roberto")
    const [rooms, setRooms] = useState([]);
    console.log(rooms);
    useCreateMarkUp()

    useEffect(()=>{
        fetch("http://localhost:5000/rooms")
        .then(res=> res.json())
        .then(rooms => {
            // console.log(rooms);
            setRooms(rooms)
        })
    },[])

    return (
        <div className='container px-16 py-16'>
          
            {
                rooms?.map(room =>

                    <div className="card lg:card-side bg-base-100 max-h-[300px]">
                        <figure className='rounded-lg' ><img src={room.imgUrl} className='ronded-lg' alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl text-start capitalize">{room.title}</h2>
                            <p
                            className='text-start'
                            dangerouslySetInnerHTML={CreateMarkUp(room.content)}></p>
                            <div className="card-actions justify-end">
                                <button className="bg-white text-teal-500 font-bold">Veiw Details <i className='ml-2 fa fa-solid fa-arrow-right'></i></button>
                            </div>
                        </div>
                    </div>
                )
            }
         
        </div>
    );
};

export default Rooms;