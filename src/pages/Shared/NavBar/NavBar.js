import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logOutHandler } = useContext(AuthContext);

  const navigateToLoginHandler = () => {
    navigate("/login");
  };

  const userLogOutHandler = () => {
    logOutHandler()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.errror(error));
  };

  const togglerOnChaneHandler = (event) => {
    const checked = event.target.checked;
    const html = document.getElementsByTagName("html")[0];
    if (checked) {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  };

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "bg-base-300" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-base-300" : undefined
                }
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-base-300" : undefined
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-base-300" : undefined
                }
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="text-primary font-medium text-lg italic flex items-center"
        >
          <img src={logo} alt="logo" className="w-9 h-9 mr-1 rounded-full" />
          MW Academy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-base-300" : undefined
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-base-300" : undefined
              }
              to="/courses"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-base-300" : undefined
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-base-300" : undefined
              }
              to="/faq"
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <input
          onChange={togglerOnChaneHandler}
          type="checkbox"
          className="toggle mr-2"
        />

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://placeimg.com/80/80/people"
                  }
                  alt="User"
                  title={user?.displayName ? user?.displayName : user.email}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={`${({ isActive }) =>
                    isActive && "bg-base-300"} justify-between`}
                  to={`/user/${user?.uid}`}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <button onClick={userLogOutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <button onClick={navigateToLoginHandler} className="btn">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
