import React from "react";
import defaultAvatar from "../../image/defaultAvatar.png";
import { Card, CardContent, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Typography, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
      flexFlow: "column",
    },
  },
  box: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0.5rem 0",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column"
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
      fontWeight: "bold",
      marginLeft: "0.5rem",
      fontSize: "20px"
    },
  },
  name: {
    fontSize: "18px",
  },
  signature: {
    padding: "0.5rem",
  },
  statistics: {
    margin: "0.5rem auto",
    padding: "0.5rem",
    borderBottom: "1px solid black",
    [theme.breakpoints.down("md")]: {
      margin: "o.3rem auto",
      padding: "0",
    },
  },
  icon: {
    paddingRight: "0.5rem",
    paddingTop: "0.5rem",
  },
  postsContainer: {
    margin: "1rem 20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const UserInfo = ({ info, stats }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Container>
            <Box className={classes.box}>
              <Avatar
                sx={{ width: "7rem", height: "7rem" }}
                src={info.avatarMedium || defaultAvatar}
                alt="avatar"
              />
              <Box className={classes.names}>
                <div className={classes.nickname}>@{info.uniqueId}</div>
                <div className={classes.name}>{info.nickname}</div>
              </Box>
            </Box>
            <Divider />
            <Typography
              className={classes.signature}
              variant="subtitle1"
              component="h6"
            >
              {info.signature}
            </Typography>
          </Container>
          <Container>
            <div className={classes.statistics}>
              <PeopleSharpIcon className={classes.icon} />
              <strong>Followers: </strong>
              {stats.followerCount}
            </div>
            <div className={classes.statistics}>
              <PeopleSharpIcon className={classes.icon} />
              <strong>Following: </strong>
              {stats.followingCount}
            </div>
            <div className={classes.statistics}>
              <VideoCameraFrontIcon className={classes.icon} />
              <strong>Video: </strong>
              {stats.videoCount}
            </div>
            <div className={classes.statistics}>
              <FavoriteIcon className={classes.icon} />
              <strong>Like: </strong>
              {stats.heartCount}
            </div>
          </Container>
        </CardContent>
      </Card>
      <Box className={classes.postsContainer}>
        <Typography variant="h5" component="span">
          Videos of {info.nickname}:
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "0.5rem" }} />
    </>
  );
};

export default UserInfo;
