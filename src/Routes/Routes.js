import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog";
import Checkout from "../Pages/Checkout";
import CourseDetails from "../Pages/CourseDetails";
import CoursesPage from "../Pages/CoursesPage";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/courses",
        element: <CoursesPage></CoursesPage>,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-seven.vercel.app/courses"
          ),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-seven.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-seven.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
