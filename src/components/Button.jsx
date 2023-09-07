import React from "react";

const Button = ({label, onClick }) => {
  const gradientBackground = {
    background: "linear-gradient(45deg, rgb(107, 206, 255), #1e90ff)",
    // Add any other styles you need here
  };
    return (
      <button
        className="flex items-center justify-center px-4 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        style={gradientBackground}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
