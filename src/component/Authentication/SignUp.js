import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/usersSlice";
import { loginUser } from "../../redux/currentUserSlice";
import { changeComponent, setAuthComponent } from "../../redux/uiSlice";
import defaultTaskData from "../../Data/defaultTasks.json";
import { DASHBOARD } from "../../constants/componentsName.";
import { addGeneratedTasks } from "../../redux/tasksSlice";

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
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!$#%*?&])[A-Za-z\d@$!%#*?&]{6,}$/.test(
    password
  );
};

const SignUpDialog = () => {
  const [SignUpData, setSignUpData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const isSignUpDialogOpen = useSelector((state) => state.ui.isSignUpOpen);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const isFormValid =
    !errors.name &&
    !errors.email &&
    !errors.password &&
    SignUpData.name &&
    SignUpData.email &&
    SignUpData.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
    switch (name) {
      case "name":
        setErrors({
          ...errors,
          name: value.length > 4 ? "" : "Name must be at least 5 characters.",
        });
        break;
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

  const handleSignUpClick = () => {
    if (!errors.name && !errors.email && !errors.password) {
      if (users && users.users) {
        const findUser = users.users.find(
          (user) => SignUpData.email === user.email
        );

        if (findUser && findUser.email) {
          console.log("Email already exist, Login instead");
        } else {
          const updatedSignUpData = { ...SignUpData, isLogin: true };
          dispatch(addUser(updatedSignUpData));
          dispatch(loginUser(updatedSignUpData));
          handleGenerateTaskClick(updatedSignUpData); // Genrate tasks for new user
          dispatch(changeComponent(DASHBOARD));
        }
      }
    } else {
      console.log("Form has errors");
    }
    setSignUpData(initialData);
  };
  const handleGenerateTaskClick = (user) => {
    const setUsersDefaultTasks = defaultTaskData.map((task) => ({
      ...task,
      userId: user.email,
    }));
    dispatch(addGeneratedTasks(setUsersDefaultTasks));
  };
  const handleLoginInsteadClick = () => {
    dispatch(setAuthComponent("Login"));
  };

  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Register
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
        Please Enter your Details
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        User Name
      </Typography>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        name="name"
        label="Name"
        type="text"
        variant="outlined"
        color="info"
        fullWidth
        value={SignUpData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />
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
        color="info"
        value={SignUpData.email}
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
        color="info"
        value={SignUpData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
      />
      <Button
        onClick={() => {
          handleSignUpClick();
        }}
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
        <Typography variant="h6">Sign Up</Typography>
      </Button>
      <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
        Have an account?{" "}
        <Typography
          component="span"
          variant="h6"
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleLoginInsteadClick}
        >
          Login instead
        </Typography>
      </Typography>
    </>
  );
};

export default SignUpDialog;
