import React, { useEffect, useState } from "react"; // importing useState and useEffect hooks from React
import { Box, Button, Stack, TextField, Typography } from "@mui/material"; // importing Stack component from Material UI and TextField component from MUI and Typography component from MUI

import { exerciseOptions, fetchData } from "../utils/fetchData"; // importing fetchData function and exerciseOptions
import HorizontalScrollbar from "./HorizontalScrollBar"; // importing HorizontalScrollBar component

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // destructuring setExercises, bodyPart, and setBodyPart props
  const [search, setSearch] = useState(""); // setting search state to an empty string
  const [bodyParts, setBodyParts] = useState([]); // setting bodyParts state to an empty array

  useEffect(() => {
    // useEffect hook that will run when the component mounts and will fetch the exercises data from the API
    const fetchExercisesData = async () => {
      // async function that will fetch the exercises data from the API
      const bodyPartsData = await fetchData(
        // setting bodyPartsData variable to the data that is fetched from the API
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList", // API URL
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]); // setting the bodyParts state to an array that contains the string "all" and the bodyPartsData variable
    };

    fetchExercisesData(); // calling the fetchExercisesData function
  }, []);

  const handleSearch = async () => {
    // handleSearch function that will search for exercises
    if (search) {
      // if the search state is not an empty string then the exercises state will be set to the exercises that match the search state
      const exercisesData = await fetchData(
        // setting exercisesData variable to the data that is fetched from the API
        "https://exercisedb.p.rapidapi.com/exercises", // API URL
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        // setting searchedExercises variable to the exercisesData variable that is filtered
        (
          item // filtering through the exercisesData variable
        ) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" }); // scrolling to the exercises section

      setSearch(""); // setting the search state to an empty string
      setExercises(searchedExercises); // setting the exercises state to the searchedExercises variable
    }
  };

  return (
    // returning the JSX
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
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
          value={search} // setting the value of the TextField to the search state
          onChange={(e) => setSearch(e.target.value.toLowerCase())} // setting the search state to the value of the TextField
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#c70039",
            color: "#ffffff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch} // calling the handleSearch function
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar // HorizontalScrollBar component
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises; // exporting SearchExercises component
