import { Paper } from "@mui/material";
import React from "react";

const StandardPaper = ({ children }) => {
  return <Paper sx={{ mb: 2, p: 2 }}>{children}</Paper>;
};

export default StandardPaper;
