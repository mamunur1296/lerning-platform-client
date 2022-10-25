import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvaider from "./context/AuthProvaider";

const root = ReactDOM.createRoot(document.getElementById("root"));
//auth context addeder in the root of app
root.render(
  <React.StrictMode>
    <AuthProvaider>
      <App />
    </AuthProvaider>
  </React.StrictMode>
);

reportWebVitals();
