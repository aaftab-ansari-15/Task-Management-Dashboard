import "./App.css";
import { useState } from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SignUpDialog from "./component/SignUp";
import LoginDialog from "./component/Login";

function App() {
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

  const handleSignUpClick = () => {
    console.log("clicked");
    if (!isLoginDialogOpen) {
      setSignUpDialogOpen(true);
    }
  };
  const handleLoginClick = () => {
    console.log("clicked");
    if (!isSignUpDialogOpen) {
      setLoginDialogOpen(true);
    }
  };

  const handleSignUpDialogClose = () => {
    setSignUpDialogOpen(false);
  };
  const handleLoginDialogClose = () => {
    setLoginDialogOpen(false);
  };

  return (
    <div className="App">
      <Navbar
        handleSignUpClick={handleSignUpClick}
        handleLoginClick={handleLoginClick}
      />
      <Home />
      <SignUpDialog
        open={isSignUpDialogOpen}
        onClose={handleSignUpDialogClose}
      />
      <LoginDialog open={isLoginDialogOpen} onClose={handleLoginDialogClose} />
    </div>
  );
}

export default App;
