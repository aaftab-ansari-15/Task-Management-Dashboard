// src/components/SignUpDialog.js
import React, { useState } from "react"; // Import React and useState hook from React
import {
  Dialog, // Component for modal dialog
  DialogActions, // Container for action buttons in the dialog
  DialogContent, // Container for the main content of the dialog
  DialogTitle, // Title of the dialog
  Button, // Material-UI button component
  TextField, // Material-UI text field component
} from "@mui/material"; // Import Material-UI components

// Initial state for login data
const initialData = {
  email: "",
  password: "",
};

// Email validation function using regex
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Check for valid email format
};

// Password validation function using regex
const validatePassword = (password) => {
  // Check for at least one letter, one number, one special character, and minimum length of 6
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!$%*?&])[A-Za-z\d@$$!%*?&]{6,}$/.test(
    password
  );
};

// Main LoginDialog component
const LoginDialog = ({ open, onClose }) => {
  const [loginData, setLoginData] = useState(initialData); // State for holding login data
  const [errors, setErrors] = useState(initialData); // State for holding validation errors

  // Check if the form is valid
  const isFormValid =
    !errors.email && !errors.password && loginData.email && loginData.password;

  // Handle input changes in text fields
  const handleChange = (e) => {
    console.log("coming"); // Log when input changes
    const { name, value } = e.target; // Destructure input name and value
    setLoginData({ ...loginData, [name]: value }); // Update loginData state with new input value
    switch (name) {
      case "email":
        // Validate email and set error if invalid
        setErrors({
          ...errors,
          email: validateEmail(value) ? "" : "Invalid email format",
        });
        break;
      case "password":
        // Validate password and set error if invalid
        setErrors({
          ...errors,
          password: validatePassword(value)
            ? ""
            : "Invalid Password (include character, symbol, and number).",
        });
        break;
      default:
        break; // No action for other cases
    }
  };

  // Handle login button click
  const handleLoginClick = () => {
    // Check if there are no errors before submitting
    if (!errors.name && !errors.email && !errors.password) {
      console.log("Form submitted", loginData); // Log submitted data
    } else {
      console.log("Form has errors"); // Log if form has errors
    }
    setLoginData(initialData); // Reset form data
  };

  // Handle cancel button click
  const handleCancelClick = () => {
    setLoginData(initialData); // Reset form data on cancel
  };

  return (
    <Dialog
      open={open} // Control dialog open state
      onClose={onClose} // Handle dialog close
      fullWidth // Make dialog full width
      maxWidth="sm" // Set max width to small
      PaperProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.3)", // More transparent background
          backdropFilter: "blur(5px)", // Optional: Blur effect to make it stylish
          boxShadow: "none", // Remove shadow
        },
      }}
    >
      <DialogTitle style={{ color: "#000" }}>Login</DialogTitle>{" "}
      {/* Title of the dialog */}
      <DialogContent style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
        {/* Main content of the dialog with input fields */}
        <TextField
          margin="dense" // Set margin style
          id="email" // Unique ID for the input
          name="email" // Input name for handling changes
          label="Email Address" // Input label
          type="email" // Input type
          fullWidth // Make input full width
          variant="outlined" // Set input variant
          value={loginData.email} // Controlled component value
          onChange={handleChange} // Handle input changes
          error={!!errors.email} // Show error if email has an error
          helperText={errors.email} // Display error message
        />
        <TextField
          margin="dense" // Set margin style
          id="password" // Unique ID for the input
          name="password" // Input name for handling changes
          label="Password" // Input label
          type="password" // Input type
          fullWidth // Make input full width
          variant="outlined" // Set input variant
          value={loginData.password} // Controlled component value
          onChange={handleChange} // Handle input changes
          error={!!errors.password} // Show error if password has an error
          helperText={errors.password} // Display error message
        />
      </DialogContent>
      <DialogActions>
        {/* Cancel button */}
        <Button
          onClick={() => {
            onClose(); // Close the dialog
            handleCancelClick(); // Reset form data on cancel
          }}
          color="black"
        >
          Cancel
        </Button>
        {/* Login button */}
        <Button
          onClick={() => {
            onClose(); // Close the dialog
            handleLoginClick(); // Handle login on button click
          }}
          color="black"
          disabled={!isFormValid} // Disable button if form is invalid
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog; // Export the LoginDialog component for use in other files
