import React from "react";
import { useLoaderData } from "react-router-dom";

const AllCourses = () => {
  const allCourses = useLoaderData();
  // console.log(allCourses);
  return (
    <div>
      <h1 className="text-4xl text-center">
        We have {allCourses.length} courses
      </h1>
    </div>
  );
};

export default AllCourses;
