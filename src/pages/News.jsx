import React from "react";
import { useState, useEffect } from "react";
import { getTrendingFeed } from "../apis/api";
import Preloader from "../components/Preloader";
import Video from "../components/Video";

const News = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getTrendingFeed().then(
      (result) => {
        setIsLoaded(true);
        setVideos(result.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Preloader/>
  } else {
    return (
      <div>
        {videos.map((video) => (
          <Video
            url={video.videoUrl}
            channel={video.authorMeta?.nickName}
            avatar={video.authorMeta?.avatar}
            likes={video.diggCount}
            comments={video.commentCount}
            description={video.text}
          />
        ))}
      </div>
    );
  }
};

export default News;
