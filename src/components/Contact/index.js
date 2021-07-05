import React from 'react';
import { HashLink } from 'react-router-hash-link';

// import logos
import linkedin from '../../assets/pictos/linkedin.svg';
import github from '../../assets/pictos/github.svg';
import behance from '../../assets/pictos/behance.svg';
import flickr from '../../assets/pictos/flickr.svg';


const Contact = () => {

    return (
      <>
      <section className="contact" id="contact">
        <h2 className="title" >&#9612; contact</h2>
        <p className="cardDescription">
          Toujours convaincu que l'on a toujours quelque chose à apprendre d'un rendez-vous de travail,<br/>
          je serai ravi de pouvoir échanger avec vous. <br/><br/>
          Retrouvez mes différents travaux ci-dessous et n'hésitez pas à me contacter !
        </p>
        <div className="iconLinks">
          <a href="https://www.linkedin.com/in/alexandre-maspimby/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin profile"/>
          </a> 

          <a href="https://github.com/Alex-Oz-157?tab=repositories" target="_blank" rel="noreferrer">
            <img src={github} alt="resume"/>
          </a>

          <a href="https://www.behance.net/mr_renart" target="_blank" rel="noreferrer">
            <img src={behance} alt="online portfolio"/>
          </a>

          <a href="https://www.flickr.com/photos/mr_renart/" target="_blank" rel="noreferrer">
            <img src={flickr} alt="online gallery"/>
          </a>  
        </div>
        <button className="contactButton"><a href="mailto:maspimbya@gmail.com?Subject=Stay%tuned" target="_blank" rel="noreferrer">Stay tuned</a></button>
      </section>
      <HashLink smooth to="/top/#top"><button className="poppop">Pop Pop!</button></HashLink>
      </>
    );
}
export default Contact;
