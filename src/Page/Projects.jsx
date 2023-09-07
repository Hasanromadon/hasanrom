import React from "react";
import Wrapper from "../components/Wrapper";
import PortfolioLinks from "../components/PortfolioLinks";

const portfolioLinks = [
  {
    title: "Teacher Career - NextJs 13, Redux Toolkit,Tailwind, Firebase (WIP)",
    demo: "https://teachercareer.netlify.app",
    github: "https://github.com/Hasanromadon",
  },
  {
    title: "Findromah - React App, Tailwind css",
    demo: "https://finderomah.netlify.app/",
    github: "https://github.com/Hasanromadon/finderomah-fe",
  },
  {
    title: "Kulinary - Progressive Web App",
    demo: "https://kulinary.netlify.app/",
    github: "https://kulinary.netlify.app/",
  },
  {
    title: "Ghost house - Three.js",
    demo: "https://rumah-hentong.netlify.app/",
    github: "https://rumah-hentong.netlify.app/",
  },
  {
    title: "NFT Marketplace Dashboard - ReactJs, Tailwind",
    demo: "https://nft-elite-dashboard.netlify.app/",
    github: "https://github.com/Hasanromadon/elitedashboard",
  },
  {
    title: "Brandi - Plain HTML, Javascript, Jquery",
    demo: "https://brando-hasan.netlify.app/",
    github: "https://github.com/Hasanromadon/brando/tree/master",
  },
  {
    title: "Books Store - ReactJs, NextJs, MongoDB",
    demo: "https://waysbook-app.netlify.app/",
    github: "https://github.com/Hasanromadon/waysbook-be",
  },
];

const Projects = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="text-4xl text-center font-semibold mb-8">Projects</h1>
        <p className="text-gray-600 text-center">
          Here are my projects. Please let me know if they're not working as
          expected, and I'll be glad to address any issues.
        </p>
        <div className="flex">
          <PortfolioLinks links={portfolioLinks} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
