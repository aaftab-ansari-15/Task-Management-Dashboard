import "./App.css";
import Box from "@mui/material/Box";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SignUpDialog from "./component/SignUp";
import LoginDialog from "./component/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

const App = () => {
  // Get the dark mode state from Redux
  const darkMode = useSelector((state) => state.modal.darkMode);

  // Create a theme with custom colors based on darkMode
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", 
      primary: {
        main: darkMode ? "#6200EE" : "#6200EE", // Indigo in both modes
      },
      secondary: {
        main: darkMode ? "#03DAC6" : "#03DAC6", // Teal in both modes
      },
      backgroundOposite:{
        paper: darkMode ? "#f9f9f9" : "#090909",
      },
      background: {
        default: darkMode ? "#121212" : "#FFFFFF", // Dark background in dark mode, white background in light mode
        paper: darkMode ? "#090909" : "#f9f9f9", // Darker paper in dark mode, light paper in light mode
      },
      text: {
        primary: darkMode ? "#E0E0E0" : "#000000", // Light gray text in dark mode, black text in light mode
        secondary: darkMode ? "#B0B0B0" : "#616161", // Gray text in dark mode, medium gray in light mode
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{}}>
          <Navbar />
          <Home/>
        </Box>
        <SignUpDialog />
        <LoginDialog />
      </div>
    </ThemeProvider>
  );
};

export default App;
