import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import Content from "../pages/Content";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "*", element: <ErrorPage /> },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:slug",
        element: <Project />,
      },
      {
        path: "content",
        element: <Content />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
