import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all"); // This is the state that is being passed down to the SearchExercises component. It is being set to "all" by default.
  const [exercises, setExercises] = useState([]); // This is the state that is being passed down to the Exercises component. It is being set to an empty array by default.
  return (
    <Box>
      <HeroBanner />
      <SearchExercises // This is the component that is being rendered on the Home page.
        setExercises={setExercises} // This is the prop that is being passed down to the SearchExercises component. It is being set to the setExercises state.
        bodyPart={bodyPart} // This is the prop that is being passed down to the SearchExercises component. It is being set to the bodyPart state.
        setBodyPart={setBodyPart}
      />{" "}
      <Exercises
        exercises={exercises} // This is the prop that is being passed down to the Exercises component. It is being set to the exercises state.
        setExercises={setExercises} // This is the prop that is being passed down to the Exercises component. It is being set to the setExercises state.
        bodyPart={bodyPart} // This is the prop that is being passed down to the Exercises component. It is being set to the bodyPart state.
      />
    </Box>
  );
};

export default Home;
