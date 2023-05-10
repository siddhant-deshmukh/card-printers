import { Link } from 'gatsby'
import React from 'react'
import Logo from './Logo'

const NavBar = () => {
  return (
    <nav className=' top-0 z-30 border-b bg-white sticky p-5 w-full '>
      <div className='flex w-full justify-between items-center max-w-4xl mx-auto px-2'>
        <Link to='/' className=''>
          <Logo />
        </Link>

        <ul className=' hidden 2md:flex space-x-5 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-900'>
          <Link to='/'>Home</Link>
          <Link to='#'>Designes</Link>
          <Link to='/about'>About</Link>
          <span> | </span>
          <Link to='/contactus'>Contact Us</Link>
        </ul>
        
        <ul className='flex 2md:hidden space-x-5 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-900'>
          <Link to='/contactus'>Contact Us</Link>
          
        </ul>

      </div>
    </nav>
  )
}

export default NavBar