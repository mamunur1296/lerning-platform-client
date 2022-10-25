import React from "react";
import { useLoaderData } from "react-router-dom";
import CardDetailsSidebar from "../CardDetailsSidebar/CardDetailsSidebar";
import CorceDiscription from "./CorceDiscription";
import CorceHeader from "./CorceHeader";
import CorcesTeachers from "./CorcesTeachers";

const CourcsDetails = () => {
  const data = useLoaderData();

  return (
    <div class="grid md:grid-cols-6 w-11/12 mx-auto gap-4">
      <div class="col-span-4 row-start-2 md:row-start-1  ">
        <CorceHeader data={data}></CorceHeader>
        <CorcesTeachers data={data}></CorcesTeachers>
        <CorceDiscription data={data}></CorceDiscription>
      </div>
      <div class="col-span-2">
        <CardDetailsSidebar data={data}></CardDetailsSidebar>
      </div>
    </div>
  );
};

export default CourcsDetails;
