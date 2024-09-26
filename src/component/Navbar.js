import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice.js";
export default function Navbar({ handleSignUpClick, handleLoginClick }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {/* <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button> */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#32383E", color: "white" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task Management Dashboard
            </Typography>
            <div>
              <Button
                variant="solid"
                color="inherit"
                onClick={handleSignUpClick}
              >
                SignUp
              </Button>
              <Button
                variant="solid"
                color="inherit"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
