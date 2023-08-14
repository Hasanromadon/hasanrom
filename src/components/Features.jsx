import React from "react";
import Card from "./Card";
import Section from "../components/Section";
import transformIcon from "../assets/transform-icon.png";
import linearIcon from "../assets/linear-icon.png";
import enchanceIcon from "../assets/enchance-icon.png";

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
      "Identifying repetitive tasks that can be automated, to save time,  elevate experience of end-users, optimizing workflows",
  },
];

const Features = () => {
  return (
    <Section title="What I Can Do">
      <div className="grid sm:grid-cols-3 gap-12 sm:gap-4 mt-20">
        {points.map(({ icon, title, content }) => (
          <Card icon={icon} title={title} content={content} />
        ))}
      </div>
    </Section>
  );
};

export default Features;
