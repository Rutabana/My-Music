import React from 'react'
import './Channel.css'
import { Avatar } from '@mui/material'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const Channel = (props) => {
  const { image, channel, verified, subs, noOfVideos, description } = props

  return (
    <div className='channel'>
      <Avatar className='channel__logo' alt={Channel} src={image} />
      <div className="channel__details">
        <h4>{ channel } { verified && <VerifiedRoundedIcon className='verified' /> }</h4>
        <p>{ subs } subscribers • { noOfVideos } videos</p>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default Channel