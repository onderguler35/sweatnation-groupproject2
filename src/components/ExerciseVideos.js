import React from "react"; // importing React
import { Typography, Box, Stack } from "@mui/material"; // importing Typography, Box, and Stack from @mui/material
import Loader from "./Loader"; // importing Loader component

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // destructuring props
  if (!exerciseVideos.length) return <Loader />; // if exerciseVideos state is empty, return Loader component

  return (
    // returning the JSX
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map(
          (
            item,
            index // mapping through the exerciseVideos state and slicing the first 3 items
          ) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`} // linking to the video on youtube
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          )
        )}
      </Stack>
    </Box>
  );
};
export default ExerciseVideos; // exporting ExerciseVideos component
