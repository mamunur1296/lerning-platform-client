import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Comunuty = ({ com, data }) => {
  return (
    <div>
      <a href={com.link}>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 duration-300 transform border rounded shadow     hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <FaSignOutAlt className="text-red-400"></FaSignOutAlt>
            </div>
            <span className="text-gray-800">{com.title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Comunuty;
