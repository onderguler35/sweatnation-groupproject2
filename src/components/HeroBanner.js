import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      p="20px"
    >
      <Typography color="#c70039" fontWeight="600" fontSize="26px">
        Sweat Nation
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat Now, Shine Later, <br />
        And Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="outline"
        href="#exercises"
        sx={{
          padding: "10px",
          color: "#C70039",
          borderColor: "#c70039",
          color: "#c70039",
          backgroundColor: "c70039",
          "&:hover": {
            color: "#c70039",
            borderColor: "#c70039",
          },
        }}
      >
        Explore Exercises
      </Button>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
      <Typography
        fontWeight={600}
        color="#c70039"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
