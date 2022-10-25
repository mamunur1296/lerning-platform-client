import { createBrowserRouter } from "react-router-dom";
import CourcsDetails from "../components/CorceDetails/CourcsDetails";
import AllCorces from "../components/cources/AllCorces";
import Home from "../components/Home/Home";
import Mainlayout from "../layOut/Mainlayout";
import Cources from "../pages/Cources";
import Login from "../pages/Login";
import Premium from "../pages/Premium";
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
        loader: () => fetch("https://all-it-sarver.vercel.app/corcesCatagory"),
        element: <Cources></Cources>,
        children: [
          {
            path: "/cources",
            loader: () => fetch("https://all-it-sarver.vercel.app/allcources"),
            element: <AllCorces></AllCorces>,
          },
        ],
      },
      {
        path: "/courcesdetails/:id",
        loader: ({ params }) =>
          fetch(`https://all-it-sarver.vercel.app/allcources/${params.id}`),
        element: <CourcsDetails></CourcsDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/premium/:id",
        element: <Premium></Premium>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
