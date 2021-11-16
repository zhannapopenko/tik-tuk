import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import defaultAvatar from "../image/defaultAvatar.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "1rem",
  },
  avatarContainer: {
    width: "4rem",
    height: "4rem",
    marginRight: "0.5rem",
  },
  descriptionContainer: {
    paddingBottom: "1rem"
  }
}));

const VideoHeader = ({ avatar, channel, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.box}>
        <Avatar
          className={classes.avatarContainer}
          src={avatar || defaultAvatar}
          alt="avatar"
        />
        <Typography variant="h6" component="span">
          @{channel}
        </Typography>
      </Box>
      <Typography
        className={classes.descriptionContainer}
        variant="subtitle1"
        component="p"
        >
        {description}
      </Typography>
    </div>
  );
};

export default VideoHeader;
