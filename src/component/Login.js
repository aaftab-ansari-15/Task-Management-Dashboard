// src/components/SignUpDialog.js
import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
const initialData = {
  email: "",
  password: "",
};
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!$%*?&])[A-Za-z\d@$$!%*?&]{6,}$/.test(
    password
  );
};
const LoginDialog = ({ open, onClose }) => {
  const [loginData, setLoginData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const isFormValid =
    !errors.email && !errors.password && loginData.email && loginData.password;
  const handleChange = (e) => {
    console.log("coming");
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: validateEmail(value) ? "" : "Invalid email formate",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validatePassword(value)
            ? ""
            : "Invalid Password (include character, symbol and number).",
        });
        break;
      default:
        break;
    }
  };
  const handleLoginClick = () => {
    if (!errors.name && !errors.email && !errors.password) {
      console.log("Form submitted", loginData);
    } else {
      console.log("Form has errors");
    }
  };
  const handleCancelClick = () => {
    setLoginData(initialData);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.3)", // More transparent background
          backdropFilter: "blur(5px)", // Optional: Blur effect to make it stylish
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
            onClose();
            handleCancelClick();
          }}
          color="black"
        >
          Cancel
        </Button>
        <Button
          onClick={handleLoginClick}
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
