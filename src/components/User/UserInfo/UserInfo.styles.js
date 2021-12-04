import { makeStyles } from "@material-ui/core";

export const userInfoStyles = makeStyles((theme) => ({
  card: {
    margin: "1rem 20%",
    [theme.breakpoints.up("sm")]: {
      margin: "3% 20%",
    },
    [theme.breakpoints.only("xs")]: {
      margin: "3%",
    },
  },
  cardContent: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexFlow: "column",
    },
  },
  box: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0.5rem 0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  names: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1.5rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0.5rem",
    },
  },
  nickname: {
    marginBottom: "0.5rem",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "0.5rem",
    },
  },
  name: {
    fontSize: "18px",
  },
  signature: {
    padding: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  statsContainer: {
    padding: "0.5rem",
  },
  statistics: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    paddingLeft: "10%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      paddingLeft: "7%",
    },
  },
  icon: {
    paddingRight: "0.5rem",
    paddingTop: "0.5rem",
  },
  postsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 20%",
    [theme.breakpoints.down("sm")]: {
      margin: "0.5rem 5%",
    },
  },
}));
