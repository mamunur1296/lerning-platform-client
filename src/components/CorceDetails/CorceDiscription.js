import React from "react";
import { Link } from "react-router-dom";

const CorceDiscription = ({ data }) => {
  return (
    <div>
      <section>
        <div>
          <h1 className="text-4xl  border-3 text-gray-800 "> Discription</h1>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <p>{data?.body}</p>
        </div>
      </section>
      <section className="w-full flex justify-center align-middle mx-auto">
        <Link to={`/premium/:${data.id}`}>
          <button className="bg-red-500 my-20 py-5 rounded-full px-32 text-white">
            Get Premium Access
          </button>
        </Link>
      </section>
    </div>
  );
};

export default CorceDiscription;
