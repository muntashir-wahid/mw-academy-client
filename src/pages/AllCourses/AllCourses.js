import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategories from "../../components/CourseCategories/CourseCategories";
import Loader from "../../components/Loader/Loader";

const AllCourses = () => {
  const allCourses = useLoaderData();
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoding, setIsCategoriesLoading] = useState(true);

  useEffect(() => {
    fetch("https://mw-academy-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsCategoriesLoading(false);
      });
  }, []);

  const showSelectedCategoriHandler = (id) => {
    console.log(id);
  };

  return (
    <main className="px-6 py-12">
      <header className="mb-12">
        <h2 className="text-4xl text-center mb-6">Welcome to Our Courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          accusantium fugit magni officia a voluptatem quibusdam aut sapiente
          explicabo quaerat fuga temporibus. Dolore, quidem asperiores. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ullam tenetur nemo
          deleniti tempora cum reprehenderit nihil velit culpa eligendi eveniet
          aut iste consectetur commodi quod praesentium quam, officiis
          repudiandae sequi nobis molestiae?
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <section className="md:col-start-1 md:col-end-2 md:row-start-1 lg:col-start-1 lg:col-end-3">
          <h3 className="text-2xl text-center font-medium">
            We Have {allCourses.length} Courses
          </h3>
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
