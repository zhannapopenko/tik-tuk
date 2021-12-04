import React from "react";
import { useRef, useState } from "react";
import VideoHeader from "../VideoHeader";
import VideoSidebar from "../VideoSidebar";
import { videoStyles } from "./Video.styles";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Box } from "@mui/system";


const Video = ({
  url,
  nickName,
  avatar,
  authorUsername,
  description,
  hashtags,
  likes,
  comments,
  shareCount,
}) => {
  const classes = videoStyles();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (videoPlaying) {
      videoRef.current.pause();
      setVideoPlaying(false);
    } else {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  return (
    <Box className={classes.videoContainer}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Box className={classes.headerContainer}>
            <VideoHeader
              username={authorUsername}
              avatar={avatar}
              nickName={nickName}
              description={description}
              hashtags={hashtags}
            />
          </Box>
          <Box className={classes.cardMediaContainer}>
            <Box className={classes.cardVideoContainer}>
              <CardMedia
                className={classes.cardMedia}
                component="video"
                loop
                autoplay="autoplay"
                muted
                controls
                preload="auto"
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
              />
            </Box>
            <Box className={classes.sidebarContainer}>
              <VideoSidebar
                likes={likes}
                comments={comments}
                shareCount={shareCount}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Video;
