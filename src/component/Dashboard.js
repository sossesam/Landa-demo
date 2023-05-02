import React from 'react'
import Sidepane from "./Sidepane"
import MainDashboard from "./MainDashboard"

const Dashboard = () => {
  return (
    <div className="container">
          <Sidepane />
          <MainDashboard />
      </div>
  )
}

export default Dashboard