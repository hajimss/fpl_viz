import React from "react";
import { Typography } from "@mui/material";
import StandardPaper from "../../utils/components/StandardPaper";
import CountDownTimer from "./CountDownTimer";

const NextFixtures = ({ next_gw }) => {
  let deadline = next_gw.deadline_time_epoch;
  let d = new Date(0);
  d.setUTCSeconds(deadline);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <StandardPaper>
      <Typography fontWeight={"bold"}>Next Gameweek</Typography>
      <Typography fontWeight={"light"}>
        Deadline:{" "}
        <i>
          {d.toLocaleDateString("en-GB", options) +
            " " +
            d.toLocaleTimeString()}
        </i>
      </Typography>
      <CountDownTimer deadline={deadline} />
    </StandardPaper>
  );
};

export default NextFixtures;
