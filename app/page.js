"use client"
import React, { useState } from 'react'

const page = () => {
  const [Text, setText] = useState("");



  return (
    <>
      <h1
        className='border-5 font-bold text-2xl border-zinc-900 px-8 py-2 m-2'>
        Enter Your Name :
      </h1>
      <form>

      <input
        type="text"
        className='text-xl m-10 px-3 py-2 h-14 align-middle items-center justify-between border-black border-2'
        
        value={Text}        
        onChange={(e) => {
          setText(e.target.value);
          console.log(Text)
        }}
        
        />
      </form>
    </>
  )
}

export default page

