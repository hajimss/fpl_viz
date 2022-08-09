import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import StandardPaper from "../../utils/components/StandardPaper";

const EmptyID = () => {
  return (
    <Container>
      <StandardPaper>
        <Typography sx={{ textAlign: "center", p: 3, fontSize: 20 }}>
          Enter Your ID
        </Typography>
      </StandardPaper>
    </Container>
  );
};

export default EmptyID;
