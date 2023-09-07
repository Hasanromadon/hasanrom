import React from "react";
import Header from "./Header";
import bgHeroImage from "../assets/hero-bg-image.png";
import Footer from "./Footer";

const Wrapper = ({ children, withBackground = true }) => {
  return (
    <div
      className="bg-slate-50 bg-top  bg-no-repeat "
      style={{
        backgroundImage: withBackground ? `url(${bgHeroImage})` : 'none',
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
