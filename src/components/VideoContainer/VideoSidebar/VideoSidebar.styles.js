import { makeStyles } from "@material-ui/core";

export const videoSidebarStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexFlow: "column wrap",
    margin: "0 0.5rem",
    paddingTop: "0.3rem",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "row",
      justifyContent: "center",
      width: "100%",
      margin: 0,
    },
  },
  container: {
    marginBottom: "2rem",
    padding: "2%",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      margin: "0 1rem",
    },
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  favoriteIcon: {
    color: "red",
  },
  statistics: {
    display: "flex",
    justifyContent: "center",
  },
}));
