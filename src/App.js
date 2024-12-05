import "./App.css";
import { useSelector } from "react-redux";
import MainLayout from "./component/layout/MainLayout";
import AuthModal from "./component/authentication/AuthModal";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./style/theme";
const App = () => {
  const curretUser = useSelector((state) => state.currentUser.curretUser);
  const darkMode = useSelector((state) => state.ui.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {curretUser && curretUser.isLogin ? <MainLayout /> : <AuthModal />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
