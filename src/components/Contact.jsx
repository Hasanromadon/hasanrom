import React, { useEffect, useRef } from "react";
import ornamen from "../assets/ornamen.jpg";
import IconButton from "./IconButton";
import useIntersectionObserver from "../utils/animate/useIntersectionObserver";
import { gsap, Power2 } from "gsap";

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1, // Adjust this threshold as needed
  });


  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  const animateTextTop = () => {
    gsap.fromTo(
      topTextRef.current,
      {
        transform: "translateY(30px)",
      },
      {
        transform: "translateY(0)",
        duration: .5,
        ease: Power2.easeInOut,
      }
    );
  };

  const animateTextBottom = () => {
    gsap.fromTo(
      bottomTextRef.current,
      {
        transform: "translateY(-30px)",
      },
      {
        transform: "translateY(0)",
        duration: .5,
        ease: Power2.easeInOut,
      }
    );
  };

  useEffect(() => {
    if(isVisible) {
      animateTextTop();
      animateTextBottom();
    }


  }, [isVisible]);

  return (
    <div ref={elementRef} className=" container relative rounded-md">
      <div className="absolute z-10 -bottom-3 left-4">
        <img width={60} height={100} src={ornamen} alt="" />
      </div>
      <div className=" relative z-20">
        <div className="grid sm:gap-28 py-8 px-8 sm:px-0 sm:grid-cols-2 bg-white rounded-sm">
            <div className="w-full sm:flex justify-end">
            <h4 className="text-2xl sm:text-4xl font-semibold">
              <div className="bg-white overflow-hidden">
              <span className="inline-block" ref={topTextRef}>Craft a</span>
              </div>
              <div className="bg-white overflow-hidden pb-1">
              <span className="block" ref={bottomTextRef}>Project Now</span>
              </div>

    </h4>
            </div>
          <div className="sm:w-80 mt-6 sm:mt-0">
            <p className="mb-8">
              Start your project today and let's shape the future of digital
              possibilities together.
            </p>
            <IconButton label="Email Me" onClick={() => window.location.href = "mailto:hsanromadon@gmail.com"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
