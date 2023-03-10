
import DOMPurify from 'dompurify';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import useReactQuill from '../../hooks/useReactQuil';



const CreateBlog = () => {
    const [title, setTitle] = useState("Blog's Title");
    const [content, setContent] = useState('')
    const [imgUrl, setImgUrl] = useState('')


    const { register, handleSubmit } = useForm();
    const [modules, formates] = useReactQuill();
   

   //handle img change and upload img to imgbb and get img url
   const handleImgChange = (e) => {

       const img = e.target.files[0];
       const formData = new FormData();

       formData.append('image',img)
  
       
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
    const onSubmit = data =>{
        // console.log(data);
        setTitle(data.title)
        // const formData = new FormData();

        // formData.append("title", title)
        // formData.append("content", content)
        // formData.append("imgUrl", imgUrl)
        const blogData = {
            "title":title,
            "imgUrl":imgUrl,
            "content":content,
            "summary": data.summary,
        }
        console.log(blogData);
        const url = 'https://tourism-roberto-server.vercel.app/create-blog'
        fetch(url,{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogData)
        })
        .then(res=>res.json())
        .then(result=>{
      
            if (result.insertedId){
                alert("Blog posted successfully!!")
                // <div className="toast toast-start">
                //     <div className="alert py-6 bg-teal-500">
                //         <span>Blog added successfully!!</span>
                //     </div>
                // </div>
            
            }
            else{
                alert("Blog coudn't be added")
            }
        })
        
    };

    //create html from content 
    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }


    return (
        <div className='xl:flex gap-12 h-full' >

            <div className='bg-white w-full rounded-2xl max-w-[900px]'>
                <h1 className='text-2xl uppercase text-teal-500 font-semibold pt-6'> Create a Blog </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='md:p-12 p-4 md:leading-10'>
                        
                    <div className='my-10'>
                        <input onChange={(e)=>setTitle(e.target.value)} className='border px-4 w-full mb-4 h-12 rounded-md' {...register("title")} required placeholder='Write your blog title'/> <br />
                        <input className='border px-4 w-full mb-4 h-12 ' {...register("summary")} required placeholder="write your blog's summary " />
                         <br /> 
                        <input type="file" className="file-input file-input-bordered w-full " accept='imgages/*' onChange={handleImgChange} />
                    </div>
                    <div className='h-full w-full md:mb-4 text-start'>
                        <header className='font-semibold uppercase  text-start'>Add Blog's Content</header>
                        
                            <ReactQuill
                            className='overflow-scroll md:overflow-auto'
                            modules={modules}
                            formats={formates}
                            value={content}
                            theme='snow'
                            placeholder='Write something awesome...'
                            
                            onChange={(value)=>setContent(value)}
                            
                            />
                      

                    </div>

                    <div className='md:text-end'>
                        <input className='btn border-none rounded-none bg-teal-400 text-white px-4 w-52 mb-4 h-12 cursor-pointer md:w-40  w-full' type="submit" />

                    </div>

                </form>
            </div>

            <div className='bg-white w-full min-h-[200px] rounded-2xl max-w-[900px] text-start mt-4 py-6'>
                <p className='px-6 text-red-500 text-xl inline uppercase'>Blog Preview</p>
                <div className='px-6 py-2'>
                    <img src={imgUrl} alt="" className='mb-6 ' />
                    <h3 className='py-2 text-2xl'>{title}</h3>
                    <div
                    dangerouslySetInnerHTML={createMarkup(content)}>
                        
                    </div>
               </div>
            </div>
        </div>
    )
}

export default CreateBlog;