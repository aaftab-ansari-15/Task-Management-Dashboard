// src/components/SignUpDialog.js
import React, { useState } from "react"; // Import React and useState
import {
  Dialog, // Modal dialog component
  DialogActions, // Container for action buttons
  DialogContent, // Container for main content
  DialogTitle, // Title of the dialog
  Button, // Button component
  TextField, // Input field component
} from "@mui/material"; // Import Material-UI components
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
// Initial state for sign-up data
const initialData = {
  name: "",
  email: "",
  password: "",
};

// Function to validate email format
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Function to validate password strength
const validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!$%*?&])[A-Za-z\d@$!%$*?&]{6,}$/.test(
    password
  );
};

// Main SignUpDialog component
const SignUpDialog = ({ open, onClose }) => {
  const [SignUpData, setSignUpData] = useState(initialData); // State for sign-up data
  const [errors, setErrors] = useState(initialData); // State for validation errors
  const dispatch = useDispatch();
  // Handle input changes in text fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Get input name and value
    setSignUpData({ ...SignUpData, [name]: value }); // Update SignUpData state
    // Validate input based on the field name
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

  // Handle sign-up button click
  const handleSignUpClick = () => {
    if (!errors.name && !errors.email && !errors.password) {
      dispatch(addUser(SignUpData));
      console.log("Form submitted", SignUpData); // Log submitted data
    } else {
      console.log("Form has errors"); // Log if there are errors
    }
    setSignUpData(initialData); // Reset form data
  };

  // Handle cancel button click
  const handleCancelClick = () => {
    setSignUpData(initialData); // Reset form data on cancel
  };

  // Check if the form is valid
  const isFormValid =
    !errors.name &&
    !errors.email &&
    !errors.password &&
    SignUpData.name &&
    SignUpData.email &&
    SignUpData.password;

  return (
    <Dialog
      open={open} // Control dialog visibility
      onClose={onClose} // Handle dialog close
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Dialog background style
          backdropFilter: "blur(5px)", // Optional blur effect
          boxShadow: "none", // Remove shadow
        },
      }}
    >
      <DialogTitle style={{ color: "#000" }}>Sign Up</DialogTitle>{" "}
      {/* Title of the dialog */}
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
          onChange={handleChange} // Handle input changes
          error={!!errors.name} // Show error if present
          helperText={errors.name} // Display error message
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
          onChange={handleChange} // Handle input changes
          error={!!errors.email} // Show error if present
          helperText={errors.email} // Display error message
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
          onChange={handleChange} // Handle input changes
          error={!!errors.password} // Show error if present
          helperText={errors.password} // Display error message
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose(); // Close the dialog
            handleCancelClick(); // Reset form on cancel
          }}
          color="black"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleSignUpClick(); // Handle sign-up on button click
            onClose(); // Close the dialog
          }}
          color="black"
          disabled={!isFormValid} // Disable button if form is invalid
        >
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpDialog; // Export the component
