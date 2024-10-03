import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
// Let us open our database

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);
  return (
    <div>{userData && userData.isLogin ? <User /> : <ImageCarousel />}</div>
  );
};

export default Home;
