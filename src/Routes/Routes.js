import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog";
import CourseDetails from "../Pages/CourseDetails";
import CoursesPage from "../Pages/CoursesPage";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "./NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
