import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import TopThreexG from "./TopThreexG";

const StatsIndex = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Player Stats
      </Typography>
      <TopThreexG />
    </Container>
  );
};

export default StatsIndex;
