import React from "react";
import { userInfoStyles } from "./UserInfo.styles";
import numberFormatting from "../../../numberFormatting";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import { Card, CardContent, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Typography, Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@material-ui/core";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import FavoriteIcon from "@mui/icons-material/Favorite";

const UserInfo = ({ info, stats }) => {
  const classes = userInfoStyles();

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
          <Grid container className={classes.statsContainer}>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <PeopleSharpIcon className={classes.icon} />
                <strong>Followers: </strong>
              </Box>
              {numberFormatting(stats.followerCount)}
            </Grid>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <PeopleSharpIcon className={classes.icon} />
                <strong>Following: </strong>
              </Box>
              {numberFormatting(stats.followingCount)}
            </Grid>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <VideoCameraFrontIcon className={classes.icon} />
                <strong>Video: </strong>
              </Box>
              {numberFormatting(stats.videoCount)}
            </Grid>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <FavoriteIcon className={classes.icon} />
                <strong>Like: </strong>
              </Box>
              {numberFormatting(stats.heartCount)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box className={classes.postsContainer}>
        <Typography component="span" variant="h6">
          Videos of {info.nickname}:
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "0.5rem" }} />
    </>
  );
};

export default UserInfo;
