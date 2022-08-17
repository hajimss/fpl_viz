import { Container, Typography } from "@mui/material";
import React from "react";
import Manager from "./Manager";
import Form from "./Form";
import LinkModal from "../../utils/components/LinkModal";

const HomeIndex = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        <i>Fantasy Premier League</i> Viz App
      </Typography>
      <Form />
      <Manager />
    </Container>
  );
};

export default HomeIndex;
