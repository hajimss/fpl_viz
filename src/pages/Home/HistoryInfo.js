import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import commaConversion from "../../utils/commaConversion";
import { useSelector } from "react-redux";
import { useGetManagerHistoryDataByIDQuery } from "../../fpl_api/DataSlice";
import LineGraph from "../../utils/graphs/LineGraph";
import Loading from "../../utils/components/Loading";
import StandardPaper from "../../utils/components/StandardPaper";

const HistoryInfo = () => {
  const id = useSelector((state) => state.managerID.id);
  const { data, error, isLoading } = useGetManagerHistoryDataByIDQuery(id);
  if (isLoading) return <Loading />;

  return (
    <StandardPaper>
      <Typography fontWeight={"bold"}>Overall Ranking</Typography>
      {data.current.map((data, index) => {
        return (
          <Typography key={index}>
            Gameweek {data.event}: {commaConversion(data.overall_rank)} (
            <i>{commaConversion(data.points)})</i>
          </Typography>
        );
      })}
      <Divider sx={{ m: 2 }} />
      <LineGraph
        title="Overall Ranking"
        data={data.current.map((data) => {
          var graphData = {
            Y: data.overall_rank,
            X: data.event,
          };
          return graphData;
        })}
      />
    </StandardPaper>
  );
};

export default HistoryInfo;
