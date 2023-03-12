import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CheckingSection = () => {

    // const [rooms, setRooms] = useState([])
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    // const handleCheck = () =>{
    //     fetch(`http://localhost:5000/bookings`)
    //     .then(res=> res.json())
    //     .then(rooms => {
    //         const filteredRooms = rooms.filter(booking => booking.approved === false)
    //             console.log(filteredRooms);
    //             setRooms(filteredRooms)
    //     })
    // }

    return (
        <div className="flex w-full justify-center">
            <div className=' mx-4 bg-[#fff] px-6 shadow-lg min-h-[180px] md:mt-[-90px] relative lg:container w-full flex items-center justify-center py-6 mt-[-115px] '>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4 md:grid-cols-6 grid-cols-2'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='border h-12 px-4 ' defaultValue="Check In" {...register("check-in")} type='text' value='Check in' required/>

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='border h-12 px-4' type='text' defaultValue="Check out" {...register("check-out", { required: true })} required/>

                    {/* errors will return when field validation fails  */}
                    <select defaultValue="rooms" {...register("rooms")} className='border h-12 px-4'>
                        <option value="1">Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <select {...register("adult")} className='border h-12 px-4'>
                        <option value="1">Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <select {...register("children")} className='border h-12 px-4'>
                        <option value="1">Children</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                    <input className='btn border-none rounded-none h-12 px-4 bg-[#1CC3B2] text-white font-semibold ' type="submit" value='Check Availibility'/>
                </form>
            </div>
            <br />
            {/* <div className=''>
                {
                    rooms?.map(room => 
                        <div>
                            {room.title}
                        </div>
                        
                        )
                }
            </div> */}
        </div>
    );
};

export default CheckingSection;