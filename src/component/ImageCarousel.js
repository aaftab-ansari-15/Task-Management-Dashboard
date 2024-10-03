import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import image1 from "../assets/Task-Management-Advantages-scaled.jpg";
import image2 from "../assets/task-management-tips.webp";
import image3 from "../assets/what-is-task-management.png";
const ImageCarousel = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
  };

  return (
    <center>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Slider {...settings}>
          <div>
            <img
              src={image1}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
          <div>
            <img
              src={image2}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
          <div>
            <img
              src={image3}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        </Slider>
      </Box>
    </center>
  );
};

export default ImageCarousel;
