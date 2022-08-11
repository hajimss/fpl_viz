import { Card, List, ListItem, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import StandardPaper from "../../utils/components/StandardPaper";

const StatusBox = styled(Box)({
  display: "flex",
  displayDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

const StatusCard = styled(Card)({
  backgroundColor: "grey",
  color: "white",
  padding: "0.5rem",
});

const Ended = ({ finished }) => {
  const Status = () => {
    if (finished) {
      return (
        <Typography sx={{ fontSize: "1vw", fontWeight: "light" }}>
          GW Has Ended
        </Typography>
      );
    } else {
      return (
        <Typography sx={{ fontSize: "1vw", fontWeight: "light" }}>
          GW Still Ongoing
        </Typography>
      );
    }
  };
  return <StatusCard>{Status()}</StatusCard>;
};

const CurrFixtures = ({ current_gw }) => {
  return (
    <StandardPaper>
      <StatusBox>
        <Typography fontWeight={"bold"}>Current Gameweek</Typography>
        <Ended finished={current_gw.finished} />
      </StatusBox>
      <List>
        <ListItem>
          <Typography fontWeight={"light"}>
            Average Score: <b>{current_gw.average_entry_score}</b>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography fontWeight={"light"}>
            Highest Score: <b>{current_gw.highest_score}</b>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography fontWeight={"light"}>
            Bench Boosts played: <b>{current_gw.chip_plays[0].num_played}</b>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography fontWeight={"light"}>
            Freehits played: <b>{current_gw.chip_plays[1].num_played}</b>
          </Typography>
        </ListItem>
      </List>
    </StandardPaper>
  );
};

export default CurrFixtures;
