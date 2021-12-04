import React from "react";
import { Link } from "react-router-dom";
import TikTok from "../assets/images/TikTok.png";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

const headerStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      color: "grey",
    },
    color: "black",
    display: "flex",
    flex: 22,
    justifyContent: "flex-start",
  },
  imageContainer: {
    display: "flex",
    flex: 1,
    width: "3rem",
    height: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "2rem",
      height: "2rem",
    },
  },
}));

const Header = () => {
  const classes = headerStyles();
  return (
    <Card>
      <CardContent className={classes.mainContainer}>
        <Box className={classes.imageContainer}>
          <img src={TikTok} alt="logo" />
        </Box>
        <Link to={"/"} className={classes.link}>
          <Typography variant="h5">
            <strong>Tik Tuk</strong>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Header;
