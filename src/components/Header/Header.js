import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png.webp'

const Header = () => {
    const users = true;

    let activeStyle = {
        textDecoration: "",
        // backgraoundColor:"#fff",
        // color:'#1CC3B2',
        // fontWeight:"bold"
    };

    let activeClassName = "underline";


    return (
        <div className='py-2 w-full bg-[#fff]'>
            <div className="navbar bg-[#fff]  mx-auto lg:px-6 xl:container ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Home
                                </NavLink>

                            </li>


                            <li>
                                <NavLink
                                    to="/rooms"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Rooms
                                </NavLink>

                            </li>


                            <li>
                                <NavLink
                                    to="about"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    About Us
                                </NavLink>

                            </li>


                            <li>
                                <NavLink
                                    to="/blogs"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Blogs
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Contact
                                </NavLink>

                            </li>


                        </ul>
                    </div>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="btn btn-ghost normal-case text-xl">
                       <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Home
                            </NavLink>

                        </li>


                        <li>
                            <NavLink
                                to="/rooms"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Rooms
                            </NavLink>

                        </li>


                        <li>
                            <NavLink
                                to="about"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                About Us
                            </NavLink>

                        </li>


                        <li>
                            <NavLink
                                to="/blogs"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Blogs
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Contact
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                               Dashboard
                            </NavLink>

                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/rooms"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="btn bg-[#1CC3B2] border-none rounded-none my-0 ">Book Now <i className="fa-solid fa-arrow-right ml-2"></i> </NavLink>
                </div>
                {
                    users && <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn w-12 h-13 ml-2 rounded-3xl">user</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 bg-slate-50   mt-6">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                }

            </div>
        </div>
    );
};

export default Header;