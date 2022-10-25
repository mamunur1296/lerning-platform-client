import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import Comunuty from "./Comunuty";

const CardDetailsSidebar = ({ data }) => {
  console.log(data.community);
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-full rounded shadow-lg sm:h-40 md:h-80 lg:h-52"
              src={data?.img}
              alt=""
            />
            <a
              href="/"
              aria-label="text"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-32 h-12 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <button>inrol naoe</button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
          <div className="mr-2">
            <FaUserGraduate></FaUserGraduate>
          </div>
          <span className="text-gray-800 transition-colors duration-200 ">
            {data?.inroll}people have already been admitted
          </span>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 w-full mt-10 overflow-hidden font-semibold rounded bg-green-700 text-white"
        >
          You do it right away
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
      </div>
      <div className="mt-20 ">
        <div className="text-4xl  border-3 text-gray-800 ">
          <h1> Our community is here to help you</h1>
        </div>
        <div className="mt-12">
          {data?.community?.map((com) => (
            <Comunuty com={com}></Comunuty>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardDetailsSidebar;
