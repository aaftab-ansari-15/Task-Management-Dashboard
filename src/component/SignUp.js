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

const SignUpDialog = ({ open, onClose }) => {
  const [SignUpData, setSignUpData] = useState(initialData);

  const handleChange = (e) => {
    setSignUpData({ ...SignUpData, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(SignUpData);
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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="black">
          Cancel
        </Button>
        <Button onClick={handleClick} color="black">
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
