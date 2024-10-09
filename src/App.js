import "./App.css";
import Box from "@mui/material/Box";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SignUpDialog from "./component/SignUp";
import LoginDialog from "./component/Login";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Home />
      </Box>
      <SignUpDialog />
      <LoginDialog />
    </div>
  );
}

export default App;
