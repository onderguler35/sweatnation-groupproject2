import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/logos/logo-animate.gif";

const Navbar = () => (
  <Stack
    display="flex"
    direction="row"
    justifyContent="space-evenly"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "240px",
          height: "240px",
          margin: "0px",
          alignItems: "center",
        }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Roboto"
      fontSize="24px"
      alignItems="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#761519",
          borderBottom: "3px solid #c70039",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#761519", borderBottom:"3px solid #c70039" }}>
        Exercises
      </a>
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "#761519",
          borderBottom: "3px solid #c70039",
        }}
      >
        Contact
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
