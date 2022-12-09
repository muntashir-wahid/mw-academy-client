import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategories from "../../components/CourseCategories/CourseCategories";
import CourseSummaryCard from "../../components/CourseSummaryCard/CourseSummaryCard";
import Loader from "../../components/Loader/Loader";
import useChangeTitle from "../../hooks/useChangeTitle";

const AllCourses = () => {
  useChangeTitle("All Courses");

  const allCourses = useLoaderData();
  const [courses, setCourses] = useState(allCourses);
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoding, setIsCategoriesLoading] = useState(true);
  const [isCourseLoading, setIsCourseLoading] = useState(false);

  useEffect(() => {
    fetch("https://mw-academy-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsCategoriesLoading(false);
      });
  }, []);

  const showSelectedCategoriHandler = (id) => {
    setIsCourseLoading(true);
    fetch(`https://mw-academy-server.vercel.app/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setIsCourseLoading(false);
      });
  };

  return (
    <main className="px-6 py-12">
      <header className="mb-20">
        <h2 className="text-4xl text-center mb-6">Welcome to Our Courses</h2>
        <p className="text-center">
          Start, switch, or advance your career with our courses, Professional
          Certificates, and degrees from world-class universities and companies.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <section className="md:col-start-1 md:col-end-4 md:row-start-1 lg:col-start-1 lg:col-end-5">
          <h3 className="text-2xl text-center font-medium mb-5">
            We Have {courses.length} Courses
          </h3>
          {isCourseLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {courses.map((course) => (
                <CourseSummaryCard key={course.courseId} courseData={course} />
              ))}
            </div>
          )}
        </section>
        <aside className="row-start-1">
          <h3 className="text-2xl text-center font-medium mb-5">Categories</h3>

          {isCategoriesLoding ? (
            <Loader />
          ) : (
            <ul className="flex flex-col  gap-4">
              {categories.map((category) => (
                <CourseCategories
                  key={category.id}
                  category={category}
                  onSelectCategory={showSelectedCategoriHandler}
                />
              ))}
            </ul>
          )}
        </aside>
      </div>
    </main>
  );
};

export default AllCourses;
