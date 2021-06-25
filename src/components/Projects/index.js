import React from 'react';

import Project from './Project';

const Projects = ({ cards }) => {

    return (
      <>
        <h2 className="title" id="projets">&#9612; Projets</h2>
        <section className="projects">
          <div className="projectsBlock">
            {cards.map((card) => (
              <Project 
                key={card.id} 
                img={card.img} 
                title={card.title} 
                description={card.description} />
            ))}
          </div>
        </section>
      </>
    );
}
export default Projects;
