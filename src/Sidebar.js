import React from 'react';
import './Sidebar.css';
import SideRow from './SideRow';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
// import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SideRow selected Icon={ HomeRoundedIcon } title='Home' />
      <SideRow Icon={ LocalFireDepartmentRoundedIcon } title='Trending' />
      <SideRow Icon={ SubscriptionsRoundedIcon } title='Subscriptions' />
      <hr />
      <SideRow Icon={ VideoLibraryRoundedIcon } title='Library' />
      <SideRow Icon={ HistoryRoundedIcon } title='History' />
      <SideRow Icon={ GetAppRoundedIcon } title='Downloads' />
      <SideRow Icon={ ThumbUpAltRoundedIcon } title='Liked Videos' />
      <SideRow Icon={ OndemandVideoRoundedIcon } title='Your videos' /> 
      <SideRow Icon={ WatchLaterRoundedIcon } title='Watch later' />
      <SideRow Icon={ ExpandMoreRoundedIcon } title='Show more' />
      <hr />
    </div>
  )
}

export default Sidebar