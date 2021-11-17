import { Box } from "@mui/system";
import React from "react";
import Spinner from "../assets/images/spinner.gif";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  preloader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh"
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
