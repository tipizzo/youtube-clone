import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'

const Video = () => {

    const {videoId, categoryId} = useParams();

  return (
    <div className='play-container'>
        <PlayVideo videoId={videoId} />
        <Recommended />
    </div>
  )
}

export default Video
