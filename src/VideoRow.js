import React from 'react'
import './VideoRow.css'

function VideoRow(props) {
  const { image, subs, description, timestamp, channel, title, views } = props

  return (
    <div className='videoRow'>
      <img src={image} alt={channel} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          {channel} • {subs} subscribers • {views} views • {timestamp}
        </p>
        <p className='videoRow__description'>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow