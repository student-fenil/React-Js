import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [userdata, setuserdata] = useState([])

  const [index,setindex] = useState(1)

  const getdata = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=15')
      setuserdata(response.data)
 }

 useEffect(function(){
  getdata()
 },[])

  let printuserdata = <h3 className='text-gray-400 text-xs'>No user available</h3>
  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank' >
          <div className="h-40  w-44 overflow-hidden bg-white rounded-xl">
            <img
              className="h-full w-full object-cover"
              src={elem.download_url}
              alt=""
            />
          </div>

            <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
      
    })
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">

      <div className="flex flex-wrap gap-4 p-2">
        {printuserdata}
      </div>

       <div className="flex justify-center gap-6 items-center p-4">
            <button
             className="bg-amber-400 test-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
              
              Prev
            </button>
            <button
             className="bg-amber-400 test-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
             
              next
            </button>
      </div>

    </div>
  )
}

export default App