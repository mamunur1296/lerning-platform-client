import React from "react";
import { Link } from "react-router-dom";

const Comunuty = ({ com }) => {
  return (
    <div>
      <a href={com.link}>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 duration-300 transform border rounded shadow     hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800"> {com.title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Comunuty;
