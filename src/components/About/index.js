import React from "react";
import "./About.scss";

import Me from "../../assets/Tomcy.jpg";

const About = () => {
  return (
    <div className="details__section">
      <div className="about">
        <h1>About Me</h1>
        <div className="about__container">
          <div className="about__info">
            <p>I'm a self-taught full stack development(FSD) with a heavy focus on frontend Developer. 
            My preferred stack is TypeScript, React & Node. Currently, I'm building a Blogger REST API 
            to help Node JS, Express & Mongo DB at Blogger.com.
            </p>
            <p> I done my Bachelor's Degree in Computer Application from Ranvir Ranjya Post Graduate College, graduated in 2022 
            and pursuing my Master's Degree in Computer Application (MCA) from NIT Kurukshetra.
            </p>

            <p> I have a great interest in design systems, web accessibility, frontend architecture & design patterns.</p>
            <h1>Work</h1>
        <div className="about__container">
          <div className="about__info">
            <p> Currently I'm Working a E-commerce platform as Freelancing Project. @ CircleSkinCare <br>
            Previously, I have worked as a full stack development(FSD) Intern @ Caarya
            </p>
            
          </div>

          <div className="about__image">
            <img src={Me} alt="" />
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills__container">
          <h1>Skills</h1>
          <div className="skill__cards">
            <div className="skill__card" style={{ backgroundColor: "#cf92fb" }}>
              <h2>Web development</h2>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Reactjs</p>
              <p>CSS frameworks</p>
              <p>Bootstrap</p>
              <p>Nodejs</p>
              <p>Vuejs</p>
              <p>Firebase</p>
              <p>SQL</p>
              <p>Reactstrap</p>
            </div>
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>General Programming Languages:</h2>
              <p>C</p>
              <p>C++</p>
              <p>Java</p>
              <p>Git</p>
            </div> 

            <div className="skill__card" style={{ backgroundColor: "#911ae5" }}>
              <h2>Design Tools</h2>
              <p>Figma</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
            </div>
          </div>
          {/*  <div className="skills__type">
            <div className="skills__list">
              <h2>Web development</h2>
              <ul> 
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Reactjs</li>
                <li>CSS frameworks</li>
                <li>Bootstrap</li>
                <li>Nodejs  </li>
                <li>Reactstrap</li>
                <li>Vuejs</li>
                <li>Firebase</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skills__list">
              <h2>Design Tools</h2>
              <ul>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
            <div className="skills__list">
              <h2>General Programming Languages</h2>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Git</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
