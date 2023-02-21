import React, { useEffect, useState } from "react"; // importing useState and useEffect hooks from React
import { useParams } from "react-router-dom"; // importing useParams hook from React Router DOM
import { Box } from "@mui/material"; // importing Box component from Material UI

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData"; // importing fetchData function and exerciseOptions and youtubeOptions variables
import Detail from "../components/Detail"; // importing Detail component
import ExerciseVideos from "../components/ExerciseVideos"; // importing ExerciseVideos component
import SimilarExercises from "../components/SimilarExercises"; // importing SimilarExercises component

const ExerciseDetail = () => {
  // creating ExerciseDetail component
  const [exerciseDetail, setExerciseDetail] = useState({}); // setting exerciseDetail state to an empty object
  const [exerciseVideos, setExerciseVideos] = useState([]); // setting exerciseVideos state to an empty array
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]); // setting targetMuscleExercises state to an empty array
  const [equipmentExercises, setEquipmentExercises] = useState([]); // setting equipmentExercises state to an empty array
  const { id } = useParams(); // destructuring id from useParams hook

  useEffect(() => {
    // useEffect hook that will run when the component mounts and will fetch the exercises data from the API
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolling to the top of the page

    const fetchExercisesData = async () => {
      // async function that will fetch the exercises data from the API
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"; // API URL
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com"; // API URL

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      ); // setting exerciseDetailData variable to the data that is fetched from the API
      setExerciseDetail(exerciseDetailData); // setting exerciseDetail state to exerciseDetailData

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      ); // setting exerciseVideosData variable to the data that is fetched from the API
      setExerciseVideos(exerciseVideosData.contents); // setting exerciseVideos state to exerciseVideosData

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      ); // setting targetMuscleExercisesData variable to the data that is fetched from the API
      setTargetMuscleExercises(targetMuscleExercisesData); // setting targetMuscleExercises state to targetMuscleExercisesData

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      ); // setting equimentExercisesData variable to the data that is fetched from the API
      setEquipmentExercises(equimentExercisesData); // setting equipmentExercises state to equimentExercisesData
    };

    fetchExercisesData(); // calling fetchExercisesData function
  }, [id]); // useEffect hook dependency array

  if (!exerciseDetail) return <div>No Data</div>; // if exerciseDetail state is empty, return No Data

  return (
    // returning the JSX
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail; // exporting ExerciseDetail component
