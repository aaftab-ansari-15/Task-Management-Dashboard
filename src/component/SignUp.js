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
  name: "",
  email: "",
  password: "",
};
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
    password
  );
};

const SignUpDialog = ({ open, onClose }) => {
  const [SignUpData, setSignUpData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

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
          email: validateEmail(value) ? "" : "Invalid email formate", 
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validatePassword(value) ? "" : "Invalid Password (include charachter, symbol and number)."
        });
        break;
      default:
        break;
    }
  };
  const handleClick = () => {
    if (!errors.name && !errors.email && !errors.password) {
      console.log("Form submitted", SignUpData);
    } else {
      console.log("Form has errors");
    }
  };
  const isFormValid = !errors.name && !errors.email && !errors.password && 
                      SignUpData.name && SignUpData.email && SignUpData.password;
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
        <Button onClick={onClose} color="black">
          Cancel
        </Button>
        <Button onClick={handleClick} color="black" disabled={!isFormValid}>
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
