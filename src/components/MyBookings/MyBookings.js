import React, { useEffect, useState } from 'react'
import useFirebase from '../../hooks/useFirebase'
import useTitle from '../../hooks/useTitle';

const MyBookings = () => {
    useTitle("My Bookings - Roberto")
    const { user, isLoading } = useFirebase();
    const [MyBookings, setMyBookings] = useState([])

    console.log(isLoading);


    // get bookings according to the user
    useEffect(() => {
        if (isLoading) {
            return;
        }
        const url = `http://localhost:5000/my-bookings?email=${user?.email}`
        console.log(user.email);
        fetch(url)
            .then(res => res.json())
            .then(bookings => {
                setMyBookings(bookings)
            })
            .catch(err =>{
                alert(err.message)
            })
            
    }, [isLoading, user.email])

    //handle booking cancel
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
                    const newBookings = MyBookings.filter(mybooking => mybooking._id !== id)
                    setMyBookings(newBookings)
                };
            })
    }


    return (
        <div className='min-h-[31vh] my-16'>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full container mx-auto bo">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Room</th>
                            <th>Check in</th>
                            <th>Check out</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyBookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.roomTitle}</td>
                                    <td>{booking.checkin}</td>
                                    <td>{booking.checkout}</td>
                                    <td>{booking.totalCost}</td>
                                    <td className='border-box'>
                                        {
                                            booking.approved ? <span className='bg-green-700 px-2 rounded-md text-white'>Approved</span> :
                                                <span className='bg-red-100 px-2 rounded-md '>Pending...</span>

                                        }
                                    </td>
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

export default MyBookings