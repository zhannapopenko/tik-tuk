import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "3%",
  },
  description: {
    paddingBottom: "3%",
  },
  hashtags: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    overflowWrap: "break-word",
  },
}));

const VideoHeader = ({ username, avatar, nickName, description, hashtags }) => {
  const classes = useStyles();
  return (
    <div>
      <Link to={"/profile/" + username} className={classes.link}>
        <Box className={classes.box}>
          <Avatar
            sx={{ width: "3.5rem", height: "3.5rem", marginRight: "3%"}}
            src={avatar || defaultAvatar}
            alt="avatar"
          />
          <Typography variant="h5" component="h1">
            @{nickName}
          </Typography>
        </Box>
      </Link>

      <Typography
        className={classes.description}
        variant="subtitle1"
        component="p"
      >
        {description}
      </Typography>
      <Divider />
      <Typography
        className={classes.hashtags}
        variant="subtitle1"
        component="p"
      >
        {hashtags.map((hashtag) => `#${hashtag.name} `)}
      </Typography>
    </div>
  );
};

export default VideoHeader;
