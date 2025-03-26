import React from 'react'
import { Outlet } from 'react-router-dom'

const Educatior = () => {
  return (
    <div>
      <h1>Educator </h1>
        <div className="">
          {<Outlet/>}
        </div>
      
    </div>
  )
}

export default Educatior
