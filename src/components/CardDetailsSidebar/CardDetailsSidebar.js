import React, { useContext, useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comunuty from "./Comunuty";
import Exjesting from "./Exjesting";

const CardDetailsSidebar = ({ data }) => {
  //data fetch agail
  const [cprce, setCprce] = useState({});
  console.log(cprce);
  useEffect(() => {
    fetch("https://all-it-sarver.vercel.app/allcources")
      .then((res) => res.json())
      .then((data) => setCprce(data));
  }, []);
  return (
    <section>
      <div className="  mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto w-full ">
          <div className="relative mx-auto w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full   rounded shadow-lg sm:h-30 md:h-60 lg:h-96"
              src={data?.img}
              alt=""
            />
            <Link
              to={`/premium/${data.id}`}
              aria-label="text"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-32 h-12 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <button className="text-red-400">Enroll Now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
          <div className="mr-2">
            <FaUserGraduate className="text-red-500"></FaUserGraduate>
          </div>
          <span className="text-gray-800 transition-colors  text-green-800 duration-200 ">
            {data?.inroll}people have already been admitted
          </span>
        </div>
      </div>
      <div>
        <Link to={`/premium/${data.id}`}>
          <button
            type="button"
            className="relative text-2xl px-8 py-4 ml-4 w-full mt-10 overflow-hidden font-semibold rounded bg-green-500 hover:bg-green-700  text-white"
          >
            You do it right away
            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-red-400">
              New
            </span>
          </button>
        </Link>
      </div>
      <div className="mt-20 ">
        <div className="text-4xl  border-3 text-gray-800 ">
          <h1> Our community is here to help you</h1>
        </div>
        <div className="mt-12">
          {data?.community?.map((com) => (
            <Comunuty data={data} com={com}></Comunuty>
          ))}
        </div>
      </div>

      {
        //explor leter
        /* <div className="mt-20 ">
        <p className="text-4xl mb-10 text-red-500">Related Courses</p>
        {cprce.map((data) => (
          <Exjesting key={data.id} data={data}></Exjesting>
        ))}
      </div>  */
      }
    </section>
  );
};

export default CardDetailsSidebar;
