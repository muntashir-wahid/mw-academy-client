import React from "react";

const CourseSummaryCard = ({ courseData }) => {
  const { courseName, picture, instructor, about, rating, price } = courseData;
  console.log(courseData);
  return (
    <article className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="Course thumbnil" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h4 className="card-title">{courseName}</h4>
        <h5>{instructor}</h5>
        <p>{about.slice(0, 70)}</p>
        <p>{rating}</p>
        <p>{price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Show details</button>
        </div>
      </div>
    </article>
  );
};

export default CourseSummaryCard;
