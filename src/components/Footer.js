import React from "react"; // importing React
import { Typography } from "@mui/material"; // importing MUI Typography component

const Footer = () => {
  // creating Footer component
  return (
    // returning the JSX
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

export default Footer; // exporting Footer component
