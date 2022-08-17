import React from "react";
import { Box, styled } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Modal = styled(Box)({
  dispay: "flex",
  position: "fixed",
  right: 0,
  bottom: 0,
});

const LinkButton = styled(Button)({
  color: "grey",
  backgroundColor: "black",
  margin: 2,
  bordeRadius: "10%",
});

const LinkModal = () => {
  const links = ["home", "fixtures", "stats"];
  const LinkBar = links.map((d) => {
    var linkText = d === "home" ? "" : d;
    return (
      <Link to={`/${linkText}`} key={d}>
        <LinkButton>{d}</LinkButton>
      </Link>
    );
  });

  return <Modal>{LinkBar}</Modal>;
};

export default LinkModal;
