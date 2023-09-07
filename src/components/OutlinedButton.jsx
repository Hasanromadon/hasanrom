import React from "react";

const OutlinedButton = ({ label, onClick }) => {
  return (
    <button
      className="flex items-center justify-center px-4 py-2 border rounded-md border-blue-500 text-blue-500 hover:text-white  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OutlinedButton;
