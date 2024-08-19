import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.sass";
import "./styles/reset.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
