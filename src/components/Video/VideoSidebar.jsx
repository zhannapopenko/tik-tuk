import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexFlow: "column wrap",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexFlow: "row",
      justifyContent: "center",
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

  iconWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
}));

const VideoSidebar = ({ likes, comments }) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.mainBox}>
      <Box className={classes.box}>
        <Box className={classes.iconWrapper}>
          <FavoriteIcon sx={{ color: "red" }} fontSize="medium" />
        </Box>
        <div>{likes}</div>
      </Box>
      <Box className={classes.box}>
      <Box className={classes.iconWrapper}>
        <CommentIcon fontSize="medium" />
      </Box>        
        <div>{comments}</div>
      </Box>
    </Box>
  );
};

export default VideoSidebar;
