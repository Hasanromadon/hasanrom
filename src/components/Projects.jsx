import React, { useRef } from "react";
import projectPsPolis from "../assets/project-pasarpolis.png";
import projectFindRomah from "../assets/project-findromah.png";
import Section from "./Section";
import Button from "./Button";
import useIntersectionObserver from "../utils/animate/useIntersectionObserver";
import animateIn from "../utils/animate/animateIn";
import { gsap, Power2 } from "gsap";

const Projects = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  const { elementRef, isVisible } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const { elementRef: elementRef2, isVisible: isVisible2 } =
    useIntersectionObserver({
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });

  React.useEffect(() => {
    if (isVisible) {
      animateIn(elementRef.current);
      gsap.from(textRef.current, {
        visibility: "visible",
        opacity: 1,
        transform: "translateY(-20px)",
        duration: 0.5,
        ease: Power2.easeInOut,
      });
    }

    if (isVisible2) {
      animateIn(elementRef2.current);
      gsap.from(textRef2.current, {
        visibility: "visible",
        opacity: 1,
        transform: "translateY(-20px)",
        duration: 0.5,
        ease: Power2.easeInOut,
      });
    }
  }, [isVisible, isVisible2]);

  return (
    <Section className="bg-white">
      <div className="container py-10">
        <h4 className="text-2xl font-semibold mb-10">Selected Projects</h4>
        <div
          ref={elementRef}
          className="grid sm:grid-cols-2 gap-10 mb-20 opacity-0"
        >
          <img className="w-full h-full" src={projectPsPolis} alt="" />
          <div ref={textRef}>
            <h3 className="font-semibold block -mt-8 sm:mt-6 text-2xl mb-4">
              Studycase UI Design Pasarpolis
            </h3>
            <p className="mb-6 max-w-md">
              A study case into my comprehensive approach to the interface
              design process, spanning the entire spectrum from low-fidelity
              concepts to high-fidelity prototypes.{" "}
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://hasanromadon.notion.site/hasanromadon/STUDY-CASE-DESIGN-WEBSITE-PASARPOLIS-fe036eaf4eb248db90119cb7a18b8938"
                )
              }
              label="View Project"
            />
          </div>
        </div>

        <div
          ref={elementRef2}
          className=" opacity-0 flex flex-col-reverse sm:grid sm:grid-cols-2 gap-10 mb-20"
          onClick={() =>
            window.open(
              "https://finderomah.netlify.app"
            )
          }
        >
          <div ref={textRef2} className="sm:ml-10 mt-2">
            <h3 className="font-semibold block -mt-10 sm:mt-6 text-2xl mb-4">
              Finderomah Landing page 
            </h3>
            <p className="mb-6 sm:max-w-md">
              A Project utilizing the latest and most cutting-edge technology stack, including ReactJs and Tailwind CSS. 
            </p>
            <Button label="View Project" />
          </div>
          <img className="w-full h-auto" src={projectFindRomah} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
