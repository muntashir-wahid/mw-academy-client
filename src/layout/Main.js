import React, { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const { state } = useNavigation();

  return (
    <Fragment>
      <NavBar />
      {state === "loading" && (
        <Loader className="min-h-screen w-full" message="Please wait!Loading" />
      )}
      {state === "idle" && <Outlet />}
    </Fragment>
  );
};

export default Main;
