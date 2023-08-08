import React from 'react'
import './SideRecommendations.css'
import VideoRowSmall from './VideoRowSmall'
import videos, { shuffleArray } from './videos'

function SideRecommendations() {
  shuffleArray(videos)
  return (
    <div>
      {videos.map((video) => (
            <VideoRowSmall className='sideRecommendations__videoRowSmall'
              views={video.views}
              subs={video.subs}
              timestamp={video.timestamp}
              channel={video.channel}
              title={video.title}
              image={video.image}
            />
          ))}
    </div>
  )
}

export default SideRecommendations