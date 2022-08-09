import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetManagerHistoryDataByIDQuery } from "../../fpl_api/DataSlice";
import Loading from "../../utils/components/Loading";
import StandardPaper from "../../utils/components/StandardPaper";
import BarGraph from "../../utils/graphs/BarGraph";

const BenchPoints = () => {
  const id = useSelector((state) => state.managerID.id);
  const { data, isLoading } = useGetManagerHistoryDataByIDQuery(id);
  if (isLoading) return <Loading />;
  return (
    <StandardPaper>
      <BarGraph
        title="Bench Points"
        data={data.current.map((data) => {
          var graphData = {
            Y: data.points_on_bench,
            X: data.event,
          };
          return graphData;
        })}
      />
    </StandardPaper>
  );
};

export default BenchPoints;
