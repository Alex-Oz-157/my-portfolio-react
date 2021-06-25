import React from 'react';

import Project from './Project';

const Projects = ({ cards }) => {


    return (
      <>
        <h2 className="title" id="projets">&#9612; Projets</h2>
        <section className="projects">
          <div className="projectsBlock">
            {cards.map((card) => (
              <Project key={card.id} img={card.img} title={card.title} description={card.description} />
            ))}

            {/* <Project />
            <Project />
            <Project /> */}

            {/* <div className="card">
              <div className="img"></div>
              <h4 className="cardTitle">Room homepage</h4>
              <p className="cardDescription">
                Exercice de réalisation d'un site statique en HTML, CSS et JS.
                <br/><br/> 
                Le brief est hérité du la plateforme pour développeur Frontend Mentor
              </p>
              <button 
                className="cardButton" 
                onClick={() => {
                  setOpenModal(true);
                }}>Découvrir
              </button>
              {openModal && <Modal closeModal={setOpenModal}/>}
            </div> */}
            
            {/* <div className="card">
              <div className="img"></div>
              <h4 className="cardTitle">Landing page</h4>
              <p className="cardDescription">
                Projet personnel de landing page construite de A à Z 
                <br/><br/>
                La page est entièrement responsive design et réalisé en HTML, CSS et JS.
              </p>
              <button 
                className="cardButton" 
                onClick={() => {
                  setOpenModal(true);
                }}>Découvrir
              </button>
              {openModal && <Modal closeModal={setOpenModal}/>}
            </div> */}

            {/* <div className="card">
              <div className="img"></div>
              <h4 className="cardTitle">Shuffler</h4>
              <p className="cardDescription">
                Shuffler un mini player audio imaginé dans le but de mettre en application React et SASS. 
                <br/><br/>
                Le projet en amont utilisait HTML, CSS et JS.
              </p>
              <button 
                className="cardButton" 
                onClick={() => {
                  setOpenModal(true);
                }}>Découvrir
              </button>
              {openModal && <Modal closeModal={setOpenModal}/>}
            </div> */}

          </div>
        </section>
      </>
    );
}
export default Projects;
