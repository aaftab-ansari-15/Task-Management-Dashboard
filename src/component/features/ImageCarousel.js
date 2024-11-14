import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import image1 from "../../assets/asd1.webp";
import image2 from "../../assets/asd2.jpg";
const ImageCarousel = () => {
  return (<>
    <img src={image1} alt="" style={{ height: "100%", width: "100%" }} />
    {/* <img src={image2} alt="" style={{ height: "100%", width: "100%" }} /> */}
    </>// <Slider
    //   style={{
    //     overflow: "hidden",
    //   }}
    // >
    // </Slider>
  );
};

export default ImageCarousel;
