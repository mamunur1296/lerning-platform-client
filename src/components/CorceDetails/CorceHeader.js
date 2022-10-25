import React from "react";
import {
  FaDownload,
  FaCompressArrowsAlt,
  FaRecordVinyl,
  FaQuestion,
} from "react-icons/fa";

const CorceHeader = ({ data }) => {
  console.log(data);
  return (
    <div>
      <section className="mt-10">
        <div className="flex justify-between align-middle ">
          <h1 className="text-4xl  border-3 text-gray-800 ">{data?.title}</h1>
          <div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <FaDownload></FaDownload>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <FaCompressArrowsAlt></FaCompressArrowsAlt>
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  <p>Live Class</p>
                  <p className="text-red-600">{data?.class}</p>
                </h6>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <FaRecordVinyl></FaRecordVinyl>
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  <p>Recorded class and lecture slides</p>
                  <p className="text-red-600">{data?.subject}</p>
                </h6>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                  <FaQuestion></FaQuestion>
                </div>
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  <p>
                    Solutions to each chapter's impersonal questions with
                    explanations
                  </p>
                  <p className="text-red-600">{data?.mcq}</p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorceHeader;
