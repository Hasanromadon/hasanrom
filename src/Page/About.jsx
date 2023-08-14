import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Advantages from '../components/Advantages';
import Footer from '../components/Footer';

const About = () => {
  return (
    <><main className="container">
      <Hero />
      <Features />
      <Projects />
      <Contact />
      <Advantages />
    </main><Footer /></>
  )
}

export default About