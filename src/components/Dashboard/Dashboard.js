import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import CreateBlog from './CreateBlog';
import AddRooms from './AddRooms';
import ManageRooms from './ManageRooms';
import ManageBookings from './ManageBookings';

const Dashboard = () => {
    useTitle("Admin Dashboard -Roberto")

    let activeStyle = {
        color: "#19C5AF",
        // fontWeight:"500",
        // backgroundColor:"#19C5AF"
    };

    let activeClassName = "underline";

    return (
        <div className='flex flex-col md:flex-row h-full'>
            <div className='grid md:max-h-[100px] grid-cols-2 md:grid-cols-1 gap-x-6 md:gap-y-0 gap-y-4 md:w-[25vw] md:mt-6 md:leading-10 text-start md:p-12 p-4 mx-auto h-auto'>
                <NavLink
                    to='/dashboard/manage-bookings'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <i className="fa-solid fa-sliders mr-2"></i> Manage Bookings
                </NavLink>
                <NavLink
                    to='/dashboard/create-blog'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <i className="fa-solid fa-square-plus mr-2 "></i> Create a Blog
                </NavLink>
                <NavLink
                    to="/dashboard/manage-rooms"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } >
                    <i className="fa-solid fa-sliders mr-2"></i> Manage Rooms
                </NavLink>
                <NavLink
                    to='/dashboard/add-room'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <i className="fa-solid fa-plus mr-2 "></i>  Add Room
                </NavLink>
                

            </div>
            <div className='dashboard-right bg-blue-50 md:w-[75vw] h-[100vh]  mt-4 md:px-6 md:py-8 p-4'>
                <Routes>
                    <Route path='/' element={<ManageBookings/>} />
                    <Route path='/manage-bookings' element={<ManageBookings/>} />
                    <Route path='/add-room' element={<AddRooms />} />
                    <Route path='/create-blog' element={<CreateBlog/>} />
                    <Route path='/manage-rooms' element={<ManageRooms />} />
                </Routes>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;