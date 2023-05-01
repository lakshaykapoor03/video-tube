import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { COMMENTS_API } from "../Utils.js/Constants";
import { API_KEY } from "../Utils.js/Constants";
import { useState } from "react";

const WatchPage = () => {
  const [commentList, setCommentList] = useState([]);

  const [params] = useSearchParams();

  const getComments = async () => {
    const data = await fetch(
      COMMENTS_API + params.get("v") + "&key=" + API_KEY
    );
    const json = await data.json();
    setCommentList(json?.items);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <div>
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h1 className="font-bold text-3xl m-2 p-2">Comments:</h1>
        {commentList.map((comment) => (
          <div key={comment.id} className="flex items-center m-2 p-2">
            <img
              className="w-7 rounded-full mx-2"
              src="https://yt3.ggpht.com/yti/AHXOFjXzYc-9Tkv7Sg-wO65yuoEhXM1J2pQxdL4jFI7zJHs=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
            />
            <h1 className="text-md" >
              {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
