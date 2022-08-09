import React from "react";
import { Container } from "@mui/material";
import OverallInfo from "./OverallInfo";
import HistoryInfo from "./HistoryInfo";
import { useSelector } from "react-redux";
import EmptyID from "./EmptyID";
import BenchPoints from "./BenchPoints";

const Manager = () => {
  const id = useSelector((state) => state.managerID.id);
  if (!id) {
    return <EmptyID />;
  }
  return (
    <Container>
      <OverallInfo />
      <HistoryInfo />
      <BenchPoints />
    </Container>
  );
};

export default Manager;
