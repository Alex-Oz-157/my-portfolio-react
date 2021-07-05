import React from 'react';
import resumeIcon from '../../assets/pictos/resume.svg';
import resume from '../../assets/resume/CV_alexandre_maspimby.pdf';

const Greetings = () => {


  return (
    <div className="greetings" id="top">
      <h1 className="welcome" id="Bienvenue">Bienvenue</h1>
      <p className="who">Je m'appelle Alexandre,</p>
      <p className="who">Je suis développeur web Front-end Junior</p>
      <strong>
        <p className="quote__1">Design won't save the world</p>
      </strong>
      <strong>
        <p className="quote__2">but it makes it look good...<em>and more usable!</em></p>
      </strong>
      <a href={resume} target="_blank" rel="noreferrer" alt="cv développeur front-end junior">
        <div className="resume">
          <img src={resumeIcon} alt="Mon CV" />
          <p className="who">Consulter mon CV</p>
        </div> 
      </a> 
    </div>
  );
}
export default Greetings;