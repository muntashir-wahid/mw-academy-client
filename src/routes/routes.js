import AllCourses from "../pages/AllCourses/AllCourses";
import Blog from "../pages/Blog/Blog";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Faq from "../pages/Faq/Faq";
import HeroBanner from "../pages/Home/HeroBanner";
import LogIn from "../pages/LogIn/LogIn/LogIn";
import Register from "../pages/LogIn/Register/Register";
import UserProfile from "../pages/LogIn/UserProfile/UserProfile";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Sorry!Something wrong happend</h1>,
    children: [
      { index: true, element: <HeroBanner /> },
      { path: "home", element: <HeroBanner /> },
      {
        path: "courses",
        element: <AllCourses />,
        loader: () =>
          fetch("https://mw-academy-server.vercel.app/category/all"),
      },
      {
        path: "course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://mw-academy-server.vercel.app/course/${params.id}`),
      },
      { path: "blog", element: <Blog /> },
      { path: "faq", element: <Faq /> },
      { path: "login", element: <LogIn /> },
      {
        path: "user/:uid",
        element: <UserProfile />,
      },
      { path: "register", element: <Register /> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
    ],
  },
]);

export default routes;
