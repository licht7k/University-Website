import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayVideo }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about img" className="about-img" />
        <img src={play_icon} alt="play icon" className="play-icon" onClick={() => setPlayVideo(true)} />
      </div>
      <div className="about-right">
        <h3 id="about_us">ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Our university is a place of learning, discovery, and opportunity. We
          are dedicated to providing high-quality education, fostering
          innovation, and preparing students for success in their chosen fields.
          With a diverse range of academic programs, experienced faculty, and a
          supportive community, we strive to create an environment where
          students can grow both personally and professionally. Beyond
          academics, we encourage participation in research, community service,
          and extracurricular activities that enrich the student experience.
        </p>
        <p>
          Our mission is to inspire curiosity, develop skills, and empower
          graduates to make a positive impact in the world.
        </p>
      </div>
    </div>
  );
};

export default About;
