import React from "react";
import "./header.css"
import CV from "../../assets/Naveen-Kushwaha-CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn cta-btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary cta-btn">
        Contact Info
      </a>
    </div>
  );
};

export default CTA;
