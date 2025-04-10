import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>
      I am a passionate web developer with a love for creating dynamic and
      responsive web applications. My journey in web development began with a
      fascination for technology and a desire to build innovative solutions.
    </p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
