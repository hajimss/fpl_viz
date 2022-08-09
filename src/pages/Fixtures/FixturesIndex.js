import { Container, Typography } from "@mui/material";
import React from "react";
import Fixtures from "./Fixtures";
import LinkModal from "../../utils/components/LinkModal";

const FixturesIndex = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Fixtures
      </Typography>
      <Fixtures />
      <LinkModal to="home" />
    </Container>
  );
};

export default FixturesIndex;
