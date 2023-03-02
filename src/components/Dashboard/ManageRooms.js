import React, { useEffect, useState } from 'react'

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);

  //fetching all rooms
  useEffect(()=>{
    fetch("http://localhost:5000/rooms")
    .then(res=> res.json())
    .then(rooms=> setRooms(rooms))
  },[])

  //deleting a room
  const handleDelete = (id) => {
    fetch("")
  }



  return (
    <div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>size</th>
              <th>Capacity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            { rooms.map((room, i)=>
              
            <tr className="hover">
              <th>{i+1}</th>
              <td>{room.title}</td>
              <td>{room.roomSize}</td>
              <td>{room.capacity}</td>
              <td role='button' onClick={()=>handleDelete(room._id)} className='text-red-500'>Delete</td>
            </tr>
              )}
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageRooms