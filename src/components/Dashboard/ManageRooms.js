import React, { useEffect, useState } from 'react'

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);

  //fetching all rooms
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then(res => res.json())
      .then(rooms => setRooms(rooms))
  }, [])

  //deleting a room
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete-room/${id}`,{
      method:"DELETE",
      content_type: "applications/json",
      
    })
      .then(res => res.json())
      .then(result=>{
        console.log(result);
        if (result.deletedCount>0){
          const newRooms = rooms.filter(room=> room._id !== id)
          setRooms(newRooms)

          alert("Room Deleted")

        }else{
          alert("Couldn't delete the room")
        }
      })
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

            {rooms.map((room, i) =>

              <tr className="hover">
                <th>{i + 1}</th>
                <td>{room.title}</td>
                <td>{room.roomSize}</td>
                <td>{room.capacity}</td>
                <td role='button' className='text-red-500'><button onClick={() => handleDelete(room._id) }>Delete</button></td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageRooms