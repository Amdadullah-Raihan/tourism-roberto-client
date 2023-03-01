import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='min-h-[50vh] flex flex-col items-center justify-center'>
            <span className='text-9xl text-red-400 font-bold'>404!!</span>  <br />
            <span className='text-3xl text-red-400'>Ooops!! The page you're looking for was not found!!</span>
            <Link to="/">
                <button className='btn mt-8  bg-teal-500 border-none rounded-none'>Go to home <i className='fa fa-solid fa-arrow-right ml-2'></i></button>
            </Link>

        </div>
    );
};

export default NotFound;