import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Exjesting = ({ data }) => {
  const { title, id } = data;
  return (
    <div>
      <Link to={`/courcesdetails/${id}`}>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 duration-300 transform border rounded shadow     hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <FaRegHandPointRight className="text-red-500"></FaRegHandPointRight>
            </div>
            <span className="text-gray-800">{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Exjesting;
