import React from "react";

const CourseCategories = ({ category, onSelectCategory }) => {
  const { name, id } = category;
  return (
    <li>
      <button
        className="btn btn-outline btn-primary w-full"
        onClick={onSelectCategory.bind(null, id)}
      >
        {name}
      </button>
    </li>
  );
};

export default CourseCategories;
