import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TikTok from "../assets/images/TikTok.png";

const headerStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "grey",
    },
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
        <Link to="/" className={classes.link}>
          <Typography variant="h5">
            <b>Tik Tuk</b>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Header;
