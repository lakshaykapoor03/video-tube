import React from 'react'

const VideoCard = ({video}) => {
const {snippet}= video
    const {title, thumbnails, channelTitle} = snippet
    
  return (
    <div className=" p-2 w-52 rounded shadow-md cursor-pointer">
        <img src={thumbnails.medium.url} alt="" srcSet="" />
        <p>{}</p>

        <h2>{title}</h2>
        <span>{channelTitle}</span>

    </div>
  )
}

export default VideoCard