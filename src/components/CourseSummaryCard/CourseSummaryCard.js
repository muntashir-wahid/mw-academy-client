import React from "react";
import { useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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
      <div className="card-body">
        <h4 className="card-title">{courseName}</h4>
        <h5 className="flex items-center gap-2 font-semibold">
          <GiTeacher />
          {instructor}
        </h5>
        <p>{about.slice(0, 70)}</p>

        <div className="flex items-center gap-1">
          <div className="flex">
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStarHalfAlt className="text-amber-400" />
          </div>
          <p className="font-semibold">{rating}</p>
        </div>
        <p className="font-semibold">{price}</p>
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
