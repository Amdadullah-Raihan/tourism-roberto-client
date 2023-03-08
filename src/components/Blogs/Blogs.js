import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs -Roberto")
    const [blogs, setBlogs] = useState([])


    //fetching blogs
    useEffect(()=>{
        fetch("https://tourism-roberto-server.vercel.app/blogs")
        .then(res=> res.json())
        .then(blogs => {
            console.log(blogs);
            setBlogs(blogs)
        })
    },[])

    return (
        <div className='md:p-16'>
            {  !blogs.length ? <h3 className='text-3xl'>Loading...</h3> :
                blogs.map(blog=>
                    
                    <div key={blog._id} className='max-w-[800px] md:flex mb-14'>
                        <div className='bg-cover w-[500px]' style={{backgroundImage:`url(${blog.imgUrl})`}}>
                            {/* <img src={blog.imgUrl} alt="" /> */}
                        </div>
                        <div className='text-start  m-6 leading-10'>
                            <h2 className='capitalize text-2xl font-semibold'>{blog.title}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel, magni voluptatibus accusamus quam et veritatis at rerum qui voluptatem...</p>
                            <Link to={`/blogs/${blog._id}`}>
                                <p className='text-gray-600 font-bold text-lg'>Read More...</p>
                            </Link>
                        </div>
                    </div>
                    )
            }
        </div>
    );
};

export default Blogs;