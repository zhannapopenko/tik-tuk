import React, { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { userFeedStyles } from './UserFeed.styles';

const UserFeed = ({ feed }) => {
  const classes = userFeedStyles();
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

  if (!feed) {
    return <div></div>
  }

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
  }
};

export default UserFeed;
