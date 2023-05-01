import React from "react";
import { useState, useEffect } from "react";
import { VIDEO_API } from "../Utils.js/Constants";
import VideoCard from "./VideoCard";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Container = () => {
  const [videos, setVideos] = useState([]);

  const getVideoData = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideoData();
  }, []);
  return (
<div className="flex">
   <div className="w-52"> <Menu/></div>
    <div className="flex flex-wrap items-center justify-center">
        
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  video={video} /></Link>
      ))}
    </div>
    </div>
  );
};

export default Container;
