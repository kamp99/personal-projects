import React from 'react';
import '../css/About.css';
//import profilePic from '../images/profile-pic.jpg';
//<img src={profilePic} alt="Profile pic" className="profile-pic" />

function About() {
  return (
    <div className="about-container">
      <div className="profile-pic-container">
        
      </div>
      <div className="personal-info-container">
        <h2>About Me</h2>
        <p>Hi I'm Patrick!
          <br></br>I'm a DMV based software engineer currently working at Capital One on a Data Engineering team.
          <br></br>My current work involves SQL, Quicksight, New Relic, Pagerduty.
        </p>
      </div>
    </div>
  );
}

export default About;
