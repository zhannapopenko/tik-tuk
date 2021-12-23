import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getUserInfo, getUserFeed } from "../api";
import Preloader from "../components/Preloader";
import UserInfo from "../components/User/UserInfo";
import UserFeed from "../components/User/UserFeed";

const Profile = () => {
  const { username } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState(null);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feed = await getUserFeed();
        const info = await getUserInfo(username);

        setFeed(feed.data);
        setInfo(info.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoaded(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
        }}>
        Error: {error.message}
      </Box>
    );
  }

  if (!isLoaded) {
    return <Preloader />;
  }

  return (
    <div>
      <UserInfo info={info.user} stats={info.stats} />
      <Grid container spacing={2} sx={{ padding: "1rem" }}>
        {feed?.length ? (
          feed.map((feed) => (
            <Grid key={feed.videoUrl} item xs={12} sm={6} md={4} lg={3}>
              <UserFeed feed={feed} />
            </Grid>
          ))
        ) : (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3rem",
            }}>
            <Typography variant="h6">
              Posts aren't available at the moment.
            </Typography>
          </Container>
        )}
      </Grid>
    </div>
  );
};

export default Profile;
