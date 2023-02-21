import React from "react"; // importing React
import { Stack } from "@mui/material"; // importing Stack component from MUI
import { InfinitySpin } from "react-loader-spinner"; // importing InfinitySpin from react-loader-spinner

const Loader = () => {
  // creating Loader component
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <InfinitySpin color="grey" />
  </Stack>;
};

export default Loader; // exporting Loader component
