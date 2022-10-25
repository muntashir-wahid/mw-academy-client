import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loader;
