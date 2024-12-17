import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/library.png";
import IMG2 from "../../assets/spotify.png";
import IMG3 from "../../assets/vshare.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Library Management System",
    github: "https://github.com/NKush07/Library-Management.git",
  },
  {
    id: 2,
    image: IMG2,
    title: "Spotify Frontend Project",
    github: "https://github.com/NKush07/Library-Management.git",
  },
  {
    id: 2,
    image: IMG3,
    title: "VShare UI using React",
    github: "https://github.com/NKush07/Library-Management.git",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My most recent work can be found on GitHub</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
};

export default Portfolio;
