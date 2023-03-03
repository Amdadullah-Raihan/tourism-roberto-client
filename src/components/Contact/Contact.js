import React from 'react';
import useTitle from '../../hooks/useTitle';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import img from '../../images/room.avif'
import { Link } from 'react-router-dom';



const Contact = () => {
    useTitle("Contact -Roberto ")
    return (
        <div className='relative z-0 w-full'>
            <section className='bg-cover h-[500px] relative' style={{ backgroundImage: `url(${img})` }}>
                <div className='absolute bg-black h-full w-full opacity-60'></div>

                <div className='relative flex justify-center items-center h-full text-white flex-col leading-10'>
                    <h1 className='text-4xl'>Contact Us</h1>
                    <h1 className='text-lg font-semibold'><Link to='/'>Home</Link> <i className="fa-solid fa-chevron-right text-sm"></i> Contact us </h1>
                </div>
            </section>
            <section className='mb-16 shadow-lg bg-white  container md:mx-auto mt-[-100px] relative z-10 m-4'>

                <div className='grid grid-cols-2 md:grid-cols-4 md:gap-y-0 gap-y-16 mx-auto w-full p-8'>
                    <div >
                        <i className='fa fa-solid fa-phone text-teal-500 text-2xl'></i>
                        <h3 className='md:text-3xl '>Phone</h3>
                        <p className='md:text-gray-500 '>+088-123456789</p>
                    </div>
                    <div>
                        <i className='fa fa-solid fa-location-dot  text-teal-500 text-2xl'></i>
                        <h3 className='md:text-3xl '>Address</h3>
                        <p className='text-gray-500'>Vatara, Gulshan, Dhaka-1212</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-clock  text-teal-500 text-2xl"></i>
                        <h3 className='md:text-3xl '>Open time
                        </h3>
                        <p className='text-gray-500 '>10:00 am to 23:00 pm</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-envelope  text-teal-500 text-2xl" ></i>
                        <h3 className='md:text-3xl '>Email</h3>
                        <p className='text-gray-500 break-words	'>amdadullahrayhan@gmail.com</p>
                    </div>

                </div>
                <div className='mx-auto   h-auto md:p-8 p-4'>
                    <MapContainer center={[23.798919, 90.434168]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[23.798919, 90.434168]}>
                            <Popup>
                                <p>Roberto Hotel and Resort</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </section>
            <section className='container md:mx-auto p-6 my-16'>
                <div className='my-8 leading-10'>
                    <h4 className='text-teal-500 uppercase'>contact us</h4>
                    <h1 className='font-bold text-4xl capitalize'>leave message</h1>
                </div>
                <div>
                    <div className='flex gap-4 mb-4'>
                        <input type="text" className='border w-full h-12 pl-4' placeholder='Your Name' />
                        <input type="text" className='border w-full h-12 pl-4' placeholder='Your Email' />
                    </div>
                    <div className=''>
                        <textarea placeholder='Your Message' name="" id="" className='border w-full h-52 p-4'></textarea >
                    </div>
                    <button className="btn my-8 border-none bg-teal-500 rounded-none px-10">Send Message</button>
                </div>
            </section>
        </div>
    );
};

export default Contact;