import React from "react";
import { useLoaderData } from "react-router-dom";
import Corces from "./Corces";

const AllCorces = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
      <h1 className="text-3xl  mt-10">Paid Live Courses</h1>
      <div>
        <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {datas.map((data) => (
            <Corces key={data.id} data={data}></Corces>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCorces;
