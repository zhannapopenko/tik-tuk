import React, { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexFlow: "column",
    justifyItems: "flex-start",
    padding: "0 7%",
  },
  cardContent: {
    display: "flex",
    flexFlow: "row",
    justifyItems: "flex-start",
    alignItems: "center",
    borderBottom: "1px solid black",
  },
  cardMedia: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    width: "23rem",
    height: "30rem",
    margin: "2% 0",
  },
}));

const UserFeed = ({ feed }) => {
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
  
  if (feed) {
    return (
      <Box className={classes.mainBox}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <PlayArrowIcon />
            <Typography variant="subtitle1">{feed.stats.playCount}</Typography>
          </CardContent>
          <CardMedia
            className={classes.cardMedia}
            component="video"
            loop
            preload="auto"
            onClick={onVideoPress}
            ref={videoRef}
            src={feed.originCover}
          />
        </Card>
      </Box>
    );
  } else {
    return <div></div>
  }
};

export default UserFeed;
