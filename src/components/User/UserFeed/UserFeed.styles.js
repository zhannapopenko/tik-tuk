import { makeStyles } from "@material-ui/core";

export const userFeedStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    padding: "0.5rem 5%",
  },
  cardContent: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
  },
  cardMedia: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    width: "25rem",
    height: "30rem",
    [theme.breakpoints.down("md")]: {
      height: "25rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "22rem",
    },
  },
}));
