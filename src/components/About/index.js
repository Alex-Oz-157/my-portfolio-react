import React from 'react';
import profile from '../../assets/illustrations/undraw_Profile.svg'

const About = () => {
    return (
      <>
        <h2 class="title" id="propos">&#9612; À propos</h2>
        <article class="about">
          <img src={profile} alt="" class="profile"/>  
          <p class="presentation">Désormais ex-communicant sénior, je remets ma polyvalence au centre de mon nouveau projet professionnel en devenant développeur Front-end junior.
          <br/>
          Également attiré par l’UX-UI, j’aurai plaisir à vous présenter mon profil et mes travaux plus en détail.
          <br/>
          <br/>
          <em>10 ans d’expérience professionnelle :</em> opérationnel, polyvalent, créatif.
          Sens des responsabilités, très bon relationnel, travail en équipe.
          </p>
        </article>
      </>
    );
}
export default About;
