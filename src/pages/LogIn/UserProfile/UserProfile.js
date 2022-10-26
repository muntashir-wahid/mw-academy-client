import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const UserProfile = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, emailVarificationHandler, deleteUserHander } =
    useContext(AuthContext);

  const varifyEmailHandler = () => {
    emailVarificationHandler().then(() => {
      toast.info("Please check your email inbox or spam", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
    console.log("Email sent");
  };

  const handleDeletion = () => {
    deleteUserHander()
      .then(() => {
        setError("");
        navigate("/");
        // console.log("user deleted successfully");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="p-8">
      <h3 className="text-4xl text-center mb-4">
        Welcome{" "}
        {user?.displayName ? (
          <span>{user?.displayName}</span>
        ) : (
          <span>New User</span>
        )}
      </h3>
      <div>
        <p className="text-lg font-medium mb-2">
          Your Email: {user?.email}
          {!user?.emailVerified && (
            <button
              onClick={varifyEmailHandler}
              title="Please check spam"
              className="btn btn-xs ml-2"
            >
              Varify Email
            </button>
          )}
        </p>
        <p className="text-lg font-medium mb-2">
          Your User Id: {user?.uid}
          <button onClick={handleDeletion} className="btn btn-xs ml-2">
            Delete Account
          </button>
        </p>
      </div>
      <h4>{error}</h4>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
