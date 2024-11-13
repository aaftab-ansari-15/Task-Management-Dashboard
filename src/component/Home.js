import ImageCarousel from "./ImageCarousel";
import User from "./User";
import { useSelector } from "react-redux";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import TaskNotification from "./TaskNotification";
import { Box } from "@mui/material";
// Let us open our database

const Home = () => {
  const user = useSelector((state) => state.user);
  // const
  return (
    <>
      <Box sx={{ bgcolor: "background.paper", color: "text.primary" }}>
        {user.user && user.user.isLogin ? <User /> : <ImageCarousel />}
      </Box>
    </>
  );
};

export default Home;
