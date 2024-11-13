import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { changeComponent, closeLoginModal } from "../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";

const initialData = {
  name: "",
  email: "",
  password: "",
  isLogin: false,
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!$%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
    password
  );
};

const LoginDialog = () => {
  const [loginData, setLoginData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const dispatch = useDispatch();
  const isLoginDialogOpen = useSelector((state) => state.modal.isLoginOpen);
  const allUser = useSelector((state) => state.allUser);

  const isFormValid =
    !errors.email && !errors.password && loginData.email && loginData.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: validateEmail(value) ? "" : "Invalid email format",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validatePassword(value)
            ? ""
            : "Invalid Password (include character, symbol, and number).",
        });
        break;
      default:
        break;
    }
  };

  const handleLoginClick = () => {
    if (!errors.name && !errors.email && !errors.password) {
      if (allUser && allUser.allUser.length > 0) {
        const findUser = allUser.allUser.find(
          (user) => loginData.email === user.email
        );

        if (
          findUser &&
          findUser.email &&
          findUser.password === loginData.password
        ) {
          const updatedLoginData = {
            ...loginData,
            isLogin: true,
            name: findUser.name,
          };
          dispatch(loginUser(updatedLoginData));
          dispatch(changeComponent("MyTasksListOldUi"))
          console.log("userLoggedIn", updatedLoginData);
        } else {
          console.log("email or password is incorrect");
        }
      } else {
        console.log("no data of user, signup instead");
      }
    } else {
      console.log("Form has errors");
    }
    setLoginData(initialData);
    dispatch(closeLoginModal());
  };

  const handleCancelClick = () => {
    setLoginData(initialData);
    dispatch(closeLoginModal());
  };

  return (
    <Dialog
      open={isLoginDialogOpen}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(5px)",
          boxShadow: "none",
        },
      }}
    >
      <DialogTitle style={{ color: "#000" }}>Login</DialogTitle>
      <DialogContent style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
        <TextField
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={loginData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          margin="dense"
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={loginData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleCancelClick();
          }}
          color="black"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleLoginClick();
          }}
          color="black"
          disabled={!isFormValid}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
