import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [blog, setBlog] = useState([])
    const {id} = useParams();
  

    useEffect(()=>{
        const url = `https://tourism-roberto-server.vercel.app/blogs/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(blog=> {
         
            setBlog(blog)
        })

    }, [id] )

    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }
     return (
        <div className='min-h-[31vh] text-start md:p-16 xl:container mx-auto xl:px-0 xl:py-16'>
           <div className='text-gray-500 max-w-[800px] '>
                <img src={blog.imgUrl} alt="" className='mb-8 w-full'/>
                <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
                
           </div>
        </div>
    );
};

export default SingleBlog;