import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = styled(Button)({
  color: "grey",
  backgroundColor: "black",
  position: "fixed",
  right: 0,
  bottom: 0,
  margin: 2,
});

const LinkModal = ({ to }) => {
  const linkText = to === "home" ? "" : to;

  return (
    <Link to={`/${linkText}`}>
      <LinkButton>{to}</LinkButton>
    </Link>
  );
};

export default LinkModal;
