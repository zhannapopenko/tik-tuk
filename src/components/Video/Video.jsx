import React from "react";
import { useRef, useState } from "react";
import VideoHeader from "./VideoHeader";
import VideoSidebar from "./VideoSidebar";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem auto",
    [theme.breakpoints.down("sm")]: {
      margin: "3%",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "32rem",
    minHeight: "34rem",
    [theme.breakpoints.down("md")]: {
      width: "27rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "23rem",
    },
  },
  headerContainer: {
    width: "100%",
  },
  cardMediaContainer: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-around",
    width: "25rem",
    [theme.breakpoints.down("md")]: {
      width: "23rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  cardVideoContainer: {
    display: "flex",
    width: "fit-content"
  },
  cardMedia: {
    height: "28rem",
    display: "flex",
    flex: 3,
    margin: "0.5rem",
    borderRadius: "15px",
    [theme.breakpoints.down("md")]: {
      height: "27rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "23rem", 
    },
  },
  sidebarContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
}));

const Video = ({
  url,
  nickName,
  avatar,
  authorUsername,
  description,
  hashtags,
  likes,
  comments,
}) => {
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
              <VideoSidebar likes={likes} comments={comments} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Video;
