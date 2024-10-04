import "./App.css";
import Box from "@mui/material/Box";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SignUpDialog from "./component/SignUp";
import LoginDialog from "./component/Login";
import { useSelector, useDispatch } from "react-redux";
import {
  openSignUpModal,
  closeSignUpModal,
  openLoginModal,
  closeLoginModal,
} from "./redux/modalSlice";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const isSignUpDialogOpen = useSelector((state) => state.modal.isSignUpOpen);
  const isLoginDialogOpen = useSelector((state) => state.modal.isLoginOpen);

  const handleSignUpClick = () => {
    console.log("clicked");
    if (!isLoginDialogOpen) {
      dispatch(openSignUpModal());
    }
  };
  const handleLoginClick = () => {
    console.log("clicked");
    if (!isSignUpDialogOpen) {
      dispatch(openLoginModal());
    }
  };

  const handleSignUpDialogClose = () => {
    dispatch(closeSignUpModal());
  };
  const handleLoginDialogClose = () => {
    dispatch(closeLoginModal());
  };

  return (
    <div className="App">
      <Box>
        <Navbar
          handleSignUpClick={handleSignUpClick}
          handleLoginClick={handleLoginClick}
        />
        <Home />
      </Box>
      {/* pop up forms/ dialog */}
      <SignUpDialog
        open={isSignUpDialogOpen}
        onClose={handleSignUpDialogClose}
      />
      <LoginDialog open={isLoginDialogOpen} onClose={handleLoginDialogClose} />
    </div>
  );
}

export default App;
