import React from "react";

const Loader = ({ className, message }) => {
  return (
    <div
      className={`flex flex-col gap-3 justify-center items-center ${className}`}
    >
      <progress className="progress w-56"></progress>
      {message && <p className="text-primary text-center">{message}...</p>}
    </div>
  );
};

export default Loader;
