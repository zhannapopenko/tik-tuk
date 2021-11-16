import { Box } from "@mui/system";
import React from "react";
import Spinner from "../preloaderGif/Spinner.gif";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  preloader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20rem",
  },
}));

const Preloader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.preloader}>
      <img src={Spinner} alt="loader" />
    </Box>
  );
};

export default Preloader;
