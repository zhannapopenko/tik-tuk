import React from "react";
import { useState, useEffect } from "react";
import { getTrendingFeed } from "../api";
import Preloader from "../components/Preloader";
import Video from "../components/Video/Video";

const News = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTrendingFeed();
        setVideos(res.data);
        setIsLoaded(true);
      } catch(error) {
        setError(error);
        setIsLoaded(true);
      }   
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Preloader/>
  }

  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.videoUrl}
          url={video.videoUrl}
          authorUsername={video.authorMeta?.name}
          nickName={video.authorMeta?.nickName}
          avatar={video.authorMeta?.avatar}
          likes={video.diggCount}
          comments={video.commentCount}
          description={video.text}
          hashtags={video.hashtags}
        />
      ))}
    </div>
  );
};

export default News;
