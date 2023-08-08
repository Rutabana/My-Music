import React from 'react'
import './Video.css'

function Video(props) {
  const { image, title, channel, views, timestamp, channelImage } = props

  return (
    <div className='video'>
        <img src={image} alt='' className='videocard'/>
        <div className='video__info'>
            {/* <Avatar className='video__avatar' alt={channel} src={channelImage} /> */}
            <div className='video__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} • {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Video