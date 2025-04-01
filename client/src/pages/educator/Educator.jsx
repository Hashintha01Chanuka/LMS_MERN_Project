import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/students/Navbar'
import Slidebar from '../../components/educator/Slidebar'
import Footer from '../../components/educator/Footer'


const Educatior = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar />
      <div className='flex'>
        <Slidebar />

        <div className='flex-1'>
          {<Outlet />}
        </div>



      </div>

      <Footer />

    </div>
  )
}

export default Educatior
