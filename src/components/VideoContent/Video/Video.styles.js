import { makeStyles } from "@material-ui/core";

export const videoStyles = makeStyles((theme) => ({
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem auto",
    [theme.breakpoints.down("sm")]: {
      margin: "3%",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "25rem",
    minHeight: "34rem",
    [theme.breakpoints.down("xs")]: {
      width: "16rem",
    },
  },
  headerContainer: {
    width: "100%",
  },
  cardMediaContainer: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  cardVideoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cardMedia: {
    display: "flex",
    flex: 3,
    padding: "0.5rem",
    borderRadius: "15px",
  },
  sidebarContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
}));
