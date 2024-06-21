import React from "react";

const Spinner = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="animate-ping w-16 h-16 rounded-full bg-sky-600"></div>
    </div>
  );
};

export default Spinner;
