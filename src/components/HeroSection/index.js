import React from "react";
/* import TypeRoles from "./TypeRoles"; */
import "./HeroSection.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="hero-section" id="hero-section">
      <div className="hero__container">
        <div className="hero__intro">
          <p>Hi! my name is Satyendra, I love</p>
          <h1>
            building <span className="hero__color">products</span> and{" "}
            <span className="hero__color">experiences</span>.
          </h1>
          <div className="hero__intro-type">{/* <TypeRoles /> */}</div>
          <div className="hero__short-intro">
            <p>
               I'm a self-taught full stack development(FSD) with a heavy focus on frontend Developer. 
               My preferred stack is TypeScript, React & Node.
            </p>
          </div>
        </div>
        <div className="hero__CTA">
          <Link to="ui-ux" smooth={true} className="hero__CTA-button-link">
            <button>Know More!</button>
          </Link>
          <a
            href="https://smallify.vercel.app/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
