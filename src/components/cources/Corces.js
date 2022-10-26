import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvaider";

const Corces = ({ data }) => {
  const { id, img, body, title } = data;

  return (
    <div className="mb-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-extrabold leading-none">{title}</h5>
          <p className="mb-6 text-gray-900">{body.slice(0, 120) + "..."}</p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex justify-between items-center space-x-4">
            <p className="text-green-700">Price : ${data.price}</p>
            <p className="text-green-700">Admitted people : {data.inroll}</p>
          </div>

          <Link to={`/courcesdetails/${id}`}>
            <button className="btn w-full mt-20 bg-red-400 hover:bg-red-600">
              Course Details
            </button>
          </Link>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Corces;
