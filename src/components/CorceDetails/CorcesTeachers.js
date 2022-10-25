import React from "react";
import Teachers from "./Teachers";

const CorcesTeachers = ({ data }) => {
  return (
    <div>
      <section>
        <div>
          <h1 className="text-4xl  border-3 text-gray-800 "> Teachers</h1>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
            {data.teachers.map((teacher) => (
              <Teachers teacher={teacher}></Teachers>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorcesTeachers;
