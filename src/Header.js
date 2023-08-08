import React, { useState } from 'react'
import './Header.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
  const [inputSearch, setInputerSearch] = useState("")

  return (
    <div className='header'>
        <div className="header__left">
          <MenuRoundedIcon className='header__icon' />
          <Link to={'/'}>
            <img src='./logo.PNG' alt='logo' className='header__logo'/>
          </Link>
        </div>

        <div className="header__input">
          <input onChange={(e) => setInputerSearch(e.target.value)} value={inputSearch} type='text' placeholder='Search' />
          <Link to={`/search/${inputSearch}`}>
            <SearchRoundedIcon  className='header__inputButton'/>
          </Link>
        </div>

        <div className="header__icons">
          <VideoCallRoundedIcon className='header__icon' />
          <AppsRoundedIcon className='header__icon' />
          <NotificationsActiveRoundedIcon className='header__icon' />
          <Avatar
            src="https://i.pinimg.com/564x/7b/ee/c5/7beec5a45c69696b4902a46a4d33eeed.jpg"
          />
        </div>
    </div>
  )
}

export default Header