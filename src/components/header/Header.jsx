import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/header-picture2.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <h3 className="section--title">Hey, I'm Naveen</h3>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Full Stack Developer</span>
        </h1>
        <p className="hero--section-description">
        Passionate about coding excellence and continuous learning, I aim to contribute to dynamic 
teams in delivering cutting-edge applications that drive user engagement and business growth.
        </p>
      </div>
      <CTA />
    <HeaderSocials />
    </div>
    <div className="hero--section--img">
      <img src={header_picture} alt="Naveen Kushwaha" />
    </div>
  </section>
  );
};

export default header;
