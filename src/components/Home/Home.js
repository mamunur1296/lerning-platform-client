import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Slayder from "./Slayder";

const Home = () => {
  const datas = useLoaderData();

  return (
    <section>
      <section className="bg-gray-200 text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Our Popular Courses
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            During the entire month of October, All-IT-BD courses can be done at
            a more economical price!
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-300 text-gray-900">
              Call for any information regarding the course
            </button>
            <button className="px-8 py-3 flex align-middle justify-center m-2 text-lg border bg-red-500 hover:bg-red-600 rounded text-gray-50 border-red-800">
              <p>
                <FaPhoneAlt className="text-4xl"></FaPhoneAlt>
              </p>
              <p>+165849</p>
            </button>
          </div>
        </div>
        <section className="pb-20">
          <Slayder datas={datas}></Slayder>
        </section>
      </section>
    </section>
  );
};

export default Home;
