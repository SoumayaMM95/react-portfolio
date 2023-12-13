import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__icon" />
              <p>
              Create visually appealing websites that feature user-friendly design and clear navigation.
              </p>
            </li>

            <li>
              <BiCheck className="service__icon" />
              <p>
              Designing landing pages, admin panels and blogs.
              </p>
            </li>

            <li>
              <BiCheck className="service__icon" />
              <p>
              Develop user-centrist solutions to increase the efficiency and client satisfaction.
              </p>
            </li>
          </ul>
        </article>

        {/* ----------------END OF UI/UX -----------------*/}

        <article className="service">
          <div className="service__head">
            <h3>WEB Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__icon" />
              <p>
                Writing well designed testable, efficient code by using best software development practices..
              </p>
            </li>

            <li>
              <BiCheck className="service__icon" />
              <p>
              Scope out, develop, and manage the implementation of new features.
              </p>
            </li>

            <li>
              <BiCheck className="service__icon" />
              <p>
              Troubleshoot website problems and develop new solutions to increase the efficiency of the system.
              </p>
            </li>
          </ul>
        </article>

        {/* ----------------END OF WEB Development -----------------*/}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__icon" />
              <p>
              Managing the content of the landing pages, website content and blogs.
              </p>
            </li>

            <li>
              <BiCheck className="service__icon" />
              <p>
              Designing and developing email campaigns.
              </p>
            </li>

            <li>
              <BiCheck className="service__icon" />
              <p>
                Web design and development, social media and website content
                management.
              </p>
            </li>
          </ul>
        </article>

        {/* ----------------END OF Content Creation -----------------*/}
      </div>
    </section>
  );
};

export default Services;
