import React from "react";

const Button = ({label, onClick }) => {
    return (
      <button
        className="flex items-center justify-center px-4 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
