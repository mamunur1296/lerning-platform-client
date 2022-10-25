import React from "react";
import CorceDiscription from "./CorceDiscription";
import CorceHeader from "./CorceHeader";
import CorcesTeachers from "./CorcesTeachers";

const CourcsDetails = () => {
  return (
    <div class="grid md:grid-cols-6 w-11/12 mx-auto gap-4">
      <div class="col-span-4 row-start-2 md:row-start-1  ">
        <CorceHeader></CorceHeader>
        <CorcesTeachers></CorcesTeachers>
        <CorceDiscription></CorceDiscription>
      </div>
      <div class="">
        <h1>side nave </h1>
      </div>
    </div>
  );
};

export default CourcsDetails;
