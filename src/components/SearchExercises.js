// import React from "react";
import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { color } from "@mui/system";

const SearchExercises = () => {
  const [search, setSearch] = useState("exercises");

  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData();
    }
  };

  return (
    <Stack alignItems="center" mt="35px" justifyContent="center" p="20px">
      <Typography
        fontWeight={400}
        sx={{ fontSize: { lg: "38px", xs: "28px" } }}
        mb="25px"
        textAlign="center"
      >
        Fitness that fits your life.
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        mb="72px"
        width="100%"
        height="20%"
      >
        <TextField
          sx={{
            input: {
              fontWeight: "400",
              borderRadius: "4px",
              borderBlockColor: "#a437db",
            },
            width: { lg: "800px", xs: "350px" },
            borderRadius: "20px",
          }}
          height="76px"
          value={search}
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        <Button
          className="searchBtn"
          sx={{
            bgcolor: "#a437db",
            color: "#ffffff",
            textTransform: "none",
            width: { lg: "80px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "55px",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
