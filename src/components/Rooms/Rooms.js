import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className='container p-6 lg:px-16 lg:py-16\'>
          
            {
                rooms?.map(room =>

                    <div className="flex px-0 bg-base-50 md:max-w-[700px] md:max-h-[254px] rounded-xl mb-8">
                       
                        <div className='bg-cover w-full md:w-[50%] min-h-[300px]'>
                            <img src={room.imgUrl} alt="" className='w-full overflow-hidden rounded-l-xl max-h-[254px]' />
                        </div>
                        <div className="card-body">
                            <h2 className="text-4xl text-start capitalize">{room.title}</h2>
                            <p
                            className='text-start'
                            dangerouslySetInnerHTML={CreateMarkUp(room.content)}></p>
                            <div className="card-actions justify-end">
                                <Link to={`rooms/${room._id}`} className="text-teal-500 font-bold">Veiw Details <i className='ml-2 fa fa-solid fa-arrow-right'></i></Link>
                            </div>
                        </div>
                    </div>
                )
            }
         
        </div>
    );
};

export default Rooms;