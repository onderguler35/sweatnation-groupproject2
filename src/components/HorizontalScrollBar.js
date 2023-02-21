import React, { useContext } from "react"; // importing React
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"; // importing ScrollMenu and VisibilityContext from react-horizontal-scrolling-menu
import { Box, Typography } from "@mui/material"; // importing Box and Typography components from MUI

import ExerciseCard from "./ExerciseCard"; // importing ExerciseCard component
import BodyPart from "./BodyPart"; // importing BodyPart component
import RightArrowIcon from "../assets/icons/right-arrow.png"; // importing right-arrow icon
import LeftArrowIcon from "../assets/icons/left-arrow.png"; // importing left-arrow icon

const LeftArrow = () => {
  // creating LeftArrow component
  const { scrollPrev } = useContext(VisibilityContext); // destructuring scrollPrev from VisibilityContext

  return (
    // returning the JSX
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  // creating RightArrow component
  const { scrollNext } = useContext(VisibilityContext);

  return (
    // returning the JSX
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = (
  { data, bodyParts, setBodyPart, bodyPart } // creating HorizontalScrollbar component
) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map(
      (
        item // mapping through data
      ) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? ( // if bodyParts is true, return BodyPart component
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      )
    )}
  </ScrollMenu>
);

export default HorizontalScrollbar; // exporting HorizontalScrollbar component
