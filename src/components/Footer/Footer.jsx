import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='p-6 w-full flex  border-gray-200 shadow py-15'>
        <div className='w-1/2'> 
          <img src="https://api.logo.com/api/v2/images?design=lg_LGOUTzXhGPxEL4g72g&format=webp&width=2000&height=2000&fit=contain&quality=100&margins=500&u=862002802a8a5191e2597dfa03730be34aad8543cd4699ddb2a7021d91c6d1f9" className="h-20 w-auto" alt="" />
        </div>
        <div className='flex gap-8 justify-end w-1/2'>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold'>RESOURCES</h1>
              <Link to="/" className='text-gray-600 font-medium'>Home</Link>
              <Link to="/about" className='text-gray-600 font-medium'>About</Link>
            </div>
            <div  className='flex flex-col gap-3'>
              <h1 className='font-bold'>FOLLOW US</h1>
              <Link to="/github" className='text-gray-600 font-medium'>Github</Link>
              <Link to="/discord" className='text-gray-600 font-medium'>Discord</Link>
            </div>
            <div  className='flex flex-col gap-3'>
              <h1 className='font-bold'>LEGAL</h1>
              <Link to="/privacy-policy" className='text-gray-600 font-medium'>Privacy Policy</Link>
              <Link to="/terms-and-conditions" className='text-gray-600 font-medium'>Terms and Conditions</Link>
            </div>
        </div>
      </div>
      <div className='p-6 flex border-gray-200 shadow py-6'>
        <div className='w-1/2 text-gray-700'>2025sakshisingh. All Rights Reserved.</div>
        <div className='flex w-1/2 justify-end gap-8'>
          <Link><img src="./src/assets/facebook.png" alt=""  className='h-5'/></Link>
          <Link><img src="./src/assets/twitter.png" alt="" className='h-5'/></Link>
          <Link><img src="./src/assets/discord.png" alt="" className='h-5'/></Link>
          <Link><img src="./src/assets/github.png" alt="" className='h-5'/></Link>
        </div>
      </div>
    </>
  )
}

export default Footer
