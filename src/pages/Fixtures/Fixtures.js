import { List, ListItem, Typography } from "@mui/material";
import { useGetGeneralDataQuery } from "../../fpl_api/DataSlice";
import React from "react";
import Loading from "../../utils/components/Loading";
import StandardPaper from "../../utils/components/StandardPaper";

const Fixtures = () => {
  const { data, isLoading } = useGetGeneralDataQuery();
  if (isLoading) return <Loading />;
  console.log(data);
  let current_gw;

  data["events"].map((data) => {
    if (data.is_current) {
      current_gw = data;
    }
  });
  console.log(current_gw);
  return (
    <StandardPaper>
      <Typography fontWeight={"bold"}>General Info</Typography>
      <List>
        <ListItem>
          <b>Bench Boosts played</b>: {current_gw.chip_plays[0].num_played}
        </ListItem>
        <ListItem>
          <b>Freehits played</b>: {current_gw.chip_plays[1].num_played}
        </ListItem>
      </List>
    </StandardPaper>
  );
};

export default Fixtures;
