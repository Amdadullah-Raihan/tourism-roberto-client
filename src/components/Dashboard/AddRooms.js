import React from 'react'
import { useForm } from 'react-hook-form';

const AddRooms = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-white w-full py-8 rounded-2xl max-w-[700px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-12 leading-10'>
               
                <input className='border w-full' {...register("firstName", { required: true, maxLength: 20 })} /> <br />
                <input className='border w-full' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br />
                <input className='border w- px-8 w-[50%]' type="date" {...register("date", { required:true})} /> 
                <input type="submit" className='btn mt-4 bg-[#21C1B2] border-none rounded-none w-[50%]'/>
            </form>
        </div>
    )
}

export default AddRooms