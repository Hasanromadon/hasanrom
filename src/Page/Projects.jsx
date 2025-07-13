import React from "react";
import Wrapper from "../components/Wrapper";
import PortfolioLinks from "../components/PortfolioLinks";

const portfolioLinks = [
  {
    title: "Kepengurusan.com – Golang, Next.js 14, Tailwind CSS (WIP)",
    demo: "https://kepengurusan.com",
    // github: "https://github.com/Hasanromadon",
    description:
      "A management platform for organizations and communities. Built with Next.js 14 frontend and Golang backend, it provides tools for handling member data, roles, and verification processes efficiently.",
  },
  {
    title:
      "Asesme.com – Next.js 15,Firebase, React Query, ShadCN, Tailwind CSS",
    demo: "https://asesme.com",
    // github: "https://github.com/Hasanromadon",
    description:
      "A modern skill assessment and certification platform built with a Golang backend, Next.js 15 frontend, and React Query for efficient data fetching.",
  },
  {
    title: "Teacher Career – Next.js 13, Firebase, Redux Toolkit, Tailwind CSS",
    demo: "https://teachercareer.netlify.app",
    // github: "https://github.com/Hasanromadon",
    description:
      "A career development platform for teachers, featuring job listings and educational resources, built using a Golang API and modern React stack.",
  },
  {
    title: "Findromah – React App, Tailwind CSS",
    demo: "https://finderomah.netlify.app/",
    github: "https://github.com/Hasanromadon/finderomah-fe",
    description:
      "A user-friendly real estate finder web app built with React and styled using Tailwind CSS for clean UI and responsiveness.",
  },
  {
    title: "Kulinary – Progressive Web App (PWA)",
    demo: "https://kulinary.netlify.app/",
    github: "https://kulinary.netlify.app/",
    description:
      "A food discovery and recipe app built as a PWA, enabling offline access and mobile-optimized user experience.",
  },
  {
    title: "Ghost House – 3D Experience with Three.js",
    demo: "https://rumah-hentong.netlify.app/",
    github: "https://rumah-hentong.netlify.app/",
    description:
      "A spooky interactive 3D house built using Three.js, showcasing real-time rendering, textures, and lighting effects.",
  },
  {
    title: "NFT Marketplace Dashboard – React.js, Tailwind CSS",
    demo: "https://nft-elite-dashboard.netlify.app/",
    github: "https://github.com/Hasanromadon/elitedashboard",
    description:
      "A dashboard interface for NFT collections, including analytics, listings, and user performance insights using React and Tailwind.",
  },
  {
    title: "Brandi – HTML, JavaScript, jQuery Website",
    demo: "https://brando-hasan.netlify.app/",
    github: "https://github.com/Hasanromadon/brando/tree/master",
    description:
      "A creative portfolio-style static website using classic web technologies: HTML, CSS, JavaScript, and jQuery.",
  },
  {
    title: "Books Store – React.js, Next.js, MongoDB",
    demo: "https://waysbook-app.netlify.app/",
    github: "https://github.com/Hasanromadon/waysbook-be",
    description:
      "An e-commerce web app for buying and managing books, featuring login, cart, and admin dashboard built with the MERN stack.",
  },
];

const Projects = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="text-4xl text-center font-semibold mb-6">Projects</h1>
        <p className="text-gray-600 text-center mb-10">
          These are some of the personal and collaborative projects I’ve worked
          on. They showcase my full-stack skills using various tech stacks. Feel
          free to explore and view the code.
        </p>
        <div className="grid gap-6">
          <PortfolioLinks links={portfolioLinks} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
