import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import image1 from "../../assets/asd1.webp";
import image2 from "../../assets/asd2.jpg";
const ImageCarousel = () => {
  return (
    <Slider
      style={{
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "inline-block" }}>
        <img src={image1} alt="" style={{ height: "900px", width: "100%" }} />
      </Box>
      <Box sx={{ display: "inline-block" }}>
        <img src={image2} alt="" style={{ height: "900px", width: "100%" }} />
      </Box>
    </Slider>
  );
};

export default ImageCarousel;
