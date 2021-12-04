import { makeStyles } from "@material-ui/core";

export const videoHeaderStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    "&:hover": {
      color: "grey",
    },
    color: "black",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "2%",
  },
  description: {
    paddingBottom: "3%",
    overflowWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  nickName: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  hashtags: {
    padding: "2% 1%",
    overflowWrap: "break-word",
  },
}));
