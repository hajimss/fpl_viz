import React from "react";
import { useGetTopThreeQuery } from "../../fpl_api/StatsSlice";
import Loading from "../../utils/components/Loading";
import { useNavigate } from "react-router-dom";
import StandardPaper from "../../utils/components/StandardPaper";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const TopThreeBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TopThreexG = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetTopThreeQuery();
  if (error) {
    console.log(error);
    navigate("/error");
  }

  if (isLoading) return <Loading />;

  const info = data["result"].map((d) => {
    var xG = parseFloat(d.xG).toFixed(3);

    return (
      <TopThreeBox key={d.player_name}>
        <Typography fontWeight={"regular"}>{d.player_name}</Typography>
        <Typography fontWeight={"light"}>
          xG: <i>{xG}</i>
        </Typography>
      </TopThreeBox>
    );
  });
  return (
    <StandardPaper>
      <Typography fontWeight={"bold"}>Top Three xG Players</Typography>
      {info}
    </StandardPaper>
  );
};

export default TopThreexG;
