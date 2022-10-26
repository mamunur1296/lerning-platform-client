import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import SideNav from "../components/RightSideBar/SideNav";

const Cources = () => {
  const catagorys = useLoaderData();
  return (
    <div class="grid md:grid-cols-4 w-11/12 mx-auto gap-4">
      <div class="col-span-3 row-start-2 md:row-start-1  ">
        <Outlet></Outlet>
      </div>
      <div class="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Just do it
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Our course list
            </h2>
          </div>
          {catagorys.map((data) => (
            <SideNav key={data.id} data={data}></SideNav>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cources;
