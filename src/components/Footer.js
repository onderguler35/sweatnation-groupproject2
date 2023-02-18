import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      sx={{
        fontFamily: "Roboto",
        fontWeight: "bold",
        textAlign: "center",
        color: "#791B16",
      }}
    >
      Bootcamp Group Project 2 &copy;2023 by Brave Devs
    </Typography>
  );
};

export default Footer;
