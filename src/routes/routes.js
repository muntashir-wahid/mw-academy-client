import HeroBanner from "../pages/Home/HeroBanner";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Sorry!Something wrong happend</h1>,
    children: [
      { index: true, element: <HeroBanner /> },
      { path: "/home", element: <HeroBanner /> },
      { path: "/courses", element: <HeroBanner /> },
    ],
  },
]);

export default routes;
