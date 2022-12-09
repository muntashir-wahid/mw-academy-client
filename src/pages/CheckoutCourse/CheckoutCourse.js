import React, { Fragment, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import useChangeTitle from "../../hooks/useChangeTitle";

const CheckoutCourse = () => {
  const { user } = useContext(AuthContext);
  const courseData = useLoaderData();
  const { courseName, picture, price } = courseData;
  useChangeTitle(`Checkout - ${courseName}`);

  const confirmPurchaseHandler = (event) => {
    event.preventDefault();
    const purcheseForm = event.target;
    toast.success(
      `Congratulations!You have successfully purchased ${courseName} course`,
      {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    purcheseForm.reset();
  };
  return (
    <Fragment>
      <header className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={picture}
            alt="Course thumbnil"
            className="w-full max-h-96"
          />
        </figure>
        <div className="card-body items-center justify-center">
          <h2 className="card-title text-4xl font-semibold">{courseName}</h2>
        </div>
      </header>

      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h3 className="text-3xl font-semibold">Purchase Course</h3>
          </div>

          <div className="card flex-shrink-0  shadow-2xl bg-base-100">
            <form
              onSubmit={confirmPurchaseHandler}
              className="card-body w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  defaultValue={user?.uid ? user?.displayName : ""}
                  className="input input-bordered"
                  readOnly={user?.displayName ? true : false}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={user?.uid ? user?.email : ""}
                  readOnly={user?.email ? true : false}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cel Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="+880-**********"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Course Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={courseName}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Select payment method</span>
                </label>
                <select className="select select-bordered">
                  <option>Bank Account</option>
                  <option>Mobile Banking</option>
                  <option>Master Card</option>
                  <option>Agent Banking</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Purchase Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </Fragment>
  );
};

export default CheckoutCourse;
