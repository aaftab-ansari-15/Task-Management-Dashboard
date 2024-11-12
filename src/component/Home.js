import ImageCarousel from "./ImageCarousel";
import User from "./User";
import { useSelector } from "react-redux";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import TaskNotification from "./TaskNotification";
// Let us open our database

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div>{user.user && user.user.isLogin ? <User /> : <ImageCarousel />}</div>
      <AddTaskInUser />
      <UpdateTaskInUser />
      <TaskNotification />
    </>
  );
};

export default Home;
