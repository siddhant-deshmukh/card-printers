import * as React from 'react'
import { Link } from 'gatsby'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

//@ts-ignore
const Layout = ({children }) => {
  return (
    <div className='relative'>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout