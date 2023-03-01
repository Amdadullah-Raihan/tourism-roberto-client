import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo2.png.webp'

export const Footer = () => {
    return (
        <div className='w-full'>
            <footer className="footer p-10 bg-[#0E2737] text-base-content">
                <div className='text-white text-start'>
                    <img src={logo} alt="" />
                    <p>Roberto Hotel & Resort Ltd.<br />Providing reliable hotel services since 1992</p>
                </div>
                
                <div className='text-white'>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label ">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 rounded-full text-black" />
                            <button className="btn bg-teal-500 border-none absolute top-0 right-0 rounded rounded-full">
                                <i class="fa-solid fa-paper-plane "></i>
                            </button>
                        </div>
                    </div>
                </div>
                
            </footer>
            <footer className="footer px-10 py-4 border-t bg-[#0E2737] text-whtie ">
                <div className="items-center grid-flow-col text-white">
                   
                    <p>Copyright ©2023 All rights reserved || Developed by Amdadullah Raihan</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-white text-xl">
                        <Link to=''><i class="fa-brands fa-facebook-f"></i></Link>
                        <Link to=''><i class="fa-brands fa-linkedin-in"></i></Link>
                        <Link to=''><i class="fa-brands fa-twitter"></i></Link>
                        <Link to=''><i class="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
