import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.pexels.com/videos/1580455/free-video-1580455.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <Avatar className='sidebar__avatar '/>
            <h2>Nitin Yadav</h2>
            <h4>nitinyadav.n9@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
               <p>Connections</p> 
               <p>70</p>
               
            </div>
            <div className="sidebar__stat">
               <p>Who's viewed you</p> 
               <p>37</p>
               
            </div>
        </div>
    </div>
  )
}

export default Sidebar