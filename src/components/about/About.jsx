import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = ({picAbout}) => {

  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className={`about__me ${picAbout ? '' : 'light'}`}>
          <div className="about__me-image">
            <img src={profile_picture} alt="Naveen's image"/>
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
            Hello! I’m Naveen Kushwaha, a passionate Full Stack
            Developer with a deep interest in web applications and backend
            solutions. With expertise in both frontend and backend technologies,
            I strive to create innovative, scalable, and user-centric
            applications that solve real-world problems. 
            While also gaining hands-on experience as a Backend
            Developer Intern at <a href="https://www.linkedin.com/company/aichefmaster/">AI MASTER CHEF</a>, where I have honed my
            ability to design and optimize RESTful APIs,
            integrate backend services, and collaborate
            effectively within cross-functional teams.</p> 

            <p> Driven by a passion for continuous learning and coding excellence, I
            am always eager to take on new challenges. My goal is to leverage my
            skills to contribute to cutting-edge projects and dynamic teams that
            drive user engagement and business growth. When I’m not coding, I
            enjoy exploring new technologies, collaborating with like-minded
            individuals, and sharpening my skills on platforms like {" "}
            <a href="https://www.hackerrank.com/profile/nkushwaha632">HackerRank</a> and {" "}
             <a href="https://github.com/NKush07">GitHub</a>. Let’s connect and build something
            amazing together!</p>
          
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
