import React from "react";
import { FaPowerOff } from "react-icons/fa";

const Teachers = ({ teacher }) => {
  return (
    <div>
      <div className="flex flex-col max-w-md sm:flex-row">
        <div className="mb-4 mr-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
            <FaPowerOff></FaPowerOff>
          </div>
        </div>
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            {teacher.teacher1}
          </h6>
          <p className="text-sm text-gray-900">{teacher.work}</p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
