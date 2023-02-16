import React from "react";
import { Box } from "@mui/material";


import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({data, BodyPart, setBodyPart}) =>{
    return (
        <div>
            {data.map((item) => <Box 
            key={item.Id || item}
            itemId={item.Id || item}
            title={item.id || item}
            m="0 40px"
            >

<BodyPart item={item} bodyPart={BodyPart} setBodyParts= {setBodyPart}/>
        </Box>
        )}  </div>
  )
};

export default HorizontalScrollbar;
