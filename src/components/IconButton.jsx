import React from "react";
import emailIcon from "../assets/mail-icon.png";

const IconButton = ({label, onClick }) => {
    return (
      <button
        className="flex items-center justify-center px-4 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onClick}
      >
        <img className="mr-2" src={emailIcon} alt=""/>
        {label}
      </button>
    );
  };
  
  export default IconButton;
