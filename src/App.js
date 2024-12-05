import "./App.css";
import { useSelector } from "react-redux";
import MainLayout from "./component/layout/MainLayout";
import AuthModal from "./component/authentication/AuthModal";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./style/theme";
const App = () => {
  const user = useSelector((state) => state.currentUser);
  const darkMode = useSelector((state) => state.ui.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {user.user && user.user.isLogin ? <MainLayout /> : <AuthModal />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
