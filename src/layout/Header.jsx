import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Header = () => (
  <Card>
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Typography variant="h5">Trends</Typography>
    </CardContent>
  </Card>
);

export default Header;
