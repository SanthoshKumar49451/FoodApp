import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add">
          <div className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add items</p>
          </div>
        </NavLink>

        <NavLink to='/list' >
          <div className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List items</p>
          </div>
        </NavLink>
        <NavLink to='/orders' >
          <div className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar