import React from 'react'
import MainNav from './MainNav'
import { Outlet } from 'react-router-dom'


const DashboardMain = () => {
  return (
    <div className='main-content'>
    <MainNav />
    <Outlet/>
    </div>
  )
}

export default DashboardMain