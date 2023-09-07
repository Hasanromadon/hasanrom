import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Page/About";
import Blog from "./Page/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import NotFound from "./Page/NotFound";
import Projects from "./Page/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
    errorElement: <NotFound/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  { path: "/blog",
  element: <Blog /> },
  { path: "/blog/:id",
  element: <BlogDetail /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
