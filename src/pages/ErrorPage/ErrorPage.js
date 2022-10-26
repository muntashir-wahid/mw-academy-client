import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateToHomeHandler = () => {
    navigate("/home");
  };
  return (
    <main className="flex flex-col gap-5 text-5xl text-center justify-center items-center min-h-screen">
      <h2>Page Not Found</h2>
      <button onClick={navigateToHomeHandler} className="btn btn-error">
        Go to Home
      </button>
    </main>
  );
};

export default ErrorPage;
