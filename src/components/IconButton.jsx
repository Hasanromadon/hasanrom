import React from "react";
import emailIcon from "../assets/mail-icon.png";

const IconButton = ({ label, onClick }) => {
  const gradientBackground = {
    background: "linear-gradient(45deg, rgb(107, 206, 255), #1e90ff)",
    // Add any other styles you need here
  };

  return (
    <button
      className="flex items-center justify-center px-4 py-2 border rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      style={gradientBackground}
      onClick={onClick}
    >
      <img width={20} height={20} className="mr-2" src={emailIcon} alt="" />
      {label}
    </button>
  );
};

export default IconButton;
  