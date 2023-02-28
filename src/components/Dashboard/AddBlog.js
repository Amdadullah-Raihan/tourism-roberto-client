
import DOMPurify from 'dompurify';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import useReactQuill from '../../hooks/useReactQuil';



const AddBlog = () => {
    const [title, setTitle] = useState("Blog's Title");

    const { register, handleSubmit } = useForm();
    const [modules, formates] = useReactQuill();
    const [content, setContent] = useState('')
    console.log(content);

    const onSubmit = data =>{
        console.log(data)
        setTitle(data.title)
    };


    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }
    return (
        <div  >

            <h1 className='text-2xl uppercase text-teal-500 font-semibold mb-2'> Add Blog </h1>
            <div className='bg-white w-full  rounded-2xl max-w-[900px] text-start'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-12 leading-10'>
                        
                    <div className='flex gap-4'>
                        <input onBlur={(e)=>setTitle(e.target.value)} className='border px-4 w-full mb-4 h-12 rounded-md' {...register("title")} required placeholder='Write your blog title' /> <br />
                        {/* <input className='border px-4 w-full mb-4 h-12 ' {...register("lastName")} required /> */}
                        {/* <br /> */}
                        <input type="file" className="file-input file-input-bordered w-full " />
                    </div>
                    <div className='h-full w-full mb-4 '>
                        <header className='font-semibold uppercase  text-start'>Add Room's Descriptions</header>
                        
                            <ReactQuill
                            
                            modules={modules}
                            formats={formates}
                            value={content}
                            onChange={(value)=>setContent(value)}
                            
                            />
                      

                    </div>

                    <input className='btn border-none rounded-none bg-teal-400 text-white px-4 w-full mb-4 h-12 cursor-pointer ' type="submit" />


                </form>
            </div>

            <div className='bg-white w-full min-h-[200px] rounded-2xl max-w-[900px] text-start mt-4'>
                <p className='px-6 text-red-500 text-xl inline uppercase'>Blog Preview</p>
                <div className='px-6 py-2'>
                    <h3 className='py-2 text-lg'>{title}</h3>
                    <div
                       dangerouslySetInnerHTML={createMarkup()}
                        >
                    </div>
               </div>
            </div>
        </div>
    )
}

export default AddBlog;