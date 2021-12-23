import { useRef, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { userFeedStyles } from "./UserFeed.styles";
import numberFormatting from "../../../numberFormatting";

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

  if (feed) {
    return (
      <Box className={classes.mainBox}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <PlayArrowIcon />
            <Typography variant="subtitle1">
              {numberFormatting(feed.playCount)}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cardMedia}
            component="video"
            autoplay="autoplay"
            muted
            controls
            loop
            preload="auto"
            onClick={onVideoPress}
            ref={videoRef}
            src={feed.videoUrl}
          />
        </Card>
      </Box>
    );
  } else {
    return <div></div>;
  }
};

export default UserFeed;
