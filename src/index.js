import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvaider from "./context/AuthProvaider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
//auth context addeder in the root of app
root.render(
  <React.StrictMode>
    <AuthProvaider>
      <App />
      <ToastContainer />
    </AuthProvaider>
  </React.StrictMode>
);

reportWebVitals();
