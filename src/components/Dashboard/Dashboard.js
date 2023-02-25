import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import AddRooms from './AddRooms';
import ManageRooms from './ManageRooms';

const Dashboard = () => {


    let activeStyle = {
        color:"#207FEE",
    };

    let activeClassName = "underline";

    return (
        <div className='flex h-full'>
            <div className='dashboard-left flex flex-col w-[25vw] mt-6 leading-10 text-start p-12'>
                <NavLink
                    to='/dashboard/add-rooms'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    <i class="fa-solid fa-plus mr-2 "></i>  Add Rooms
                </NavLink>
                <NavLink
                    to="/dashboard/manage-rooms"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } >
                    <i class="fa-solid fa-gear mr-2"></i> Manage Rooms
                </NavLink>

            </div>
            <div className='dashboard-right bg-blue-50 w-[75vw] h-[100vh]  mt-4'>
                <Routes>
                    <Route path='/' element={<AddRooms/>}/>
                    <Route path='/add-rooms' element={<AddRooms/>}/>
                    <Route path='/manage-rooms' element={<ManageRooms/>}/>
                </Routes>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;