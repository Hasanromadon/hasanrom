import React from "react";
import ornamen from "../assets/ornamen.jpg";
import IconButton from "./IconButton";

const Contact = () => {
  return (
    <div className="relative rounded-md">
      <div className="absolute z-10 -bottom-4 -left-4">
        <img width={60} height={100} src={ornamen} alt="" />
      </div>
      <div className=" relative z-20">
        <div className="grid sm:gap-28 py-8 px-8 sm:px-0 sm:grid-cols-2 bg-white rounded-sm">
            <div className="w-full sm:flex justify-end">
            <h4 className="text-2xl sm:text-4xl font-semibold"><span>Craft a</span><span className="block">Project Now</span></h4>
            </div>
          <div className="sm:w-80 mt-6 sm:mt-0">
            <p className="mb-8">
              Start your project today and let's shape the future of digital
              possibilities together.
            </p>
            <IconButton label="Email Me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
