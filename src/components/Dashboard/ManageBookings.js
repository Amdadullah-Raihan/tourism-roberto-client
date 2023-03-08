import React, { useEffect, useState } from 'react'

const ManageBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [isApproved, setIsApproved] = useState()


    //getting all bookings 
    useEffect(() => {
        fetch('https://tourism-roberto-server.vercel.app/bookings')
            .then(res => res.json())
            .then(bookings => {
                console.log(bookings);
                setBookings(bookings);
            })
    }, [])

    //handle cancel booking
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
    //handle update booking status
    const handleUpdateStatus = (id, approved) => {
 
            setIsApproved(!approved)
      
        const url = `https://tourism-roberto-server.vercel.app/manage-bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'approved': isApproved }),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount) {
                    alert("Status Updated! Please Reload!")
                }
                else{
                    alert("Couldn't update status! Please Reload")
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto border">
                <table className="table w-full table-compact ">
                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Room Title</th>
                            <th>Check in</th>
                            <th>Check Out</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr key={booking._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking.userName}</td>
                                    <td>{booking.userEmail}</td>
                                    <td>{booking.roomTitle}</td>
                                    <td>{booking.checkin}</td>
                                    <td>{booking.checkout}</td>
                                    <td className='border-box'>
                                        {
                                            booking.approved ? <button onClick={() => handleUpdateStatus(booking._id, booking.approved)}>
                                                <span className='bg-green-700 px-2 text-white rounded-md'>Approved</span>
                                            </button> :
                                                <button onClick={() => handleUpdateStatus(booking._id)}>
                                                    <span className='bg-red-100 px-2 rounded-md '>Pending...</span>
                                                </button>

                                        }
                                    </td>
                                    <td>
                                        <label className='text-red-500 font-semibold' htmlFor='my-modal'>Cancel</label>
                                    </td>
                                    <td>
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
                                    </td>
                                    
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