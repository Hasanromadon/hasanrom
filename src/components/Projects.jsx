import React from "react";
import projectPsPolis from "../assets/project-pasarpolis.png";
import projectFindRomah from "../assets/project-findromah.png";
import Section from "./Section";

const Projects = () => {
  return (
    <Section title="Selected Projects">
      <div className="mb-20">
        <img className="border" width={"100%"} height={'100%'} src={projectPsPolis} alt="" />
        <a className="font-semibold block mt-2" href="/">Pasarpolis - View My Work</a>
      </div>
      <div>
        <img className="border" width={"100%"} height={'100%'} src={projectFindRomah} alt="" />
        <a className="font-semibold block mt-2" href="/">Findrumah - View My Work</a>
      </div>
    </Section>
  );
};

export default Projects;
