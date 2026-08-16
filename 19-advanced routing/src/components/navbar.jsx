import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-cyan-900 justify-between'>
      <h2 className='text-2xl font-bold'>fenil</h2>
      <div className="flex gap-10">
        <a className='text-lg font-medium' href="/">home</a>
        <a className='text-lg font-medium' href="/about">about</a>
        <a className='text-lg font-medium' href="/contact">contact</a>

      </div>
    </div>
  )
}

export default Navbar