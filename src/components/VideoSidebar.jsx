import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainBox: {
    display: "flex",
    flexFlow: "column",
  },
  box: {
    marginBottom: "2rem",
    padding: "0.5rem",
    borderBottom: "1px solid #7f1c8a",
  },

}));

const VideoSidebar = ({ likes, comments }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Box className={classes.box}>
        <FavoriteIcon color="secondary" fontSize="medium" />
        <div>{likes}</div>
      </Box>
      <Box className={classes.box}>
        <ChatBubbleOutlinedIcon color="secondary" fontSize="medium" />
        <div>{comments}</div>
      </Box>
    </Box>
  );
};

export default VideoSidebar;
