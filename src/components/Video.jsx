import React from "react";
import { useRef, useState } from "react";
import VideoHeader from "./VideoHeader";
import VideoSidebar from "./VideoSidebar";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem auto",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30rem",
    minHeight: "38rem",
  },
  headerContainer: {
    width: "100%",
  },
  cardMediaContainer: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-around",
    width: "25rem",
  },
  cardMedia: {
    width: "100%",
    height: "28rem",
    display: "flex",
    flex: 3,
    margin: "0.5rem",
  },
  sidebarContainer: {
    display: "flex",
    flex: 1,
  },
}));

const Video = ({ url, channel, avatar, description, likes, comments }) => {
  const classes = useStyles();
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
    <Box className={classes.mainBox}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Box className={classes.headerContainer}>
            <VideoHeader
              avatar={avatar}
              channel={channel}
              description={description}
            />
          </Box>
          <Box className={classes.cardMediaContainer}>
            <CardMedia
              className={classes.cardMedia}
              component="video"
              loop
              preload="auto"
              onClick={onVideoPress}
              ref={videoRef}
              src={url}
            />
            <Box className={classes.sidebarContainer}>
              <VideoSidebar likes={likes} comments={comments} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Video;
