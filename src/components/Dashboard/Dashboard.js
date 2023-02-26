import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import AddBlog from './AddBlog';
import AddRooms from './AddRooms';
import ManageRooms from './ManageRooms';

const Dashboard = () => {
    useTitle("Admin Dashboard -Roberto")

    let activeStyle = {
        color: "#19C5AF",
        // fontWeight:"500",
        // backgroundColor:"#19C5AF"
    };

    let activeClassName = "underline";

    return (
        <div className='flex h-full'>
            <div className='dashboard-left flex flex-col w-[25vw] mt-6 leading-10 text-start p-12'>
                <NavLink
                    to='/dashboard/add-room'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <i className="fa-solid fa-plus mr-2 "></i>  Add Room
                </NavLink>
                <NavLink
                    to='/dashboard/add-blog'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <i className="fa-solid fa-square-plus mr-2 "></i> Add Blog
                </NavLink>
                <NavLink
                    to="/dashboard/manage-rooms"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } >
                    <i className="fa-solid fa-sliders mr-2"></i> Manage Rooms
                </NavLink>

            </div>
            <div className='dashboard-right bg-blue-50 w-[75vw] h-[100vh]  mt-4 px-6 py-8'>
                <Routes>
                    <Route path='/' element={<AddRooms />} />
                    <Route path='/add-room' element={<AddRooms />} />
                    <Route path='/add-blog' element={<AddBlog />} />
                    <Route path='/manage-rooms' element={<ManageRooms />} />
                </Routes>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;