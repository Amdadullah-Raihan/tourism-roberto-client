
import DOMPurify from 'dompurify';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import useRichTextEditor from '../../hooks/useRichTextEditor';




const AddBlog = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [MyRichTextEditor, convertedContent] = useRichTextEditor();

    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }
    return (
        <div className='bg-white w-full py-8 rounded-2xl max-w-[900px] text-start' >

            <form onSubmit={handleSubmit(onSubmit)} className='p-12 leading-10'>
                <label >Blogs's Title</label>
                <input className='border px-4 w-full mb-4 h-12 ' {...register("title")} required /> <br />
                {/* <input className='border px-4 w-full mb-4 h-12 ' {...register("lastName")} required /> */}
                {/* <br /> */}

                <div className='h-full w-full mb-4 '>
                    <header className='font-semibold uppercase mby-2 text-start'>Add Room's Descriptions</header>
                    <MyRichTextEditor />

                </div>

                <input className='bg-teal-400 text-white px-4 w-full mb-4 h-12 ' type="submit" />


            </form>

            <div className='border min-h-[100px]'>
                <p className='px-6 py-2 bg-blue-100 inline'>Blog Preview</p>
                <div
                    className='px-6'
                    dangerouslySetInnerHTML={createMarkup(convertedContent)}>
                </div>
            </div>
        </div>
    )
}

export default AddBlog