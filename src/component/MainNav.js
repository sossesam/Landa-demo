import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => {
  return (
    <div className='main-nav'>
   <NavLink to="question bank" >
   <div className="nav-menu">
      Question Bank
    </div>
   </NavLink>
    <NavLink to="assesment">
    <div className="nav-menu">
      Assesments
    </div>
    </NavLink>
  </div>
  )
}

export default MainNav