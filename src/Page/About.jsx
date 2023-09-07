import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Advantages from '../components/Advantages';
import Wrapper from '../components/Wrapper';

const About = () => {
  return (
    <Wrapper>
      <main>
        <Hero />
        <Features />
        <Projects />
        <Contact />
        <Advantages />
      </main>
    </Wrapper>
  );
}

export default About