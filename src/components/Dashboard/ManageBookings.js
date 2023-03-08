import React, { useEffect, useState } from 'react'

const ManageBookings = () => {

    const [bookings, setBookings] = useState([])


    //getting all bookings 
    useEffect(()=>{
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(bookings => {
            console.log(bookings);
            setBookings(bookings);
        })
    },[])
    const handleCancelBooking = (id) => {
        const url = 'https://tourism-roberto-server.vercel.app/delete-booking'
        fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "id": id })
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    alert("Canceled your booking")
                    const newBookings = bookings.filter(mybooking => mybooking._id !== id)
                    setBookings(newBookings)
                };
            })
    }

    return (
        <div>
            <div className="overflow-x-auto border">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Room Title</th>
                            <th>Check in</th>
                            <th>Check Out</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i)=>
                                <tr key={booking._id}>
                                    <th>{i+1}</th>
                                    <td>{booking.userName}</td>
                                    <td>{booking.userEmail}</td>
                                    <td>{booking.roomTitle}</td>
                                    <td>{booking.checkin}</td>
                                    <td>{booking.checkout}</td>
                                    <td><label className='text-red-500 font-semibold' htmlFor='my-modal'>Cancel</label></td>
                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Are you sure?</h3>
                                            <p className="py-4">Do you want to cancel this booking?</p>
                                            <div>

                                            </div>

                                            <div className="modal-action">
                                                <label htmlFor="my-modal" className='bg-red-500 hover:bg-red-400 btn border-none' onClick={() => handleCancelBooking(booking._id)}>Yes!</label>
                                                <label htmlFor="my-modal" className="btn bg-green-700 border-none">No!</label>
                                            </div>
                                        </div>
                                    </div>
                                </tr>
                                )
                        }
                        
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default ManageBookings