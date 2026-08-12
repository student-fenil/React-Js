import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title,settitle] = useState('')
  const [details,setdetails] =useState('')
  const [task,settask] =useState([])

  const submithandler =(e)=>{
    e.preventdefault()

   const copytask =[...task];

   copytask.push({title,details})
   settask(copytask);
   console.log(copytask);

    settitle('')
    setdetails('')

  }

 


  return (
    <div className='h-screen lg-flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10  flex-col items-start '>

         <h1 className='text-3xs font-bold'>Add notes</h1>

        {/*first input heading */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium  py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}
        />
       { /*detailed vala input */ }
        <textarea
          type="text"
          className='px-5 w-full font-medium  h-32 py-2 flex items-start flex-row outline-none border-2 rounded'
          placeholder='Write Details'
          value={details}
          onChange={(e)=>{
            setdetails(e.target.value);
          }}
          
        />

        <button
         className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'>
          Add notes
        </button>
      
      </form>
      <div className=' lg:w-1/2 lg:border  bg-gray-900  p-10'>
        <h1 className='text-3xs font-bold'>recent notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
       
        </div>
      </div>
    </div>
  )
}

export default App