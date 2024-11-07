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
import {  value_converter } from '../../data'

const Recommended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([])

    const fetchData = async () => {
        const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=CD&videoCategoryId=${categoryId}&key=${API_KEY}`; // Add the API_KEY from where it's stored
        await fetch(relatedVideoUrl)
        .then(res => res.json())
        .then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchData();
    }, [])

  return (
    
        <div  className='recommended'>
            {apiData.map((item, index) => {
                return (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                    <img src={item.snippet.thumbnails.medium.url} alt='' />
                    <div className='vid-info'>
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} Views</p>
                    </div>
                </Link>
                )
        })}
            {/*
            <div className='side-video-list'>
                <img src={thumbnail2} alt='' />
                <div className='vid-info'>
                    <h4>Best channel that helps you to be a web developer</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail3} alt='' />
                <div className='vid-info'>
                    <h4>Best channel that helps you to be a web developer</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail4} alt='' />
                <div className='vid-info'>
                    <h4>Best channel that helps you to be a web developer</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail5} alt='' />
                <div className='vid-info'>
                    <h4>Best channel that helps you to be a web developer</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail6} alt='' />
                <div className='vid-info'>
                    <h4>Best channel that helps you to be a web developer</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail7} alt='' />
                <div className='vid-info'>
                    <h4>Best channel that helps you to be a web developer</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail8} alt='' />
                <div className='vid-info'>
                    <h4>Best channel that helps you to be a web developer</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>       
*/} 
        </div>
  )
}

export default Recommended
