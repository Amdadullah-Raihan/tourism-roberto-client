import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import useTitle from '../../hooks/useTitle';



const Rooms = () => {
    useTitle("Rooms- Roberto")
    const [rooms, setRooms] = useState([]);
    // console.log(rooms);
   

    useEffect(()=>{
        fetch("https://tourism-roberto-server.vercel.app/rooms")
        .then(res=> res.json())
        .then(rooms => {
            // console.log(rooms);
            setRooms(rooms)
        })
    },[])

    return (
        <div className='container p-6 lg:px-16 lg:py-16 xl:mx-auto min-h-[31vh]'>
          
            {  
                rooms?.map(room =>

                    <div className="md:flex px-0  md:max-w-[800px] rounded-xl md:mb-14 mb-10 bg-teal-50 " key={room._id}>
                       
                        <div className='bg-cover w-full md:w-auto'>
                            <img src={room.imgUrl} alt="" className='w-[100%] overflow-hidden md:rounded-l-xl rounded-t-2xl ' />
                        </div>
                        <div className=" mx-8 ">
                            <div className='py-5'>
                                <h2 className="text-2xl text-start capitalize font-semibold">{room.title}</h2>
                                <h1 className='text-start'><span className='text-teal-500 text-2xl font-semibold'>{room.pricePerDay}$</span> <span className='text-gray-500'>/Day</span> </h1>
                               <div className='text-start grid grid-cols-2 gap-y-6 mt-4'>
                                    <p className=' capitalize'><span className='text-gray-500 text-semibold'>Size: </span>{room.roomSize}</p>
                                    <p className=' capitalize'><span className='text-gray-500 text-semibold'>Capacity: </span>{room.capacity}</p>
                                    <p className=' capitalize'><span className='text-gray-500 text-semibold'>Bed: </span>{room.bedType}</p>
                                    <p className=' capitalize'><span className='text-gray-500 text-semibold'>Services: </span>{room.roomServices}</p>
                               </div>
                            </div>
                            {/* <p
                            className='text-start'
                            dangerouslySetInnerHTML={CreateMarkUp(room.content)}></p> */}
                            <div className="text-start">
                                <Link to={`/rooms/${room._id}`} className="text-teal-500 font-bold">Veiw Details <i className='ml-2 fa fa-solid fa-arrow-right'></i></Link>
                            </div>
                        </div>
                    </div>
                )
            }
         
        </div>
    );
};

export default Rooms;