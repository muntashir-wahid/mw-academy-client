import React from "react";
import { useNavigate } from "react-router-dom";

const CourseSummaryCard = ({ courseData }) => {
  const { courseId, courseName, picture, instructor, about, rating, price } =
    courseData;

  const navigate = useNavigate();

  const showCourseDetailsHandler = (id) => {
    navigate(`/course/${id}`);
  };

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
          <button
            onClick={showCourseDetailsHandler.bind(null, courseId)}
            className="btn btn-primary"
          >
            Show details
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseSummaryCard;
