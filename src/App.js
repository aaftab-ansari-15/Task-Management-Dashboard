import "./App.css";
import { useSelector } from "react-redux";
import MainLayout from "./component/new-ui/MainLayout";
import AuthModal from "./component/Authentication/AuthModal";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  // Get the dark mode state from Redux
  const darkMode = useSelector((state) => state.modal.darkMode);
  const user = useSelector((state) => state.user);

  // Create a theme with custom colors based on darkMode
const theme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: darkMode ? '#fff233' : '#fff233', // Adjust the yellow hex code as needed
      dark: darkMode ? '#FFA000' : '#FFA000', //dark yellow
      light: darkMode ? '#fffabf' : '#fffabf',
      light1: darkMode ? "#fdf265" : "#fdf265",
    
    },
    secondary: {
      
      main: darkMode ? '#007BFF' : '#007BFF',
      dark: darkMode ? '#0057B8' : '#0057B8',
      light: darkMode ? '#B3D1FF' : '#B3D1FF',
    },
    background: {
      
      default: darkMode ? '#fffee5' : '#fffee5', //light yellow
      // default: darkMode ? '#121212' : '#F0F0F0', // white
      paper: darkMode ? '#242424' : '#FFF', // white
    },
    text: {
      primary: darkMode ? '#FFF' : '#000',
      secondary: darkMode ? '#2a2a2a' : '#575757',
    },
  },
  // shadows: darkMode ? [] : ['0px 2px 4px rgba(0, 0, 0, 0.1)'], // Conditional shadows
});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{maxHeight:"100vh", maxWidth:"100vw", height:"100vh" }}>
        {user.user && user.user.isLogin ? <MainLayout /> : <AuthModal />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
