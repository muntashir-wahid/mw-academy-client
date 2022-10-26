import React, { Fragment, useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
  const courseData = useLoaderData();
  const navigate = useNavigate();
  const pdfRef = useRef();
  const { courseId, courseName, picture, instructor, about, overview } =
    courseData;

  const navigateToPurchaseHandler = (id) => {
    navigate(`/course/checkout/${id}`);
  };

  return (
    <Fragment>
      <header className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={picture}
            className="w-full md:max-w-lg rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h2 className="text-5xl font-bold">{courseName}</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <ReactToPdf targetRef={pdfRef} filename={courseName}>
              {({ toPdf }) => (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={toPdf}
                >
                  Download Pdf
                </button>
              )}
            </ReactToPdf>
          </div>
        </div>
      </header>
      <main ref={pdfRef} className="px-10 py-16">
        <div className="text-center font-medium mb-5">
          <h3 className=" text-2xl ">{courseName}</h3>
          <h5 className=" text-lg ">{instructor}</h5>
        </div>
        <div>
          <p className="mb-5">{about}</p>

          <h5 className="text-lg font-medium mb-2">Overview</h5>

          <ul className="list-disc list-inside mb-8">
            {overview.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <button
            onClick={navigateToPurchaseHandler.bind(null, courseId)}
            className="btn btn-primary"
          >
            Purchase Course
          </button>
        </div>
      </main>
    </Fragment>
  );
};

export default CourseDetails;
