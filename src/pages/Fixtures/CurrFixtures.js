import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import StandardPaper from "../../utils/components/StandardPaper";

const CurrFixtures = ({ current_gw }) => {
  return (
    <StandardPaper>
      <Typography fontWeight={"bold"}>General Info</Typography>
      <List>
        <ListItem>
          <Typography fontWeight={"light"}>
            Bench Boosts played: <i>{current_gw.chip_plays[0].num_played}</i>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography fontWeight={"light"}>
            Freehits played: <i>{current_gw.chip_plays[1].num_played}</i>
          </Typography>
        </ListItem>
      </List>
    </StandardPaper>
  );
};

export default CurrFixtures;
