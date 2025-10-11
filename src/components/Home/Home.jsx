import React from 'react'

function Home() {
  return (
    <>
     <div className='w-full flex border-gray-200 shadow p-15'>
        <div className='w-1/2'>
          <img src="../src/assets/home.jpg" alt=""/>
        </div>
        <div className='w-1/2 flex justify-end items-center'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-3xl my-2'>Download Now</h1>
            <h2 className='font-bold text-xl my-2 self-end'>Lorem ipsum</h2>
            <button className='bg-orange-700 px-4 py-2 rounded-xl text-white my-2 self-end'>Download</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default Home
