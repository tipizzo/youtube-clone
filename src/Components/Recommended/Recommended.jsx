import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'

const Recommended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {

        const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideoUrl)
        .then(response => response.json())
        .then(data => setApiData(data.items))

    }

    useEffect(() => {
        fetchData();
    }, [categoryId])

  return (
    <div className='recommended'>
            {apiData.map((item, index) => (
                <div key={index} className='side-video-list'>
                    <img src={thumbnail1} alt='' />
                    <div className='vid-info'>
                        <h4>Best channel that helps you to be a web developer</h4>
                        <p>GreatStack</p>
                        <p>199K Views</p>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Recommended
