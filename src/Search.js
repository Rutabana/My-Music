import React from 'react'
import './Search.css'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import Elvis from './Elvis';
import Channel from './Channel';
import VideoRow from './VideoRow';
import videos, { shuffleArray } from './videos'
import { Link } from '@mui/material';

function Search() {
  shuffleArray(videos)
  return (
    <div className='search'>
        <div className='search__filter'>
            <TuneRoundedIcon className='search__icon'/>
            <h2 className='search__title'>FILTER</h2>
        </div>
        <hr />

        <div className="search__channels">
          <Channel
          image={Elvis.link}
          channel="Elvis Presley"
          verified
          subs="500"
          noOfVideos="500"
          description="This is not the real deal folks. I just chose this name becuase I'm currently listening to his son 'Can't help Falling in Love' and I'm loving it. Isn't it a banger?"
          />
        </div>
        <hr />

        <div className="search__videos">
          {videos.map((video) => (
            <Link to={`/watch/${video.id}/${video.title}`} state={{id: video.id}} className='link'>
              <VideoRow
                views={video.views}
                subs={video.subs}
                description={video.description}
                timestamp={video.timestamp}
                channel={video.channel}
                title={video.title}
                image={video.image}
              />
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Search