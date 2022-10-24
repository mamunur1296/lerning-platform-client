import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nave from "../components/naveBar/Nave";

const Mainlayout = () => {
  return (
    <div>
      <Nave></Nave>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
