import React from "react";
import { useDispatch } from "react-redux";
import { changeComponent } from "../../../redux/uiSlice";
import { DASHBOARD } from "../../../constants/componentsName.";
const ErrorPage = () => {
  const dispatch = useDispatch();
  const handleGoBack = () => {
    dispatch(changeComponent(DASHBOARD));
  };

  return (
    <div className="error-container">
      <h1 className="error-title">Oops! Page Not Found</h1>
      <p className="error-message">
        We couldn't find the page you're looking for. It might have been moved
        or doesn't exist.
      </p>
      <button className="error-button" onClick={handleGoBack}>Go to Dashboard</button>
    </div>
  );
};

export default ErrorPage;
