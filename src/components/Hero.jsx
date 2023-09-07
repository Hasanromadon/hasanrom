import React, { useEffect, useRef } from "react";
import quote from "../assets/quote-icon.png";
import IconButton from "./IconButton";
import gsap from 'gsap';
import { Power2 } from "gsap";

const Hero = () => {
  const qouteRef = useRef(null);
  const textRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(()=> {
    tl.fromTo(
      textRef.current,
      { visibility: 'hidden', opacity: 0, transform: 'translateY(-30px)' },
      { visibility: 'visible', opacity: 1,  transform: 'translateY(0)', delay: 0.5,  duration: 1, ease: Power2.easeInOut }

    ).fromTo(
      qouteRef.current,
      {  visibility: 'hidden',opacity: 0 },
      {  visibility: 'visible', opacity: 1, duration: 0.5, ease: Power2.easeInOut }
    );
  }, [tl]);

  return (
    <div className="container grid sm:grid-cols-2 py-10 sm:py-20">
      <div ref={textRef} className="mb-10 sm:mb-0 text-center sm:text-left">
        <h1 className=" text-2xl uppercase text-blue-500 font-semibold">
          hasan romadon
        </h1>
        <h1 className="text-3xl uppercase font-semibold mb-8">
          mobile and web developer
        </h1>
       <div className="flex justify-center sm:block"><IconButton label="Email Me" onClick={() => window.location.href = "mailto:hsanromadon@gmail.com"} /></div>
      </div>
      <div>
        <div ref={qouteRef} className="relative z-20 bg-white rounded-2xl">
          <div className="absolute -top-4 -left-4">
            <img width={44} height={40} src={quote} alt="" />
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
