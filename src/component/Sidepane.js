import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import {MdOutlineDashboard} from "react-icons/md"
import {RiBuilding2Line} from "react-icons/ri"
import {BiWallet} from "react-icons/bi"
import {AiOutlineRead} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BsFileEarmarkText} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import {FiLogOut} from "react-icons/fi"

const Sidepane = () => {
  return (
   
            <div className='side-pane'>
        <div className="logo">
          <img src={logo} alt="landa logo" />
        </div>
        <div className="menu-section">
          <NavLink to="/dashboard">
          <div className="dashboard-menu"  >
                <div className="menu-icon">
                <MdOutlineDashboard size={20}/>
                </div>
            <div className="menu-title">
              Dashboard
            </div>
        </div>
        </NavLink>
       <NavLink to="/Institution">
       <div className="dashboard-menu">
                <div className="menu-icon">
                <RiBuilding2Line size={20}/>
                </div>
            <div className="menu-title ">
              Instituions
            </div>
        </div></NavLink>
        <NavLink to="learning">
        <div className="dashboard-menu">
                <div className="menu-icon">
                <AiOutlineRead size={20}/>
                </div>
            <div className="menu-title">
            Learning
            </div>
        </div></NavLink>
       <NavLink to="/assesment">
       <div className="dashboard-menu">
                <div className="menu-icon">
                <BsFileEarmarkText size={20}/>
                </div>
            <div className="menu-title">
            Assessment
            </div>
        </div>
       </NavLink>
        <NavLink to="finance">
        <div className="dashboard-menu">
                <div className="menu-icon">
                <BiWallet size={20}/>
                </div>
            <div className="menu-title">
            Finance
            </div>
        </div>
        </NavLink> 
        <div className="dashboard-menu">
                <div className="menu-icon">
                <IoMdNotificationsOutline size={20}/>
                </div>
            <div className="menu-title">
            Notifications
            </div>
        </div>
         <div className="dashboard-menu">
                <div className="menu-icon">
                <BiSupport size={20}/>
                </div>
            <div className="menu-title">
            Support
            </div>
        </div>
        </div>
       <div className="logout">
       <div className="dashboard-logout">
            <div className="menu-title">
           Logout
            </div>
            <div className="menu-icon">
                <FiLogOut size={20}/>
                </div>
        </div>
       </div>
      </div>

  )
}

export default Sidepane




