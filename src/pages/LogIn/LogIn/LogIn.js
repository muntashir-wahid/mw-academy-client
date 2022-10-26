import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const LogIn = () => {
  const { logInHandler, signInWithGoogleHandler } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Login form
  const logInFormHandler = (event) => {
    event.preventDefault();

    // Get form data submited by user
    const logInform = event.target;
    const email = logInform.email.value;
    const password = logInform.password.value;

    // User login

    logInHandler(email, password)
      .then(() => {
        setError("");
        logInform.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Google Sign in
  const signInWithGoogle = () => {
    signInWithGoogleHandler()
      .then(() => {
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={logInFormHandler} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label">
              <p>
                New to this website?
                <Link
                  to="/register"
                  className="underline text-blue-500 font-medium"
                >
                  register
                </Link>
              </p>
            </label>
          </form>
          <div className="divider"></div>
          <div className="card-body py-0">
            <button
              onClick={signInWithGoogle}
              className="btn btn-outline btn-primary"
            >
              <FcGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
          <div className="divider my-1">OR</div>
          <div className="card-body pt-0">
            <button
              onClick={signInWithGoogle}
              className="btn btn-outline btn-primary"
            >
              <FaGithubSquare className="mr-2 text-black text-lg " />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
