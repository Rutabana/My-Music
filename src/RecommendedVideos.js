import React from 'react'
import './RecommendedVideos.css'
import Video from './Video'
import videos, { shuffleArray } from './videos'

function RecommendedVideos() {
  shuffleArray(videos)
  return (
    <div className='recommendedVideos'>
      <h2>Good Music</h2>
      <div className='recommendedVideos__videos'>
        {videos.map((video) => (
          <Video className='recommendedVideos__video'
            title={video.title}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            channel={video.channel}
            image={video.image}
          />
        ))}
      </div>
    </div>
  )
}

export default RecommendedVideos