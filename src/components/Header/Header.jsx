import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='sticky'>
      <nav className='bg-white border border-gray-200 px-4 lg:px-6 py-2.5 flex justify-between items-center shadow font-semibold'>
        <div className='flex-shrink-0'>
          <img src="https://api.logo.com/api/v2/images?design=lg_LGOUTzXhGPxEL4g72g&format=webp&width=2000&height=2000&fit=contain&quality=100&margins=500&u=862002802a8a5191e2597dfa03730be34aad8543cd4699ddb2a7021d91c6d1f9" 
          className="h-20 w-auto" alt="" />
        </div>

        <div className='w-full max-w-lg flex justify-around items-center'>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Github</Link>
        </div>

        <div className='flex items-center gap-5'>
          <div className=''>
            <button>Login</button>
          </div>
          <div>
            <button className='bg-red-600 px-2 py-1 rounded-xl text-white'>Get Started</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
