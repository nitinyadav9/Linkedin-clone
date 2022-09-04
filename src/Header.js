import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        {/* <h1>this is the header</h1> */}


        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>
        
        <div className="header__right">
            <HeaderOption title= 'Home' Icon = {HomeIcon}/>
            <HeaderOption title= 'MyNetwork' Icon = {GroupAddIcon}/>
            <HeaderOption title= 'Jobs' Icon = {BusinessCenterIcon}/>
            <HeaderOption title= 'Messaging' Icon = {ChatIcon}/>
            <HeaderOption title= 'Notification' Icon = {NotificationsIcon}/>
            <HeaderOption title= 'me' avatar="https://www.popsci.com/uploads/2022/07/29/Mark-Elias-Photo_How_To_Shoot_Cars_Story-006-scaled-1.webp?auto=webp"/>
        </div>
    </div>
  )
}

export default Header