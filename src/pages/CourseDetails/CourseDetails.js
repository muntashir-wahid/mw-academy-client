import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseData = useLoaderData();
  const { courseName } = courseData;
  console.log(courseName);

  return (
    <div>
      <h1 className="text-4xl text-center">{courseName}</h1>
    </div>
  );
};

export default CourseDetails;
