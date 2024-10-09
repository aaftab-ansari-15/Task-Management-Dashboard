import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/allUserSlice";
import { loginUser } from "../redux/userSlice";
import { closeSignUpModal } from "../redux/modalSlice";

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

const SignUpDialog = () => {
  const [SignUpData, setSignUpData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const isSignUpDialogOpen = useSelector((state) => state.modal.isSignUpOpen);
  const allUser = useSelector((state) => state.allUser);
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
      if (allUser && allUser.allUser) {
        const findUser = allUser.allUser.find(
          (user) => SignUpData.email === user.email
        );

        if (findUser && findUser.email) {
          console.log("Email already exist, Login instead");
        } else {
          const updatedSignUpData = { ...SignUpData, isLogin: true };
          dispatch(addUser(updatedSignUpData));
          dispatch(loginUser(updatedSignUpData));
        }
      }
    } else {
      console.log("Form has errors");
    }
    setSignUpData(initialData);
    dispatch(closeSignUpModal());
  };

  const handleCancelClick = () => {
    setSignUpData(initialData);
    dispatch(closeSignUpModal());
  };

  return (
    <Dialog
      open={isSignUpDialogOpen}
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
      <DialogTitle style={{ color: "#000" }}>Sign Up</DialogTitle>
      <DialogContent style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={SignUpData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={SignUpData.email}
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
          value={SignUpData.password}
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
            handleSignUpClick();
          }}
          color="black"
          disabled={!isFormValid}
        >
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
