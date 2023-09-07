import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Section from "../components/Section";
import transformIcon from "../assets/transform-icon.png";
import linearIcon from "../assets/linear-icon.png";
import enchanceIcon from "../assets/enchance-icon.png";
import { gsap, Power3 } from "gsap";
import useIntersectionObserver from "../utils/animate/useIntersectionObserver";
import animateIn from "../utils/animate/animateIn";


const points = [
  {
    icon: transformIcon,
    title: "Transforming Concepts into Engaging Web and Mobile Experiences",
    content:
      "Develop visually stunning websites that engage users and drive results. creating mobile apps that prioritize performance and user satisfaction.",
  },
  {
    icon: linearIcon,
    title: "Crafting Innovation Through Web and Mobile Development",
    content:
      "Adept at designing websites that captivate audiences and apps that streamline user experiences.  combine aesthetics with functionality.",
  },
  {
    icon: enchanceIcon,
    title: "Enhancing Efficiency Through Web and Mobile Application",
    content:
      "Identifying repetitive tasks that can be automated, to save time,  elevate experience of end-users, optimizing workflows.",
  },
];

const Features = () => {
  const [isAnimateDone, setIsAnimateDone] = useState(false);
  const containerRef = useRef(null);
  
  const { elementRef, isVisible } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: .5, // Adjust this threshold as needed
  });

  useEffect(() => {
    const container = containerRef.current;
    const children = container.children;

    // Define your animation

    if(isVisible && !isAnimateDone) {
      animateIn(elementRef.current);

      const tl = gsap.timeline({ delay: 0.1 }); // Adjust the delay as needed
      for (let i = 0; i < children.length; i++) {
        tl.from(children[i], {
          opacity: 0,
          top: 20,
          duration: 0.5,
          ease: Power3.easeOut,
        });
        tl.eventCallback("onComplete", ()=> {
          setIsAnimateDone(true);
        })
      }
    }


  }, [elementRef, isAnimateDone, isVisible]);

  return (
    <Section className="container" title="What I Can Do">
      <div className=" opacity-0" ref={elementRef}>
      <div ref={containerRef} className="grid sm:grid-cols-3 gap-12 sm:gap-4 mt-20">
        {points.map(({ icon, title, content }) => (
          <Card key={title} icon={icon} title={title} content={content} />
        ))}
      </div>
      </div>
    </Section>
  );
};

export default Features;
