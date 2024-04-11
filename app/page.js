"use client"
import { Lavishly_Yours, Tilt_Neon } from 'next/font/google';
import React, { useState } from 'react';

const Page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, description }])
    setTask("");
    setDescription("");

  };

  const DeleteTask = (i) => {
    let copiedtask = [...mainTask];
    copiedtask.splice(i,1);
    setMainTask(copiedtask);
  }

  let renderTask = <h2>No Task Added</h2>

  if (mainTask.length > 0) {
  
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className=' flex items-center justify-between'>
        <div className='flex justify-between mb-3 w-2/3'>
        <h5 className='text-2xl font-bold font-sans'>{t.task}</h5>
          <h6 className='text-lg font-medium font-mono'>{t.description}</h6>
          </div>
          <button
            onClick={() => {
              DeleteTask(i)
            }}
            className='-mt-2 px-4 py-1.5 bg-red-500 hover:bg-red-700 rounded-xl text-white font-bold'>
            Delete
          </button>
    </li>
    );
  });
}



  return (
    <>
      <h1 className='bg-slate-600 p-4 font-bold text-pretty font-serif text-white text-3xl text-center'>Task-Management</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="text-here"
          placeholder='Enter Your Task......'
          className="text-xl m-8 px-5 py-3 h-14 w-62 align-middle items-center justify-between border-black border-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="text"
          name="text-here"
          placeholder='Enter Description......'
          className="text-xl m-2 px-2 py-2 h-14 w-62 align-middle items-center justify-between border-black border-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className='bg-zinc-900 text-gray-300 w-30 m-7 mt-15 p-3 rounded-md hover:bg-slate-700 text-xl font-bold'> Add Task</button>
      </form>
      <hr />

      <div className='p-6 bg-cyan-300 text-xl font-bold'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Page;
