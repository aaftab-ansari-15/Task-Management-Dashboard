import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { changeComponent, setAuthComponent } from "../../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";

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
          dispatch(changeComponent("MyTasksListOldUi"));
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
  };

  const handleSignUpInsteadClick = () => {
    dispatch(setAuthComponent("SignUp"));
  };

  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Welcome back
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
        Please Enter your Details
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Email
      </Typography>
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
      <Typography variant="h6" sx={{ mt: 2 }}>
        Password
      </Typography>
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
      <Button
        onClick={() => {
          handleLoginClick();
        }}
        color="success"
        fullWidth
        disabled={!isFormValid}
        sx={{
          mt: 2,
          color: "white",
          backgroundColor: "#9f5aaf", // Enabled state background color
          "&:hover": {
            backgroundColor: "#8a4d96", // Darker shade on hover (when enabled)
          },
          "&.Mui-disabled": {
            color: "#ebf5ea",
            backgroundColor: "#9f5aaf",
          },
        }}
      >
        <Typography variant="h6">Login</Typography>
      </Button>
      <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
        Don't Have an account?{" "}
        <Typography
          component="span"
          variant="h6"
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleSignUpInsteadClick}
        >
          Sign up instead
        </Typography>
      </Typography>
      <Button
        onClick={() => {
          handleLoginClick();
        }}
        color="black"
        disabled={!isFormValid}
      ></Button>
    </>
  );
};

export default LoginDialog;
