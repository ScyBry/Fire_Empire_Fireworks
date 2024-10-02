import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.sass";
import "./styles/reset.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
);
