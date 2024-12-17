import React from "react";
import "./experience.css";
import Miracle from "../../assets/miracleinforserv_logo.jpg";
import Master from "../../assets/CompanyLogo.png";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";

const Experience = ({ picAbout }) => {
  return (
    <section id="experience">
      <h5>I have hands-on</h5>
      <h2>Experience</h2>

      <div className="experience_box">
        {/* AI CHEF MASTER */}
        <div className="container experience__container left">
          <div className="experience__cards">
            <div className="experience__content">
              <img src={Master} alt="Miracle logo" className="company_logo" />
            </div>
            <div>
              <h1>Backend Developer</h1>
              <h2>AI CHEF MASTER</h2>
              <h4>August-2024 - December-2024</h4>
              <a
              href="https://www.linkedin.com/company/aichefmaster/"
              className="btn cmp-btn">
              Go to Linkedin </a>
            </div>
          </div>

          <div className="about_experience">
            <p>
              During my internship at{" "}
              <a href="https://www.linkedin.com/company/aichefmaster/">
                {" "}
                AI CHEF MASTER
              </a>
              , I worked as a Backend Developer using Python and Flask, and
              contributed to the frontend using React. This role allowed me to
              design and implement robust backend systems while ensuring
              seamless integration with the frontend. The experience deepened my
              understanding of full-stack development and strengthened my
              ability to build user-friendly and efficient applications.
            </p>


          </div>
        </div>

        {/* MIRACLE SERVICE */}
        <div className="container experience__container right">
          <div className="about_experience">
            <p>
              During my internship at{" "}
              <a href="https://www.linkedin.com/company/miracleinforserv/">
                Miracle Information Services Pvt. Ltd.
              </a>{" "}
              as a Full Stack Engineer, I gained hands-on experience in
              developing web applications using modern technologies. I worked on
              both front-end and back-end development, improving my skills in
              frameworks like React and Python, as well as database management.
              Collaborating with a talented team, I enhanced my problem-solving
              abilities and learned to deliver efficient and scalable solutions,
              which significantly boosted my technical and professional growth.
            </p>
          </div>

          <div className="experience__cards">
            <div>
              <h1>Fullstack Engnieer</h1>
              <h2>Miracle Information Services Pvt. Ltd.</h2>
              <h4>April-2024 - July-2024</h4>
              <a
              href="https://www.linkedin.com/company/miracleinforserv/"
              className="btn cmp-btn"
            >
              Go to Linkedin
            </a>
            </div>
            <div className="experience__content">
              <img src={Miracle} alt="Miracle logo" className="company_logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
