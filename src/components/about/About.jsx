import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = ({ picAbout }) => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className={`about__me ${picAbout ? "" : "light"}`}>
          <div className="about__me-image">
            <img src={profile_picture} alt="Naveen's image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                - Postgraduate Diploma as Fullstack Engnieer
                <br />
                - M.A. Sociology
                <br />- B.Sc. Mathematics
              </small>
            </article>
          </div>
          <p>
            <p>
              Hello! I’m Naveen Kushwaha, a passionate Full Stack Developer with
              a strong interest in building scalable web applications and robust
              backend systems. Currently, I work at{" "}
              <a
                href="https://www.liznr.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Liznr
              </a>{" "}
              as a Full Stack Developer, where I contribute to developing
              intelligent, AI-driven meeting solutions. My role involves working
              across the stack using technologies like React, Django, and
              RESTful APIs to deliver seamless and efficient user experiences.
            </p>

            <p>
              Driven by a passion for continuous learning and clean code
              practices, I’m always eager to take on new challenges. My goal is
              to contribute to cutting-edge projects that drive user engagement
              and business impact. When I’m not coding, I enjoy exploring new
              technologies and sharpening my skills on{" "}
              <a
                href="https://www.hackerrank.com/profile/nkushwaha632"
                target="_blank"
                rel="noopener noreferrer"
              >
                HackerRank
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/NKush07"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . Let’s connect and build something great together!
            </p>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
