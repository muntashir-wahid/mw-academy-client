import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckoutCourse = () => {
  const courseData = useLoaderData();
  const { courseName } = courseData;
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  );
};

export default CheckoutCourse;
