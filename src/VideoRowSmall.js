import React from 'react'
import './VideoRowSmall.css'

function VideoRowSmall(props) {
  const { image, subs, description, timestamp, channel, title, views } = props

  return (
    <div className='videoRowSmall'>
      <img src={image} alt={channel} />
      <div className="videoRowSmall__text">
        <h4>{title}</h4>
        <p className='videoRowSmall__headline'>
          {channel} • {views} views
        </p>
        <p className='timestamp'>{timestamp}</p>
      </div>
    </div>
  )
}

export default VideoRowSmall