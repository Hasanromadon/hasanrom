import React from "react";
import quote from "../assets/quote-icon.png";
import IconButton from "./IconButton";

const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 py-10 sm:py-20">
      <div className="mb-10 sm:mb-0 text-center sm:text-left">
        <h1 className=" text-2xl uppercase text-blue-500 font-semibold">
          hasan romadon
        </h1>
        <h1 className="text-3xl uppercase font-semibold mb-8">
          mobile and web developer
        </h1>
       <div className="flex justify-center sm:block"><IconButton label="Email Me" onClick={() => null} /></div>
      </div>
      <div>
        <div className="relative z-20 bg-white rounded-2xl">
          <div className="absolute -top-4 -left-4">
            <img width={40} height={40} src={quote} alt="" />
          </div>
          <div className="bg-white block px-4 py-6 rounded-2xl">
            <p>
              I am deeply driven by the desire to make valuable contributions
              and devise solutions for optimizing business administration
              processes, ensuring seamless efficiency through automation.
            </p>
          </div>
          <div className="absolute -z-20 rounded-3xl -bottom-3 right-0 bg-blue-200 p-8 w-1/2">
            {/* background blue */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
