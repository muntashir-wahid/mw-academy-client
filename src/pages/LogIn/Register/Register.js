import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
// import { AuthContext } from "../../../context/AuthProvider";

const Register = () => {
  // Hooks
  // const {
  //   createUserHandler,
  //   signInWithGoogleHandler,
  //   updateProfileHandler,
  //   setIsLoading,
  // } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isAccepted, setIsAaccepted] = useState(false);
  const checkedTermsRef = useRef();

  // Check Button change handler
  const checkedTermsHandler = () => {
    setIsAaccepted(checkedTermsRef.current.checked);
  };

  // Registration from
  const registerFormHandler = (event) => {
    event.preventDefault();

    // Get form data submited by user
    const registerForm = event.target;
    const displayName = registerForm.fullname.value;
    const photoURL = registerForm.photo.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    // Create user

    // createUserHandler(email, password)
    //   .then(() => {
    //     setError("");
    //     registerForm.reset();
    //     setIsAaccepted(false);
    //     toast.success("You have created an account!", {
    //       position: "top-center",
    //       autoClose: 1500,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //     updateProfileHandler(displayName, photoURL)
    //       .then(() => {
    //         setIsLoading(false);
    //       })
    //       .catch((error) => console.error(error));
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   });
  };

  // Google Sign in
  const signInWithGoogle = () => {
    // signInWithGoogleHandler()
    //   .then(() => {
    //     // console.log(user);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h3 className="text-5xl font-bold">Login Register!</h3>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={registerFormHandler} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="fullname"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
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
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  ref={checkedTermsRef}
                  onChange={checkedTermsHandler}
                  type="checkbox"
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">
                  Accept{" "}
                  <Link to="/terms-and-conditions" className="underline">
                    terms and conditions
                  </Link>
                </span>
              </label>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="form-control mt-6">
              {isAccepted ? (
                <button className="btn btn-active btn-primary">Register</button>
              ) : (
                <button className="btn btn-disabled" disabled>
                  Register
                </button>
              )}
            </div>
            <label className="label">
              <p>
                Already have an accout?
                <Link
                  to="/login"
                  className="underline text-blue-500 font-medium"
                >
                  login
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
      <ToastContainer />
    </div>
  );
};

export default Register;
