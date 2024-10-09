import ImageCarousel from "./ImageCarousel";
import User from "./User";
import { useSelector } from "react-redux";
// Let us open our database

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>{user.user && user.user.isLogin ? <User /> : <ImageCarousel />}</div>
  );
};

export default Home;
