import React from 'react';
import linkedin from '../../assets/pictos/linkedin.svg';
import github from '../../assets/pictos/github.svg';
import behance from '../../assets/pictos/behance.svg';
import flickr from '../../assets/pictos/flickr.svg';


function Contact () {
    return (
      <>
      <section class="contact" id="contact">
        <h2 class="title">&#9612; contact</h2>
        <p class="cardDescription">
          Nunc bibendum dui ac arcu molestie mollis sit amet sed urna. Quisque ultricies, enim vulputate suscipit egestas, justo sem iaculis lorem, et tristique lorem ex eget nisl.
        </p>
        <div class="iconLinks">
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
        <button class="contactButton">Stay tuned</button>
      </section>
      <a href="#top"><button class="poppop">Pop Pop!</button></a>
      </>
    );
}
export default Contact;
