import "./App.css";
import { useSelector } from "react-redux";
import MainLayout from "./component/layout/MainLayout";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./style/theme";
import AuthLayout from "./component/authentication/AuthLayout";
const App = () => {
  const curretUser = useSelector((state) => state.users.curretUser);
  const darkMode = useSelector((state) => state.ui.isDarkMode);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {curretUser && curretUser.isLogin ? <MainLayout /> : <AuthLayout />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
