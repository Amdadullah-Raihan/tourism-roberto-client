
import DOMPurify from 'dompurify';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import useCreateMarkUp from '../../hooks/CreateMarkUp';
import useReactQuill from '../../hooks/useReactQuil';



const CreateBlog = () => {
    const [title, setTitle] = useState("Rooms's Title");
    const [content, setContent] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [roomSize, setRoomSize] = useState(0)
    const [capacity, setCapacity] = useState(0)
    const [bedType, setBedType] = useState("kings bed")
    const [roomServices, setRoomServices] = useState('wifi, televison, air conditionar etc. ')
    const [pricePerDay, setPricePerDay] = useState(0)
    

    const { register, handleSubmit } = useForm();
    const [modules, formates] = useReactQuill();
 


    //handle img change and upload img to imgbb and get img url
    const handleImgChange = (e) => {

        const img = e.target.files[0];
        const formData = new FormData();

        formData.append('image', img)
        console.log(formData);

        const url = "https://api.imgbb.com/1/upload?&key=8484f85b7788ffca18f1fd5d203bc0fa";

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                setImgUrl(imgData.data.display_url)

            }).catch(err => {

                console.log(err);

            }

            )


    }

    //handle form submit
    const onSubmit = data => {
        // console.log(data);
        setTitle(data.title)
        setBedType(data.bedType)
        setCapacity(data.capacity)
        setRoomServices(data.roomServices)
        setRoomSize(data.roomSize)
        setPricePerDay(data.pricePerDay)
        // const formData = new FormData();

        // formData.append("title", title)
        // formData.append("content", content)
        // formData.append("imgUrl", imgUrl)
        const blogData = {
            "title": title,
            "pricePerDay":pricePerDay,
            "roomSize":roomSize,
            "capacity":capacity,
            "bedType":bedType,
            "roomServices":roomServices,
            "imgUrl": imgUrl,
            "content": content
        }
        console.log(blogData);
        const url = 'https://tourism-roberto-server.vercel.app/create-room'
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert("Room added successfully!!")
                    // <div className="toast toast-start">
                    //     <div className="alert py-6 bg-teal-500">
                    //         <span>Blog added successfully!!</span>
                    //     </div>
                    // </div>

                }
                else {
                    alert("Room coudn't be added")
                }
            })

    };

    //create html from content 
   


    return (
        <div className='xl:flex gap-12' >


            <div className='bg-white w-full  rounded-2xl max-w-[900px]'>
                <h1 className='text-2xl uppercase text-teal-500 font-semibold pt-6 '> Add a Room </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='md:p-12 p-4 leading-10'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                        <input  className='border px-4 w-full  h-12 rounded-md' {...register("title")} required placeholder="Enter Room's Title " /> 
                        <input  className='border px-4 w-full  h-12 rounded-md' type="number" {...register("pricePerDay")} required placeholder="Enter Room's price per day" /> 
                        <input  className='border px-4 w-full  h-12 rounded-md' type="number" {...register("roomSize")} required placeholder="Enter Room's in square feet" /> 
                        <input  className='border px-4 w-full  h-12 rounded-md' type="number" {...register("capacity")} required placeholder="Enter Room's capacity " /> 
                        <input  className='border px-4 w-full  h-12 rounded-md' {...register("bedType")} required placeholder="Enter Room's bed type" /> 
                       
                       
                        <input type="file" className="file-input file-input-bordered w-full " accept='imgages/*' onChange={handleImgChange} />
                    </div>
                    <div className='h-full w-full mb-4 text-start'>
                        <header className='font-semibold uppercase  text-start'>add room's description</header>

                        <ReactQuill

                            modules={modules}
                            formats={formates}
                            value={content}
                            theme='snow'
                           

                            onChange={(value) => setContent(value)}

                        />


                    </div>

                    <div className='text-end'>
                        <input className='btn border-none rounded-none bg-teal-400 text-white px-4 w-52 h-12 cursor-pointer ' type="submit" />

                    </div>

                </form>
            </div>

            <div className='bg-white w-full min-h-[200px] rounded-2xl max-w-[900px] text-start mt-4 py-6'>
                <p className='px-6 text-red-500 text-xl inline uppercase'>Room Preview</p>
                <div className='px-6 py-2'>
                    <img src={imgUrl} alt="" className='mb-6 ' />
                    <h3 className='py-2 text-2xl'>{title}</h3>
                    <div
                        dangerouslySetInnerHTML={useCreateMarkUp(content)}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;