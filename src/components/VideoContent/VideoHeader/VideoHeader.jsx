import React from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import { videoHeaderStyles } from "./VideoHeader.styles";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";

const VideoHeader = ({ username, avatar, nickName, description, hashtags }) => {
  const classes = videoHeaderStyles();
  return (
    <>
      <Link to={"/profile/" + username} className={classes.link}>
        <Box className={classes.box}>
          <Avatar
            sx={{ width: "3.5rem", height: "3.5rem", marginRight: "3%" }}
            src={avatar || defaultAvatar}
            alt="avatar"
          />
          <Typography variant="h5" component="h1" className={classes.nickName}>
            @{nickName}
          </Typography>
        </Box>
      </Link>

      <Typography className={classes.description} variant="body1" component="p">
        {description}
      </Typography>
      <Divider />
      <Typography className={classes.hashtags} variant="body2" component="p">
        {hashtags.map((hashtag) => `#${hashtag.name} `)}
      </Typography>
    </>
  );
};

export default VideoHeader;
