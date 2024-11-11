import "./App.css";
import Box from "@mui/material/Box";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SignUpDialog from "./component/SignUp";
import LoginDialog from "./component/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.modal.darkMode);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Box>
          <Navbar />
          <Home />
        </Box>
        <SignUpDialog />
        <LoginDialog />
      </div>
    </ThemeProvider>
  );
}

export default App;
