import React from "react";
import "../../../style/error-page.css"
import { useDispatch } from "react-redux";
import { changeComponent } from "../../../redux/modalSlice";
import { DASHBOARD } from "../../../constants/componentsName.";
const ErrorPage = () => {
    const dispatch = useDispatch();
  const handleGoBack = () => {
    dispatch(changeComponent(DASHBOARD)); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Page Not Found</h1>
      <p style={styles.message}>
        We couldn't find the page you're looking for. It might have been moved
        or doesn't exist.
      </p>
      <button style={styles.button} onClick={handleGoBack}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default ErrorPage;
const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    color: "#333",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "2rem auto",
    maxWidth: "600px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#e63946",
  },
  message: {
    fontSize: "1rem",
    margin: "1rem 0",
    color: "#555",
  },
  button: {
    backgroundColor: "#008f25",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
};
