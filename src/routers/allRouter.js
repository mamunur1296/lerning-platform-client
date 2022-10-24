import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Mainlayout from "../layOut/Mainlayout";
import Login from "../pages/Login";

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
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
