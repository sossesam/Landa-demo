import React from 'react'
import TopBar from './TopBar'
import DashboardMain from './DashboardMain'

const MainDashboard = () => {
  return (
    <div className="main-dashboard"> 
        <TopBar />
        <DashboardMain/>
      </div>
  )
}

export default MainDashboard