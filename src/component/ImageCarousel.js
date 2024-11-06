import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import image1 from "../assets/Task-Management-Advantages-scaled.jpg";
import image2 from "../assets/task-management-tips.webp";
import image3 from "../assets/what-is-task-management.png";
const ImageCarousel = () => {
  return (
    <center>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          width: "100vw", // Full viewport width
          marginTop: "50px",
        }}
      >
        <Slider style={{ width: "100%" }}>
          <Box sx={{ display: "inline-block" }}>
            <img
              src={image1}
              alt=""
              style={{ height: "80vh", width: "60vw", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ display: "inline-block" }}>
            <img
              src={image2}
              alt=""
              style={{ height: "80vh", width: "60vw", objectFit: "cover" }}
            />
          </Box>
        </Slider>
      </Box>
    </center>
  );
};

export default ImageCarousel;
