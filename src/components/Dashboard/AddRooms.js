import React from 'react'
import { useForm } from 'react-hook-form';

const AddRooms = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-white w-full py-8 rounded-2xl'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border' {...register("firstName", { required: true, maxLength: 20 })} />
                <input className='border' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input className='border' type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddRooms