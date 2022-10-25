import React from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const backgroundUrl =
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  const navigate = useNavigate();
  const navigateToPackagesHandler = () => {
    navigate("/packages");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Programmers</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={navigateToPackagesHandler}
            className="btn btn-primary"
          >
            All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
