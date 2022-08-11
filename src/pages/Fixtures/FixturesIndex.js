import { Container, Typography } from "@mui/material";
import React from "react";
import { useGetGeneralDataQuery } from "../../fpl_api/DataSlice";
import CurrFixtures from "./CurrFixtures";
import Loading from "../../utils/components/Loading";
import NextFixtures from "./NextFixtures";
import LinkModal from "../../utils/components/LinkModal";

const FixturesIndex = () => {
  const { data, isLoading } = useGetGeneralDataQuery();
  if (isLoading) return <Loading />;
  console.log(data);
  let current_gw, next_gw;

  data["events"].forEach((item) => {
    if (item.is_current) {
      current_gw = item;
    }
    if (item.is_next) {
      next_gw = item;
    }
  });
  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Fixtures
      </Typography>
      <CurrFixtures current_gw={current_gw} />
      <NextFixtures next_gw={next_gw} />
      <LinkModal to="home" />
    </Container>
  );
};

export default FixturesIndex;
