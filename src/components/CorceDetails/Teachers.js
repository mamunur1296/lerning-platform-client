import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Teachers = ({ teacher }) => {
  return (
    <div>
      <div className="flex mb-10 flex-col max-w-md sm:flex-row">
        <div className="mb-4 mr-4">
          <div className="flex  items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
            {teacher?.Timg ? (
              <img className="rounded-full " src={teacher.Timg} alt="" />
            ) : (
              <FaRegUserCircle className="text-5xl"></FaRegUserCircle>
            )}
          </div>
        </div>
        <div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            {teacher?.teacher1}
          </h6>
          <p className="text-sm text-gray-900">{teacher?.work}</p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
