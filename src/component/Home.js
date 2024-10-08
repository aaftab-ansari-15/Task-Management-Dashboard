import React, { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import User from "./User";
import { useSelector } from "react-redux";
// Let us open our database

const Home = () => {
  const userData = useSelector(
    (state) => state.user,
    (prevUser, nextUser) => {
      return prevUser === nextUser;
    }
  );
  console.log(userData, "hello");
  return (
    <div>{userData && userData.isLogin ? <User /> : <ImageCarousel />}</div>
  );
};

export default Home;
