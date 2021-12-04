import React from "react";
import Spinner from "../assets/images/spinner.gif";
import { Box } from "@mui/system";

const Preloader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}>
      <img src={Spinner} alt="loader" />
    </Box>
  );
};

export default Preloader;
