// import React from "react";
import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { color } from "@mui/system";

import { exercisesOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );

      setBodyPart(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
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
              fontWeight: "600",
              border: "none",
              borderRadius: "4px",
              borderBlockColor: "#c70039",
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
          className="search-btn"
          sx={{
            bgcolor: "#c70039",
            color: "#ffffff",
            textTransform: "none",
            width: { lg: "180px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "55px",

            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
