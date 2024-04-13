'use client'
import axios from 'axios'
import React, { useState } from 'react'


const page = () => {
  const [Users, setUsers] = useState([]);
  
  const userData = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
  }




  return (
    <>
      <div className=''>
        <button onClick={userData} className='p-2 h-12 w-28 bg-green-600 font-bold text-white rounded-md'>Get Data</button>
      </div>
      <div className='w-full bg-slate-400 rounded p-7 mt-3'>
        <ul>
          {Users.map((e) => {
            return <li>{e.name} ---------- <a href="">Explore</a></li>
          })}
        </ul>
      </div>
    
    </>
  )
}

export default page
