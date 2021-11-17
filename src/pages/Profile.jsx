import React from "react";
import { useState, useEffect } from "react";
import { getUserInfo, getUserFeed } from "../api";
import Preloader from "../components/Preloader";
import { useParams } from "react-router";
import UserInfo from "../components/User/UserInfo";
import UserFeed from "../components/User/UserFeed";
import { Container, Grid, Typography } from "@mui/material";

const Profile = () => {
  const { username } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState(null);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserInfo(username);
        setInfo(res.data);
        setIsLoaded(true);
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }

      try {
        const res = await getUserFeed(username);
        setFeed(res.data);
        setIsLoaded(true);
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Preloader />;
  }

  return (
    <div>
      <UserInfo info={info.user} stats={info.stats} />
      <Grid container spacing={2} sx={{ padding: "1rem" }}>
        {feed?.length ? (
          feed.map((feed) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <UserFeed feed={feed} />
            </Grid>
          ))
        ) : (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4rem",
            }}
          >
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
