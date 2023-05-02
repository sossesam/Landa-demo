import React from 'react'
import logo from "../images/Ellipse2.png"
import {BsChevronDown} from "react-icons/bs"

const TopBar = () => {
  return (
    <div className="page-nav">
    <div className="page-title">
        Assessments
    </div>
    <div className="person-icon">
        <div className="person">
           <img src={logo} alt="" />
        </div>
        <div className="down-icon">
             <BsChevronDown className='drop-down'/>
      </div>
    </div>

    </div>
  )
}

export default TopBar