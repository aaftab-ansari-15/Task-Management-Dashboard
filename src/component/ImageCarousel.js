import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import image1 from "../assets/pexels-pixabay-36478.jpg";
import image2 from "../assets/bsr-focus-nature-hero.jpg";
import image3 from "../assets/road-1072821_640.jpg";
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
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Slider {...settings}>
          <div>
            <img
              src={image1}
              alt="Image 1"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Image 2"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Image 3"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        </Slider>
      </Box>
    </center>
  );
};

export default ImageCarousel;
