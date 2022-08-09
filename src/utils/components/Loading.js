import { CircularProgress, Paper } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      <CircularProgress />
    </Paper>
  );
};

export default Loading;
