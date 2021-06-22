import React from 'react';
import portrait from '/Users/alexma/Sites/projets/my-portfolio-react/src/assets/img/irlande_portrait3.png';

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
      <a href="https://media-exp3.licdn.com/dms/document/C562DAQEmse3AWiuSrA/profile-treasury-document-pdf-analyzed/0/1623048694983?e=1624352400&v=beta&t=t0E8gApFIeM20p37nAL1BeR1nwZwo_0O0NbvedfPkCo" target="_blank" rel="noreferrer">
        <div class="resume">
          <img src={portrait} alt="Mon CV" />
          <p class="who">Consulter mon CV</p>
        </div> 
      </a> 
    </div>
  );
}

export default Greetings;