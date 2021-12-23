import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { getTrendingFeed } from "../api";
import Video from "../components/VideoContainer/Video";
import Preloader from "../components/Preloader.jsx";

const VideosFeed = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feed = await getTrendingFeed();
        setVideos(feed.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoaded(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
        }}>
        Error: {error.message}
      </Box>
    );
  }

  if (!isLoaded) {
    return <Preloader />;
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
          shareCount={video.shareCount}
          description={video.text}
          hashtags={video.hashtags}
        />
      ))}
    </div>
  );
};

export default VideosFeed;
