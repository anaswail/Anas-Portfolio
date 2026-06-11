import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import Content from "../pages/Content";
import Blogs from "../pages/Blogs";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
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
