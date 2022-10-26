import { createBrowserRouter } from "react-router-dom";
import CourcsDetails from "../components/CorceDetails/CourcsDetails";
import AllCorces from "../components/cources/AllCorces";
import Error from "../components/error/Error";
import Home from "../components/Home/Home";
import Mainlayout from "../layOut/Mainlayout";
import Blog from "../pages/Blog";
import Cources from "../pages/Cources";
import Login from "../pages/Login";
import Premium from "../pages/Premium";
import Register from "../pages/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://all-it-sarver.vercel.app/allcources"),
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
        element: (
          <PrivateRouter>
            <Premium></Premium>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
