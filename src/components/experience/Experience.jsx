import React from "react";
import "./experience.css";
import Miracle from "../../assets/miracleinforserv_logo.jpg";
// import Master from "../../assets/CompanyLogo.png";

const Liznr =
  "https://media.licdn.com/dms/image/v2/D4D0BAQE0MVun1oIreg/company-logo_200_200/company-logo_200_200/0/1729422055329/liznr_logo?e=1757548800&v=beta&t=eSUv8R4Dk6B7osQGqjaisd5dwhItyH54Bf4N2vMUYvk";
const Master =
  "https://media.licdn.com/dms/image/v2/D4D0BAQEH5U_eX4A-nA/company-logo_200_200/B4DZciAsSLGUAI-/0/1748622297008?e=1757548800&v=beta&t=sbIP2iD01li1LMFGc_m-jNBxu6o1aDWIvZrwNo3ZLxY";

const Experience = ({ picAbout }) => {
  return (
    <section id="experience">
      <h5>I have hands-on</h5>
      <h2>Experience</h2>

      <div className="experience_box">
        {/* Liznr AI */}
        <div className="container experience__container right">
          <div className="about_experience">
            <p>
              At{" "}
              <a
                href="https://www.liznr.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Liznr
              </a>
              , I worked on building intelligent meeting tools that enhance
              productivity using AI. I contributed to both backend and frontend
              features—implementing Django-based APIs, integrating real-time
              meeting insights, and crafting responsive UIs with React. This
              experience sharpened my skills in full-stack development and
              exposed me to real-world applications of AI in remote
              collaboration.
            </p>
          </div>

          <div className="experience__cards">
            <div>
              <h1>Fullstack Engnieer</h1>
              <h2>Liznr</h2>
              <h4>March 2025 - Present</h4>
              <a
                href="https://www.linkedin.com/company/liznrai"
                className="btn cmp-btn"
              >
                Go to Linkedin
              </a>
            </div>
            <div className="experience__content">
              <img src={Liznr} alt="Liznr logo" className="company_logo" />
            </div>
          </div>
        </div>

        {/* AI CHEF MASTER */}
        <div className="container experience__container left">
          <div className="experience__cards">
            <div className="experience__content">
              <img src={Master} alt="Miracle logo" className="company_logo" />
            </div>
            <div>
              <h1>Backend Developer</h1>
              <h2>AI CHEF</h2>
              <h4>August-2024 - December-2024</h4>
              <a
                href="https://www.linkedin.com/company/aichefmaster/"
                className="btn cmp-btn"
              >
                Go to Linkedin{" "}
              </a>
            </div>
          </div>
          <div className="about_experience">
            <p>
              During my internship at{" "}
              <a
                href="https://www.linkedin.com/company/aichefmaster/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI CHEF
              </a>
              , I worked as a Backend Developer using Python and Flask, and also
              contributed to the frontend with React. I designed and implemented
              scalable backend systems and integrated them smoothly with the
              frontend. This experience strengthened my full-stack development
              skills and enhanced my ability to build efficient, user-focused
              applications.
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
