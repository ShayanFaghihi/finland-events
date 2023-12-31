import React from "react";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <div className="w-12 h-12 rounded-full border-t-2 border-t-purple animate-spin"></div>
    </div>
  );
};

export default Loader;
