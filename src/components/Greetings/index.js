import React from 'react';
import resumeIcon from '../../assets/pictos/resume.svg';
import resume from '../../assets/resume/CV_developpeur-front-end-junior-alexandre_maspimby.pdf';

function Greetings () {
  return (
    <div class="greetings">
      <h1 class="welcome" id="Bienvenue">Bienvenue</h1>
      <p class="who">Je m'appelle Alexandre,</p>
      <p class="who">Je suis développeur web Front-end Junior</p>
      <strong>
        <p class="quote__1">Design won't save the world</p>
      </strong>
      <strong>
        <p class="quote__2">but it makes it look good...<em>and more usable!</em></p>
      </strong>
      <a href={resume} target="_blank">
        <div class="resume">
          <img src={resumeIcon} alt="Mon CV" />
          <p class="who">Consulter mon CV</p>
        </div> 
      </a> 
    </div>
  );
}
export default Greetings;