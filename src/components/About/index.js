import React from 'react';
import profile from '../../assets/illustrations/undraw_Profile.svg'

const About = () => {
    return (
      <>
        <h2 className="title" id="propos">&#9612; À propos</h2>
        <article className="about">
          <img src={profile} alt="" className="profile"/>  
          <p className="presentation">Je remets ma polyvalence au centre de mon nouveau projet professionnel en devenant développeur Front-end junior après avoir été sénior dans plusieurs directions de la communication.
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
