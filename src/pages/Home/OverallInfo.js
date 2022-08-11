import { Typography } from "@mui/material";
import React from "react";
import commaConversion from "../../utils/commaConversion";
import { useSelector } from "react-redux";
import { useGetManagerDataByIDQuery } from "../../fpl_api/DataSlice";
import Loading from "../../utils/components/Loading";
import StandardPaper from "../../utils/components/StandardPaper";
import { useNavigate } from "react-router-dom";

const OverallInfo = () => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.managerID.id);
  const { data, error, isLoading } = useGetManagerDataByIDQuery(id);

  if (error) {
    console.log(error);
    navigate("/error");
  }

  if (isLoading) return <Loading />;

  return (
    <StandardPaper>
      <Typography variant="h6" fontWeight={"bold"}>
        {data.name} ({data.player_first_name} {data.player_last_name})
      </Typography>
      <Typography>Overall Points: {data.summary_overall_points}</Typography>
      <Typography>
        Overall Rank: {commaConversion(data.summary_overall_rank)}
      </Typography>
    </StandardPaper>
  );
};

export default OverallInfo;
