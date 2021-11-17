import { makeStyles } from "@mui/styles";

export const userFeedStyles = makeStyles(() => ({
    mainBox: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      display: "flex",
      flexFlow: "column",
      justifyItems: "flex-start",
      padding: "0 7%",
    },
    cardContent: {
      display: "flex",
      flexFlow: "row",
      justifyItems: "flex-start",
      alignItems: "center",
      borderBottom: "1px solid black",
    },
    cardMedia: {
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
      width: "23rem",
      height: "30rem",
      margin: "2% 0",
    },
  }));