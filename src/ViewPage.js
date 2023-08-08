import React from 'react'
import './ViewPage.css'
import { Avatar } from '@mui/material'
import videos, { shuffleArray } from './videos'
import SideRecommendations from './SideRecommendations'
import { useLocation } from 'react-router-dom'

function ViewPage(props) {
  shuffleArray(videos)
  const { image, subs, description, timestamp, channel, title, views, link, profile } = videos[0]
  const vid = useLocation().state.id
  console.log(vid)

  return (
    <div className='viewPage'>
      <div className='viewPage__left'>
        <iframe className='spotify' src={link}  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div className='viewPage__info'>
          <div className='viewPage__channelInfo'>
            <img className='viewPage__avatar' src={profile} alt={channel} />
            <div className='viewPage__channelInfo_text'>
              <div className='channel_and_subscribers'>
                <h4>{channel}</h4>
                <p>{subs} subscribers</p>
              </div>
              <div className='viewPage__videoInfo'>
                <div className='views_and_timestamp'>
                  <p>{views} views</p>
                  <p>{timestamp}</p>
                </div>
                 <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='viewPage__right'>
        <SideRecommendations />
      </div>
    </div>
  )
}

export default ViewPage