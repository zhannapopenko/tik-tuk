import {
  Card,
  CardContent,
  Divider,
  Typography,
  Avatar,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@material-ui/core";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { userInfoStyles } from "./UserInfo.styles";
import { formatter } from "../../../numberFormatter";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";

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
                <div className={classes.userName}>@{info.uniqueId}</div>
                <div className={classes.nickname}>{info.nickname}</div>
              </Box>
            </Box>
            <Divider />
            <Typography
              className={classes.signature}
              variant="subtitle1"
              component="h6">
              {info.signature}
            </Typography>
          </Container>
          <Grid container className={classes.statsContainer}>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <PeopleSharpIcon className={classes.icon} />
                <b>Followers:&nbsp;</b>
              </Box>
              {formatter.format(stats.followerCount)}
            </Grid>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <PeopleSharpIcon className={classes.icon} />
                <b>Following:&nbsp;</b>
              </Box>
              {formatter.format(stats.followingCount)}
            </Grid>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <VideoCameraFrontIcon className={classes.icon} />
                <b>Video:&nbsp;</b>
              </Box>
              {formatter.format(stats.videoCount)}
            </Grid>
            <Grid item xs={6} md={3} lg={6} className={classes.statistics}>
              <Box>
                <FavoriteIcon className={classes.icon} />
                <b>Like:&nbsp;</b>
              </Box>
              {formatter.format(stats.heartCount)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box className={classes.postsContainer}>
        <Typography component="span" variant="h6">
          Videos of {info.nickname}:
        </Typography>
      </Box>
      <Divider className={classes.divider} />
    </>
  );
};

export default UserInfo;
