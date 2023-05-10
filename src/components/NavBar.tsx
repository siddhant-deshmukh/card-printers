import { Link } from 'gatsby'
import React from 'react'
import Logo from './Logo'

const NavBar = () => {
  return (
    <nav className='flex p-3 w-full justify-between items-center max-w-4xl mx-auto '>
      <Link to='/' className=''>
        <Logo />
      </Link>

      <ul className='flex space-x-5 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-900'>
        <Link to='/'>Home</Link>
        <Link to='#'>Designes</Link>
        <Link to='/about'>About</Link>
        <span> | </span>
        <Link to='/contact'>Contact Us</Link>
      </ul>
    </nav>
  )
}

export default NavBar