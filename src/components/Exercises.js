import React, { useEffect, useState } from "react"; // importing useState and useEffect hooks from React
import Pagination from "@mui/material/Pagination"; // importing Pagination component from Material UI
import { Box, Stack, Typography } from "@mui/material"; // importing Stack component from Material UI

import { exerciseOptions, fetchData } from "../utils/fetchData"; // importing fetchData function
import ExerciseCard from "./ExerciseCard"; // importing ExerciseCard component
import Loader from "./Loader"; // importing Loader component

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // destructuring exercises, setExercises, and bodyPart props
  const [currentPage, setCurrentPage] = useState(1); // setting currentPage state to 1
  const [exercisesPerPage] = useState(6); // setting exercisesPerPage state to 6

  useEffect(() => {
    // useEffect hook that will run when the bodyPart state changes and will fetch the exercises data from the API
    const fetchExercisesData = async () => {
      // async function that will fetch the exercises data from the API
      let exercisesData = []; // setting exercisesData variable to an empty array

      if (bodyPart === "all") {
        // if the bodyPart state is equal to "all" then the exercisesData variable will be set to the data that is fetched from the API
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises", // API URL
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          // if the bodyPart state is not equal to "all" then the exercisesData variable will be set to the data that is fetched from the API
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, // API URL
          exerciseOptions
        );
      }

      setExercises(exercisesData); // setting the exercises state to the exercisesData variable
    };

    fetchExercisesData(); // calling the fetchExercisesData function
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage; // setting indexOfLastExercise variable to the currentPage state multiplied by the exercisesPerPage state
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // setting indexOfFirstExercise variable to the indexOfLastExercise variable minus the exercisesPerPage state
  const currentExercises = exercises.slice(
    // setting currentExercises variable to the exercises state sliced from the indexOfFirstExercise variable to the indexOfLastExercise variable
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    // paginate function that will set the currentPage state to the value that is passed in
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" }); // window will scroll to the top of the page
  };

  if (!currentExercises.length) return <Loader />; // if the currentExercises variable is an empty array then the Loader component will be rendered

  return (
    // returning the JSX
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises; // exporting Exercises component
