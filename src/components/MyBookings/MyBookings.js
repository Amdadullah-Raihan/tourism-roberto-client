import React, { useEffect, useState } from 'react'
import useFirebase from '../../hooks/useFirebase'
import useTitle from '../../hooks/useTitle';

const MyBookings = () => {
    useTitle("My Bookings - Roberto")
    const {user} = useFirebase();
    const [MyBookings, setMyBookings] = useState([])

    console.log(MyBookings);
    // get bookings according to the user
    useEffect(()=>{
        const url = 'http://localhost:5000/my-bookings'
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },     
            body:JSON.stringify({"email":user.email})
        })
            .then(res => res.json())
            .then(bookings => {
                setMyBookings(bookings)
            })
    },[])
   

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
                          <th>Action</th>
                          
                      </tr>
                  </thead>
                  <tbody>
                    {
                        MyBookings?.map((booking, i)=> 
                            <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.roomTitle}</td>
                                <td>{booking.checkin}</td>
                                <td>{booking.checkout}</td>
                                <td>{booking.totalCost}</td>
                                <td><button className='text-red-500'>Cancel</button></td>
                                
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