import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexFlow: "column",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexFlow: "row",
      width: "100%",
    },
  },
  box: {
    marginBottom: "2rem",
    padding: "2%",
    borderBottom: "1px solid #000",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "flex-start",
      borderBottom: 0,
      padding: 0,
      margin: "0.5rem",
    },
  },
}));

const VideoSidebar = ({ likes, comments }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Box className={classes.box}>
        <FavoriteIcon sx={{ color: "red" }} fontSize="medium" />
        <div>{likes}</div>
      </Box>
      <Box className={classes.box}>
        <CommentIcon fontSize="medium" />
        <div>{comments}</div>
      </Box>
    </Box>
  );
};

export default VideoSidebar;
