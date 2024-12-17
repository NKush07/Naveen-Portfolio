import React from "react";
import "./skill.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = () => {
  return (
    <section id="skill">
      <h5>Check out</h5>
      <h2>My skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">skilld</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">skilld</small> */}
              </div>
            </article>
      
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">skilld</small> */}
              </div>
            </article>
            
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                {/* <small className="text-light">skilld</small> */}
              </div>
            </article>


          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Python</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Django</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Flask</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Git</h4>
                {/* <small className="text-light">skilld</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>API's</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>AWS</h4>
              </div>
            </article>

          </div>
        </div>

        {/* END OF BACKEND */}

        <div className="skill__skills">
          <h3>Other Skills</h3>
          <div className="skill__content">

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>C</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>C++</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Linux</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
