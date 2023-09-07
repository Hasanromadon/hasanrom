import React from "react";
import footerOrnamen from "../assets/footer-ornamen.png";

const Footer = () => {
  return (
    <footer className=" bg-white py-8 mt-10">
      <div className="flex justify-between items-center container">
        <p className="">
          <span>
            To discuss business inquiries, kindly reach out via email to {' '}
          </span>
          <span className="font-semibold  underline">hsanromadon@gmail.com</span>
        </p>
        <div className="flex justify-end">
          <img src={footerOrnamen} width={70} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
