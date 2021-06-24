import React from 'react';
import { useState } from 'react';
import Modal from '../Modal';

const Projects = () => {

    // const [showModal, setShowModal] = useState(false);

    // const handleShowModal = () => {
    //   setShowModal(!showModal)
    // };

    // const closeModalHandler = () => setShowModal(false);


    return (
      <>
        <h2 className="title" id="projets">&#9612; Projets</h2>
        <section className="projects">
          <div className="projectsBlock">

            <div className="card">
              <div className="img"></div>
              <h4 className="cardTitle">Nom du projet</h4>
              <p className="cardDescription">
                Donec non magna nec ante gravida hendrerit. Phasellus diam neque, posuere id lacus vitae, imperdiet ornare sapien.
              </p>
              <button className="cardButton" id="button">Découvrir</button>
            </div>
            
            <div className="card">
              <div className="img"></div>
              <h4 className="cardTitle">Nom du projet</h4>
              <p className="cardDescription">
                Donec non magna nec ante gravida hendrerit. Phasellus diam neque, posuere id lacus vitae, imperdiet ornare sapien.
              </p>
              <button className="cardButton" id="button">Découvrir</button>
            </div>

            <div className="card">
              <div className="img"></div>
              <h4 className="cardTitle">Nom du projet</h4>
              <p className="cardDescription">
                Donec non magna nec ante gravida hendrerit. Phasellus diam neque, posuere id lacus vitae, imperdiet ornare sapien.
              </p>
              <button className="cardButton" id="button">Découvrir</button>
            </div>
          </div>
        </section>
      </>
    );
}
export default Projects;
