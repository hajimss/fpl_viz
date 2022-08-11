import { Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { useCountDown } from "../../utils/hooks/useCountdown";

const OverallCountDown = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  zeroMinWidth: true,
});

const Individual = styled(Paper)({
  color: "grey",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "10vw",
  margin: "0.5rem",
  padding: "0.5rem",
});

const TimeComponent = ({ timeValue, timeComp }) => {
  return (
    <Individual>
      <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
        {timeValue}
      </Typography>
      <Typography fontSize={"1vw"}>{timeComp}</Typography>
    </Individual>
  );
};

const CountDownTimer = ({ deadline }) => {
  const [days, hours, minutes, seconds] = useCountDown(deadline * 1000);
  return (
    <OverallCountDown>
      <TimeComponent timeValue={days} timeComp="days" />
      <TimeComponent timeValue={hours} timeComp="hours" />
      <TimeComponent timeValue={minutes} timeComp="minutes" />
      <TimeComponent timeValue={seconds} timeComp="seconds" />
    </OverallCountDown>
  );
};

export default CountDownTimer;
