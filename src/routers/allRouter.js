import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Mainlayout from "../layOut/Mainlayout";
import Cources from "../pages/Cources";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cources",
        element: <Cources></Cources>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
