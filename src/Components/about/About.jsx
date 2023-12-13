import React from "react";
import "./about.css";
import ME from "../../assets/1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="AboutME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ clients worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
          </div>
          <p>
            I’m a Web developer with an ability for creating elegant solutions
            in the least amount of time, a 4+ year of experience and a great
            passion for software engineering. Specialized in PHP coding, Google
            cloud platform (GCP), worked on various projects with frameworks
            like Next, Laravel and Codeigniter. Familiar with popular CMS like
            WordPress. Having a wide knowledge in JavaScript (node.js, react.js,
            nextjs) and expert in MYSQL relational database management systems.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
